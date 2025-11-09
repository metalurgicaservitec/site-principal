"use client";

import { Button } from "./button";
import { ChevronDown } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

const DropdownMenu = ({ options, children, isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        onClick={toggleDropdown}
        className={cn(
          "px-0 py-0 shadow-none border-0 rounded-xl hover:text-servitec-orange transition-all duration-300 w-full justify-between bg-transparent",
          isScrolled 
            ? "text-white hover:bg-transparent" 
            : "text-gray-700 hover:bg-transparent"
        )}
      >
        {children ?? "Menu"}
        <>
          <motion.span
            className="ml-2"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut", type: "spring" }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ 
              opacity: 0,
              y: -10,
              scale: 0.9,
              filter: "blur(2px)"
            }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)"
            }}
            exit={{
              opacity: 0,
              y: -5,
              scale: 0.95,
              filter: "blur(1px)"
            }}
            transition={{
              duration: 0.25,
              ease: [0.23, 1, 0.32, 1],
              opacity: { duration: 0.2 },
              y: { duration: 0.25 },
              scale: { duration: 0.25 },
              filter: { duration: 0.2 }
            }}
            className="absolute z-10 w-64 mt-2 p-1 bg-servitec-dark/95 rounded-xl shadow-xl border border-servitec-orange/20 backdrop-blur-sm flex flex-col gap-2 sm:max-h-[80vh] sm:overflow-visible max-h-[70vh] overflow-y-auto overscroll-contain no-scrollbar"
          >
            {options && options.length > 0 ? (
              options.map((option, index) => (
                <motion.button
                  initial={{
                    opacity: 0,
                    x: 5,
                    scale: 0.95,
                  }}
                  animate={{ 
                    opacity: 1, 
                    x: 0, 
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    x: 5,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.03,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  whileHover={{
                    backgroundColor: "rgba(249, 115, 22, 0.1)",
                    transition: {
                      duration: 0.4,
                      ease: "easeInOut",
                    },
                  }}
                  whileTap={{
                    scale: 0.95,
                    transition: {
                      duration: 0.2,
                      ease: "easeInOut",
                    },
                  }}
                  key={option.label}
                  onClick={() => {
                    option.onClick();
                    setIsOpen(false); // Fechar dropdown após clicar
                  }}
                  className="px-3 py-3 cursor-pointer text-white text-sm rounded-lg w-full text-left flex items-center gap-x-3 hover:text-servitec-orange transition-colors duration-300"
                >
                  {option.Icon}
                  <span className="font-medium">{option.label}</span>
                </motion.button>
              ))
            ) : (
              <div className="px-4 py-2 text-white text-xs">No options</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { DropdownMenu };
