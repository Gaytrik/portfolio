// Portfolio.js
import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Mail, 
  MapPin, 
  Briefcase, 
  Code, 
  Database, 
  Cloud, 
  Globe, 
  GraduationCap,
  Award,
  Github,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  Calendar,
  CheckCircle,
  Users,
  Home,
  Building,
  FileText,
  Server,
  Cpu,
  Zap,
  Rocket,
  Target,
  Shield,
  Terminal,
  ChevronRight,
  PlayCircle,
  BookOpen,
  Wrench,
  Cpu as Chip,
  Layers,
  GitBranch,
  Code2,
  Monitor,
  Smartphone,
  Database as DbIcon,
  FileCode,
  Settings,
  TerminalSquare,
  Coffee
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDownloadResume = () => {
    setLoading(true);
    
    const resumeContent = `
GAYTRI KOLHE
Full Stack Java Developer
📍 Pune, Maharashtra, India
📧 gaytrikolhe2001@gmail.com

EDUCATION
• Bachelor of Engineering (Computer Science)
  Savitribai Phule Pune University
  Duration: 2020 - 2023
  CGPA: 8.5/10

• Diploma in Computer Technology (3 Years)
  Maharashtra State Board of Technical Education
  Duration: 2017 - 2020
  Percentage: 86.50%

• Secondary School Certificate (SSC)
  Maharashtra State Board
  Year: 2016-2017
  Percentage: 86.50%

EXPERIENCE
Software Developer | RBrickks Technology (Current - 1 Year)
• Developed RESTful APIs for E-commerce platform using Spring Boot
• Implemented JWT authentication and role-based access control
• Integrated payment gateways (Razorpay) and cloud storage (Cloudinary)
• Built microservices architecture for scalable applications
• Optimized MongoDB queries improving performance by 30%

C# Intern | sofysyst (2022 - 6 Months)
• Developed enterprise applications using C# and .NET framework
• Implemented business logic for client management systems
• Worked on SQL Server database design and optimization

Web Developer | Sumago Infotech (2021 - 8 Months)
• Built responsive web applications with HTML5, CSS3, JavaScript
• Developed real-estate websites with modern UI/UX
• Implemented CRUD operations and local storage functionality

TECHNICAL SKILLS
• Languages: Java, SQL, PL/SQL, JavaScript
• Frontend: React.js, HTML5, CSS3, Tailwind CSS
• Backend: Spring Boot, Spring MVC, Hibernate, JDBC, REST APIs
• Databases: MongoDB, MySQL, Database Design, Query Optimization
• Tools: Git, GitHub, Postman, Docker (Basics), AWS (Basics)
• Integrations: Razorpay, Cloudinary, WebSocket, Third-party APIs

PROJECTS
1. E-commerce Shoe Store
   Tech: Spring Boot, MongoDB, React.js, Razorpay, Cloudinary
   Features: Payment Integration, Admin Dashboard, Product Management
   Impact: Reduced page load time by 40% using CDN optimization

2. Real Estate Platform
   Tech: React.js, Spring Boot, MySQL, Vercel
   Features: Property Listings, Agent Dashboard, Advanced Search
   Impact: Enabled property management for 50+ real estate agents

3. Food Delivery Platform
   Tech: Spring Boot, MongoDB, Microservices, WebSocket
   Features: Real-time Tracking, Restaurant Management, Order Processing
   Impact: Processed 500+ daily orders with real-time updates

4. Banking Application
   Tech: Java, Spring Boot, Hibernate, MySQL, Spring Security
   Features: Secure Transactions, Role-based Access, Account Management
   Impact: Securely handled 1000+ daily transactions

CERTIFICATIONS
• Java Full Stack Development Certification
• Qspiders Deccan, Pune - Full Stack Java Course

CONTACT
GitHub: https://github.com/Gaytrik
LinkedIn: [Your LinkedIn Profile]
Portfolio: [Your Portfolio URL]
Available for full-time opportunities
`;

    // Create PDF using jsPDF
    const createPDF = () => {
      // If jsPDF is available, create PDF
      if (window.jspdf) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Add content to PDF
        doc.setFontSize(16);
        doc.text('GAYTRI KOLHE', 20, 20);
        doc.setFontSize(12);
        doc.text('Full Stack Java Developer', 20, 30);
        doc.text('📍 Pune, Maharashtra, India', 20, 38);
        doc.text('📧 gaytrikolhe2001@gmail.com', 20, 46);
        
        // Add more sections...
        doc.save('Gaytri_Kolhe_Resume.pdf');
      } else {
        // Fallback to text file
        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Gaytri_Kolhe_Resume.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
      setLoading(false);
    };

    // Try PDF first, fallback to text
    setTimeout(createPDF, 500);
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const skills = [
    { 
      category: 'Backend Development', 
      items: ['Java', 'Spring Boot', 'Spring MVC', 'Microservices', 'REST APIs'], 
      icon: <Server className="w-5 h-5" />,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      category: 'Database Management', 
      items: ['MongoDB', 'MySQL', 'PL/SQL', 'Database Design'], 
      icon: <DbIcon className="w-5 h-5" />,
      color: 'from-green-500 to-green-600'
    },
    { 
      category: 'Frontend Development', 
      items: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind'], 
      icon: <Monitor className="w-5 h-5" />,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      category: 'API & Security', 
      items: ['JWT Authentication', 'OAuth2', 'API Security', 'Spring Security'], 
      icon: <Shield className="w-5 h-5" />,
      color: 'from-red-500 to-red-600'
    },
    { 
      category: 'Tools & DevOps', 
      items: ['Git', 'GitHub', 'Postman', 'Docker', 'AWS Basics'], 
      icon: <TerminalSquare className="w-5 h-5" />,
      color: 'from-yellow-500 to-yellow-600'
    },
    { 
      category: 'Integrations', 
      items: ['Razorpay', 'Cloudinary', 'WebSocket', 'Third-party APIs'], 
      icon: <Settings className="w-5 h-5" />,
      color: 'from-indigo-500 to-indigo-600'
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering',
      specialization: 'Computer Science',
      institute: 'Savitribai Phule Pune University',
      period: '2020 - 2023',
      score: 'CGPA: 8.5/10',
      type: 'college',
      highlights: ['Data Structures', 'Algorithms', 'Database Systems', 'Web Technologies', 'Software Engineering']
    },
    {
      degree: 'Diploma in Computer Technology',
      specialization: '3 Years Course',
      institute: 'Maharashtra State Board of Technical Education',
      period: '2017 - 2020',
      score: '86.50%',
      type: 'diploma',
      highlights: ['Programming Fundamentals', 'Database Management', 'Computer Networks', 'Web Development']
    }
  ];

  const experiences = [
    {
      company: 'RBrickks Technology',
      role: 'Software Developer',
      period: 'Current',
     
      duration: '1 Year',
      achievements: [
        'Built E-commerce platform with Spring Boot & MongoDB handling 10,000+ products',
        'Implemented secure payment integration using Razorpay gateway',
        'Developed microservices architecture reducing system downtime by 40%',
        'Optimized database queries improving response time by 30%',
        'Created RESTful APIs with JWT authentication for multiple client applications'
      ],
      technologies: ['Spring Boot', 'MongoDB', 'React.js', 'Microservices', 'JWT'],
      icon: <Chip className="w-6 h-6" />
    },
    {
      company: 'sofysyst',
      role: 'C# Intern',
      period: '2022',
      year: '2022',
      duration: '6 Months',
      achievements: [
        'Developed enterprise applications using C# and .NET framework',
        'Implemented business logic for client management systems',
        'Worked on SQL Server database design and stored procedures',
        'Collaborated with team on software development lifecycle'
      ],
      technologies: ['C#', '.NET', 'SQL Server', 'ASP.NET'],
      icon: <Code className="w-6 h-6" />
    },
    {
      company: 'Sumago Infotech Pvt. Ltd.',
      role: 'Web Developer',
      period: '2021',
      year: '2021',
      duration: '8 Months',
      achievements: [
        'Built responsive web applications with HTML5, CSS3, JavaScript',
        'Developed real-estate websites with modern UI/UX design',
        'Implemented CRUD operations with local storage functionality',
        'Created dynamic web pages with DOM manipulation'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap'],
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const projects = [
    {
      title: 'E-commerce Shoe Store',
      shortDescription: 'Full-stack marketplace with payment integration',
      detailedDescription: 'Complete e-commerce solution built with microservices architecture. Features include product catalog, shopping cart, payment processing, order management, and admin dashboard. Integrated Razorpay for secure payments and Cloudinary for image optimization.',
      tech: ['Spring Boot', 'MongoDB', 'React.js', 'Razorpay', 'Cloudinary'],
      year: '2025',
      features: ['Payment Gateway', 'Admin Dashboard', 'Product Management', 'Real-time Inventory'],
      category: 'ecommerce',
      githubLink: 'https://github.com/Gaytrik/ecommerce-shoe-store'
    },
    {
      title: 'Real Estate Platform',
      shortDescription: 'Property listing and management system',
      detailedDescription: 'Comprehensive platform for real estate businesses with separate interfaces for buyers, sellers, and agents. Features property search, virtual tours, appointment scheduling, and analytics dashboard.',
      tech: ['React.js', 'Spring Boot', 'MySQL', 'Map API', 'Vercel'],
      year: '2024',
      features: ['Property Search', 'Agent Portal', 'Booking System', 'Analytics'],
      category: 'real-estate',
      githubLink: 'https://github.com/Gaytrik/real-estate'
    },
    {
      title: 'Food Delivery Platform',
      shortDescription: 'Real-time food ordering and tracking system',
      detailedDescription: 'Microservices-based food delivery platform with real-time order tracking, restaurant management, and customer review system. Built with WebSocket for live updates and Redis for caching.',
      tech: ['Microservices', 'MongoDB', 'WebSocket', 'Spring Boot', 'Redis'],
      year: '2024',
      features: ['Live Tracking', 'Restaurant Dashboard', 'Order Processing', 'Reviews'],
      category: 'delivery',
      githubLink: 'https://github.com/Gaytrik/food-delivery'
    },
    {
      title: 'Banking Application',
      shortDescription: 'Secure banking system with role-based access',
      detailedDescription: 'Full-featured banking application with secure transaction processing, audit logging, multi-factor authentication, and role-based access control for customers, tellers, and administrators.',
      tech: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Spring Security'],
      year: '2024',
      features: ['Secure Transactions', 'Role-based Access', 'Audit Logging', 'Reports'],
      category: 'finance',
      githubLink: 'https://github.com/Gaytrik/banking-system'
    },
  ];

  const navItems = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];

  const DevelopmentVideo = () => {
    return (
      <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <PlayCircle className="w-6 h-6 mr-2 text-blue-600" />
            Development Insights
          </h3>
          <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center mb-4">
            <div className="text-center text-white p-6">
              <div className="text-4xl mb-4">🎬</div>
              <p className="text-lg font-medium mb-2">Backend Development Overview</p>
              <p className="text-gray-300">Java • Spring Boot • Microservices • REST APIs</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Spring Boot</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Microservices</span>
                <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">JWT Auth</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="font-bold text-blue-600">API Design</div>
              <div className="text-sm text-gray-600">REST Principles</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="font-bold text-green-600">Database</div>
              <div className="text-sm text-gray-600">Optimization</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <div className="font-bold text-purple-600">Security</div>
              <div className="text-sm text-gray-600">JWT & OAuth2</div>
            </div>
            <div className="text-center p-3 bg-yellow-50 rounded-lg">
              <div className="font-bold text-yellow-600">Deployment</div>
              <div className="text-sm text-gray-600">Docker & AWS</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GK</span>
              </div>
              <div>
                <span className="text-lg font-bold text-gray-900">Gaytri Kolhe</span>
                <div className="text-xs text-gray-500">Full Stack Developer</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item 
                      ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <button
                onClick={handleDownloadResume}
                disabled={loading}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-md font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center space-x-2 shadow-sm disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Resume</span>
                  </>
                )}
              </button>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-left px-4 py-2 rounded-md font-medium ${
                      activeSection === item 
                        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
                <button
                  onClick={handleDownloadResume}
                  disabled={loading}
                  className="bg-blue-600 text-white px-4 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 mt-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Loading Resume...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Download Resume</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                Available for Full-time Opportunities
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Hi, I'm <span className="text-blue-600">Gaytri Kolhe</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
                Full Stack Java Developer
              </h2>
              
              <p className="text-gray-600 text-lg mb-8 max-w-2xl leading-relaxed">
                BE Computer Science graduate with expertise in building scalable backend systems using Java, Spring Boot, 
                and modern technologies. Specialized in RESTful APIs, database optimization, and microservices architecture.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors hover:shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">BE</div>
                  <div className="text-sm font-medium text-gray-600">Computer Science</div>
                  <div className="text-xs text-gray-500 mt-1">2020-2023</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors hover:shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">1 Year</div>
                  <div className="text-sm font-medium text-gray-600">Experience</div>
                  <div className="text-xs text-gray-500 mt-1">Software Dev</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors hover:shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm font-medium text-gray-600">Projects</div>
                  <div className="text-xs text-gray-500 mt-1">Completed</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors hover:shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">Full</div>
                  <div className="text-sm font-medium text-gray-600">Stack</div>
                  <div className="text-xs text-gray-500 mt-1">Java & React</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button
                  onClick={handleDownloadResume}
                  disabled={loading}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center space-x-2 shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      <span>Download Resume</span>
                    </>
                  )}
                </button>
                
                <div className="flex items-center space-x-4">
                  <a href="https://github.com/Gaytrik" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 hover:shadow-sm transition-all duration-200 hover:scale-105">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 hover:shadow-sm transition-all duration-200 hover:scale-105">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="mailto:gaytrikolhe2001@gmail.com"
                     className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 hover:shadow-sm transition-all duration-200 hover:scale-105">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-sm text-gray-500 font-mono">developer.js</span>
                </div>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="text-blue-400">const</div>
                  <div className="text-purple-400">developer</div>
                  <div className="text-gray-400">=</div>
                  <div className="text-yellow-400">{'{'}</div>
                  <div className="ml-4 text-green-400">name:</div>
                  <div className="ml-8 text-orange-400">"Gaytri Kolhe",</div>
                  <div className="ml-4 text-green-400">education:</div>
                  <div className="ml-8 text-yellow-400">{'{'}</div>
                  <div className="ml-12 text-green-400">degree:</div>
                  <div className="ml-16 text-orange-400">"BE Computer Science",</div>
                  <div className="ml-12 text-green-400">university:</div>
                  <div className="ml-16 text-orange-400">"Pune University",</div>
                  <div className="ml-12 text-green-400">duration:</div>
                  <div className="ml-16 text-orange-400">"2020-2023"</div>
                  <div className="ml-8 text-yellow-400">{'}'},</div>
                  <div className="ml-4 text-green-400">skills:</div>
                  <div className="ml-8 text-orange-400">[</div>
                  <div className="ml-12 text-orange-400">"Spring Boot", "React.js",</div>
                  <div className="ml-12 text-orange-400">"MongoDB", "Microservices"</div>
                  <div className="ml-8 text-orange-400">],</div>
                  <div className="ml-4 text-green-400">experience:</div>
                  <div className="ml-8 text-orange-400">"1+ Year Professional"</div>
                  <div className="text-yellow-400">{'}'};</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              BE Computer Science graduate with 1 year of professional experience in full-stack development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Professional Profile</h3>
                  <p className="text-gray-500">BE Computer Science (2020-2023)</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  I am a recent BE Computer Science graduate from Savitribai Phule Pune University with 
                  a strong academic background and 1 year of professional software development experience.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My expertise lies in backend development using Java and Spring Boot, with practical 
                  experience in building RESTful APIs, optimizing database performance, and implementing 
                  secure authentication systems. I have worked on production applications including 
                  e-commerce platforms, real estate websites, and food delivery systems.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I am passionate about clean code, scalable architecture, and continuous learning. 
                  Currently seeking challenging backend development roles where I can contribute to 
                  building robust systems while expanding my technical expertise.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Focus Areas</h3>
                <p className="text-gray-600 text-sm">Backend Development, API Design, Database Optimization</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-100 to-green-50 flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Career Goal</h3>
                <p className="text-gray-600 text-sm">Senior Backend Developer specializing in Java & Microservices</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-100 to-purple-50 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Technical Approach</h3>
                <p className="text-gray-600 text-sm">Clean Code, Scalable Architecture, Best Practices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Proficient across the full stack development spectrum
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-all duration-300 hover:shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${skillGroup.color} flex items-center justify-center mr-3`}>
                    <div className="text-white">
                      {skillGroup.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Real-world applications demonstrating technical capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-all duration-300 hover:shadow-md"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.shortDescription}
                  </p>
                  
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                    {project.detailedDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-green-50 text-green-700 rounded-md text-xs font-medium border border-green-100">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 font-medium text-sm flex items-center"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      View Code
                    </a>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              1 year of hands-on software development experience
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors hover:shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center">
                      <div className="text-blue-600">
                        {exp.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="text-blue-600 font-semibold">{exp.company}</span>
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                          {exp.year} • {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start group">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:bg-green-200 transition-colors">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Insights Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <DevelopmentVideo />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Academic qualifications and technical training
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 transition-colors hover:shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center">
                      {edu.type === 'college' ? 
                        <GraduationCap className="w-8 h-8 text-blue-600" /> :
                        <FileCode className="w-8 h-8 text-blue-600" />
                      }
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{edu.degree}</h3>
                      {edu.specialization && (
                        <p className="text-gray-600 mb-2">{edu.specialization}</p>
                      )}
                      <p className="text-gray-700 font-medium">{edu.institute}</p>
                      <div className="flex items-center mt-2">
                        <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-gray-500 text-sm">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{edu.score}</div>
                    <div className="text-gray-500 text-sm">Performance</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Interested in backend development opportunities? Let's connect
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <a href="mailto:gaytrikolhe2001@gmail.com" className="font-medium text-gray-900 hover:text-blue-600">
                      gaytrikolhe2001@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-medium text-gray-900">Pune, Maharashtra, India</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Github className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">GitHub</div>
                    <a href="https://github.com/Gaytrik" target="_blank" rel="noopener noreferrer" 
                       className="font-medium text-blue-600 hover:underline">
                      github.com/Gaytrik
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <button
                  onClick={handleDownloadResume}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Generating Resume...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      <span>Download Resume (TXT)</span>
                    </>
                  )}
                </button>
                <p className="text-center text-gray-500 text-sm mt-4">
                  Includes complete project details and technical specifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold">GK</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">Gaytri Kolhe</div>
                  <div className="text-gray-600 text-sm">Full Stack Java Developer</div>
                </div>
              </div>
              <div className="text-gray-500 text-sm">
                BE Computer Science • 1 Year Experience • Open to Opportunities
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="https://github.com/Gaytrik" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-gray-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:gaytrikolhe2001@gmail.com"
                 className="text-gray-600 hover:text-gray-900 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-6 pt-6 text-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Gaytri Kolhe. All rights reserved.
            </p>
            {/* <p className="text-gray-500 text-xs mt-2">
              Built with React & Tailwind CSS | Portfolio Version 2.0
            </p> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;