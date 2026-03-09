"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

/**
 * PageTransitionWrapper Component
 * 
 * Creates portal/warp-style transitions between pages
 * Features:
 * - Scale and fade portal entrance effect
 * - Radial wipe transition
 * - Smooth exit animations
 * - Respects page hierarchy
 */

interface PageTransitionWrapperProps {
  children: ReactNode;
}

export function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
          initial: {
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)",
          },
          animate: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1], // Custom easing for smooth feel
            },
          },
          exit: {
            opacity: 0,
            scale: 1.2,
            filter: "blur(10px)",
            transition: {
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className="relative overflow-hidden"
      >
        {/* Portal circle animation overlay */}
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 100, opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="fixed inset-0 pointer-events-none z-40"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
            transformOrigin: "center center",
          }}
          aria-hidden="true"
        />

        {children}
      </motion.div>
    </AnimatePresence>
  );
}
