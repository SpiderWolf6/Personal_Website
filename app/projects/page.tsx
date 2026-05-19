"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";

/**
 * Projects Page Component
 * 
 * Displays a grid of project cards
 * Each project shows:
 * - Screenshot/thumbnail
 * - Title and description
 * - Links to GitHub repo and live demo
 */
export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6">
          
        {/* Page Title */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Check out some of my recent work and tools I've built.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Empty State Message */}
        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Projects coming soon! Check back later.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

// TypeScript interface for project data
export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  theme: "fire" | "water" | "forest" | "crystal" | "air" | "lightning";
}

// Sample projects data - Update with your own projects
const projects: Project[] = [
  {
    title: "Premier League Predictor",
    description:
      "Predicted match outcomes by training a LightGBM + Poisson ensemble model on 11 seasons of data and 34 engineered features (xG, form, ratings, and more)",
    image: "/projects/project1.jpg",
    tags: ["Python", "Jupyter Notebook", "Selenium", "Scikit-learn", "Pandas", "GitHub"],
    github: "https://github.com/SpiderWolf6/EPL_Predictor",
    demo: "https://spiderwolf6.github.io/EPL_Predictor/",
    theme: "crystal", // Crystal/Ice world - white, icy tones
  },
  {
    title: "Entourage",
    description:
      "AI-native multi-agent pipeline covering the end-to-end Agile SDLC: planning, architecture, full-stack development, testing, and deployment",
    image: "/projects/project2.jpg",
    tags: ["Python", "FastAPI", "React", "Claude Code", "Azure OpenAI", "SQLite", "Fly.io"],
    github: "https://github.com/SpiderWolf6/entourage",
    demo: "https://spiderwolf6-entourage.fly.dev/",
    theme: "water", // Water world - fluid blues
  },
  {
    title: "BadgerIQ",
    description:
      "Wisconsin Men's Soccer Data Analytics + AI/ML Platform",
    image: "/projects/project3.jpg",
    tags: ["Python", "Next.js", "Azure OpenAI", "Vercel", "Supabase"],
    github: "https://github.com/SpiderWolf6/BadgerIQ/",
    demo: "https://badger-iq.vercel.app/",
    theme: "lightning", // Lightning world - electric yellow/purple
  },
  {
    title: "NetworkNudge",
    description:
      "Fiber optic network route optimization tool and visualization simulator for MadHacks 2025",
    image: "/projects/project4.jpg",
    tags: ["Python", "Next.js", "Flask", "GeoJSON", "Vercel", "Google Cloud VM"],
    github: "https://github.com/ahmedismail06/madhacks2025",
    demo: "https://madhacks2025-26.vercel.app/",
    theme: "air", // Air world - breezy, light blues/whites
  },
  {
    title: "DataMapr",
    description:
      "Built a data integration complexity scoring tool using 13-signal risk modeling and AI-driven analytics",
    image: "/projects/project5.jpg",
    tags: ["Python", "Flask", "React", "Azure OpenAI", "Vercel", "Railway"],
    github: "https://github.com/SpiderWolf6/DataMapr/",
    demo: "https://data-mapr.vercel.app/",
    theme: "fire", // Fire world - warm orange/red
  },
  {
    title: "MIKA AI",
    description:
    "Full-stack AI assistant with voice recognition, gesture detection, and intelligent conversation capabilities.", 
    image: "/projects/project6.jpg",
    tags: ["Python", "MediaPipe", "OpenCV", "Azure OpenAI", "Terraform", "AWS"],
    github: "https://github.com/SpiderWolf6/mika-ai",
    demo: "https://tinyurl.com/n8jjmy7a",
    theme: "forest", // Forest world - natural greens with vines
  },
];
