export const portfolioKnowledge = {
  personal: {
    name: "Thejas",
    role: "Software Engineer",
    focus: "Java-based applications with emphasis on clean code, scalability, and performance",
    location: "India",
    resumeLink: "https://drive.google.com/file/d/13cQazXcaAI5rJzwL_o8W0jn-QOB7lM1N/view?usp=sharing"
  },
  
  experience: [
    {
      company: "Omnion",
      role: "Software Engineer",
      duration: "2024 - Present",
      location: "Udupi, India",
      description: "Java developer specializing in database management and Docker containerization",
      technologies: ["Java", "Database Management", "Docker", "Containerization"]
    },
    {
      company: "CitiusTech",
      role: "Software Engineer",
      duration: "2022 - 2023",
      location: "Bengaluru, India",
      description: "Java developer working on healthcare solutions",
      technologies: ["Java", "Healthcare Tech", "Enterprise Applications"]
    }
  ],
  
  projects: [
    {
      name: "Spring Shield",
      description: "JWT Authentication framework built with Spring Boot",
      technologies: ["Spring Boot", "JWT", "Security", "Authentication"],
      highlights: ["Secure authentication", "Token-based security", "Spring Security integration"]
    },
    {
      name: "MicroServiceRouter",
      description: "Microservices architecture with Eureka Server and API Gateway",
      technologies: ["Microservices", "Eureka Server", "API Gateway", "Spring Cloud"],
      highlights: ["Service discovery", "Load balancing", "API routing"]
    },
    {
      name: "Stock-Price Streamer",
      description: "Real-time stock price streaming application using Kafka and Zookeeper",
      technologies: ["Apache Kafka", "Zookeeper", "Real-time streaming", "Event-driven"],
      highlights: ["Real-time data processing", "Message streaming", "Distributed systems"]
    }
  ],
  
  skills: {
    languages: ["Java", "TypeScript", "JavaScript"],
    frameworks: ["Spring Boot", "React", "Next.js", "Hibernate"],
    databases: ["MySQL", "PostgreSQL"],
    devops: ["Kubernetes", "Docker", "Terraform", "CI/CD"],
    cloud: ["AWS"],
    other: ["Microservices", "REST APIs", "Git", "Agile"]
  },
  
  contact: {
    formEndpoint: "https://formspree.io/f/mpwdadra",
    preferredMethod: "Contact form on website",
    responseTime: "Usually within 24-48 hours"
  }
};

export const chatResponses = {
  greetings: [
    "Hello! I'm Thejas's portfolio assistant. I can help you learn about his experience, projects, skills, or how to contact him. What would you like to know?",
    "Hi there! Welcome to Thejas's portfolio. I can tell you about his work experience, technical projects, or help you get in touch. How can I assist you?",
    "Welcome! I'm here to help you explore Thejas's professional background. Feel free to ask about his experience, projects, skills, or contact information."
  ],
  
  experience: {
    general: "Thejas is currently working as a Software Engineer at Omnion (2024-Present) in Udupi, India, specializing in Java development, database management, and Docker. Previously, he worked at CitiusTech (2022-2023) in Bengaluru, focusing on healthcare solutions.",
    
    omnion: "At Omnion (2024-Present), Thejas works as a Software Engineer specializing in Java development with expertise in database management and Docker containerization. This role involves building scalable applications and managing containerized deployments.",
    
    citiustech: "At CitiusTech (2022-2023), Thejas worked as a Software Engineer in Bengaluru, developing Java-based healthcare solutions and enterprise applications for the healthcare industry.",
    
    summary: "Thejas has over 2 years of experience as a Software Engineer, working with companies like Omnion and CitiusTech. His expertise includes Java development, healthcare solutions, database management, and containerization with Docker."
  },
  
  projects: {
    general: "Thejas has built several notable projects:\n\n1. **Spring Shield** - A JWT Authentication framework using Spring Boot\n2. **MicroServiceRouter** - Microservices architecture with Eureka Server and API Gateway\n3. **Stock-Price Streamer** - Real-time stock streaming with Kafka and Zookeeper\n\nWhich project would you like to know more about?",
    
    springShield: "Spring Shield is a JWT Authentication framework built with Spring Boot. It provides secure token-based authentication with Spring Security integration, offering a robust solution for protecting REST APIs and web applications.",
    
    microServiceRouter: "MicroServiceRouter demonstrates a complete microservices architecture using Spring Cloud technologies. It features Eureka Server for service discovery, API Gateway for routing, and implements load balancing across services.",
    
    stockPriceStreamer: "Stock-Price Streamer is a real-time data processing application that streams stock prices using Apache Kafka and Zookeeper. It showcases event-driven architecture and distributed systems design for handling high-volume financial data."
  },
  
  skills: {
    general: "Thejas has a diverse technical skill set including:\n\n**Languages:** Java, TypeScript, JavaScript\n**Frameworks:** Spring Boot, React, Next.js, Hibernate\n**Databases:** MySQL, PostgreSQL\n**DevOps:** Kubernetes, Docker, Terraform, CI/CD\n**Cloud:** AWS\n\nHis primary expertise is in Java and Spring Boot for backend development.",
    
    java: "Java is Thejas's primary programming language. He has extensive experience building enterprise applications, microservices, and REST APIs using Java with Spring Boot framework.",
    
    frontend: "For frontend development, Thejas works with React, Next.js, and TypeScript. This portfolio website is built using Next.js with TypeScript, showcasing his full-stack capabilities.",
    
    devops: "Thejas has strong DevOps skills including containerization with Docker, orchestration with Kubernetes, infrastructure as code with Terraform, and implementing CI/CD pipelines."
  },
  
  contact: {
    general: "The best way to contact Thejas is through the contact form on this website. You can find it in the Contact section. Messages are typically responded to within 24-48 hours.",
    
    how: "To get in touch with Thejas:\n1. Scroll to the Contact section on this website\n2. Fill out the contact form with your name, email, and message\n3. Submit the form - it goes directly to his inbox\n4. Expect a response within 24-48 hours",
    
    resume: "You can view Thejas's detailed resume here: https://drive.google.com/file/d/13cQazXcaAI5rJzwL_o8W0jn-QOB7lM1N/view?usp=sharing"
  },
  
  notFound: [
    "I'm not sure I understand that question. I can help you with information about Thejas's experience, projects, technical skills, or how to contact him. What would you like to know?",
    "I don't have specific information about that. Feel free to ask about Thejas's work experience, technical projects, skills, or contact details!",
    "Could you please rephrase your question? I can provide information about experience, projects, skills, or contact methods."
  ]
};

export function findBestResponse(query: string): string {
  const lowerQuery = query.toLowerCase();
  
  // Greeting patterns
  if (lowerQuery.match(/^(hi|hello|hey|greetings|good\s+(morning|afternoon|evening))/)) {
    return chatResponses.greetings[Math.floor(Math.random() * chatResponses.greetings.length)];
  }
  
  // Experience queries
  if (lowerQuery.includes('experience') || lowerQuery.includes('work') || lowerQuery.includes('career')) {
    if (lowerQuery.includes('omnion')) {
      return chatResponses.experience.omnion;
    }
    if (lowerQuery.includes('citiustech') || lowerQuery.includes('citius')) {
      return chatResponses.experience.citiustech;
    }
    if (lowerQuery.includes('current')) {
      return chatResponses.experience.omnion;
    }
    return chatResponses.experience.general;
  }
  
  // Company-specific queries
  if (lowerQuery.includes('omnion')) {
    return chatResponses.experience.omnion;
  }
  if (lowerQuery.includes('citiustech') || lowerQuery.includes('citius')) {
    return chatResponses.experience.citiustech;
  }
  
  // Project queries
  if (lowerQuery.includes('project')) {
    if (lowerQuery.includes('spring') || lowerQuery.includes('shield') || lowerQuery.includes('auth')) {
      return chatResponses.projects.springShield;
    }
    if (lowerQuery.includes('micro') || lowerQuery.includes('service') || lowerQuery.includes('router')) {
      return chatResponses.projects.microServiceRouter;
    }
    if (lowerQuery.includes('stock') || lowerQuery.includes('stream') || lowerQuery.includes('kafka')) {
      return chatResponses.projects.stockPriceStreamer;
    }
    return chatResponses.projects.general;
  }
  
  // Contact queries
  if (lowerQuery.includes('contact') || lowerQuery.includes('reach') || lowerQuery.includes('email') || lowerQuery.includes('get in touch')) {
    if (lowerQuery.includes('how')) {
      return chatResponses.contact.how;
    }
    return chatResponses.contact.general;
  }
  
  // Resume queries
  if (lowerQuery.includes('resume') || lowerQuery.includes('cv')) {
    return chatResponses.contact.resume;
  }
  
  // Skills queries
  if (lowerQuery.includes('skill') || lowerQuery.includes('tech') || lowerQuery.includes('language') || lowerQuery.includes('framework')) {
    if (lowerQuery.includes('java') && !lowerQuery.includes('javascript')) {
      return chatResponses.skills.java;
    }
    if (lowerQuery.includes('front') || lowerQuery.includes('react') || lowerQuery.includes('next')) {
      return chatResponses.skills.frontend;
    }
    if (lowerQuery.includes('devops') || lowerQuery.includes('docker') || lowerQuery.includes('kubernetes')) {
      return chatResponses.skills.devops;
    }
    return chatResponses.skills.general;
  }
  
  // Specific technology queries
  if (lowerQuery.includes('java') && !lowerQuery.includes('javascript')) {
    return chatResponses.skills.java;
  }
  if (lowerQuery.includes('docker') || lowerQuery.includes('kubernetes')) {
    return chatResponses.skills.devops;
  }
  
  // Default response
  return chatResponses.notFound[Math.floor(Math.random() * chatResponses.notFound.length)];
}