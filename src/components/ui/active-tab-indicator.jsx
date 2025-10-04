import React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export function ActiveTabIndicator({ isActive, children, className, isMobile = false }) {
  return (
    <div className="relative">
      {children}
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className={cn(
            "absolute inset-0 rounded-xl -z-10",
            isMobile 
              ? "bg-servitec-orange/20 border border-servitec-orange/30" 
              : "bg-servitec-orange/10",
            className
          )}
          initial={false}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          {/* Indicador superior com efeito de luz - apenas no desktop */}
          {!isMobile && (
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-servitec-orange rounded-t-full">
              <div className="absolute w-12 h-6 bg-servitec-orange/20 rounded-full blur-md -top-2 -left-2" />
              <div className="absolute w-8 h-6 bg-servitec-orange/20 rounded-full blur-md -top-1" />
              <div className="absolute w-4 h-4 bg-servitec-orange/20 rounded-full blur-sm top-0 left-2" />
            </div>
          )}
          
          {/* Indicador mobile - linha inferior */}
          {isMobile && (
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-servitec-orange rounded-full">
              <div className="absolute w-16 h-2 bg-servitec-orange/30 rounded-full blur-sm -top-0.5 -left-2" />
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}
