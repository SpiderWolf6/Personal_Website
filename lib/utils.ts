import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 * 
 * Combines clsx for conditional classes with tailwind-merge
 * to properly handle Tailwind class conflicts
 * 
 * Example:
 * cn("px-2 py-1", condition && "bg-blue-500", "px-4") // "py-1 bg-blue-500 px-4"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
