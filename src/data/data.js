// src/data/data.js
export const personalInfo = {
  name: "Gayatri Kolhe",
  title: "Java Backend Developer",
  email: "gayatri.kolhe@email.com",
  location: "Pune, Maharashtra, India",
  education: "B.E. Computer Science & Engineering",
  linkedin: "linkedin.com/in/gayatri-kolhe",
  github: "github.com/gayatri-kolhe",
  about: "I am a developer who works on making software systems that can grow and make a difference. I have worked on both full-stack development and applied AI. I like using my strong backend skills and modern web technologies to solve real-world problems. I'm always looking for new ways to use intelligent systems in real-life situations."
};

export const coreAreas = [
  "Java Development", "Spring Boot", "REST APIs", "Microservices",
  "JWT Auth & RBAC", "MySQL & MongoDB", "JPA/Hibernate", "Agile/Scrum",
  "Git & GitHub", "Cloudinary", "Razorpay", "Postman"
];

export const skills = [
  { name: "Java (8 & 17)", level: 90 },
  { name: "Spring Boot", level: 88 },
  { name: "Spring Security (JWT/RBAC)", level: 85 },
  { name: "JPA/Hibernate", level: 82 },
  { name: "REST APIs", level: 90 },
  { name: "Microservices", level: 78 },
  { name: "MySQL", level: 85 },
  { name: "MongoDB", level: 75 },
  { name: "Git & GitHub", level: 80 }
];

export const experiences = [
  {
    company: "RBricks Technology",
    location: "Pune",
    role: "Software Developer",
    period: "Jun 2025 - Present",
    achievements: [
      "Engineered 15+ production REST APIs using Spring Boot and Spring MVC",
      "Implemented JWT-based stateless authentication and RBAC eliminating unauthorized access",
      "Optimized MySQL and MongoDB queries with indexing strategies reducing query execution time",
      "Delivered features in 2-week Agile sprints with clean Git branching strategy"
    ]
  },
  {
    company: "E-Commerce Platform",
    location: "Personal Project",
    role: "Microservices Backend",
    period: "2024",
    achievements: [
      "Designed microservices architecture with Auth, Product, Cart, and Order services",
      "Built 10+ REST APIs for full CRUD, JWT auth, and RBAC",
      "Integrated Razorpay payment gateway and Cloudinary CDN",
      "Reduced coupling between services enabling independent deployability"
    ]
  },
  {
    company: "Food Delivery Application",
    location: "Personal Project",
    role: "API Backend Developer",
    period: "2023",
    achievements: [
      "Developed REST APIs for restaurant listing and dynamic menu management",
      "Implemented real-time order tracking using MongoDB document model",
      "Integrated Razorpay for multi-restaurant payment flows",
      "Implemented JWT authentication with role-based access (Admin/Customer)"
    ]
  }
];

export const projects = [
  {
    title: "E-Commerce Platform",
    tech: "Java 17, Spring Boot, Spring Security, JWT, MySQL, React.js, Razorpay, Cloudinary",
    description: "Microservices architecture with Auth, Product, Cart, and Order services",
    features: ["10+ REST APIs", "JWT auth & RBAC", "Razorpay integration", "Cloudinary CDN"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Food Delivery Application",
    tech: "Java 8, Spring Boot, MongoDB, Microservices, JWT, Razorpay",
    description: "REST APIs for restaurant listing, dynamic menu, and real-time order tracking",
    features: ["MongoDB document model", "Role-based access", "Multi-restaurant payments", "Order tracking"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "URL Shortener Service",
    tech: "Java 17, Spring Boot, MySQL, JPA/Hibernate, REST APIs",
    description: "Custom alias support, expiry management, and redirect tracking",
    features: ["Normalized MySQL schema", "Indexed short-code lookups", "Global exception handling", "Analytics operations"],
    gradient: "from-green-500 to-emerald-500"
  }
];

export const education = [
  {
    degree: "B.E. Computer Science & Engineering",
    institution: "LoGMIEER, Nashik (SPPU)",
    period: "2020 - 2023",
    grade: "CGPA: 8.0/10.0",
    gradient: "from-indigo-50 to-purple-50"
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "K.K. Wagh Polytechnic, Nashik",
    period: "2017 - 2020",
    grade: "Percentage: 85%",
    gradient: "from-blue-50 to-cyan-50"
  },
  {
    degree: "Java Full Stack Development",
    institution: "Certification",
    period: "Jul 2023 - Jun 2024",
    grade: "Spring Boot · REST APIs · MySQL · MongoDB · Hibernate · Git",
    gradient: "from-purple-50 to-pink-50"
  }
];