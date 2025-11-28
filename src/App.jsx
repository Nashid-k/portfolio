import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Enhanced Windows XP icons
const ICONS = {
  profile: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png",
  projects: "https://cdn-icons-png.flaticon.com/128/3767/3767084.png",
  terminal: "https://cdn-icons-png.flaticon.com/128/2306/2306956.png",
  documents: "https://cdn-icons-png.flaticon.com/128/3209/3209260.png",
  my_computer: "https://cdn-icons-png.flaticon.com/128/2933/2933245.png",
  my_documents: "https://cdn-icons-png.flaticon.com/128/3209/3209592.png",
  local_disk: "https://cdn-icons-png.flaticon.com/128/2907/2907256.png",
  folder: "https://cdn-icons-png.flaticon.com/128/3767/3767084.png",
  browser: "https://cdn-icons-png.flaticon.com/128/2991/2991148.png",
  email: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
  notepad: "https://cdn-icons-png.flaticon.com/128/3022/3022556.png",
  display: "https://cdn-icons-png.flaticon.com/128/3031/3031133.png",
  resume: "https://cdn-icons-png.flaticon.com/128/3135/3135706.png"
};

// Multiple Windows XP Wallpapers
const WALLPAPERS = {
  bliss: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  xp_blue: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  xp_green: "https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  custom: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  nature: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
};

// Updated DATA from your LaTeX resume
const DATA = {
  name: "NASHID K",
  title: "Full Stack Developer — MERN & TypeScript | Frontend-Focused | AI Integrations",
  summary: "Full Stack Developer skilled in building responsive, scalable applications using the MERN stack and TypeScript. Experienced in translating business requirements into intuitive UI/UX, implementing secure APIs, and deploying production-ready applications. Strong focus on clean architecture, reusability, and performance optimization.",
  contact: {
    email: "nashidk1999@gmail.com",
    phone: "+91-9061142958",
    whatsapp: "+91-9061142958",
    linkedin: "https://linkedin.com/in/nashid-k-080909273",
    github: "https://github.com/Nashid-k",
    portfolio: "https://career-pulse-phi.vercel.app",
    location: "Kerala, India"
  },
  skills: {
    frontend: ["React.js", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth 2.0"],
    database: ["MongoDB", "PostgreSQL", "Firebase", "Aggregation Pipelines"],
    cloud_devops: ["AWS (EC2, S3)", "Vercel", "Render", "Git", "Linux", "CI/CD"],
    ai_integrations: ["Hugging Face"],
    payments_security: ["Razorpay", "RBAC", "Secure Transactions"]
  },
  experience: [
    { 
      company: "Full Stack Developer (Independent Projects)", 
      role: "Self-Employed", 
      period: "2023 -- Present",
      points: [
        "Developed multiple MERN stack applications focusing on authentication, secure APIs, and responsive UI/UX.",
        "Built real-world production-style projects including CareerPulse AI, StyleBazaar Commerce, and WriteFlow.",
        "Implemented reusable component architecture, optimized API workflows, and deployed applications on Vercel and AWS."
      ]
    },
    { 
      company: "Technical System Specialist", 
      role: "Hajee A. P. Bava & Company", 
      period: "2022 -- 2025",
      points: [
        "Automated business workflows, improving operational efficiency by 25% across multiple departments.",
        "Maintained and upgraded IT infrastructure across 10+ industrial facilities ensuring zero downtime.",
        "Handled system troubleshooting, configuration, and secure IT operations in fast-paced environments."
      ]
    },
    { 
      company: "Operations Assistant / Store Management", 
      role: "Self-Employed", 
      period: "2019 -- 2021",
      points: [
        "Worked in operational, accounting, and store management roles across small businesses.",
        "Gained hands-on experience in customer handling, coordination, and day-to-day operations."
      ]
    }
  ],
  certifications: [
    "JavaScript (Basic) Certificate — HackerRank",
    "Solved 100+ LeetCode problems covering algorithms and data structures"
  ],
  highlights: [
    "10+ modern web applications built using MERN & TypeScript",
    "Strong focus on performance, clean architecture, and scalable UI development",
    "Experience in secure API integrations, deployment pipelines, and Git workflows"
  ]
};

// Complete projects data (all projects for portfolio)
const PROJECTS_DATA = [
  {
    id: "careerpulse",
    title: "CareerPulse AI",
    tagline: "AI Resume & Cover Letter Generator",
    description: "AI-powered resume and cover-letter builder using OpenAI and Hugging Face, with Firebase authentication, real-time content parsing, and structured workflows for fast, professional outputs.",
    tech: ["React.js", "Node.js", "OpenAI", "Hugging Face", "Firebase", "TypeScript"],
    github: "https://github.com/Nashid-k/career-pulse",
    external: "https://career-pulse-phi.vercel.app",
    featured: true
  },
  {
    id: "stylebazaar",
    title: "StyleBazaar Commerce",
    tagline: "Full-Stack E-Commerce Platform",
    description: "End-to-end e-commerce solution featuring an admin dashboard, real-time analytics, inventory management, multi-payment support (Razorpay & Stripe), and webhook validation.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay"],
    github: "https://github.com/Nashid-k/style-bazaar",
    external: null,
    featured: true
  },
  {
    id: "writeflow",
    title: "WriteFlow",
    tagline: "Role-Based Blogging Platform",
    description: "Multi-role blogging platform with JWT auth, MongoDB change streams, autosave and collaborative editing, built with a modular React UI for scalability.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "TypeScript"],
    github: "https://github.com/Nashid-k/BlogHub",
    external: "https://blog-hub-frontend-pi.vercel.app/",
    featured: true
  },
  {
    id: "netflix",
    title: "Netflix Clone",
    tagline: "Streaming Platform Recreation",
    description: "Feature-rich streaming UI integrated with the TMDB API, advanced search and filtering, personalized recommendations, and Zustand for state management.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Zustand", "TMDB API"],
    github: "https://github.com/Nashid-k/netflix-clone",
    external: null,
    featured: false
  },
  {
    id: "olx",
    title: "Marketplace Clone",
    tagline: "Real-Time Listing Platform",
    description: "OLX-style marketplace with Firebase auth, location-aware queries, advanced filters, and a responsive, modular UI for smooth listing management.",
    tech: ["React.js", "Firebase", "Tailwind CSS", "Context API"],
    github: "https://github.com/Nashid-k/olx-clone_updated",
    external: "https://olx-demo-delta.vercel.app",
    featured: false
  },
  {
    id: "job-listing",
    title: "Job Listing Platform",
    tagline: "Scalable Job Portal",
    description: "Scalable job portal featuring a React frontend, Node.js backend, RESTful APIs, and responsive layouts built with Tailwind CSS.",
    tech: ["React", "Node.js", "Express", "Tailwind CSS"],
    github: "https://github.com/Nashid-k/JobList_Application",
    external: null,
    featured: false
  },
  {
    id: "weather",
    title: "Weather Dashboard",
    tagline: "Geolocation Weather App",
    description: "Interactive weather dashboard using the OpenWeather API with automatic location detection and dynamic, real-time updates.",
    tech: ["React", "OpenWeather API", "Geolocation"],
    github: "https://github.com/Nashid-k/weather_react",
    external: "https://weather-react-bjtycfthq-nashids-projects-e27665ac.vercel.app/",
    featured: false
  },
  {
    id: "typescript-crud",
    title: "TypeScript CRUD Tool",
    tagline: "Type-Safe CRUD Application",
    description: "A maintainable, type-safe CRUD app showcasing React + TypeScript best practices and predictable state management.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Nashid-k/CRUD_App",
    external: null,
    featured: false
  },
  {
    id: "digital-clock",
    title: "Digital Clock with Alarm",
    tagline: "Multi-Theme Clock App",
    description: "Responsive digital clock with alarm capabilities, Web Audio API integration, and smooth animations for an engaging user experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "Web Audio API"],
    github: "https://github.com/Nashid-k/Digital_Clock",
    external: "https://nashid-k.github.io/Digital_Clock/",
    featured: false
  },
  {
    id: "todo",
    title: "Advanced Todo App",
    tagline: "Task Management System",
    description: "Feature-rich task manager with session storage, category organization, and a clean, responsive UI for focused productivity.",
    tech: ["React", "Session Storage", "Tailwind CSS"],
    github: "https://github.com/Nashid-k/TODO_react",
    external: "https://todo-react-6qtxru3ph-nashids-projects-e27665ac.vercel.app/",
    featured: false
  },
  {
    id: "calculator",
    title: "Calculator Application",
    tagline: "Responsive Calculator",
    description: "Lightweight, responsive calculator app with instant-display updates and a straightforward vanilla JavaScript implementation.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Nashid-k/Calculator",
    external: "https://nashid-k.github.io/Calculator/",
    featured: false
  },
  {
    id: "Responsive-clone",
    title: "Appy Fizz — Responsive Clone",
    tagline: "Parle Agro Appy Fizz Responsive Clone",
    description: "Responsive replica of Parle Agro's Appy Fizz landing/interface built with semantic HTML, modern CSS, and Bootstrap — mobile-first and cross-device optimized.",
    tech: ["HTML5", "CSS3", "Bootstrap"],
    github: "https://github.com/Nashid-k/APPY-FIZZ-RESPONSIVE",
    external: "https://nashid-k.github.io/APPY-FIZZ-RESPONSIVE/",
    featured: false
  }
];

// Windows XP style window controls
const CloseIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
);

const MinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14"/>
  </svg>
);

const MaxIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const RestoreIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
  </svg>
);

// Browser Window Component for Live Projects
const BrowserWindow = ({ 
  url, 
  title, 
  onClose, 
  onMinimize, 
  onMaximize, 
  isMaximized, 
  isMinimized,
  zIndex,
  windowId,
  onFocus,
  position,
  onPositionChange,
  size
}) => {
  const windowRef = useRef();
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (e.target.closest('button')) return;
    
    isDragging.current = true;
    dragStart.current = { 
      x: e.clientX - position.x, 
      y: e.clientY - position.y 
    };
    onFocus();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || isMaximized) return;
    
    const newX = e.clientX - dragStart.current.x;
    const newY = e.clientY - dragStart.current.y;
    
    const boundedX = Math.max(-size.width + 50, Math.min(newX, window.innerWidth - 50));
    const boundedY = Math.max(-size.height + 50, Math.min(newY, window.innerHeight - 100));
    
    onPositionChange({ x: boundedX, y: boundedY });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleDoubleClick = () => {
    if (!isMaximized) {
      onMaximize();
    }
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (isMinimized) return null;

  return (
    <motion.div
      ref={windowRef}
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={{ 
        scale: 1, 
        opacity: 1, 
        x: isMaximized ? 0 : position.x,
        y: isMaximized ? 0 : position.y,
        width: isMaximized ? '100vw' : size.width,
        height: isMaximized ? '100vh' : size.height
      }}
      exit={{ 
        scale: 0.8, 
        opacity: 0,
        transition: { duration: 0.15 }
      }}
      transition={{ 
        type: "spring", 
        stiffness: 500, 
        damping: 30 
      }}
      style={{ zIndex }}
      className={`fixed overflow-hidden bg-[#ece9d8] shadow-lg border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 ${
        isMaximized ? 'rounded-none' : ''
      }`}
      onMouseDown={onFocus}
    >
      {/* Browser Title Bar */}
      <div 
        className="h-6 flex items-center px-2 bg-gradient-to-b from-[#0a246a] to-[#0a246a] cursor-move select-none text-white text-sm font-bold"
        onMouseDown={handleMouseDown}
        onDoubleClick={handleDoubleClick}
      >
        <div className="flex items-center gap-2 mr-4">
          <img src={ICONS.browser} alt="Browser" className="w-4 h-4" />
        </div>
        <div className="flex-1 truncate mr-4">{title}</div>
        <div className="flex gap-1">
          <button 
            onClick={onMinimize}
            className="w-4 h-4 bg-[#ece9d8] border border-t-white border-l-white border-r-gray-600 border-b-gray-600 hover:bg-gray-200 flex items-center justify-center text-black text-xs font-bold"
          >
            <MinIcon />
          </button>
          <button 
            onClick={onMaximize}
            className="w-4 h-4 bg-[#ece9d8] border border-t-white border-l-white border-r-gray-600 border-b-gray-600 hover:bg-gray-200 flex items-center justify-center text-black text-xs font-bold"
          >
            {isMaximized ? <RestoreIcon /> : <MaxIcon />}
          </button>
          <button 
            onClick={onClose}
            className="w-4 h-4 bg-[#ece9d8] border border-t-white border-l-white border-r-gray-600 border-b-gray-600 hover:bg-gray-200 flex items-center justify-center text-black text-xs font-bold"
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      {/* Browser Address Bar */}
      <div className="h-8 flex items-center px-2 bg-[#d4d0c8] border-b border-gray-400">
        <div className="flex items-center gap-2 flex-1 bg-white border border-gray-400 px-2 py-1 text-sm">
          <span className="text-gray-600">Address:</span>
          <span className="text-blue-600 flex-1 truncate">{url}</span>
        </div>
      </div>

      {/* Browser Content */}
      <div className="h-[calc(100%-3.5rem)] overflow-hidden bg-white">
        <iframe
          src={url}
          className="w-full h-full border-none"
          title={title}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};

// Windows XP Style Window Component
const XPWindow = ({ 
  children, 
  title, 
  onClose, 
  onMinimize, 
  onMaximize, 
  isMaximized, 
  isMinimized,
  zIndex,
  windowId,
  onFocus,
  position,
  onPositionChange,
  size
}) => {
  const windowRef = useRef();
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (e.target.closest('button')) return;
    
    isDragging.current = true;
    dragStart.current = { 
      x: e.clientX - position.x, 
      y: e.clientY - position.y 
    };
    onFocus();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || isMaximized) return;
    
    const newX = e.clientX - dragStart.current.x;
    const newY = e.clientY - dragStart.current.y;
    
    const boundedX = Math.max(-size.width + 50, Math.min(newX, window.innerWidth - 50));
    const boundedY = Math.max(-size.height + 50, Math.min(newY, window.innerHeight - 100));
    
    onPositionChange({ x: boundedX, y: boundedY });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleDoubleClick = () => {
    if (!isMaximized) {
      onMaximize();
    }
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (isMinimized) return null;

  return (
    <motion.div
      ref={windowRef}
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={{ 
        scale: 1, 
        opacity: 1, 
        x: isMaximized ? 0 : position.x,
        y: isMaximized ? 0 : position.y,
        width: isMaximized ? '100vw' : size.width,
        height: isMaximized ? '100vh' : size.height
      }}
      exit={{ 
        scale: 0.8, 
        opacity: 0,
        transition: { duration: 0.15 }
      }}
      transition={{ 
        type: "spring", 
        stiffness: 500, 
        damping: 30 
      }}
      style={{ zIndex }}
      className={`fixed overflow-hidden bg-[#ece9d8] shadow-lg border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 ${
        isMaximized ? 'rounded-none' : ''
      }`}
      onMouseDown={onFocus}
    >
      {/* Windows XP Title Bar */}
      <div 
        className="h-6 flex items-center px-2 bg-gradient-to-b from-[#0a246a] to-[#0a246a] cursor-move select-none text-white text-sm font-bold"
        onMouseDown={handleMouseDown}
        onDoubleClick={handleDoubleClick}
      >
        <div className="flex-1 truncate mr-4">{title}</div>
        <div className="flex gap-1">
          <button 
            onClick={onMinimize}
            className="w-4 h-4 bg-[#ece9d8] border border-t-white border-l-white border-r-gray-600 border-b-gray-600 hover:bg-gray-200 flex items-center justify-center text-black text-xs font-bold"
          >
            <MinIcon />
          </button>
          <button 
            onClick={onMaximize}
            className="w-4 h-4 bg-[#ece9d8] border border-t-white border-l-white border-r-gray-600 border-b-gray-600 hover:bg-gray-200 flex items-center justify-center text-black text-xs font-bold"
          >
            {isMaximized ? <RestoreIcon /> : <MaxIcon />}
          </button>
          <button 
            onClick={onClose}
            className="w-4 h-4 bg-[#ece9d8] border border-t-white border-l-white border-r-gray-600 border-b-gray-600 hover:bg-gray-200 flex items-center justify-center text-black text-xs font-bold"
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="h-[calc(100%-1.5rem)] overflow-auto bg-[#ece9d8] p-1 border-2 border-t-gray-300 border-l-gray-300 border-r-white border-b-white">
        {children}
      </div>
    </motion.div>
  );
};

// Windows XP Desktop Icon with better visibility
const DesktopIcon = ({ iconUrl, label, onClick, isAppOpen }) => {
  return (
    <motion.div
      className={`flex flex-col items-center cursor-pointer p-2 rounded ${
        isAppOpen ? 'bg-blue-600/80 text-white' : 'hover:bg-blue-600/30'
      } transition-colors duration-200 w-20`}
      onClick={onClick}
      onDoubleClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-12 h-12 flex items-center justify-center mb-1">
        <img 
          src={iconUrl} 
          alt={label}
          className="w-12 h-12 object-contain drop-shadow-lg"
        />
      </div>
      <span className="text-white text-xs text-center px-1 py-0.5 rounded max-w-20 truncate bg-black/70 backdrop-blur-sm border border-white/20">
        {label}
      </span>
    </motion.div>
  );
};

// Windows XP Taskbar Button
const TaskbarButton = ({ iconUrl, label, onClick, isOpen, isMinimized }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`flex items-center gap-2 px-3 py-1 mx-1 min-w-[140px] border-2 ${
      isOpen && !isMinimized 
        ? 'border-t-gray-300 border-l-gray-300 border-r-white border-b-white bg-[#d4d0c8]' 
        : 'border-t-white border-l-white border-r-gray-600 border-b-gray-600 bg-[#d4d0c8] hover:bg-[#c0bcaa]'
    } transition-all duration-200 text-left`}
    title={label}
  >
    <img 
      src={iconUrl} 
      alt={label}
      className="w-4 h-4 object-contain"
    />
    <span className="text-sm font-medium text-black truncate flex-1">{label}</span>
  </motion.button>
);

// Display Properties Component (Wallpaper Changer)
const DisplayProperties = ({ onClose, currentWallpaper, onWallpaperChange }) => {
  return (
    <div className="p-4 bg-[#ece9d8] h-full overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-blue-800">Display Properties</h3>
        <button 
          onClick={onClose}
          className="px-3 py-1 bg-red-600 text-white border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 hover:bg-red-500"
        >
          Close
        </button>
      </div>

      <div className="bg-white border border-gray-300 p-4">
        <h4 className="text-md font-bold text-blue-700 mb-3">Desktop Background</h4>
        <p className="text-sm text-gray-600 mb-4">Choose your desktop wallpaper:</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {Object.entries(WALLPAPERS).map(([key, url]) => (
            <div
              key={key}
              className={`border-2 cursor-pointer transition-all ${
                currentWallpaper === key 
                  ? 'border-blue-600 bg-blue-100' 
                  : 'border-gray-300 hover:border-blue-400'
              }`}
              onClick={() => onWallpaperChange(key)}
            >
              <div 
                className="w-full h-24 bg-cover bg-center"
                style={{ backgroundImage: `url(${url})` }}
              />
              <div className="p-2 text-xs text-center bg-white capitalize">
                {key.replace('_', ' ')}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-3 bg-blue-50 border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>Tip:</strong> Click on any wallpaper to preview it on your desktop.
          </p>
        </div>
      </div>
    </div>
  );
};

// Enhanced Email Client Component with multiple contact options
const EmailClient = ({ onClose }) => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    window.open(`mailto:${DATA.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`);
  };

  const handleWhatsApp = () => {
    const text = `Hello Nashid, ${subject ? `regarding: ${subject}` : ''}`;
    window.open(`https://wa.me/${DATA.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`);
  };

  return (
    <div className="p-4 bg-[#ece9d8] h-full overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-blue-800">Contact Me</h3>
        <button 
          onClick={onClose}
          className="px-3 py-1 bg-red-600 text-white border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 hover:bg-red-500"
        >
          Close
        </button>
      </div>

      {/* Quick Contact Buttons */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button 
          onClick={handleSendEmail}
          className="p-3 bg-blue-600 text-white border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 hover:bg-blue-500 flex flex-col items-center"
        >
          <span className="text-2xl mb-1">📧</span>
          <span className="text-sm font-semibold">Email</span>
        </button>
        
        <button 
          onClick={handleWhatsApp}
          className="p-3 bg-green-600 text-white border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 hover:bg-green-500 flex flex-col items-center"
        >
          <span className="text-2xl mb-1">💬</span>
          <span className="text-sm font-semibold">WhatsApp</span>
        </button>

        <a 
          href={DATA.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-blue-700 text-white border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 hover:bg-blue-600 flex flex-col items-center text-center"
        >
          <span className="text-2xl mb-1">💼</span>
          <span className="text-sm font-semibold">LinkedIn</span>
        </a>

        <a 
          href={DATA.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-800 text-white border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 hover:bg-gray-700 flex flex-col items-center"
        >
          <span className="text-2xl mb-1">🐙</span>
          <span className="text-sm font-semibold">GitHub</span>
        </a>
      </div>

      {/* Email Form */}
      <div className="bg-white border border-gray-300 p-4">
        <h4 className="text-md font-bold text-blue-700 mb-3">Send Direct Email</h4>
        
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">To:</label>
          <input 
            type="text" 
            value={DATA.contact.email}
            readOnly
            className="w-full px-2 py-1 border border-gray-400 bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Subject:</label>
          <input 
            type="text" 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Job opportunity / Collaboration"
            className="w-full px-2 py-1 border border-gray-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Message:</label>
          <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="6"
            placeholder="Hello Nashid, I was impressed by your portfolio..."
            className="w-full px-2 py-1 border border-gray-400 resize-none"
          />
        </div>

        <button 
          onClick={handleSendEmail}
          className="px-4 py-2 bg-green-600 text-white border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 hover:bg-green-500 font-semibold"
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

// Resume Viewer Component (Professional ATS-style)
const ResumeViewer = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6 bg-white h-full overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800 uppercase">{DATA.name}</h1>
          <h2 className="text-lg text-gray-600 mt-2">{DATA.title}</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-3 text-sm text-gray-700">
            <span>📧 {DATA.contact.email}</span>
            <span>📞 {DATA.contact.phone}</span>
            <span>📍 {DATA.contact.location}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-2 text-sm">
            <a href={DATA.contact.linkedin} className="text-blue-600 hover:underline">LinkedIn</a>
            <a href={DATA.contact.github} className="text-gray-700 hover:underline">GitHub</a>
            <a href={DATA.contact.portfolio} className="text-green-600 hover:underline">Portfolio</a>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-6">
          <h3 className="text-xl font-bold uppercase border-b pb-2 mb-4 text-gray-800">Professional Summary</h3>
          <p className="text-gray-700 leading-relaxed">{DATA.summary}</p>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h3 className="text-xl font-bold uppercase border-b pb-2 mb-4 text-gray-800">Technical Skills</h3>
          <div className="space-y-3">
            <div>
              <strong>Frontend:</strong> {DATA.skills.frontend.join(', ')}
            </div>
            <div>
              <strong>Backend:</strong> {DATA.skills.backend.join(', ')}
            </div>
            <div>
              <strong>Database:</strong> {DATA.skills.database.join(', ')}
            </div>
            <div>
              <strong>Cloud/DevOps:</strong> {DATA.skills.cloud_devops.join(', ')}
            </div>
            <div>
              <strong>AI/Integrations:</strong> {DATA.skills.ai_integrations.join(', ')}
            </div>
            <div>
              <strong>Payments/Security:</strong> {DATA.skills.payments_security.join(', ')}
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-6">
          <h3 className="text-xl font-bold uppercase border-b pb-2 mb-4 text-gray-800">Professional Experience</h3>
          <div className="space-y-6">
            {DATA.experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">{exp.company}</h4>
                    <p className="text-gray-700 font-semibold">{exp.role}</p>
                  </div>
                  <span className="text-gray-600 bg-gray-100 px-2 py-1 rounded text-sm mt-1 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-6">
          <h3 className="text-xl font-bold uppercase border-b pb-2 mb-4 text-gray-800">Certifications</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {DATA.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>

        {/* Profile Highlights */}
        <section className="mb-6">
          <h3 className="text-xl font-bold uppercase border-b pb-2 mb-4 text-gray-800">Profile Highlights</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {DATA.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </section>

        {/* Print Button */}
        <div className="text-center mt-8">
          <button 
            onClick={handlePrint}
            className="px-6 py-3 bg-blue-600 text-white font-semibold border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 hover:bg-blue-500"
          >
            🖨️ Print Resume
          </button>
        </div>
      </div>
    </div>
  );
};

// Authentic Windows XP Start Menu
const StartMenu = ({ isOpen, onClose, apps, onAppClick, currentWallpaper, onWallpaperChange }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
      className="absolute bottom-10 left-0 w-80 bg-[#d4d0c8] border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 shadow-2xl z-40"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Start Menu Header */}
      <div className="h-20 bg-gradient-to-b from-[#0a246a] to-[#0a246a] flex items-center px-4">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3 border border-gray-300">
          <span className="text-xl font-bold text-blue-800">NK</span>
        </div>
        <div className="text-white">
          <div className="font-bold text-lg">{DATA.name}</div>
          <div className="text-sm opacity-90">Full Stack Developer</div>
        </div>
      </div>

      <div className="flex">
        {/* Left Column - System Items */}
        <div className="flex-1 p-2 border-r border-gray-400">
          <div className="space-y-1">
            <button
              onClick={() => {
                onAppClick("resume");
                onClose();
              }}
              className="flex items-center gap-3 p-2 text-left hover:bg-blue-600 hover:text-white transition-colors rounded-sm w-full group"
            >
              <img src={ICONS.resume} alt="Resume" className="w-6 h-6" />
              <div>
                <div className="text-sm font-medium">My Resume</div>
                <div className="text-xs text-gray-600 group-hover:text-white/80">Professional CV</div>
              </div>
            </button>

            <button
              onClick={() => {
                onAppClick("my_computer");
                onClose();
              }}
              className="flex items-center gap-3 p-2 text-left hover:bg-blue-600 hover:text-white transition-colors rounded-sm w-full group"
            >
              <img src={ICONS.my_computer} alt="My Computer" className="w-6 h-6" />
              <div>
                <div className="text-sm font-medium">My Computer</div>
                <div className="text-xs text-gray-600 group-hover:text-white/80">System Information</div>
              </div>
            </button>

            <button
              onClick={() => {
                onAppClick("projects");
                onClose();
              }}
              className="flex items-center gap-3 p-2 text-left hover:bg-blue-600 hover:text-white transition-colors rounded-sm w-full group"
            >
              <img src={ICONS.projects} alt="Projects" className="w-6 h-6" />
              <div>
                <div className="text-sm font-medium">Projects</div>
                <div className="text-xs text-gray-600 group-hover:text-white/80">Portfolio Work</div>
              </div>
            </button>

            <button
              onClick={() => {
                onAppClick("email");
                onClose();
              }}
              className="flex items-center gap-3 p-2 text-left hover:bg-blue-600 hover:text-white transition-colors rounded-sm w-full group"
            >
              <img src={ICONS.email} alt="Email" className="w-6 h-6" />
              <div>
                <div className="text-sm font-medium">Contact Me</div>
                <div className="text-xs text-gray-600 group-hover:text-white/80">Get in Touch</div>
              </div>
            </button>
          </div>
        </div>

        {/* Right Column - Portfolio Apps */}
        <div className="w-48 p-2 bg-[#c0bcaa]">
          <div className="text-xs text-gray-600 font-semibold mb-2">PORTFOLIO</div>
          <div className="space-y-1">
            {apps.map(app => (
              <button
                key={app.id}
                onClick={() => {
                  onAppClick(app.id);
                  onClose();
                }}
                className="flex items-center gap-3 p-2 text-left hover:bg-blue-600 hover:text-white transition-colors rounded-sm w-full group"
              >
                <img src={app.iconUrl} alt={app.title} className="w-5 h-5" />
                <span className="text-sm font-medium">{app.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// My Computer Content Component
const MyComputerContent = () => (
  <div className="p-4 text-gray-800 bg-[#ece9d8] h-full overflow-auto">
    <h2 className="text-xl font-bold text-blue-800 text-center mb-6 border-b border-gray-400 pb-2">
      My Computer - System Information
    </h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Local Disk (C:) - Skills */}
      <div className="bg-white border border-gray-300 p-4 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <img src={ICONS.local_disk} alt="Skills Disk" className="w-12 h-12" />
          <div>
            <h3 className="text-lg font-bold text-blue-800">Skills Disk (C:)</h3>
            <p className="text-sm text-gray-600">Technical Expertise</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Frontend:</h4>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.frontend.map(skill => (
                <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs border border-blue-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Backend:</h4>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.backend.map(skill => (
                <span key={skill} className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs border border-green-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Database:</h4>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.database.map(skill => (
                <span key={skill} className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs border border-purple-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Data Disk (D:) - Tools & Cloud */}
      <div className="bg-white border border-gray-300 p-4 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <img src={ICONS.local_disk} alt="Tools Disk" className="w-12 h-12" />
          <div>
            <h3 className="text-lg font-bold text-blue-800">Tools Disk (D:)</h3>
            <p className="text-sm text-gray-600">Development Tools</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Cloud & DevOps:</h4>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.cloud_devops.map(skill => (
                <span key={skill} className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs border border-orange-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">AI & Integrations:</h4>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.ai_integrations.map(skill => (
                <span key={skill} className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs border border-red-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Payments & Security:</h4>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.payments_security.map(skill => (
                <span key={skill} className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs border border-yellow-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Project Statistics */}
    <div className="mt-6 bg-white border border-gray-300 p-4 shadow-sm">
      <h3 className="text-lg font-bold text-blue-800 mb-3">Project Statistics</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div className="p-3 bg-blue-50 border border-blue-200 rounded">
          <div className="text-2xl font-bold text-blue-700">{PROJECTS_DATA.length}</div>
          <div className="text-sm text-blue-600">Total Projects</div>
        </div>
        <div className="p-3 bg-green-50 border border-green-200 rounded">
          <div className="text-2xl font-bold text-green-700">{PROJECTS_DATA.filter(p => p.featured).length}</div>
          <div className="text-sm text-green-600">Featured</div>
        </div>
        <div className="p-3 bg-purple-50 border border-purple-200 rounded">
          <div className="text-2xl font-bold text-purple-700">{PROJECTS_DATA.filter(p => p.external).length}</div>
          <div className="text-sm text-purple-600">Live Demos</div>
        </div>
        <div className="p-3 bg-orange-50 border border-orange-200 rounded">
          <div className="text-2xl font-bold text-orange-700">12+</div>
          <div className="text-sm text-orange-600">Technologies</div>
        </div>
      </div>
    </div>

    {/* Certifications & Highlights */}
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="bg-white border border-gray-300 p-4 shadow-sm">
        <h3 className="text-lg font-bold text-blue-800 mb-3">Certifications</h3>
        <div className="space-y-2">
          {DATA.certifications.map((cert, index) => (
            <div key={index} className="flex items-center gap-2 p-2 hover:bg-gray-50">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">{cert}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-300 p-4 shadow-sm">
        <h3 className="text-lg font-bold text-blue-800 mb-3">Profile Highlights</h3>
        <div className="space-y-2">
          {DATA.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-2 p-2 hover:bg-gray-50">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Profile Content Component
const ProfileContent = () => (
  <div className="p-4 text-gray-800 bg-[#ece9d8] h-full overflow-auto">
    <div className="text-center mb-6">
      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white shadow mb-4 border-2 border-gray-300">
        NK
      </div>
      <h1 className="text-2xl font-bold text-blue-800 mb-2">{DATA.name}</h1>
      <p className="text-green-700 font-semibold mb-4">{DATA.title.split('|')[0]}</p>
      <p className="text-gray-700 leading-relaxed text-sm max-w-2xl mx-auto">
        {DATA.summary}
      </p>
    </div>

    {/* Contact Information */}
    <div className="bg-white border border-gray-300 p-4 shadow-sm mb-6">
      <h3 className="text-lg font-bold text-blue-800 mb-3 text-center">Contact Information</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-semibold">📧 Email:</span>
          <a href={`mailto:${DATA.contact.email}`} className="text-blue-600 hover:underline">
            {DATA.contact.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">📞 Phone/WhatsApp:</span>
          <a href={`https://wa.me/${DATA.contact.whatsapp.replace(/\D/g, '')}`} className="text-green-600 hover:underline">
            {DATA.contact.phone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">💼 LinkedIn:</span>
          <a href={DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {DATA.contact.linkedin.split('/').pop()}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">🐙 GitHub:</span>
          <a href={DATA.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">
            {DATA.contact.github.split('/').pop()}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">🌐 Portfolio:</span>
          <a href={DATA.contact.portfolio} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
            {DATA.contact.portfolio.split('//').pop()}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">📍 Location:</span>
          <span>{DATA.contact.location}</span>
        </div>
      </div>
    </div>

    {/* Quick Skills Overview */}
    <div className="bg-white border border-gray-300 p-4 shadow-sm">
      <h3 className="text-lg font-bold text-blue-800 mb-3 text-center">Technical Expertise</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Frontend & Backend</h4>
          <div className="space-y-1">
            {DATA.skills.frontend.slice(0, 4).map(skill => (
              <div key={skill} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>{skill}</span>
              </div>
            ))}
            {DATA.skills.backend.slice(0, 3).map(skill => (
              <div key={skill} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Tools & Platforms</h4>
          <div className="space-y-1">
            {DATA.skills.cloud_devops.slice(0, 4).map(skill => (
              <div key={skill} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>{skill}</span>
              </div>
            ))}
            {DATA.skills.database.slice(0, 2).map(skill => (
              <div key={skill} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Project Card Component
const ProjectCard = ({ project, onOpenLiveProject, featured }) => {
  return (
    <div className={`bg-white border border-gray-300 p-4 shadow-sm ${featured ? '' : 'h-full'}`}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-bold text-blue-800">{project.title}</h3>
          <p className="text-green-700 font-semibold text-sm">{project.tagline}</p>
        </div>
        {project.featured && (
          <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-xs font-medium border border-yellow-300">
            Featured
          </span>
        )}
      </div>
      
      <p className="text-gray-700 text-sm mb-3 leading-relaxed">{project.description}</p>
      
      <div className="flex flex-wrap gap-1 mb-3">
        {project.tech.map((tech, idx) => (
          <span 
            key={idx}
            className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs border border-blue-200"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-2 mt-4">
        <a 
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-gray-600 text-white text-sm border border-gray-700 hover:bg-gray-500 flex items-center gap-1"
        >
          <span>📂 GitHub</span>
        </a>
        
        {project.external && (
          <button 
            onClick={() => onOpenLiveProject(project.title, project.external)}
            className="px-3 py-1 bg-green-600 text-white text-sm border border-green-700 hover:bg-green-500 flex items-center gap-1"
          >
            <span>🚀 Live Demo</span>
          </button>
        )}
      </div>
      
      {/* Highlight that it's live */}
      {project.external && (
        <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded text-xs text-green-700">
          ✅ <strong>Live Project</strong> - Click "Live Demo" to see it in action!
        </div>
      )}
    </div>
  );
};

// Projects Content Component
const ProjectsContent = ({ onOpenLiveProject }) => (
  <div className="p-4 text-gray-800 bg-[#ece9d8] h-full overflow-auto">
    <h2 className="text-xl font-bold text-blue-800 text-center mb-6 border-b border-gray-400 pb-2">
      Portfolio Projects ({PROJECTS_DATA.length} Total)
    </h2>
    
    {/* Featured Projects */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-blue-700 mb-4">🌟 Featured Projects</h3>
      <div className="space-y-6">
        {PROJECTS_DATA.filter(project => project.featured).map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onOpenLiveProject={onOpenLiveProject}
            featured={true}
          />
        ))}
      </div>
    </div>

    {/* Other Projects */}
    <div>
      <h3 className="text-lg font-bold text-blue-700 mb-4">📁 All Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS_DATA.filter(project => !project.featured).map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onOpenLiveProject={onOpenLiveProject}
            featured={false}
          />
        ))}
      </div>
    </div>
  </div>
);

// Terminal Content Component (Fixed)
const TerminalContent = () => {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    "Microsoft Windows XP [Version 5.1.2600]",
    "(C) Copyright 1985-2001 Microsoft Corp.",
    "",
    "C:\\Users\\Nashid> welcome",
    "Welcome to Nashid's Portfolio Terminal",
    "Type 'help' for available commands",
    ""
  ]);

  const handleTerminalCommand = (command) => {
    const newHistory = [...terminalHistory, `C:\\Users\\Nashid> ${command}`];
    
    switch(command.toLowerCase()) {
      case 'help':
        newHistory.push(
          "Available commands:",
          "  about     - Show about information",
          "  projects  - List projects",
          "  skills    - Show technical skills",
          "  experience- Work experience",
          "  contact   - Contact information",
          "  clear     - Clear terminal",
          "  help      - Show this help"
        );
        break;
      case 'about':
        newHistory.push(DATA.summary);
        break;
      case 'projects':
        PROJECTS_DATA.forEach(proj => {
          newHistory.push(`📁 ${proj.title} - ${proj.tagline}`);
          newHistory.push(`   Tech: ${proj.tech.join(', ')}`);
          if (proj.external) {
            newHistory.push(`   Live: ${proj.external}`);
          }
        });
        break;
      case 'skills':
        Object.entries(DATA.skills).forEach(([category, skills]) => {
          newHistory.push(`${category.toUpperCase()}: ${skills.join(', ')}`);
        });
        break;
      case 'experience':
        DATA.experience.forEach(exp => {
          newHistory.push(`🏢 ${exp.company} | ${exp.role} | ${exp.period}`);
          exp.points.forEach(point => newHistory.push(`   • ${point}`));
        });
        break;
      case 'contact':
        newHistory.push(`📧 Email: ${DATA.contact.email}`);
        newHistory.push(`📞 Phone/WhatsApp: ${DATA.contact.phone}`);
        newHistory.push(`💼 LinkedIn: ${DATA.contact.linkedin}`);
        newHistory.push(`🐙 GitHub: ${DATA.contact.github}`);
        newHistory.push(`🌐 Portfolio: ${DATA.contact.portfolio}`);
        newHistory.push(`📍 Location: ${DATA.contact.location}`);
        break;
      case 'clear':
        setTerminalHistory([]);
        return;
      case '':
        break;
      default:
        newHistory.push(`'${command}' is not recognized as an internal or external command,`);
        newHistory.push("operable program or batch file.");
        newHistory.push("Type 'help' for available commands.");
    }
    
    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleTerminalCommand(terminalInput);
    }
  };

  return (
    <div className="h-full bg-black text-green-400 font-mono p-4 text-sm overflow-auto">
      <div className="space-y-1">
        {terminalHistory.map((line, index) => (
          <div key={index} className="break-words">
            {line}
          </div>
        ))}
      </div>
      <div className="flex items-center mt-4">
        <span className="text-white mr-2 font-bold whitespace-nowrap">C:\Users\Nashid&gt;</span>
        <input
          type="text"
          value={terminalInput}
          onChange={(e) => setTerminalInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 bg-transparent border-none outline-none text-white caret-green-400"
          placeholder="Type command..."
          autoFocus
        />
      </div>
    </div>
  );
};

// Documents Content Component
const DocumentsContent = () => (
  <div className="p-4 text-gray-800 bg-[#ece9d8] h-full overflow-auto">
    <h2 className="text-xl font-bold text-blue-800 text-center mb-6 border-b border-gray-400 pb-2">
      Professional Experience
    </h2>
    
    <div className="space-y-6">
      {DATA.experience.map((exp, index) => (
        <div
          key={exp.company}
          className="bg-white border border-gray-300 p-4 shadow-sm"
        >
          <div className="flex justify-between items-start mb-3 flex-col sm:flex-row gap-2">
            <div>
              <h3 className="text-lg font-bold text-blue-800">{exp.company}</h3>
              <p className="text-green-700 font-semibold">{exp.role}</p>
            </div>
            <span className="text-gray-600 font-medium bg-gray-200 px-2 py-1 rounded text-sm">
              {exp.period}
            </span>
          </div>
          
          <div className="space-y-2">
            {exp.points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function App() {
  const [windows, setWindows] = useState({
    profile: { 
      open: false, 
      minimized: false, 
      maximized: false, 
      zIndex: 10,
      position: { x: 100, y: 100 },
      size: { width: 600, height: 500 }
    },
    projects: { 
      open: false, 
      minimized: false, 
      maximized: false, 
      zIndex: 10,
      position: { x: 150, y: 150 },
      size: { width: 800, height: 700 }
    },
    terminal: { 
      open: false, 
      minimized: false, 
      maximized: false, 
      zIndex: 10,
      position: { x: 200, y: 200 },
      size: { width: 500, height: 400 }
    },
    documents: { 
      open: false, 
      minimized: false, 
      maximized: false, 
      zIndex: 10,
      position: { x: 250, y: 250 },
      size: { width: 650, height: 500 }
    },
    my_computer: { 
      open: false, 
      minimized: false, 
      maximized: false, 
      zIndex: 10,
      position: { x: 300, y: 300 },
      size: { width: 800, height: 700 }
    },
    email: {
      open: false,
      minimized: false,
      maximized: false,
      zIndex: 10,
      position: { x: 350, y: 350 },
      size: { width: 600, height: 500 }
    },
    display: {
      open: false,
      minimized: false,
      maximized: false,
      zIndex: 10,
      position: { x: 400, y: 400 },
      size: { width: 600, height: 500 }
    },
    resume: {
      open: false,
      minimized: false,
      maximized: false,
      zIndex: 10,
      position: { x: 450, y: 450 },
      size: { width: 800, height: 900 }
    }
  });

  // Browser windows state for live projects
  const [browserWindows, setBrowserWindows] = useState({});
  const [focusedWindow, setFocusedWindow] = useState(null);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobile, setIsMobile] = useState(false);
  const [currentWallpaper, setCurrentWallpaper] = useState('bliss');

  // Function to open live project in browser window
  const openLiveProject = (projectName, url) => {
    const windowId = `browser_${projectName.replace(/\s+/g, '_').toLowerCase()}`;
    const newZIndex = Math.max(
      ...Object.values(windows).map(w => w.zIndex),
      ...Object.values(browserWindows).map(w => w.zIndex),
      0
    ) + 1;

    setBrowserWindows(prev => ({
      ...prev,
      [windowId]: {
        open: true,
        minimized: false,
        maximized: false,
        zIndex: newZIndex,
        position: { x: 100 + Object.keys(prev).length * 30, y: 100 + Object.keys(prev).length * 30 },
        size: { width: 900, height: 600 },
        url: url,
        title: `${projectName} - Live Demo`
      }
    }));
    setFocusedWindow(windowId);
  };

  // Create apps array
  const apps = [
    { 
      id: "resume", 
      title: "My Resume", 
      iconUrl: ICONS.resume, 
      content: <ResumeViewer onClose={() => closeApp('resume')} />
    },
    { 
      id: "profile", 
      title: "Profile", 
      iconUrl: ICONS.profile, 
      content: <ProfileContent /> 
    },
    { 
      id: "projects", 
      title: "Projects", 
      iconUrl: ICONS.projects, 
      content: <ProjectsContent onOpenLiveProject={openLiveProject} /> 
    },
    { 
      id: "terminal", 
      title: "Terminal", 
      iconUrl: ICONS.terminal, 
      content: <TerminalContent /> 
    },
    { 
      id: "documents", 
      title: "Experience", 
      iconUrl: ICONS.documents, 
      content: <DocumentsContent /> 
    },
    { 
      id: "my_computer", 
      title: "My Computer", 
      iconUrl: ICONS.my_computer, 
      content: <MyComputerContent /> 
    },
    {
      id: "email",
      title: "Contact Me",
      iconUrl: ICONS.email,
      content: <EmailClient onClose={() => closeApp('email')} />
    },
    {
      id: "display",
      title: "Display Properties",
      iconUrl: ICONS.display,
      content: <DisplayProperties 
        onClose={() => closeApp('display')} 
        currentWallpaper={currentWallpaper}
        onWallpaperChange={setCurrentWallpaper}
      />
    }
  ];

  // Desktop icons including system icons
  const desktopIcons = [
    { id: "resume", name: "My Resume", icon: ICONS.resume, x: 20, y: 40 },
    { id: "profile", name: "Profile", icon: ICONS.profile, x: 20, y: 120 },
    { id: "projects", name: "Projects", icon: ICONS.projects, x: 20, y: 200 },
    { id: "terminal", name: "Terminal", icon: ICONS.terminal, x: 20, y: 280 },
    { id: "documents", name: "Experience", icon: ICONS.documents, x: 20, y: 360 },
    { id: "my_computer", name: "My PC", icon: ICONS.my_computer, x: 20, y: 440 },
    { id: "email", name: "Contact Me", icon: ICONS.email, x: 20, y: 520 }
  ];

  // Browser window management functions
  const closeBrowserWindow = (id) => {
    setBrowserWindows(prev => {
      const newWindows = { ...prev };
      delete newWindows[id];
      return newWindows;
    });
    if (focusedWindow === id) {
      setFocusedWindow(null);
    }
  };

  const minimizeBrowserWindow = (id) => {
    setBrowserWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], minimized: true }
    }));
  };

  const maximizeBrowserWindow = (id) => {
    setBrowserWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], maximized: !prev[id].maximized }
    }));
  };

  const updateBrowserWindowPosition = (id, newPosition) => {
    if (!isMobile) {
      setBrowserWindows(prev => ({
        ...prev,
        [id]: { ...prev[id], position: newPosition }
      }));
    }
  };

  const focusBrowserWindow = (id) => {
    const newZIndex = Math.max(
      ...Object.values(windows).map(w => w.zIndex),
      ...Object.values(browserWindows).map(w => w.zIndex),
      0
    ) + 1;
    setBrowserWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], zIndex: newZIndex }
    }));
    setFocusedWindow(id);
  };

  // Check mobile device and update window sizes
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Update window sizes for mobile
      if (mobile) {
        setWindows(prev => {
          const updated = { ...prev };
          Object.keys(updated).forEach(key => {
            updated[key] = {
              ...updated[key],
              size: { width: window.innerWidth - 20, height: window.innerHeight - 80 },
              position: { x: 10, y: 10 }
            };
          });
          return updated;
        });

        setBrowserWindows(prev => {
          const updated = { ...prev };
          Object.keys(updated).forEach(key => {
            updated[key] = {
              ...updated[key],
              size: { width: window.innerWidth - 20, height: window.innerHeight - 80 },
              position: { x: 10, y: 10 }
            };
          });
          return updated;
        });
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Window management functions for regular apps
  const openApp = (id) => {
    const newZIndex = Math.max(
      ...Object.values(windows).map(w => w.zIndex),
      ...Object.values(browserWindows).map(w => w.zIndex),
      0
    ) + 1;
    const defaultSize = isMobile ? 
      { width: window.innerWidth - 20, height: window.innerHeight - 80 } : 
      windows[id].size;
    
    setWindows(prev => ({
      ...prev,
      [id]: { 
        ...prev[id], 
        open: true, 
        minimized: false, 
        zIndex: newZIndex,
        size: defaultSize,
        position: isMobile ? { x: 10, y: 10 } : prev[id].position
      }
    }));
    setFocusedWindow(id);
    setStartMenuOpen(false);
  };

  const closeApp = (id) => {
    setWindows(prev => ({
      ...prev,
      [id]: { 
        ...prev[id], 
        open: false, 
        minimized: false, 
        maximized: false 
      }
    }));
    if (focusedWindow === id) {
      setFocusedWindow(null);
    }
  };

  const minimizeApp = (id) => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], minimized: true }
    }));
  };

  const restoreApp = (id) => {
    const newZIndex = Math.max(
      ...Object.values(windows).map(w => w.zIndex),
      ...Object.values(browserWindows).map(w => w.zIndex),
      0
    ) + 1;
    setWindows(prev => ({
      ...prev,
      [id]: { 
        ...prev[id], 
        minimized: false, 
        zIndex: newZIndex 
      }
    }));
    setFocusedWindow(id);
  };

  const toggleAppWindow = (id) => {
    if (windows[id].minimized) {
      restoreApp(id);
    } else if (windows[id].open) {
      minimizeApp(id);
    } else {
      openApp(id);
    }
  };

  const maximizeApp = (id) => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], maximized: !prev[id].maximized }
    }));
  };

  const updateWindowPosition = (id, newPosition) => {
    if (!isMobile) {
      setWindows(prev => ({
        ...prev,
        [id]: { ...prev[id], position: newPosition }
      }));
    }
  };

  const focusWindow = (id) => {
    const newZIndex = Math.max(
      ...Object.values(windows).map(w => w.zIndex),
      ...Object.values(browserWindows).map(w => w.zIndex),
      0
    ) + 1;
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], zIndex: newZIndex }
    }));
    setFocusedWindow(id);
  };

  return (
    <div 
      className="h-screen w-screen overflow-hidden relative select-none"
      onContextMenu={(e) => e.preventDefault()}
      onClick={() => startMenuOpen && setStartMenuOpen(false)}
    >
      {/* Windows XP Wallpaper Background with overlay for better readability */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${WALLPAPERS[currentWallpaper]})` }}
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Desktop Icons */}
      <div className="absolute left-0 top-0 h-full flex flex-col items-start space-y-2 p-4 z-10">
        {desktopIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            iconUrl={icon.icon}
            label={icon.name}
            onClick={() => openApp(icon.id)}
            isAppOpen={windows[icon.id]?.open && !windows[icon.id]?.minimized}
          />
        ))}
      </div>

      {/* Windows XP Taskbar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-[#0a78c2] to-[#0a5c9e] border-t border-blue-400 flex items-center justify-between px-1 z-30"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
      >
        {/* Start Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setStartMenuOpen(!startMenuOpen);
          }}
          className={`h-8 px-3 bg-gradient-to-b from-[#00cc00] to-[#009900] border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 text-white font-bold text-sm flex items-center gap-2 hover:from-[#00ee00] hover:to-[#00bb00] ${
            isMobile ? 'min-w-[70px]' : 'min-w-[90px]'
          }`}
        >
          <div className="w-5 h-5 bg-white flex items-center justify-center text-green-600 font-bold text-xs">start</div>
          {!isMobile && "Start"}
        </button>

        {/* Taskbar Programs */}
        <div className="flex-1 flex items-center mx-1 overflow-x-auto">
          {/* Regular App Windows */}
          {apps.map(app => 
            windows[app.id]?.open && (
              <TaskbarButton
                key={app.id}
                iconUrl={app.iconUrl}
                label={app.title}
                onClick={() => toggleAppWindow(app.id)}
                isOpen={windows[app.id]?.open}
                isMinimized={windows[app.id]?.minimized}
              />
            )
          )}
          
          {/* Browser Windows */}
          {Object.entries(browserWindows).map(([id, window]) => 
            window.open && (
              <TaskbarButton
                key={id}
                iconUrl={ICONS.browser}
                label={window.title}
                onClick={() => {
                  if (window.minimized) {
                    setBrowserWindows(prev => ({
                      ...prev,
                      [id]: { ...prev[id], minimized: false, zIndex: Math.max(...Object.values(browserWindows).map(w => w.zIndex), 0) + 1 }
                    }));
                    setFocusedWindow(id);
                  } else if (window.open) {
                    minimizeBrowserWindow(id);
                  }
                }}
                isOpen={window.open}
                isMinimized={window.minimized}
              />
            )
          )}
        </div>

        {/* System Tray */}
        <div className="flex items-center gap-1 px-2 h-8 bg-gradient-to-b from-[#0a5c9e] to-[#0a78c2] border-2 border-t-gray-400 border-l-gray-400 border-r-white border-b-white min-w-[70px] justify-center">
          <div className="text-white text-xs font-medium whitespace-nowrap">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </motion.div>

      {/* Start Menu */}
      <StartMenu 
        isOpen={startMenuOpen} 
        onClose={() => setStartMenuOpen(false)}
        apps={apps}
        onAppClick={openApp}
        currentWallpaper={currentWallpaper}
        onWallpaperChange={setCurrentWallpaper}
      />

      {/* Regular App Windows */}
      <AnimatePresence>
        {apps.map(app => 
          windows[app.id]?.open && !windows[app.id]?.minimized && (
            <XPWindow
              key={app.id}
              title={app.title}
              onClose={() => closeApp(app.id)}
              onMinimize={() => minimizeApp(app.id)}
              onMaximize={() => maximizeApp(app.id)}
              isMaximized={windows[app.id]?.maximized}
              isMinimized={windows[app.id]?.minimized}
              zIndex={windows[app.id]?.zIndex}
              windowId={app.id}
              onFocus={() => focusWindow(app.id)}
              position={windows[app.id]?.position}
              onPositionChange={(newPos) => updateWindowPosition(app.id, newPos)}
              size={windows[app.id]?.size}
            >
              {app.content}
            </XPWindow>
          )
        )}
      </AnimatePresence>

      {/* Browser Windows for Live Projects */}
      <AnimatePresence>
        {Object.entries(browserWindows).map(([id, window]) => 
          window.open && !window.minimized && (
            <BrowserWindow
              key={id}
              url={window.url}
              title={window.title}
              onClose={() => closeBrowserWindow(id)}
              onMinimize={() => minimizeBrowserWindow(id)}
              onMaximize={() => maximizeBrowserWindow(id)}
              isMaximized={window.maximized}
              isMinimized={window.minimized}
              zIndex={window.zIndex}
              windowId={id}
              onFocus={() => focusBrowserWindow(id)}
              position={window.position}
              onPositionChange={(newPos) => updateBrowserWindowPosition(id, newPos)}
              size={window.size}
            />
          )
        )}
      </AnimatePresence>
    </div>
  );
}