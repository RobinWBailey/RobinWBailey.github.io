// portfolio-data.js

// This file contains all the data for the portfolio projects.
// It acts as a single source of truth, so you only need to edit project details in this one place.

const portfolioData = {
  projects: [
    {
      id: "pulse",
      isSelected: true,
      year: "2023",
      displayTags: ["product", "design", "salesforce"],
      title: "PULSE Student Success Platform",
      subtitle: "Student Success Platform",
      client: "Plymouth University, School of Medicine and Dentistry",
      image: "https://placehold.co/600x400/2d3748/ffffff?text=PULSE",
      overview:
        "A comprehensive student success platform for the Faculty of Medicine and Dentistry at Plymouth University, encompassing a wide range of modules to support the entire student journey.",
      roleAndSkills: {
        role: "Product Owner & Architect",
        description:
          "I led the design and development from concept to launch. My role involved stakeholder engagement, requirements gathering, UX/UI design, and managing the agile development process.",
        tags: ["Product Management", "UX/UI Design", "Salesforce", "Agile"],
      },
      featureTags: ["Education", "Health"],
      impact: [
        {
          icon: "fas fa-users",
          stat: "1,200+ Students",
          description: "Actively using the platform daily.",
        },
        {
          icon: "fas fa-cogs",
          stat: "Streamlined Operations",
          description: "Reduced administrative overhead by 30%.",
        },
      ],
      detailPage: {
        heroImage: "https://placehold.co/1200x600/2d3748/ffffff?text=PULSE",
        fallbackHeroImage: "https://placehold.co/1200x600",
        overview:
          "More details about the PULSE student success platform are coming soon. Please check back later!",
        gallery: [
          {
            src: "https://placehold.co/600x400/2d3748/ffffff?text=Pulse+1",
            fallback: "https://placehold.co/600x400",
            alt: "Pulse Screenshot 1",
          },
          {
            src: "https://placehold.co/600x400/34495e/ffffff?text=Pulse+2",
            fallback: "https://placehold.co/600x400",
            alt: "Pulse Screenshot 2",
          },
          {
            src: "https://placehold.co/600x400/2c3e50/ffffff?text=Pulse+3",
            fallback: "https://placehold.co/600x400",
            alt: "Pulse Screenshot 3",
          },
          {
            src: "https://placehold.co/600x400/95a5a6/ffffff?text=Pulse+4",
            fallback: "https://placehold.co/600x400",
            alt: "Pulse Screenshot 4",
          },
          {
            src: "https://placehold.co/600x400/7f8c8d/ffffff?text=Pulse+5",
            fallback: "https://placehold.co/600x400",
            alt: "Pulse Screenshot 5",
          },
        ],
      },
    },
    {
      id: "horizon",
      isSelected: true,
      year: "2018",
      displayTags: ["ux", "product", "development"],
      title: "iotec Horizon",
      subtitle: "AdTech Campaign Management Platform",
      client: "iotec Global",
      image: "assets/img/horizon.png",
      fallbackImage: "https://placehold.co/600x400/2d3748/ffffff?text=Horizon",
      overview:
        "A self-service campaign management and reporting tool for a cutting-edge AdTech platform, empowering clients to manage their own digital advertising campaigns.",
      roleAndSkills: {
        role: "Lead UX Designer & Product Architect",
        description:
          "I led the entire product design lifecycle, from user research and wireframing to high-fidelity prototypes and front-end development support. Core Technologies: Django, Python, REST, HTML, CSS, JavaScript, PostgreSQL.",
        tags: ["UX/UI", "Product Design", "Django", "Python"],
      },
      featureTags: ["AdTech"],
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
      },
    },
    {
      id: "bearforms",
      isSelected: true,
      year: "2025",
      displayTags: ["side project", "development", "design"],
      title: "BearForms",
      subtitle: "Offline Data Capture App",
      image: "assets/img/BearForms.png",
      fallbackImage:
        "https://placehold.co/600x400/2d3748/ffffff?text=BearForms",
      client: "Side Project",
      overview:
        "A simple, offline, no-fuss data capture form app for iPhone, iPad, and Android. Design your form. Capture your responses. Export your data. Done.",
      roleAndSkills: {
        role: "Designer, Developer, Founder",
        description:
          "I designed, developed, and launched this multi-platform app from scratch. This involved UI/UX design, native development for iOS and Android using React Native, and App Store deployment.",
        tags: ["React Native", "iOS & Android", "UI/UX Design"],
      },
      featureTags: ["Side Project"],
      impact: [
        {
          icon: "fas fa-star",
          stat: "4.8 Star Rating",
          description: "Average user rating.",
        },
      ],
      detailPage: {
        heroImage: "assets/img/BearForms.png",
        fallbackHeroImage: "https://placehold.co/1200x600",
        overview:
          "More details about BearForms are coming soon. Please check back later!",
        gallery: [
          {
            src: "https://placehold.co/600x400/e74c3c/ffffff?text=BearForms+1",
            fallback: "https://placehold.co/600x400",
            alt: "BearForms Screenshot 1",
          },
          {
            src: "https://placehold.co/600x400/c0392b/ffffff?text=BearForms+2",
            fallback: "https://placehold.co/600x400",
            alt: "BearForms Screenshot 2",
          },
        ],
      },
    },
    {
      id: "bento",
      isSelected: true,
      year: "2021",
      displayTags: ["concept", "design"],
      title: "Bento: The Do Less To-Do List",
      subtitle: "A Conceptual To-Do App",
      image: "assets/img/bento-header.png",
      fallbackImage: "https://placehold.co/600x400/2d3748/ffffff?text=Bento",
      client: "ToolFinder",
      overview:
        "A conceptual to-do list application based on the Bento methodology, designed for focus and mindful productivity.",
      roleAndSkills: {
        role: "Concept Designer",
        description: "A conceptual exploration of focused productivity.",
        tags: ["iOS", "Android", "React Native", "UI/UX Design"],
      },
      featureTags: ["Branding", "Concept"],
      impact: [],
      detailPage: {
        heroImage: "assets/img/bento-header.png",
        fallbackHeroImage: "https://placehold.co/1200x600",
        overview:
          "More details about the Bento concept are coming soon. Please check back later!",
        gallery: [
          {
            src: "https://placehold.co/600x400/1abc9c/ffffff?text=Bento+1",
            fallback: "https://placehold.co/600x400",
            alt: "Bento Screenshot 1",
          },
          {
            src: "https://placehold.co/600x400/16a085/ffffff?text=Bento+2",
            fallback: "https://placehold.co/600x400",
            alt: "Bento Screenshot 2",
          },
          {
            src: "https://placehold.co/600x400/2ecc71/ffffff?text=Bento+3",
            fallback: "https://placehold.co/600x400",
            alt: "Bento Screenshot 3",
          },
        ],
      },
    },
    {
      id: "investigate",
      isSelected: true,
      year: "2014",
      displayTags: ["freelance", "development", "design"],
      title: "Investigate Invertebrates",
      subtitle: "Paignton Zoo Companion App",
      client: "Wild Planet Trust",
      image: "assets/img/investigate.png",
      fallbackImage:
        "https://placehold.co/600x400/2d3748/ffffff?text=Investigate",
      overview:
        "A companion iOS app for the Paignton Zoo exhibit, designed to educate and engage visitors, particularly younger audiences, with interactive content.",
      roleAndSkills: {
        role: "Product Designer & iOS Developer",
        description: "Designed and developed the app for a client.",
        tags: ["iOS", "Objective C", "UI/UX Design"],
      },
      featureTags: ["Education", "Client Work"],
      impact: [
        {
          icon: "fas fa-child",
          stat: "Increased Visitor Engagement",
          description: "TBA",
        },
      ],
      detailPage: {
        heroImage:
          "https://placehold.co/1200x600/2d3748/ffffff?text=Investigate",
        fallbackHeroImage: "https://placehold.co/1200x600",
        overview:
          "More details about the Investigate Invertebrates app are coming soon. Please check back later!",
        gallery: [
          {
            src: "https://placehold.co/600x400/f1c40f/ffffff?text=Zoo+1",
            fallback: "https://placehold.co/600x400",
            alt: "Zoo Screenshot 1",
          },
          {
            src: "https://placehold.co/600x400/f39c12/ffffff?text=Zoo+2",
            fallback: "https://placehold.co/600x400",
            alt: "Zoo Screenshot 2",
          },
        ],
      },
    },
    {
      id: "learning-analytics",
      isSelected: true,
      year: "2025",
      displayTags: ["product", "data vis"],
      title: "Learning Analytics",
      subtitle: "Data Visualization for Education",
      client: "Plymouth University",
      image:
        "https://placehold.co/600x400/2d3748/ffffff?text=Learning+Analytics",
      overview:
        "A project to visualize student learning data to identify trends and support student success.",
      roleAndSkills: {
        role: "Product & Technical Lead",
        description: "Led the product strategy and data visualization design.",
        tags: ["Data Visualisation", "Salesforce", "Product Management"],
      },
      featureTags: ["Education"],
      impact: [],
      detailPage: {
        heroImage:
          "https://placehold.co/1200x600/2d3748/ffffff?text=Learning+Analytics",
        fallbackHeroImage: "https://placehold.co/1200x600",
        overview:
          "More details about the Learning Analytics project are coming soon. Please check back later!",
        gallery: [
          {
            src: "https://placehold.co/600x400/8e44ad/ffffff?text=Chart+1",
            fallback: "https://placehold.co/600x400",
            alt: "Chart Screenshot 1",
          },
          {
            src: "https://placehold.co/600x400/9b59b6/ffffff?text=Chart+2",
            fallback: "https://placehold.co/600x400",
            alt: "Chart Screenshot 2",
          },
        ],
      },
    },
    {
      id: "wave",
      isSelected: false,
      year: "2023",
      title: "Wave Digital Assistant",
      subtitle: "AI Chatbot",
      client: "Plymouth University",
      image: "https://placehold.co/600x400/2d3748/ffffff?text=Wave",
      overview:
        "AI chatbot for staff digital education queries in Moodle & student careers advice in the university app.",
      featureTags: ["AI", "Chatbot", "Mobile"],
      roleAndSkills: {
        role: "Product Manager",
        description:
          "Managed the development and implementation of the AI chatbot.",
        tags: ["Product Management", "AI"],
      },
      impact: [
        {
          icon: "fas fa-comments",
          stat: "Live Support",
          description: "Connects to five real agents.",
        },
      ],
      detailPage: {
        heroImage: "https://placehold.co/1200x600/2d3748/ffffff?text=Wave",
        fallbackHeroImage: "https://placehold.co/1200x600",
        overview:
          "More details about the Wave Digital Assistant are coming soon. Please check back later!",
        gallery: [],
      },
    },
    {
      id: "soke",
      isSelected: false,
      title: "Soke",
      subtitle: "Branding Concept",
      image: "assets/img/soke.png",
      fallbackImage: "https://placehold.co/600x400/2d3748/ffffff?text=Soke",
      overview:
        "Branding and UI concept for a creative agency focused on clarity and impact.",
      featureTags: ["Branding", "Concept"],
      roleAndSkills: {
        role: "Brand Designer",
        description: "Developed the brand identity and visual language.",
        tags: ["Branding", "UI/UX"],
      },
      impact: [],
      detailPage: {
        heroImage: "https://placehold.co/1200x600/2d3748/ffffff?text=Soke",
        fallbackHeroImage: "https://placehold.co/1200x600",
        overview:
          "More details about the Soke branding concept are coming soon. Please check back later!",
        gallery: [],
      },
    },
    {
      id: "trifecta",
      isSelected: false,
      year: "2019",
      title: "Trifecta Workout",
      subtitle: "iOS Fitness App",
      image: "assets/img/trifecta.png",
      fallbackImage: "https://placehold.co/600x400/2d3748/ffffff?text=Trifecta",
      client: "Side Project",
      overview:
        "A beautiful and simply designed personal trainer app for iPhone, focusing on core workout principles.",
      featureTags: ["Fitness", "Side Project"],
      roleAndSkills: {
        role: "iOS Developer",
        description:
          "Designed and developed the application for the App Store.",
        tags: ["iOS", "Objective C", "Health"],
      },
      impact: [],
      detailPage: {
        heroImage: "https://placehold.co/1200x600/2d3748/ffffff?text=Trifecta",
        fallbackHeroImage: "https://placehold.co/1200x600",
        overview:
          "More details about the Trifecta Workout app are coming soon. Please check back later!",
        gallery: [],
      },
    },
    {
      id: "stories",
      isSelected: false,
      title: "Stories",
      subtitle: "Content Aggregator App",
      image: "assets/img/stories.png",
      fallbackImage: "https://placehold.co/600x400/2d3748/ffffff?text=Stories",
      client: "Side Project",
      overview:
        "Sit back, relax, and catch up. A curated content aggregator for your favorite topics.",
      featureTags: ["Content Aggregation", "Side Project"],
      roleAndSkills: {
        role: "iOS Developer",
        description:
          "Personal project to explore content aggregation technologies.",
        tags: ["iOS", "Objective C", "API"],
      },
      impact: [],
      detailPage: {
        heroImage: "https://placehold.co/1200x600/2d3748/ffffff?text=Stories",
        fallbackHeroImage: "https://placehold.co/1200x600",
        overview:
          "More details about the Stories app are coming soon. Please check back later!",
        gallery: [],
      },
    },
    {
      id: "get-gear",
      isSelected: false,
      title: "Get Gear",
      subtitle: "Marketplace Concept",
      image: "assets/img/get-gear.png",
      fallbackImage: "https://placehold.co/600x400/2d3748/ffffff?text=Get+Gear",
      overview:
        "A mobile and location-based marketplace concept for easily buying and selling gear.",
      featureTags: ["Marketplace", "Concept"],
      roleAndSkills: {
        role: "UI/UX Designer",
        description:
          "Conceptualized and designed the user interface and experience.",
        tags: ["Concept", "UI/UX", "Mobile", "iOS", "Objective C"],
      },
      impact: [],
      detailPage: {
        heroImage: "https://placehold.co/1200x600/2d3748/ffffff?text=Get+Gear",
        fallbackHeroImage: "https://placehold.co/1200x600",
        overview:
          "More details about the Get Gear concept are coming soon. Please check back later!",
        gallery: [],
      },
    },
    {
      id: "capt",
      isSelected: true,
      year: "2023",
      title: "Content Adaptive Progress Testing & Topic Mapping",
      subtitle: "TBA",
      image: "assets/img/CAPT.png",
      fallbackImage: "https://placehold.co/600x400/2d3748/ffffff?text=CAPT",
      client: "Peninsula Medical School",
      overview: "TBA.",
      featureTags: [],
      roleAndSkills: {
        role: "TBA",
        description: "TBA.",
        tags: [],
      },
      impact: [],
      detailPage: {
        heroImage: "https://placehold.co/1200x600/2d3748/ffffff?text=CAPT",
        fallbackHeroImage: "https://placehold.co/1200x600",
        overview: "More details are coming soon. Please check back later!",
        gallery: [],
      },
    },
    {
      id: "capt",
      isSelected: true,
      year: "2023",
      title: "Dental On-Clinic Experience Assessment",
      subtitle: "TBA",
      image: "assets/img/CAPT.png",
      fallbackImage: "https://placehold.co/600x400/2d3748/ffffff?text=CAPT",
      client: "Peninsula Dental School & Peninsula Dental Social Enterprise",
      overview: "TBA.",
      featureTags: [],
      roleAndSkills: {
        role: "TBA",
        description: "TBA.",
        tags: [],
      },
      impact: [],
      detailPage: {
        heroImage: "https://placehold.co/1200x600/2d3748/ffffff?text=CAPT",
        fallbackHeroImage: "https://placehold.co/1200x600",
        overview: "More details are coming soon. Please check back later!",
        gallery: [],
      },
    },
  ],
};
