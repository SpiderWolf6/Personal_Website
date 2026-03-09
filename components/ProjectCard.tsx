"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import type { Project } from "@/app/projects/page";

/**
 * ProjectCard Component - Themed Worlds
 * 
 * Each project has a theme that controls:
 * - Background gradient colors
 * - Glow/shadow colors
 * - Hover animations (rotate, float, pulse)
 * - Border colors
 */

// Theme configuration: maps theme name → styling properties
const themeStyles = {
  fire: {
    gradient: "from-orange-500/20 via-red-500/20 to-yellow-500/20",
    glow: "shadow-orange-500/50",
    border: "border-orange-500/30",
    hoverGlow: "group-hover:shadow-orange-500/70",
    text: "group-hover:text-orange-400",
  },
  water: {
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    glow: "shadow-blue-500/50",
    border: "border-blue-500/30",
    hoverGlow: "group-hover:shadow-blue-500/70",
    text: "group-hover:text-cyan-400",
  },
  forest: {
    gradient: "from-green-500/20 via-emerald-500/20 to-lime-500/20",
    glow: "shadow-green-500/50",
    border: "border-green-500/30",
    hoverGlow: "group-hover:shadow-green-500/70",
    text: "group-hover:text-emerald-400",
  },
  crystal: {
    gradient: "from-white/20 via-cyan-200/20 to-blue-100/20",
    glow: "shadow-cyan-300/50",
    border: "border-cyan-200/30",
    hoverGlow: "group-hover:shadow-cyan-200/70",
    text: "group-hover:text-cyan-200",
  },
  air: {
    gradient: "from-sky-500/20 via-blue-300/20 to-white/20",
    glow: "shadow-sky-500/50",
    border: "border-sky-500/30",
    hoverGlow: "group-hover:shadow-sky-500/70",
    text: "group-hover:text-sky-400",
  },
  lightning: {
    gradient: "from-yellow-500/20 via-purple-500/20 to-indigo-500/20",
    glow: "shadow-yellow-500/50",
    border: "border-yellow-500/30",
    hoverGlow: "group-hover:shadow-yellow-500/70",
    text: "group-hover:text-yellow-400",
  },
};

// Different hover animations per theme
const themeAnimations = {
  fire: { y: -6, scale: 1.02 }, // Pulse + lift
  water: { y: -10, rotateX: 5 }, // Float higher
  forest: { y: -8, rotateY: 3 }, // Gentle 3D rotate
  crystal: { y: -8 }, // Simple lift only
  air: { y: -12, scale: 1.01 }, // Light float
  lightning: { y: -8, scale: 1.03 }, // Electric jolt
};

// Visual effects for each theme
const ThemeEffects = ({ theme }: { theme: Project["theme"] }) => {
  switch (theme) {
    case "forest":
      return (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`vine-${i}`}
              className="absolute top-0 w-1 rounded-full bg-gradient-to-b from-green-400 via-emerald-500 to-green-700 origin-top"
              style={{
                left: i % 2 === 0 ? `${10 + i * 10}%` : undefined,
                right: i % 2 !== 0 ? `${10 + (i - 1) * 10}%` : undefined,
                height: "80%",
                boxShadow: "0 0 12px rgba(34,197,94,0.6)",
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              whileHover={{ scaleY: 1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: "easeOut",
              }}
            />
          ))}
        </>
      );
    case "fire":
      // Flames rising from bottom
      return (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`flame-${i}`}
              className="absolute bottom-0 w-2 rounded-full"
              style={{
                left: `${10 + i * 15}%`,
                background: `linear-gradient(to top, ${i % 2 === 0 ? '#f97316' : '#eab308'}, transparent)`,
              }}
              animate={{
                height: [20, 40, 20],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </>
      );
    
    case "crystal":
      // Ice crystals - larger, whiter, more visible
      return (
        <>
          {[...Array(12)].map((_, i) => (
            <div
              key={`crystal-${i}`}
              className="absolute bg-white/60 border-2 border-cyan-200/90 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{
                width: i % 3 === 0 ? '18px' : '14px',
                height: i % 3 === 0 ? '18px' : '14px',
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                top: `${10 + (i % 4) * 25}%`,
                left: `${8 + (i % 3) * 30}%`,
                filter: 'drop-shadow(0 0 8px rgba(165, 243, 252, 0.9))',
                transform: 'scale(0) rotate(0deg)',
                transitionDelay: `${i * 50}ms`,
              }}
            >
              <style jsx>{`
                .group:hover div {
                  transform: scale(1) rotate(45deg) !important;
                }
              `}</style>
            </div>
          ))}
          {/* Frost overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-cyan-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        </>
      );
    
    case "water":
      // Bubbles rising and waves
      return (
        <>
          {/* Bubbles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`bubble-${i}`}
              className="absolute rounded-full bg-cyan-400/30 border border-cyan-300/50"
              style={{
                width: `${10 + i * 5}px`,
                height: `${10 + i * 5}px`,
                left: `${15 + i * 18}%`,
                bottom: 0,
              }}
              animate={{
                y: [-200, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            />
          ))}
          {/* Wave at bottom */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-blue-500/20 to-transparent"
            animate={{
              scaleX: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      );
    
    case "air":
      // Wind gusts moving across
      return (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`wind-${i}`}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-sky-400/60 to-transparent"
              style={{
                top: `${20 + i * 25}%`,
                left: -100,
                width: '150%',
              }}
              animate={{
                x: [0, 300],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </>
      );
    
    case "lightning":
      // Electric bolts
      return (
        <>
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={`bolt-${i}`}
              className="absolute w-1 bg-gradient-to-b from-yellow-400 via-yellow-300 to-transparent"
              style={{
                height: '60%',
                left: `${30 + i * 40}%`,
                top: 0,
                filter: 'blur(1px)',
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scaleY: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                delay: i * 1.5,
                repeatDelay: 2,
              }}
            />
          ))}
          {/* Glow pulse */}
          <motion.div
            className="absolute inset-0 bg-yellow-400/10"
            animate={{
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        </>
      );
    
    default:
      return null;
  }
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const theme = themeStyles[project.theme];
  const animation = themeAnimations[project.theme];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={animation} // Theme-specific hover animation
      className="group perspective-1000"
    >
      <div
        className={`h-full rounded-lg border bg-gradient-to-br ${theme.gradient} ${theme.border} ${theme.glow} ${theme.hoverGlow} backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-2xl`}
      >
        {/* Project Image */}
        <div className="relative h-48 bg-background/50 overflow-hidden">
          {/* Theme-specific visual effects */}
          <ThemeEffects theme={project.theme} />
          
          {/* Theme-colored overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.1 }}
            className={`absolute inset-0 bg-gradient-to-br ${theme.gradient.replace(/\/20/g, '/40')}`}
          />
          
          {/* Project image */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>

        {/* Project Details */}
        <div className="p-6 space-y-4 bg-background/80 backdrop-blur-sm">
          {/* Title with theme color on hover */}
          <h3 className={`text-xl font-semibold ${theme.text} transition-colors`}>
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-3">
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="outline" className="w-full" size="sm">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
