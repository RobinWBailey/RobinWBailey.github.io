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
        role: "Product Manager & Architect",
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
          stat: "95% Adoption Rate",
          description:
            "Across the entire student cohort within the first year.",
        },
        {
          icon: "fas fa-award",
          stat: "Internal Award for Innovation",
          description: "Recognized for transforming the student experience.",
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
          stat: "5,000+ Downloads",
          description: "On the App Store and Google Play.",
        },
        {
          icon: "fas fa-star",
          stat: "4.8 Star Rating",
          description: "Average user rating.",
        },
        {
          icon: "fas fa-file-csv",
          stat: "100,000+ Exports",
          description: "CSV exports by users for their data analysis.",
        },
      ],
      detailPage: {
        heroImage: "https://placehold.co/1200x600/2d3748/ffffff?text=BearForms",
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
        role: "Concept and UI/UX Designer",
        description:
          "This was a personal concept project to explore minimalist UI design and productivity philosophies. I was responsible for the concept, branding, and UI/UX design mockups.",
        tags: ["Concept", "UI/UX Design", "Branding"],
      },
      impact: [
        {
          icon: "fab fa-dribbble",
          stat: "Featured on Dribbble",
          description: "Received positive feedback from the design community.",
        },
        {
          icon: "fas fa-lightbulb",
          stat: "Exploration of Minimalism",
          description: "Informed my approach to future design projects.",
        },
      ],
      detailPage: {
        heroImage: "https://placehold.co/1200x600/2d3748/ffffff?text=Bento",
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
          "I was responsible for the entire product design lifecycle, from user research and wireframing to high-fidelity prototypes and front-end development support. Core Technologies: Django, Python, REST, HTML, CSS, JavaScript, PostgreSQL.",
        tags: ["AdTech", "UX/UI", "Product Design", "React"],
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
        {
          icon: "fas fa-dollar-sign",
          stat: "Increased Client Spend",
          description:
            "Average client spend increased by 25% due to ease of use.",
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
        role: "Sole iOS Developer",
        description:
          "I built the app natively using Swift and worked closely with the zoo's education team to create engaging content and features.",
        tags: ["iOS", "Swift", "Education", "Client Work"],
      },
      impact: [
        {
          icon: "fas fa-child",
          stat: "Increased Visitor Engagement",
          description:
            "Zoo reported a 40% increase in exhibit interaction time.",
        },
        {
          icon: "fas fa-download",
          stat: "10,000+ Downloads",
          description: "During the exhibit's run time.",
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
      overview:
        "A project focused on visualizing learning data to provide actionable insights for students and educators, helping to identify at-risk students and improve learning outcomes.",
      roleAndSkills: {
        role: "Lead Data Visualization Developer",
        description:
          "I led the data visualization aspect of this project, using D3.js to create interactive dashboards and reports. This involved data analysis, UX design for data-heavy interfaces, and front-end development.",
        tags: ["Data Visualization", "D3.js", "Education"],
      },
      impact: [
        {
          icon: "fas fa-chart-line",
          stat: "Improved Student Success",
          description:
            "Contributed to a 15% improvement in pass rates for pilot courses.",
        },
        {
          icon: "fas fa-chalkboard-teacher",
          stat: "Empowered Educators",
          description:
            "Provided staff with tools to proactively support students.",
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
      overview:
        "A consultancy project to improve data processes and systems for a local government's health and social care services, ensuring data accuracy and improving service delivery.",
      roleAndSkills: {
        role: "Consultant",
        description:
          "As a consultant, I analyzed existing workflows, identified bottlenecks, and designed a new data architecture. This involved process mapping, system analysis, and stakeholder workshops.",
        tags: ["Consultancy", "Government", "Process Improvement"],
      },
      impact: [
        {
          icon: "fas fa-cogs",
          stat: "Process Efficiency Gains",
          description:
            "Reduced data processing time by 50% and improved data accuracy.",
        },
        {
          icon: "fas fa-file-invoice-dollar",
          stat: "Cost Savings",
          description:
            "Identified savings of over £100k annually through improved processes.",
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
      tags: ["iOS", "Health"],
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
        tags: ["iOS", "Swift", "API"],
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
      tags: ["Concept"],
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
