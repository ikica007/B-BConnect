"use client";

import { motion } from "motion/react";
import React from "react";
import { cn } from "../lib/utils";

const STAGGER = 0.035;

export const TextRoll: React.FC<{
  children: string;
  className?: string;
  hoverClassName?: string;
  center?: boolean;
}> = ({ children, className, hoverClassName = "text-electric", center = false }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={cn(
        "relative inline-block overflow-hidden max-w-full align-bottom -mt-2 -mb-2",
        center && "mx-auto text-center",
        className
      )}
    >
      <motion.span
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className="block pb-2 pt-2 whitespace-nowrap max-w-full truncate"
      >
        {children}
      </motion.span>
      <motion.span
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className={cn("absolute left-0 right-0 top-0 block pb-2 pt-2 whitespace-nowrap max-w-full truncate", hoverClassName)}
      >
        {children}
      </motion.span>
    </motion.span>
  );
};
