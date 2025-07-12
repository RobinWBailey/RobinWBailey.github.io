// portfolio-data.js

// This file contains all the data for the portfolio projects.
// It acts as a single source of truth, so you only need to edit project details in this one place.

const portfolioData = {
  // Prominent, selected work
  selectedWork: [
    {
      id: "pulse",
      title: "PULSE",
      subtitle: "Student Success Platform",
      image: "https://placehold.co/600x400/2d3748/ffffff?text=PULSE",
      overview:
        "A comprehensive student success platform for the Faculty of Medicine and Dentistry at Plymouth University, encompassing a wide range of modules to support the entire student journey.",
      roleAndSkills: {
        role: "Product Owner & Architect",
        description:
          "I led the design and development from concept to launch. My role involved stakeholder engagement, requirements gathering, UX/UI design, and managing the agile development process.",
        tags: ["Product Management", "UX/UI Design", "Salesforce", "Agile"],
      },
      impact: [
        {
          icon: "fas fa-users",
          stat: "1,200+ Students",
          description: "Actively using the platform daily.",
        },
        {
          icon: "fas fa-chart-pie",
          stat: "TBA",
          description: "TBA",
        },
        {
          icon: "fas fa-award",
          stat: "TBA",
          description: "TBA.",
        },
        {
          icon: "fas fa-cogs",
          stat: "Streamlined Operations",
          description: "Reduced administrative overhead by 30%.",
        },
      ],
      detailPage: {
        heroImage: "https://placehold.co/1200x600/2d3748/ffffff?text=PULSE",
        overview:
          "More details about the PULSE student success platform are coming soon. Please check back later!",
        gallery: [], // Add image paths here for the detail page gallery
        impactStatement:
          "Details about the outcomes and impact of this project will be available soon.",
      },
    },
    {
      id: "bearforms",
      title: "BearForms",
      subtitle: "Offline Data Capture App",
      image: "assets/img/BearForms.png",
      fallbackImage:
        "https://placehold.co/600x400/2d3748/ffffff?text=BearForms",
      overview:
        "A simple, offline, no-fuss data capture form app for iPhone, iPad, and Android. Design your form. Capture your responses. Export your data. Done.",
      roleAndSkills: {
        role: "Designer, Developer, Founder",
        description:
          "I designed, developed, and launched this multi-platform app from scratch. This involved UI/UX design, native development for iOS and Android using React Native, and App Store deployment.",
        tags: ["React Native", "iOS & Android", "UI/UX Design", "Side Project"],
      },
      impact: [
        {
          icon: "fas fa-download",
          stat: "TBA",
          description: "TBA",
        },
        {
          icon: "fas fa-star",
          stat: "4.8 Star Rating",
          description: "Average user rating.",
        },
        {
          icon: "fas fa-file-csv",
          stat: "TBA",
          description: "TBA",
        },
      ],
      detailPage: {
        heroImage: "assets/img/BearForms.png",
        overview:
          "More details about BearForms are coming soon. Please check back later!",
        gallery: [],
        impactStatement:
          "Details about the outcomes and impact of this project will be available soon.",
      },
    },
    {
      id: "bento",
      title: "Bento: The Do Less To-Do List",
      subtitle: "A Conceptual To-Do App",
      image: "assets/img/bento-header.png",
      fallbackImage: "https://placehold.co/600x400/2d3748/ffffff?text=Bento",
      overview:
        "A conceptual to-do list application based on the Bento methodology, designed for focus and mindful productivity.",
      roleAndSkills: {
        role: "TBA",
        description: "TBA",
        tags: ["iOS", "Android", "React Native", "UI/UX Design", "Branding"],
      },
      impact: [
        {
          icon: "fab fa-dribbble",
          stat: "TBA",
          description: "TBA",
        },
        {
          icon: "fas fa-lightbulb",
          stat: "TBA",
          description: "TBA",
        },
      ],
      detailPage: {
        heroImage: "assets/img/bento-header.png",
        overview:
          "More details about the Bento concept are coming soon. Please check back later!",
        gallery: [],
        impactStatement:
          "Details about the outcomes and impact of this project will be available soon.",
      },
    },
    {
      id: "horizon",
      title: "iotec Horizon",
      subtitle: "AdTech Campaign Management Platform",
      image: "assets/img/horizon.png",
      fallbackImage: "https://placehold.co/600x400/2d3748/ffffff?text=Horizon",
      overview:
        "A self-service campaign management and reporting tool for a cutting-edge AdTech platform, empowering clients to manage their own digital advertising campaigns.",
      roleAndSkills: {
        role: "Lead UX Designer & Product Architect",
        description:
          "I led the entire product design lifecycle, from user research and wireframing to high-fidelity prototypes and front-end development support. Core Technologies: Django, Python, REST, HTML, CSS, JavaScript, PostgreSQL.",
        tags: ["AdTech", "UX/UI", "Product Design"],
      },
      impact: [
        {
          icon: "fas fa-rocket",
          stat: "80% Faster Campaign Setup",
          description: "Reduced time for clients to launch new campaigns.",
        },
        {
          icon: "fas fa-users",
          stat: "Scaled to 200+ Clients",
          description:
            "Enabled business to scale without increasing support staff.",
        },
        /*   {
          icon: "fas fa-dollar-sign",
          stat: "Increased Client Spend",
          description:
            "Average client spend increased by 25% due to ease of use.",
        }, */
      ],
      detailPage: {
        heroImage: "horizon/overview.png",
        fallbackHeroImage:
          "https://placehold.co/1200x600/2d3748/ffffff?text=Horizon+Overview",
        overview:
          "Led the design and contributed significant engineering to a new primary platform interface for both internal teams and an international self-serve audience. The project spanned from initial concept to final deployment. My responsibilities included requirements gathering, market research, developing a corporate design language, creating mockups and prototypes, and leading design workshops. I also spearheaded the underlying technical shift to a RESTful web architecture and implemented an automated user acceptance test framework.",
        gallery: [
          {
            src: "horizon/Wireframes.png",
            fallback:
              "https://placehold.co/600x400/2d3748/ffffff?text=Wireframes",
            alt: "Horizon wireframes",
          },
          {
            src: "horizon/Ad+Sets.png",
            fallback: "https://placehold.co/600x400/2d3748/ffffff?text=Ad+Sets",
            alt: "Horizon ad sets view",
          },
        ],
        impactStatement:
          "This platform was critical in enabling the company to scale its client base efficiently.",
      },
    },
    {
      id: "investigate",
      title: "Investigate Invertebrates",
      subtitle: "Paignton Zoo Companion App",
      image: "assets/img/investigate.png",
      fallbackImage:
        "https://placehold.co/600x400/2d3748/ffffff?text=Investigate",
      overview:
        "A companion iOS app for the Paignton Zoo exhibit, designed to educate and engage visitors, particularly younger audiences, with interactive content.",
      roleAndSkills: {
        role: "Product Designer & iOS Developer",
        description: "This is a new project. More info coming soon.",
        tags: ["iOS", "Objective C", "Education", "Client Work"],
      },
      impact: [
        {
          icon: "fas fa-child",
          stat: "Increased Visitor Engagement",
          description: "TBA",
        },
        {
          icon: "fas fa-download",
          stat: "TBA",
          description: "TBA",
        },
      ],
      detailPage: {
        heroImage:
          "https://placehold.co/1200x600/2d3748/ffffff?text=Investigate",
        overview:
          "More details about the Investigate Invertebrates app are coming soon. Please check back later!",
        gallery: [],
        impactStatement:
          "Details about the outcomes and impact of this project will be available soon.",
      },
    },
    {
      id: "learning-analytics",
      title: "Learning Analytics",
      subtitle: "Data Visualization for Education",
      image:
        "https://placehold.co/600x400/2d3748/ffffff?text=Learning+Analytics",
      overview: "This is a new project. More info coming soon.",
      roleAndSkills: {
        role: "Product Lead",
        description: "This is a new project. More info coming soon.",
        tags: ["Data Visualisation", "Education", "Salesforce"],
      },
      impact: [
        {
          icon: "fas fa-chart-line",
          stat: "TBA",
          description: "TBA",
        },
        {
          icon: "fas fa-chalkboard-teacher",
          stat: "TBA",
          description: "TBA",
        },
      ],
      detailPage: {
        heroImage:
          "https://placehold.co/1200x600/2d3748/ffffff?text=Learning+Analytics",
        overview:
          "More details about the Learning Analytics project are coming soon. Please check back later!",
        gallery: [],
        impactStatement:
          "Details about the outcomes and impact of this project will be available soon.",
      },
    },
    {
      id: "local-gov",
      title: "A Local Government Health & Social Care Project",
      subtitle: "Consultancy & Process Improvement",
      image: "https://placehold.co/600x400/2d3748/ffffff?text=Local+Gov",
      overview: "This is a new project. More info coming soon.",
      roleAndSkills: {
        role: "Consultant",
        description: "This is a new project. More info coming soon.",
        tags: ["Consultancy", "Government"],
      },
      impact: [
        {
          icon: "fas fa-cogs",
          stat: "TBA",
          description: "TBA",
        },
        {
          icon: "fas fa-file-invoice-dollar",
          stat: "TBA",
          description: "TBA",
        },
      ],
      detailPage: {
        heroImage: "https://placehold.co/1200x600/2d3748/ffffff?text=Local+Gov",
        overview:
          "More details about this consultancy project are coming soon. Please check back later!",
        gallery: [],
        impactStatement:
          "Details about the outcomes and impact of this project will be available soon.",
      },
    },
  ],
  // Other, smaller projects
  otherProjects: [
    {
      id: "wave",
      title: "Wave Digital Assistant",
      subtitle: "AI Chatbot",
      image: "https://placehold.co/600x400/2d3748/ffffff?text=Wave",
      overview:
        "AI chatbot for staff digital education queries in Moodle & student careers advice in the university app.",
      tags: ["AI", "Chatbot", "Mobile"],
      roleAndSkills: {
        role: "Product Manager",
        description:
          "Managed the development and implementation of the AI chatbot.",
        tags: ["AI", "Chatbot", "Mobile"],
      },
      impact: [
        {
          icon: "fas fa-comments",
          stat: "Support",
          description: "Live chat with five real agents.",
        },
      ],
      detailPage: {
        heroImage: "https://placehold.co/1200x600/2d3748/ffffff?text=Wave",
        overview:
          "More details about the Wave Digital Assistant are coming soon. Please check back later!",
        gallery: [],
        impactStatement:
          "Details about the outcomes and impact of this project will be available soon.",
      },
    },
    {
      id: "soke",
      title: "Soke",
      subtitle: "Branding Concept",
      image: "assets/img/soke.png",
      fallbackImage: "https://placehold.co/600x400/2d3748/ffffff?text=Soke",
      overview:
        "Branding and UI concept for a creative agency focused on clarity and impact.",
      tags: ["Branding"],
      roleAndSkills: {
        role: "Brand Designer",
        description: "Developed the brand identity and visual language.",
        tags: ["Branding", "UI/UX"],
      },
      impact: [],
      detailPage: {
        heroImage: "https://placehold.co/1200x600/2d3748/ffffff?text=Soke",
        overview:
          "More details about the Soke branding concept are coming soon. Please check back later!",
        gallery: [],
        impactStatement:
          "Details about the outcomes and impact of this project will be available soon.",
      },
    },
    {
      id: "trifecta",
      title: "Trifecta Workout",
      subtitle: "iOS Fitness App",
      image: "assets/img/trifecta.png",
      fallbackImage: "https://placehold.co/600x400/2d3748/ffffff?text=Trifecta",
      overview:
        "A beautiful and simply designed personal trainer app for iPhone, focusing on core workout principles.",
      tags: ["iOS", "Objective C"],
      roleAndSkills: {
        role: "iOS Developer",
        description:
          "Designed and developed the application for the App Store.",
        tags: ["iOS", "Swift", "Health"],
      },
      impact: [],
      detailPage: {
        heroImage: "https://placehold.co/1200x600/2d3748/ffffff?text=Trifecta",
        overview:
          "More details about the Trifecta Workout app are coming soon. Please check back later!",
        gallery: [],
        impactStatement:
          "Details about the outcomes and impact of this project will be available soon.",
      },
    },
    {
      id: "stories",
      title: "Stories",
      subtitle: "Content Aggregator App",
      image: "assets/img/stories.png",
      fallbackImage: "https://placehold.co/600x400/2d3748/ffffff?text=Stories",
      overview:
        "Sit back, relax, and catch up. A curated content aggregator for your favorite topics.",
      tags: ["iOS", "Side Project"],
      roleAndSkills: {
        role: "iOS Developer",
        description:
          "Personal project to explore content aggregation technologies.",
        tags: ["iOS", "Objective C", "API"],
      },
      impact: [
        { icon: "fas fa-book-open", stat: "Content", description: "TBA." },
      ],
      detailPage: {
        heroImage: "https://placehold.co/1200x600/2d3748/ffffff?text=Stories",
        overview:
          "More details about the Stories app are coming soon. Please check back later!",
        gallery: [],
        impactStatement:
          "Details about the outcomes and impact of this project will be available soon.",
      },
    },
    {
      id: "get-gear",
      title: "Get Gear",
      subtitle: "Marketplace Concept",
      image: "assets/img/get-gear.png",
      fallbackImage: "https://placehold.co/600x400/2d3748/ffffff?text=Get+Gear",
      overview:
        "A mobile and location-based marketplace concept for easily buying and selling gear.",
      tags: ["iOS", "Objective C"],
      roleAndSkills: {
        role: "UI/UX Designer",
        description:
          "Conceptualized and designed the user interface and experience.",
        tags: ["Concept", "UI/UX", "Mobile"],
      },
      impact: [],
      detailPage: {
        heroImage: "https://placehold.co/1200x600/2d3748/ffffff?text=Get+Gear",
        overview:
          "More details about the Get Gear concept are coming soon. Please check back later!",
        gallery: [],
        impactStatement:
          "Details about the outcomes and impact of this project will be available soon.",
      },
    },
  ],
};
