import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { cn } from "../../lib/utils"

const NavItem = ({ name, url, icon: Icon, isActive, onClick }) => {
  return (
    <Link
      to={url}
      onClick={onClick}
      className={cn(
        "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
        "text-gray-600 hover:text-servitec-orange",
        isActive && "text-servitec-orange"
      )}
    >
      <span className="hidden md:inline">{name}</span>
      <span className="md:hidden">
        <Icon size={18} strokeWidth={2.5} />
      </span>
      {isActive && (
        <motion.div
          layoutId="lamp"
          className="absolute inset-0 w-full bg-servitec-orange/10 rounded-full -z-10"
          initial={false}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-servitec-orange rounded-t-full">
            <div className="absolute w-12 h-6 bg-servitec-orange/20 rounded-full blur-md -top-2 -left-2" />
            <div className="absolute w-8 h-6 bg-servitec-orange/20 rounded-full blur-md -top-1" />
            <div className="absolute w-4 h-4 bg-servitec-orange/20 rounded-full blur-sm top-0 left-2" />
          </div>
        </motion.div>
      )}
    </Link>
  )
}

export function TubelightNavBar({ items, className, currentPath }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-white/80 border border-gray-200 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const isActive = currentPath === item.url
          return (
            <NavItem
              key={item.name}
              name={item.name}
              url={item.url}
              icon={item.icon}
              isActive={isActive}
              onClick={() => {}}
            />
          )
        })}
      </div>
    </div>
  )
}
