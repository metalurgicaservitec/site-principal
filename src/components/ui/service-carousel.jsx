"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils.js";

// Shadcn UI Carousel Imports
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "./button.jsx";

// --- Carousel Context ---
const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

// --- Main Carousel Component ---
const Carousel = React.forwardRef(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api) => {
      if (!api) return;
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) return;
      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) return;
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

// --- Carousel Content ---
const CarouselContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = "CarouselContent";

// --- Carousel Item ---
const CarouselItem = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className,
        )}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = "CarouselItem";

// --- Carousel Controls ---
const CarouselNext = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel();
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-10 w-10 rounded-full",
          "right-2 top-1/2 -translate-y-1/2",
          className,
        )}
        onClick={scrollNext}
        disabled={!canScrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

// --- Service Card & Carousel Section ---
// Sub-component for individual cards
const ServiceCard = ({ service, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.05,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className={cn(
        "relative flex h-[450px] w-full flex-col justify-between overflow-hidden rounded-3xl p-8 bg-gradient-to-r",
        service.gradient
      )}
    >
      {/* Background Image */}
      {service.image && (
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}

      {/* Card Content */}
      <div className="z-10 flex flex-col items-start text-left">
        <span className="mb-8 text-sm font-mono text-white/80">
          ( {service.number} )
        </span>
        <service.icon className="mb-auto h-12 w-12 text-white" />
      </div>
      <div className="z-10">
        <h3 className="mb-2 text-lg font-semibold uppercase tracking-wider text-white">
          {service.title}
        </h3>
        <p className="text-sm text-white/90">{service.description}</p>
      </div>

      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
    </motion.div>
  );
};

// Main exportable component
export const ServiceCarousel = ({ services }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Carousel
        ref={ref}
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative"
      >
        <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.1 }}
        >
            <CarouselContent>
            {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                    <ServiceCard service={service} index={index} />
                </div>
                </CarouselItem>
            ))}
            </CarouselContent>
        </motion.div>
        <CarouselNext className="bg-servitec-orange/90 border-2 border-servitec-orange hover:bg-servitec-orange text-white shadow-lg hover:shadow-xl" />
      </Carousel>
    </div>
  );
};
