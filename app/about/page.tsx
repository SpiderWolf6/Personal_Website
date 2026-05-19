"use client";


import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Globe, Film, BookOpen, Dumbbell } from "lucide-react";

/**
 * About Page Component
 * 
 * Displays information about you:
 * - Profile picture
 * - Bio
 * - Skills
 * - Interests
 */
export default function AboutPage() {
  // --- Hobbies Section State ---
  const [showHobbies, setShowHobbies] = useState(false);
  const [activeHobby, setActiveHobby] = useState<string | null>(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);
  const collageLength = 6;

  // Auto-scroll effect for sliding window
  useEffect(() => {
    if (showHobbies && activeHobby) {
      const interval = setInterval(() => {
        setScrollIndex((prev) => (prev + 1) % collageLength);
      }, 1200);
      return () => clearInterval(interval);
    }
  }, [showHobbies, activeHobby]);

  // Hobbies data
  const hobbies = [
    { key: "travel", icon: Globe, label: "Travel" },
    { key: "media", icon: Film, label: "Media" },
    { key: "books", icon: BookOpen, label: "Books" },
    { key: "sports", icon: Dumbbell, label: "Sports" },
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-6">

        {/* Page Title */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Get to know me better
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden">
              <Image
                src="/headshot.jpeg"
                alt="Soham Mukherjee"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Hello!</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am currently a second-year Posse Scholar at the University of Wisconsin-Madison. I am a passionate computer engineer interested in working at the intersection of software, AI/ML, and data science, and building applied solutions across diverse industries and domains.
              </p>
              <p>
                When I'm not coding, you can find me playing soccer, watching
                the latest shows/movies, or spending time with friends and family.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Skills & Technologies</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="relative p-6 rounded-lg border bg-card group"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="font-semibold mb-3">{category.title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {category.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interests Section */}
        <div className="space-y-3 mb-10">
          <h2 className="text-3xl font-bold text-center">Interests</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {interests.map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Hobbies Section - Single Element with Sliding Window */}
        <div className="relative flex flex-col items-center mt-16 mb-8 w-full">
          <h2 className="text-3xl font-bold text-center mb-6 tracking-wide drop-shadow-lg">Hobbies</h2>
          <div className="absolute inset-0 -z-10 pointer-events-none select-none">
            {/* Minimal spacey background with a few subtle stars */}
            <div className="w-full h-full" />
            <div className="absolute top-8 left-1/4 w-1.5 h-1.5 bg-white/60 rounded-full blur-[1.5px] animate-pulse" />
            <div className="absolute top-16 right-1/3 w-1 h-1 bg-blue-200/40 rounded-full blur-[1px] animate-pulse" />
            <div className="absolute bottom-10 left-1/3 w-0.5 h-0.5 bg-white/30 rounded-full blur-[0.5px] animate-pulse" />
            <div className="absolute bottom-16 right-1/4 w-1 h-1 bg-indigo-100/40 rounded-full blur-[1px] animate-pulse" />
          </div>
          <div
            className="flex flex-row gap-7 justify-center items-center relative z-10"
            onMouseEnter={() => {
              if (hideTimeout.current) clearTimeout(hideTimeout.current);
              setShowHobbies(true);
            }}
            onMouseLeave={() => {
              hideTimeout.current = setTimeout(() => setShowHobbies(false), 200);
              setActiveHobby(null);
            }}
          >
            {hobbies.map(({ key, icon: Icon, label }, idx) => (
              <div
                key={key}
                className="relative flex flex-col items-center group"
                onMouseEnter={() => { setActiveHobby(key); setScrollIndex(0); }}
                onMouseLeave={() => setActiveHobby(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.13, rotate: [0, 8, -8, 0] }}
                  animate={{
                    y: [0, -6, 0],
                    boxShadow: [
                      "0 0 12px 4px #a5b4fc33",
                      "0 0 18px 6px #818cf833",
                      "0 0 12px 4px #a5b4fc33"
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop", delay: idx * 0.2 }}
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-400 via-indigo-600 to-blue-300 flex items-center justify-center border-2 border-indigo-200/40 shadow-xl group-hover:shadow-indigo-300/50 cursor-pointer relative overflow-visible"
                >
                  {/* Glowing ring */}
                  <span className="absolute inset-0 rounded-full border border-blue-200/30 blur-[1.5px] opacity-60 group-hover:opacity-90 animate-pulse" />
                  {/* Star/planet effect */}
                  <span className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-white/70 rounded-full blur-[1.5px] opacity-70" />
                  <span className="absolute -bottom-1.5 -left-1.5 w-1.5 h-1.5 bg-blue-100/60 rounded-full blur-[1px] opacity-60" />
                  <Icon className="w-6 h-6 text-white drop-shadow-lg" />
                </motion.div>
                <span className="mt-3 text-sm font-medium text-indigo-100 drop-shadow-lg tracking-wide">{label}</span>

                {/* Sliding collage window - only for active hobby */}
                <AnimatePresence>
                  {showHobbies && activeHobby === key && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85, y: -5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.85, y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className="absolute top-16 left-1/2 z-40"
                      style={{ marginLeft: '-150px' }}
                    >
                      <div className="w-[300px] bg-background/90 border border-indigo-400/30 rounded-xl shadow-2xl p-2 overflow-hidden backdrop-blur-md">
                        {/* Top row */}
                        <div className="overflow-hidden mb-1">
                          <div
                            className="flex flex-row gap-1 transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${scrollIndex * 82}px)` }}
                          >
                            {[1,2,3,4,5,6,1,2,3,4,5,6].map((n, i) => {
                              let folder = key;
                              let prefix = key === 'books' ? 'book' : key === 'media' ? 'media' : key === 'sports' ? 'sport' : key === 'travel' ? 'travel' : '';
                              return (
                                <img
                                  key={`top-${key}-${i}`}
                                  src={`/${folder}/${prefix}${n}.jpg`}
                                  alt={`${label} ${n}`}
                                  className="object-contain w-[78px] h-[60px] rounded-md shadow flex-shrink-0 bg-black/10"
                                />
                              );
                            })}
                          </div>
                        </div>
                        {/* Bottom row - scrolls opposite */}
                        <div className="overflow-hidden">
                          <div
                            className="flex flex-row gap-1 transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${((collageLength - 1 - scrollIndex) % collageLength) * 82}px)` }}
                          >
                            {[4,5,6,1,2,3,4,5,6,1,2,3].map((n, i) => {
                              let folder = key;
                              let prefix = key === 'books' ? 'book' : key === 'media' ? 'media' : key === 'sports' ? 'sport' : key === 'travel' ? 'travel' : '';
                              return (
                                <img
                                  key={`bot-${key}-${i}`}
                                  src={`/${folder}/${prefix}${n}.jpg`}
                                  alt={`${label} ${n}`}
                                  className="object-contain w-[78px] h-[60px] rounded-md shadow flex-shrink-0 bg-black/10"
                                />
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
}

// Sample data - Update with your own skills
const skills = [
  {
    title: "Languages & Frameworks",
    items: ["Python", "Java", "C (Embedded)", "R (statistical computing)", "React"],
  },
  {
    title: "Libraries & Tools",
    items: ["PyTorch", "LangChain", "CrewAI", "OpenCV", "Selenium"],
  },
  {
    title: "Software & Technologies",
    items: ["Docker", "Azure OpenAI", "AWS", "Isaac Sim/ROS2", "Git/GitHub"],
  },
];

// Sample data - Update with your interests
const interests = [
  "Applied Data Science",
  "AI/ML Engineering",
  "Embedded Systems and IoT",
  "Robotics & Autonomous Systems",
  "Sports Analytics",
  "Networking and Cybersecurity",
  "AR/VR and Game Development",
  "Quantum Computing",
];
