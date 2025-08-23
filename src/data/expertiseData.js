// Minimal scaffold for 14 services. Replace image paths with real assets when available.
export const expertisePages = {
  'web-application': {
    slug: 'web-application',
    category: 'software',
    template: 'standard',
    meta: { 
      title: 'Web & Application Development | RADCON Technologies', 
      description: 'Custom web application development services. Enterprise solutions, modern frameworks, scalable architecture. Transform your business with RADCON.' 
    },
    hero: { 
      title: 'Web & Application Development', 
      subtitle: 'Building Modern Digital Solutions That Drive Business Growth',
      backgroundImage: '/images/web-dev-hero.jpg', // You can use your existing hero images
      overlay: true,
      breadcrumbs: [
        { label: 'Home', href: '/' }, 
        { label: 'Expertise', href: '/expertise' }, 
        { label: 'Software' },
        { label: 'Web & Application Development' }
      ] 
    },
    overview: { 
      title: 'Transform Your Business with Custom Web Applications', 
      content: `At RADCON Technologies, we specialize in developing cutting-edge web applications that streamline operations and drive digital transformation. Our team combines deep technical expertise with business acumen to deliver solutions that not only meet today's requirements but scale for tomorrow's challenges.

We leverage modern frameworks and cloud-native architectures to build applications that are fast, secure, and user-friendly. From enterprise portals to e-commerce platforms, our solutions are tailored to your specific industry needs and business objectives.

Our development process emphasizes collaboration, agility, and quality. We work closely with your team to understand your workflows, pain points, and goals, ensuring the final product delivers real value to your organization.`, 
      highlights: [
        'Scalable Cloud Architecture', 
        'Modern JavaScript Frameworks', 
        'Responsive & Mobile-First Design',
        'API-First Development',
        'DevOps & CI/CD Integration'
      ], 
      image: '/images/web-development-image.webp',
      imagePosition: 'right' 
    },
    capabilities: [
      { 
        icon: 'code', // Use icon names that you can map to actual icons
        title: 'Frontend Development', 
        description: 'Modern, responsive interfaces using React, Angular, Vue.js with pixel-perfect designs and smooth animations.' 
      },
      { 
        icon: 'server', 
        title: 'Backend Systems', 
        description: 'Robust server-side solutions with Node.js, .NET Core, Python Django for high-performance applications.' 
      },
      { 
        icon: 'database', 
        title: 'Database Architecture', 
        description: 'Optimized database design with PostgreSQL, MongoDB, Redis for efficient data management.' 
      },
      { 
        icon: 'cloud', 
        title: 'Cloud Integration', 
        description: 'AWS, Azure, and Google Cloud deployments with auto-scaling and high availability.' 
      },
      { 
        icon: 'shield', 
        title: 'Security & Compliance', 
        description: 'Enterprise-grade security with OAuth 2.0, JWT, encryption, and GDPR/HIPAA compliance.' 
      },
      { 
        icon: 'mobile', 
        title: 'Progressive Web Apps', 
        description: 'Offline-capable, installable web apps that work seamlessly across all devices.' 
      },
      { 
        icon: 'api', 
        title: 'API Development', 
        description: 'RESTful and GraphQL APIs with comprehensive documentation and versioning.' 
      },
      { 
        icon: 'chart', 
        title: 'Analytics & Reporting', 
        description: 'Real-time dashboards and business intelligence tools for data-driven decisions.' 
      },
      { 
        icon: 'integration', 
        title: 'Third-Party Integration', 
        description: 'Seamless integration with payment gateways, CRMs, ERPs, and other business systems.' 
      }
    ],
    technologies: [
      // Frontend Technologies - Use CDN logos or create simple text-based logos
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      
      // Backend Technologies
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: '.NET', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      
      // Databases
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      
      // Cloud & DevOps
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
    ],
    process: [
      { 
        number: 1, 
        title: 'Discovery & Planning', 
        description: 'We analyze your requirements, define project scope, and create a detailed roadmap with clear milestones.' 
      },
      { 
        number: 2, 
        title: 'Design & Prototyping', 
        description: 'Our UX/UI team creates intuitive designs and interactive prototypes for stakeholder validation.' 
      },
      { 
        number: 3, 
        title: 'Agile Development', 
        description: 'Using sprint-based development, we build features iteratively with continuous testing and feedback.' 
      },
      { 
        number: 4, 
        title: 'Quality Assurance', 
        description: 'Comprehensive testing including unit, integration, performance, and security testing.' 
      },
      { 
        number: 5, 
        title: 'Deployment & DevOps', 
        description: 'Seamless deployment with CI/CD pipelines, monitoring, and infrastructure automation.' 
      },
      { 
        number: 6, 
        title: 'Support & Maintenance', 
        description: 'Ongoing support, updates, and optimization to ensure peak performance and reliability.' 
      }
    ],
    benefits: [
      { 
        icon: 'check-circle', 
        title: 'Faster Time to Market', 
        description: 'Agile methodology and modern frameworks accelerate development without compromising quality.' 
      },
      { 
        icon: 'check-circle', 
        title: 'Scalable Architecture', 
        description: 'Cloud-native design ensures your application grows seamlessly with your business needs.' 
      },
      { 
        icon: 'check-circle', 
        title: 'Cost-Effective Solutions', 
        description: 'Optimized development process and reusable components reduce overall project costs.' 
      },
      { 
        icon: 'check-circle', 
        title: 'Enhanced User Experience', 
        description: 'Intuitive interfaces and responsive design improve user satisfaction and engagement.' 
      },
      { 
        icon: 'check-circle', 
        title: 'Robust Security', 
        description: 'Industry-standard security practices protect your data and maintain compliance.' 
      },
      { 
        icon: 'check-circle', 
        title: 'Continuous Innovation', 
        description: 'Stay ahead with latest technologies and regular updates to meet evolving market demands.' 
      }
    ],
    relatedServices: [
      { 
        slug: 'mobile-app-development', 
        title: 'Mobile App Development', 
        category: 'software',
        description: 'Native and cross-platform mobile applications'
      },
      { 
        slug: 'database-design', 
        title: 'Database Design & Development', 
        category: 'software',
        description: 'Optimized database architecture and management'
      }
    ],
    cta: {
      title: 'Ready to Build Your Next Web Application?',
      description: 'Let\'s discuss how our web development expertise can transform your business ideas into powerful digital solutions.',
      primaryButton: {
        text: 'Start Your Project',
        href: '/contact'
      },
      secondaryButton: {
        text: 'View Portfolio',
        href: '/portfolio'
      }
    },
    faq: {
      title: 'Web Development FAQ',
      subtitle: 'Common questions about our web application development services',
      items: [
        {
          question: 'What technologies do you use for web development?',
          answer: 'We use modern technologies including React, Angular, Vue.js for frontend, Node.js, .NET Core, Python Django for backend, and cloud platforms like AWS, Azure, and Google Cloud. Our stack is chosen based on your specific requirements and scalability needs.'
        },
        {
          question: 'How long does it take to develop a custom web application?',
          answer: 'Development time varies based on complexity, typically ranging from 8-16 weeks for medium-sized applications. We follow agile methodology with regular sprints and can deliver MVP versions faster for early feedback.'
        },
        {
          question: 'Do you provide ongoing maintenance and support?',
          answer: 'Yes, we offer comprehensive maintenance packages including bug fixes, security updates, performance optimization, and feature enhancements. We also provide 24/7 monitoring and support for critical applications.'
        },
        {
          question: 'Can you integrate with our existing systems?',
          answer: 'Absolutely. We specialize in integrating new web applications with existing ERP, CRM, and other business systems. We use APIs, webhooks, and custom connectors to ensure seamless data flow.'
        },
        {
          question: 'What about security and compliance?',
          answer: 'Security is built into every layer of our applications. We implement OAuth 2.0, JWT tokens, encryption, and follow OWASP guidelines. We also ensure compliance with GDPR, HIPAA, and other relevant standards.'
        },
        {
          question: 'Do you provide hosting and deployment services?',
          answer: 'Yes, we offer complete hosting solutions with cloud deployment, SSL certificates, CDN integration, and automated CI/CD pipelines. We can also work with your existing infrastructure.'
        }
      ]
    }
  },

  // Complete expertiseData.js entries for all services

// 1. MOBILE APP DEVELOPMENT
'mobile-app-development': {
  slug: 'mobile-app-development',
  category: 'software',
  template: 'standard',
  meta: { 
    title: 'Mobile App Development | RADCON Technologies', 
    description: 'Native and cross-platform mobile app development services. iOS, Android, React Native solutions with seamless user experiences and robust performance.' 
  },
  hero: { 
    title: 'Mobile App Development', 
    subtitle: 'Creating Powerful Mobile Experiences That Drive User Engagement',
    backgroundImage: '/images/mobile-dev-hero.png',
    overlay: true,
    breadcrumbs: [
      { label: 'Home', href: '/' }, 
      { label: 'Expertise', href: '/expertise' }, 
      { label: 'Software' },
      { label: 'Mobile App Development' }
    ] 
  },
  overview: { 
    title: 'Native and Cross-Platform Mobile Excellence', 
    content: `RADCON Technologies delivers exceptional mobile applications that combine beautiful design with powerful functionality. Our experienced mobile development team, with over a decade of expertise, creates apps that users love and businesses rely on.

We follow a comprehensive software development lifecycle from system analysis and architecture to development, deployment, and maintenance. Our expertise spans native iOS and Android development as well as cross-platform solutions using React Native and modern frameworks.

Our mobile solutions integrate seamlessly with existing enterprise systems, cloud services, and emerging technologies. We ensure your apps are not just functional but also secure, scalable, and optimized for performance across all devices.`, 
    highlights: [
      'Native iOS & Android Development', 
      'Cross-Platform Solutions', 
      'Enterprise Mobile Apps',
      'Real-time Synchronization',
      'Offline-First Architecture'
    ], 
    image: '/images/mobile-development-image.webp',
    imagePosition: 'left' 
  },
  capabilities: [
    { 
      icon: 'device-phone-mobile', 
      title: 'Native Development', 
      description: 'High-performance native apps using Swift for iOS and Kotlin/Java for Android platforms.' 
    },
    { 
      icon: 'squares-2x2', 
      title: 'Cross-Platform Apps', 
      description: 'Cost-effective solutions with React Native, Flutter, and Xamarin for unified experiences.' 
    },
    { 
      icon: 'finger-print', 
      title: 'OAuth & Security', 
      description: 'Advanced authentication with OAuth 2.0, biometric security, and data encryption.' 
    },
    { 
      icon: 'camera', 
      title: 'Image Processing', 
      description: '2D barcode reading, OCR, object detection, image enhancement, and AI-powered classifiers.' 
    },
    { 
      icon: 'cloud', 
      title: 'Cloud Integration', 
      description: 'Seamless integration with cloud services, push notifications, and real-time data sync.' 
    },
    { 
      icon: 'api', 
      title: 'API Integration', 
      description: 'SOAP, REST, GraphQL, and WebSocket integration for real-time communication.' 
    },
    { 
      icon: 'database', 
      title: 'Data Management', 
      description: 'SQLite, Realm, Firebase, MongoDB integration for efficient data handling.' 
    },
    { 
      icon: 'paint-brush', 
      title: 'Material Design', 
      description: 'Modern UI/UX following Material Design and iOS Human Interface Guidelines.' 
    },
    { 
      icon: 'arrow-path', 
      title: 'OTA Updates', 
      description: 'Over-the-air update platforms for seamless app and firmware updates.' 
    }
  ],
  technologies: [
    // Mobile Platforms
    { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
    { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Objective-C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg' },
    
    // Cross-Platform
    { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Xamarin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg' },
    
    // Backend & Cloud
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    
    // Tools
    { name: 'Xcode', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg' },
    { name: 'Android Studio', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
  ],
  process: [
    { 
      number: 1, 
      title: 'Requirements Analysis', 
      description: 'Deep dive into user needs, platform requirements, and business objectives.' 
    },
    { 
      number: 2, 
      title: 'UI/UX Design', 
      description: 'Creating intuitive interfaces with wireframes, prototypes, and user testing.' 
    },
    { 
      number: 3, 
      title: 'Development Sprint', 
      description: 'Agile development with regular builds, continuous integration, and testing.' 
    },
    { 
      number: 4, 
      title: 'Testing & QA', 
      description: 'Comprehensive testing on real devices, performance optimization, and bug fixes.' 
    },
    { 
      number: 5, 
      title: 'App Store Deployment', 
      description: 'Managing app store submissions, compliance, and release management.' 
    },
    { 
      number: 6, 
      title: 'Maintenance & Updates', 
      description: 'Ongoing support, feature updates, and performance monitoring.' 
    }
  ],
  benefits: [
    { 
      icon: 'check-circle', 
      title: 'Enhanced User Engagement', 
      description: 'Native performance and intuitive design increase user retention and satisfaction.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Cross-Platform Efficiency', 
      description: 'Single codebase solutions reduce development time and maintenance costs.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Offline Functionality', 
      description: 'Apps work seamlessly even without internet connectivity.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Push Notifications', 
      description: 'Real-time engagement through targeted push notification campaigns.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Enterprise Integration', 
      description: 'Seamless connection with existing business systems and workflows.' 
    },
    { 
      icon: 'check-circle', 
      title: 'App Store Optimization', 
      description: 'Improved visibility and downloads through ASO best practices.' 
    }
  ],
  relatedServices: [
    { 
      slug: 'web-application', 
      title: 'Web & Application Development', 
      category: 'software',
      description: 'Complementary web applications for your mobile solutions'
    },
    { 
      slug: 'database-design', 
      title: 'Database Design & Development', 
      category: 'software',
      description: 'Backend database architecture for mobile apps'
    },
    { 
      slug: 'embedded-systems', 
      title: 'Embedded Systems', 
      category: 'hardware',
      description: 'IoT and hardware integration with mobile apps'
    }
  ],
  cta: {
    title: 'Ready to Build Your Mobile App?',
    description: 'Let\'s create a mobile experience that your users will love and your business will benefit from.',
    primaryButton: { text: 'Start Your Project', href: '/contact' },
    secondaryButton: { text: 'View Portfolio', href: '/portfolio' }
  },
  faq: {
    title: 'Mobile App Development FAQ',
    subtitle: 'Common questions about our mobile application development services',
    items: [
      {
        question: 'Do you develop for both iOS and Android?',
        answer: 'Yes, we develop native apps for both platforms using Swift for iOS and Kotlin/Java for Android. We also offer cross-platform solutions using React Native and Flutter for cost-effective development.'
      },
      {
        question: 'How long does mobile app development take?',
        answer: 'Development time depends on complexity and features. Simple apps take 6-10 weeks, while complex applications with advanced features can take 12-20 weeks. We deliver MVP versions faster for testing.'
      },
      {
        question: 'Can you help with app store submission?',
        answer: 'Absolutely. We handle the entire app store submission process including metadata preparation, screenshots, compliance checks, and ongoing updates. We ensure your app meets all store guidelines.'
      },
      {
        question: 'Do you provide app maintenance and updates?',
        answer: 'Yes, we offer comprehensive maintenance packages including bug fixes, feature updates, OS compatibility updates, and performance optimization. We also provide analytics and crash reporting.'
      },
      {
        question: 'Can you integrate with backend systems?',
        answer: 'We specialize in integrating mobile apps with existing backend systems, APIs, and cloud services. We support REST, GraphQL, WebSocket, and custom protocols for real-time communication.'
      },
      {
        question: 'What about offline functionality?',
        answer: 'We implement offline-first architecture with local data storage, sync capabilities, and graceful degradation. Apps work seamlessly even without internet connectivity.'
      }
    ]
  }
},

// 2. DATABASE DESIGN
'database-design': {
  slug: 'database-design',
  category: 'software',
  template: 'standard',
  meta: { 
    title: 'Database Design & Development | RADCON Technologies', 
    description: 'Expert database design, development, and administration services. Secure, scalable, and optimized database solutions for enterprise applications.' 
  },
  hero: { 
    title: 'Database Design & Development', 
    subtitle: 'Building Robust Data Foundations for Business Intelligence',
    backgroundImage: '/images/database-hero.webp',
    overlay: true,
    breadcrumbs: [
      { label: 'Home', href: '/' }, 
      { label: 'Expertise', href: '/expertise' }, 
      { label: 'Software' },
      { label: 'Database Design & Development' }
    ] 
  },
  overview: { 
    title: 'Secure and Scalable Database Solutions', 
    content: `RADCON Technologies provides customized, well-defined, and secure database models that align perfectly with your business operations. Our database solutions enable rapid, secure information retrieval while maintaining data integrity and performance at scale.

With extensive experience in managing diverse database systems, we design architectures that handle everything from transactional processing to big data analytics. Our team ensures your data infrastructure supports current needs while scaling for future growth.

We implement best practices in database security, performance optimization, and disaster recovery to ensure your critical business data is always available, protected, and performing optimally.`, 
    highlights: [
      '24/7 Database Availability', 
      'High-Performance Architecture', 
      'Data Migration Expertise',
      'Advanced Security Implementation',
      'Real-time Monitoring'
    ], 
    image: '/images/database-design-image.webp',
    imagePosition: 'right' 
  },
  capabilities: [
    { 
      icon: 'database', 
      title: 'Database Architecture', 
      description: 'Custom database design optimized for your specific business requirements and workflows.' 
    },
    { 
      icon: 'computer-desktop', 
      title: 'Remote Monitoring', 
      description: '24/7 database monitoring with automated alerts and proactive maintenance.' 
    },
    { 
      icon: 'arrow-right-circle', 
      title: 'Data Migration', 
      description: 'Seamless migration from legacy systems with zero downtime and data integrity.' 
    },
    { 
      icon: 'magnifying-glass', 
      title: 'Data Mining', 
      description: 'Extract valuable insights from your data using advanced mining techniques.' 
    },
    { 
      icon: 'sparkles', 
      title: 'Data Cleansing', 
      description: 'Improve data quality through validation, deduplication, and standardization.' 
    },
    { 
      icon: 'shield', 
      title: 'Database Encryption', 
      description: 'Enterprise-grade encryption for data at rest and in transit.' 
    },
    { 
      icon: 'server', 
      title: 'High Availability', 
      description: 'Clustering, replication, and failover solutions for maximum uptime.' 
    },
    { 
      icon: 'bolt', 
      title: 'Performance Tuning', 
      description: 'Query optimization, indexing strategies, and resource management.' 
    },
    { 
      icon: 'cog-6-tooth', 
      title: 'Cross-Platform Support', 
      description: 'Installation and maintenance on Linux, Windows, and cloud platforms.' 
    }
  ],
  technologies: [
    // Relational Databases
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Oracle', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
    { name: 'SQL Server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    
    // NoSQL Databases
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Cassandra', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg' },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Elasticsearch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg' },
    
    // Cloud Databases
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  ],
  process: [
    { 
      number: 1, 
      title: 'Requirements Analysis', 
      description: 'Understanding data needs, volume, velocity, and business logic requirements.' 
    },
    { 
      number: 2, 
      title: 'Schema Design', 
      description: 'Creating normalized schemas with proper relationships and constraints.' 
    },
    { 
      number: 3, 
      title: 'Implementation', 
      description: 'Database creation, stored procedures, triggers, and initial data loading.' 
    },
    { 
      number: 4, 
      title: 'Optimization', 
      description: 'Index creation, query optimization, and performance benchmarking.' 
    },
    { 
      number: 5, 
      title: 'Security Setup', 
      description: 'Access controls, encryption, audit trails, and compliance configuration.' 
    },
    { 
      number: 6, 
      title: 'Monitoring & Maintenance', 
      description: 'Continuous monitoring, backup strategies, and performance tuning.' 
    }
  ],
  benefits: [
    { 
      icon: 'check-circle', 
      title: 'Improved Performance', 
      description: 'Optimized queries and indexing strategies for lightning-fast data access.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Data Integrity', 
      description: 'Robust constraints and validation ensure data accuracy and consistency.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Scalability', 
      description: 'Architectures that grow seamlessly with your business needs.' 
    },
    { 
      icon: 'check-circle', 
      title: 'High Availability', 
      description: '99.99% uptime through clustering and redundancy strategies.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Security Compliance', 
      description: 'Meet regulatory requirements with encrypted, auditable databases.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Cost Optimization', 
      description: 'Efficient resource utilization reduces infrastructure costs.' 
    }
  ],
  relatedServices: [
    { 
      slug: 'web-application', 
      title: 'Web & Application Development', 
      category: 'software',
      description: 'Applications that leverage your database infrastructure'
    },
    { 
      slug: 'mobile-app-development', 
      title: 'Mobile App Development', 
      category: 'software',
      description: 'Mobile apps with robust backend databases'
    },
    { 
      slug: 'engineering-services', 
      title: 'Engineering Services', 
      category: 'services',
      description: 'Technical consulting for database architecture'
    }
  ],
  cta: {
    title: 'Need a Robust Database Solution?',
    description: 'Let our experts design and implement a database system that powers your business growth.',
    primaryButton: { text: 'Get Started', href: '/contact' },
    secondaryButton: { text: 'Learn More', href: '/expertise' }
  },
  faq: {
    title: 'Database Design FAQ',
    subtitle: 'Common questions about our database design and development services',
    items: [
      {
        question: 'What types of databases do you work with?',
        answer: 'We work with both relational (PostgreSQL, MySQL, Oracle, SQL Server) and NoSQL databases (MongoDB, Cassandra, Redis). We choose the best solution based on your data structure, performance requirements, and scalability needs.'
      },
      {
        question: 'How do you ensure database security?',
        answer: 'We implement comprehensive security measures including encryption at rest and in transit, access controls, audit trails, and regular security assessments. We also ensure compliance with industry standards and regulations.'
      },
      {
        question: 'Can you migrate existing databases?',
        answer: 'Yes, we specialize in database migration with zero downtime strategies. We analyze your current system, plan the migration, and execute it with data integrity checks and rollback procedures.'
      },
      {
        question: 'Do you provide 24/7 database monitoring?',
        answer: 'We offer round-the-clock monitoring with automated alerts, performance tracking, and proactive maintenance. Our monitoring systems detect issues before they impact your operations.'
      },
      {
        question: 'How do you optimize database performance?',
        answer: 'We use query optimization, indexing strategies, partitioning, and caching techniques. We also perform regular performance audits and tuning to maintain optimal database performance.'
      },
      {
        question: 'What about backup and disaster recovery?',
        answer: 'We implement comprehensive backup strategies with automated backups, point-in-time recovery, and disaster recovery plans. We ensure your data is protected and recoverable in any scenario.'
      }
    ]
  }
},

// 3. POWER SYSTEMS
'power-systems': {
  slug: 'power-systems',
  category: 'hardware',
  template: 'standard',
  meta: { 
    title: 'Power Systems Solutions | RADCON Technologies', 
    description: 'Custom power supply design and development. Switch mode power supplies, high voltage systems, and industrial power solutions with proven reliability.' 
  },
  hero: { 
    title: 'Power Systems Solutions', 
    subtitle: 'Precision Power Engineering for Critical Applications',
    backgroundImage: '/images/power-systems-hero.webp',
    overlay: true,
    breadcrumbs: [
      { label: 'Home', href: '/' }, 
      { label: 'Expertise', href: '/expertise' }, 
              { label: 'Hardware' },
      { label: 'Power Systems' }
    ] 
  },
  overview: { 
    title: 'Advanced Power Supply Design and Development', 
    content: `RADCON Technologies has established excellence in designing and developing switching mode power supplies for industrial applications, avionics, locomotives, and IoT platforms. Our power systems expertise ensures reliable, efficient power delivery for the most demanding applications.

We specialize in both isolated and non-isolated topologies, high voltage systems, and custom power solutions tailored to specific requirements. Our designs incorporate advanced protection features and meet stringent EMI/EMC standards.

From concept to production, we deliver power solutions that combine efficiency, reliability, and safety. Our team's deep understanding of power electronics enables us to solve complex power challenges across diverse industries.`, 
    highlights: [
      'Switch Mode Power Supplies', 
      'High Voltage Systems up to 30kV', 
      'Custom Power Solutions',
      'EMI/EMC Compliance',
      'Multiple Protection Features'
    ], 
    image: '/images/power-systems-image.webp',
    imagePosition: 'left' 
  },
      capabilities: [
      { 
        icon: 'lightning-bolt', 
        title: 'SMPS Design', 
        description: 'Isolated and non-isolated switch mode power supplies with high efficiency.' 
      },
      { 
        icon: 'bolt', 
        title: 'High Voltage Systems', 
        description: 'High voltage rectification and power supplies up to 30kV.' 
      },
      { 
        icon: 'cube', 
        title: 'Transformer Design', 
        description: 'High-frequency flyback and multi-output transformers for various applications.' 
      },
      { 
        icon: 'arrow-path', 
        title: 'Converter Topologies', 
        description: 'Push-Pull, Boost, Buck, Buck-Boost, and Ćuk converter designs.' 
      },
      { 
        icon: 'signal', 
        title: 'Frequency Converters', 
        description: '220VAC 50Hz to 115VAC 400Hz converters with 0-6A current ratings.' 
      },
      { 
        icon: 'shield', 
        title: 'Protection Circuits', 
        description: 'Under/over voltage, reverse polarity, and short circuit protection.' 
      },
      { 
        icon: 'adjustments-horizontal', 
        title: 'EMI/EMC Solutions', 
        description: 'EMI filtering, shielding, and band-pass filter implementation.' 
      },
      { 
        icon: 'wrench-screwdriver', 
        title: 'Repair & Modification', 
        description: 'Troubleshooting and modification of analog, digital, and power circuits.' 
      },
      { 
        icon: 'chart-bar', 
        title: 'Linear Regulators', 
        description: 'Precision linear regulated power supplies for sensitive applications.' 
      }
    ],
  
  process: [
    { 
      number: 1, 
      title: 'Requirements Analysis', 
      description: 'Detailed analysis of power requirements, efficiency targets, and compliance needs.' 
    },
    { 
      number: 2, 
      title: 'Circuit Design', 
      description: 'Schematic design with topology selection and component specification.' 
    },
    { 
      number: 3, 
      title: 'Simulation', 
      description: 'Circuit simulation for efficiency, thermal, and transient analysis.' 
    },
    { 
      number: 4, 
      title: 'PCB Layout', 
      description: 'Optimized PCB design for thermal management and EMI reduction.' 
    },
    { 
      number: 5, 
      title: 'Prototype & Testing', 
      description: 'Prototype assembly with comprehensive testing and validation.' 
    },
    { 
      number: 6, 
      title: 'Production Support', 
      description: 'Documentation, certification support, and production optimization.' 
    }
  ],
  benefits: [
    { 
      icon: 'check-circle', 
      title: 'High Efficiency', 
      description: 'Modern topologies and components achieve >95% efficiency.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Reliability', 
      description: 'Robust designs with extensive protection features ensure long life.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Custom Solutions', 
      description: 'Tailored designs meet exact specifications and form factors.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Standards Compliance', 
      description: 'Designs meet industrial, medical, and aerospace standards.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Thermal Management', 
      description: 'Optimized thermal designs ensure reliable operation.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Cost Optimization', 
      description: 'Efficient designs reduce component costs and energy consumption.' 
    }
  ],
  relatedServices: [
    { 
      slug: 'printed-circuit-board', 
      title: 'Printed Circuit Board (PCB)', 
      category: 'hardware',
      description: 'PCB design and manufacturing for power systems'
    },
    { 
      slug: 'embedded-systems', 
      title: 'Embedded Systems', 
      category: 'hardware',
      description: 'Microcontroller-based power management systems'
    },
    { 
      slug: 'diagnostic-services', 
      title: 'Diagnostic Services', 
      category: 'hardware',
      description: 'Power system troubleshooting and repair'
    }
  ],
  cta: {
    title: 'Need a Custom Power Solution?',
    description: 'Our power systems experts can design the perfect solution for your application.',
    primaryButton: { text: 'Discuss Your Requirements', href: '/contact' },
    secondaryButton: { text: 'View Capabilities', href: '/expertise' }
  },
  faq: {
    title: 'Power Systems FAQ',
    subtitle: 'Common questions about our power systems design and development services',
    items: [
      {
        question: 'What types of power supplies do you design?',
        answer: 'We design switch mode power supplies (SMPS), linear regulators, high voltage systems up to 30kV, and custom power solutions for industrial, medical, and aerospace applications. We work with both isolated and non-isolated topologies.'
      },
      {
        question: 'What efficiency levels can you achieve?',
        answer: 'Our designs typically achieve >95% efficiency using modern topologies and components. We optimize for your specific requirements including standby power, load regulation, and thermal management.'
      },
      {
        question: 'Do you handle EMI/EMC compliance?',
        answer: 'Yes, we design for EMI/EMC compliance from the start. We implement proper filtering, shielding, and layout techniques to meet industrial, medical, and aerospace standards.'
      },
      {
        question: 'Can you design for harsh environments?',
        answer: 'We specialize in ruggedized designs for harsh environments including high temperature, vibration, humidity, and radiation. We use appropriate components and protective measures.'
      },
      {
        question: 'What protection features do you include?',
        answer: 'Our designs include overvoltage, undervoltage, overcurrent, reverse polarity, and short circuit protection. We also implement thermal protection and fault detection systems.'
      },
      {
        question: 'Do you provide testing and certification support?',
        answer: 'We provide comprehensive testing including efficiency, thermal, EMI, and reliability testing. We also support certification processes for safety and compliance standards.'
      }
    ]
  }
},

// 4. RF AND MICROWAVE
'rf-and-microwave': {
  slug: 'rf-and-microwave',
  category: 'hardware',
  template: 'standard',
  meta: { 
    title: 'RF & Microwave Solutions | RADCON Technologies', 
    description: 'Advanced RF and microwave design services. Amplifiers, transceivers, antennas, and custom RF solutions up to 9GHz for communication and radar systems.' 
  },
  hero: { 
    title: 'RF & Microwave Solutions', 
    subtitle: 'High-Performance RF Systems for Communication and Radar',
    backgroundImage: '/images/rf-microwave-hero.webp',
    overlay: true,
    breadcrumbs: [
      { label: 'Home', href: '/' }, 
      { label: 'Expertise', href: '/expertise' }, 
              { label: 'Hardware' },
      { label: 'RF & Microwave Solutions' }
    ] 
  },
  overview: { 
    title: 'Cutting-Edge RF and Microwave Engineering', 
    content: `RADCON Technologies is among the few companies in Pakistan that have successfully designed and tuned complex RF microwave solid-state receivers/transmitters, power amplifiers, and provided customized solutions for circuit and system-level tuning.

We provide comprehensive RF solutions for land, sea, and air applications by leveraging both off-the-shelf components and custom-designed products including RF, microwave, and antenna subsystems. Our expertise spans from VHF to X-band frequencies.

Our team combines theoretical knowledge with practical experience to deliver RF systems that meet stringent performance requirements for communication, radar, and electronic warfare applications.`, 
    highlights: [
      'Frequencies up to 9GHz', 
      'Power Amplifiers up to 2kW', 
      'Custom Antenna Design',
      'Radar System Components',
      'Communication Systems'
    ], 
    image: '/images/rf-microwave-image.webp',
    imagePosition: 'right' 
  },
      capabilities: [
      { 
        icon: 'radio', 
        title: 'Transceiver Design', 
        description: 'Superheterodyne and homodyne transceivers for ASK, FMCW, DPSK, PPM, MSK, PM.' 
      },
      { 
        icon: 'speaker-wave', 
        title: 'Power Amplifiers', 
        description: 'Pulsed and CW amplifiers using BJT, LDMOS, and GaN up to 2kW.' 
      },
      { 
        icon: 'wifi', 
        title: 'Antenna Design', 
        description: 'Custom antennas for GSM, UMTS, 3G, 4G, GPS, and WiFi applications.' 
      },
      { 
        icon: 'no-symbol', 
        title: 'Jamming Systems', 
        description: 'Signal and voice jammers for UHF, VHF, cellular, and GPS bands.' 
      },
      { 
        icon: 'arrow-path-rounded-square', 
        title: 'Phase Shifters', 
        description: 'Precision phase shifters for radar and beamforming applications.' 
      },
      { 
        icon: 'funnel', 
        title: 'RF Filters', 
        description: 'Band-pass, low-pass, and high-pass filters with sharp roll-off.' 
      },
      { 
        icon: 'adjustments-vertical', 
        title: 'Mixers & LNAs', 
        description: 'Low-noise amplifiers and mixers for receiver front-ends.' 
      },
      { 
        icon: 'signal', 
        title: 'Waveguides', 
        description: 'Waveguide components and transitions for microwave systems.' 
      },
      { 
        icon: 'cable', 
        title: 'RF Assemblies', 
        description: 'Custom RF cable assemblies and interconnect solutions.' 
      }
    ],
  
  process: [
    { 
      number: 1, 
      title: 'System Requirements', 
      description: 'Define frequency, power, bandwidth, and performance specifications.' 
    },
    { 
      number: 2, 
      title: 'Circuit Design', 
      description: 'Schematic design with component selection and impedance matching.' 
    },
    { 
      number: 3, 
      title: 'EM Simulation', 
      description: 'Electromagnetic simulation for layout optimization and parasitic analysis.' 
    },
    { 
      number: 4, 
      title: 'PCB Fabrication', 
      description: 'Specialized RF PCB fabrication with controlled impedance.' 
    },
    { 
      number: 5, 
      title: 'Tuning & Testing', 
      description: 'Network analyzer testing, tuning, and performance validation.' 
    },
    { 
      number: 6, 
      title: 'System Integration', 
      description: 'Integration, environmental testing, and final qualification.' 
    }
  ],
  benefits: [
    { 
      icon: 'check-circle', 
      title: 'Superior Performance', 
      description: 'Optimized designs achieve excellent noise figure and linearity.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Wide Frequency Range', 
      description: 'Solutions from HF through X-band frequencies.' 
    },
    { 
      icon: 'check-circle', 
      title: 'High Power Capability', 
      description: 'Power amplifiers up to kilowatt levels for demanding applications.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Custom Solutions', 
      description: 'Tailored designs for specific application requirements.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Proven Reliability', 
      description: 'Robust designs for harsh environmental conditions.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Local Expertise', 
      description: 'One of few companies in Pakistan with advanced RF capabilities.' 
    }
  ],
  relatedServices: [
    { 
      slug: 'printed-circuit-board', 
      title: 'Printed Circuit Board (PCB)', 
      category: 'hardware',
      description: 'RF PCB design with controlled impedance'
    },
    { 
      slug: 'embedded-systems', 
      title: 'Embedded Systems', 
      category: 'hardware',
      description: 'Digital control for RF systems'
    },
    { 
      slug: 'electro-mechanical-solutions', 
      title: 'Electromechanical Solutions', 
      category: 'hardware',
      description: 'Mechanical enclosures for RF systems'
    }
  ],
  cta: {
    title: 'Need an RF or Microwave Solution?',
    description: 'Let our RF experts design a high-performance solution for your application.',
    primaryButton: { text: 'Contact Our Experts', href: '/contact' },
    secondaryButton: { text: 'Learn More', href: '/expertise' }
  },
  faq: {
    title: 'RF & Microwave FAQ',
    subtitle: 'Common questions about our RF and microwave design services',
    items: [
      {
        question: 'What frequency ranges do you work with?',
        answer: 'We design RF and microwave systems from VHF through X-band frequencies (up to 9GHz). Our expertise covers communication systems, radar components, and electronic warfare applications.'
      },
      {
        question: 'What power levels can you handle?',
        answer: 'We design power amplifiers from milliwatts to kilowatts using BJT, LDMOS, and GaN technologies. Our designs include both pulsed and continuous wave (CW) applications.'
      },
      {
        question: 'Do you design custom antennas?',
        answer: 'Yes, we design custom antennas for GSM, UMTS, 3G, 4G, GPS, and WiFi applications. We optimize for specific frequency bands, gain requirements, and environmental conditions.'
      },
      {
        question: 'Can you handle complex modulation schemes?',
        answer: 'We design transceivers for various modulation schemes including ASK, FMCW, DPSK, PPM, MSK, and PM. We optimize for spectral efficiency and interference rejection.'
      },
      {
        question: 'Do you provide testing and tuning services?',
        answer: 'We provide comprehensive testing using network analyzers, spectrum analyzers, and power meters. We also offer tuning services to optimize performance and meet specifications.'
      },
      {
        question: 'What about EMI/EMC compliance?',
        answer: 'We design for EMI/EMC compliance from the start, implementing proper shielding, filtering, and layout techniques to meet military and commercial standards.'
      }
    ]
  }
},

// 5. PRINTED CIRCUIT BOARD
'printed-circuit-board': {
  slug: 'printed-circuit-board',
  category: 'hardware',
  template: 'standard',
  meta: { 
    title: 'PCB Design & Manufacturing | RADCON Technologies', 
    description: 'State-of-the-art PCB design services. Multi-layer, HDI, RF boards, rigid-flex designs with IPC standards compliance and advanced analysis capabilities.' 
  },
  hero: { 
    title: 'Printed Circuit Board (PCB)', 
    subtitle: 'Advanced PCB Design for High-Tech Systems',
    backgroundImage: '/images/pcb-hero.webp',
    overlay: true,
    breadcrumbs: [
      { label: 'Home', href: '/' }, 
      { label: 'Expertise', href: '/expertise' }, 
              { label: 'Hardware' },
      { label: 'Printed Circuit Board' }
    ] 
  },
  overview: { 
    title: 'State-of-the-Art PCB Design and Development', 
    content: `RADCON Technologies provides cutting-edge Printed Circuit Board (PCB & PCBA) services for high-tech systems. Our professionally trained team specializes in designing rigid, rigid-flex, hybrid mixed-signal, multi-layer boards, HDI boards, and RF boards across various frequency bands.

We work with advanced materials including FR4, RT/duroid, Arlon, and Rogers materials. Our capabilities include comprehensive PCB analysis such as signal integrity, impedance matching, differential routing for high-speed designs including DDR3/DDR4, PCIe, and FPGA-based boards.

Our designs incorporate thermal management, high-Tg materials for high-voltage applications, and meet EMI/EMC standards for ruggedized boards used in demanding environments.`, 
    highlights: [
      'Up to 24-Layer Designs', 
      'HDI & Rigid-Flex PCBs', 
      'RF & Microwave Boards',
      'IPC Standards Compliance',
      'Signal Integrity Analysis'
    ], 
    image: '/images/pcb-design-image.webp',
    imagePosition: 'left' 
  },
      capabilities: [
      { 
        icon: 'squares-2x2', 
        title: 'Multi-Layer Design', 
        description: 'Complex PCB designs from 1 to 24 layers with blind and buried vias.' 
      },
      { 
        icon: 'signal', 
        title: 'Signal Integrity', 
        description: 'Length matching, impedance control, and differential pair routing.' 
      },
      { 
        icon: 'bolt', 
        title: 'High-Speed Design', 
        description: 'DDR3/DDR4, PCIe, USB 3.0, and FPGA routing optimization.' 
      },
      { 
        icon: 'radio', 
        title: 'RF PCB Design', 
        description: 'Controlled impedance RF boards for 4G, WiFi, Bluetooth, radar bands.' 
      },
      { 
        icon: 'arrows-pointing-out', 
        title: 'Rigid-Flex PCBs', 
        description: 'Flexible and rigid-flex designs for space-constrained applications.' 
      },
      { 
        icon: 'fire', 
        title: 'Thermal Management', 
        description: 'Thermal vias, metal core PCBs, and heat sink integration.' 
      },
      { 
        icon: 'check-badge', 
        title: 'IPC Compliance', 
        description: 'Designs meet IPC-A-600 and IPC-A-610 standards.' 
      },
      { 
        icon: 'cog-6-tooth', 
        title: 'DFM/DFA/DFT', 
        description: 'Design for manufacturing, assembly, and testing optimization.' 
      },
      { 
        icon: 'document-text', 
        title: 'Documentation', 
        description: 'Complete Gerber generation, BOM management, and assembly drawings.' 
      }
    ],
  
  process: [
    { 
      number: 1, 
      title: 'Schematic Capture', 
      description: 'Convert circuit designs to schematic with component selection.' 
    },
    { 
      number: 2, 
      title: 'Component Placement', 
      description: 'Strategic placement for signal integrity and thermal management.' 
    },
    { 
      number: 3, 
      title: 'Routing', 
      description: 'Impedance-controlled routing with length matching and via optimization.' 
    },
    { 
      number: 4, 
      title: 'Design Verification', 
      description: 'DRC checks, signal integrity analysis, and 3D visualization.' 
    },
    { 
      number: 5, 
      title: 'Manufacturing Files', 
      description: 'Gerber generation, pick-and-place files, and documentation.' 
    },
    { 
      number: 6, 
      title: 'Prototype & Testing', 
      description: 'Prototype assembly, testing, and design iteration.' 
    }
  ],
  benefits: [
    { 
      icon: 'check-circle', 
      title: 'Advanced Capabilities', 
      description: 'HDI, blind/buried vias, and complex stack-ups for dense designs.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Signal Integrity', 
      description: 'Optimized routing ensures reliable high-speed performance.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Quick Turnaround', 
      description: 'Efficient design process reduces time to market.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Cost Optimization', 
      description: 'DFM principles reduce manufacturing costs.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Standards Compliance', 
      description: 'IPC-compliant designs ensure quality and reliability.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Complete Support', 
      description: 'From concept through production with full documentation.' 
    }
  ],
  relatedServices: [
    { 
      slug: 'embedded-systems', 
      title: 'Embedded Systems', 
      category: 'hardware',
      description: 'Microcontroller and FPGA-based PCB designs'
    },
    { 
      slug: 'rf-and-microwave', 
      title: 'RF & Microwave Solutions', 
      category: 'hardware',
      description: 'Specialized RF PCB design services'
    },
    { 
      slug: 'power-systems', 
      title: 'Power Systems', 
      category: 'hardware',
      description: 'Power supply PCB design and layout'
    }
  ],
  cta: {
    title: 'Ready to Design Your Next PCB?',
    description: 'Our PCB experts can help you create reliable, high-performance circuit boards.',
    primaryButton: { text: 'Start Your Design', href: '/contact' },
    secondaryButton: { text: 'View Capabilities', href: '/expertise' }
  },
  faq: {
    title: 'PCB Design FAQ',
    subtitle: 'Common questions about our PCB design and manufacturing services',
    items: [
      {
        question: 'What types of PCBs do you design?',
        answer: 'We design multi-layer boards up to 24 layers, HDI boards, rigid-flex PCBs, RF boards, and high-speed digital designs. We work with various materials including FR4, RT/duroid, Arlon, and Rogers.'
      },
      {
        question: 'Do you handle high-speed design requirements?',
        answer: 'Yes, we specialize in high-speed designs including DDR3/DDR4, PCIe, USB 3.0, and FPGA routing. We implement proper impedance control, length matching, and signal integrity analysis.'
      },
      {
        question: 'What about RF PCB design?',
        answer: 'We design RF PCBs with controlled impedance for 4G, WiFi, Bluetooth, and radar applications. We use specialized materials and layout techniques for optimal RF performance.'
      },
      {
        question: 'Do you provide manufacturing support?',
        answer: 'We generate complete manufacturing files including Gerber files, drill files, and assembly documentation. We also provide DFM/DFA optimization and work with trusted manufacturers.'
      },
      {
        question: 'What testing do you perform?',
        answer: 'We perform signal integrity analysis, thermal analysis, and design rule checks. We also support prototype testing and validation to ensure design meets specifications.'
      },
      {
        question: 'Do you handle thermal management?',
        answer: 'Yes, we implement thermal vias, metal core PCBs, and heat sink integration. We perform thermal analysis to ensure reliable operation under all conditions.'
      }
    ]
  }
},

// 6. EMBEDDED SYSTEMS
'embedded-systems': {
  slug: 'embedded-systems',
  category: 'hardware',
  template: 'standard',
  meta: { 
    title: 'Embedded Systems Development | RADCON Technologies', 
    description: 'Expert embedded systems design with FPGAs, DSPs, microcontrollers. Real-time firmware, Linux/Android development for industrial and critical applications.' 
  },
  hero: { 
    title: 'Embedded Systems', 
    subtitle: 'Intelligent Hardware Solutions for Next-Generation Products',
    backgroundImage: '/images/embedded-hero.webp',
    overlay: true,
    breadcrumbs: [
      { label: 'Home', href: '/' }, 
      { label: 'Expertise', href: '/expertise' }, 
              { label: 'Hardware' },
      { label: 'Embedded Systems' }
    ] 
  },
  overview: { 
    title: 'Advanced Embedded Systems Engineering', 
    content: `RADCON Technologies specializes in electronic hardware and real-time firmware design ranging from small footprint, power-optimized solutions to high-end ruggedized systems for industrial and mission-critical applications.

We leverage the latest technology including FPGAs, DSPs, microcontrollers, and SoCs to develop optimized, manufacturable solutions. Our expertise spans from consumer electronics to complex radar and communication systems.

Our embedded solutions integrate seamlessly with various interfaces and protocols, supporting everything from IoT applications to software-defined radio platforms and advanced signal processing systems.`, 
    highlights: [
      'FPGA & DSP Development', 
      'Real-Time Systems (RTOS)', 
      'Linux/Android BSP',
      'Software Defined Radio',
      'IoT & Edge Computing'
    ], 
    image: '/images/embedded-systems-image.webp',
    imagePosition: 'right' 
  },
      capabilities: [
      { 
        icon: 'cpu-chip', 
        title: 'FPGA Development', 
        description: 'RTL coding in Verilog/VHDL for image, video, and signal processing.' 
      },
      { 
        icon: 'chart-bar', 
        title: 'DSP Programming', 
        description: 'Real-time signal processing algorithms and implementations.' 
      },
      { 
        icon: 'cpu-chip', 
        title: 'Microcontroller Design', 
        description: 'ARM, AVR, PIC solutions for embedded control applications.' 
      },
      { 
        icon: 'radio', 
        title: 'Software Defined Radio', 
        description: 'SDR platforms and waveform generation using GNURadio.' 
      },
      { 
        icon: 'command-line', 
        title: 'Linux/Android BSP', 
        description: 'Kernel compilation, driver development, bootloader customization.' 
      },
      { 
        icon: 'clock', 
        title: 'RTOS Development', 
        description: 'Real-time applications with FreeRTOS, VxWorks, QNX.' 
      },
      { 
        icon: 'link', 
        title: 'Interface Protocols', 
        description: '3G/4G, GPS, USB, WiFi, Ethernet, Bluetooth, CAN, RS232/422/485.' 
      },
      { 
        icon: 'arrow-up-circle', 
        title: 'System Upgrades', 
        description: 'Modernization of obsolete systems with latest technology.' 
      },
      { 
        icon: 'globe-alt', 
        title: 'IoT Solutions', 
        description: 'Connected devices with cloud integration and edge computing.' 
      }
    ],
  technologies: [
          // Keep valid working logos
      { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'Android', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
      { name: 'C/C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
  ],
  process: [
    { 
      number: 1, 
      title: 'Requirements Analysis', 
      description: 'Define system requirements, interfaces, and performance targets.' 
    },
    { 
      number: 2, 
      title: 'Architecture Design', 
      description: 'Hardware/software partitioning and component selection.' 
    },
    { 
      number: 3, 
      title: 'Hardware Development', 
      description: 'Schematic design, PCB layout, and prototype assembly.' 
    },
    { 
      number: 4, 
      title: 'Firmware Development', 
      description: 'Embedded software, drivers, and application development.' 
    },
    { 
      number: 5, 
      title: 'Integration & Testing', 
      description: 'Hardware-software integration and comprehensive testing.' 
    },
    { 
      number: 6, 
      title: 'Production Support', 
      description: 'Documentation, certification, and manufacturing support.' 
    }
  ],
  benefits: [
    { 
      icon: 'check-circle', 
      title: 'Optimized Performance', 
      description: 'Hardware-software co-design for maximum efficiency.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Real-Time Capability', 
      description: 'Deterministic response for time-critical applications.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Power Efficiency', 
      description: 'Low-power designs for battery-operated devices.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Scalability', 
      description: 'Modular architectures that grow with requirements.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Reliability', 
      description: 'Ruggedized designs for harsh environments.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Future-Proof', 
      description: 'Upgradeable designs using latest technologies.' 
    }
  ],
  relatedServices: [
    { 
      slug: 'printed-circuit-board', 
      title: 'Printed Circuit Board (PCB)', 
      category: 'hardware',
      description: 'PCB design for embedded systems'
    },
    { 
      slug: 'rf-and-microwave', 
      title: 'RF & Microwave Solutions', 
      category: 'hardware',
      description: 'RF front-ends for communication systems'
    },
    { 
      slug: 'power-systems', 
      title: 'Power Systems', 
      category: 'hardware',
      description: 'Power management for embedded devices'
    }
  ],
  cta: {
    title: 'Need an Embedded Solution?',
    description: 'Let our experts design an intelligent embedded system for your application.',
    primaryButton: { text: 'Get Started', href: '/contact' },
    secondaryButton: { text: 'Learn More', href: '/expertise' }
  },
  faq: {
    title: 'Embedded Systems FAQ',
    subtitle: 'Common questions about our embedded systems development services',
    items: [
      {
        question: 'What platforms do you work with?',
        answer: 'We work with ARM, AVR, PIC microcontrollers, FPGAs, DSPs, and SoCs. We also develop Linux/Android BSP and real-time operating systems (RTOS) for various applications.'
      },
      {
        question: 'Do you handle real-time requirements?',
        answer: 'Yes, we develop real-time systems using FreeRTOS, VxWorks, and QNX. We ensure deterministic response times and meet strict timing requirements for critical applications.'
      },
      {
        question: 'Can you integrate multiple interfaces?',
        answer: 'We integrate various interfaces including 3G/4G, GPS, USB, WiFi, Ethernet, Bluetooth, CAN, and RS232/422/485. We ensure seamless communication between different protocols.'
      },
      {
        question: 'Do you provide software-defined radio solutions?',
        answer: 'Yes, we develop SDR platforms using GNURadio and custom waveform generation. We create flexible radio systems that can adapt to different communication standards.'
      },
      {
        question: 'What about IoT and edge computing?',
        answer: 'We develop IoT solutions with cloud integration and edge computing capabilities. Our systems can process data locally and communicate with cloud services efficiently.'
      },
      {
        question: 'Do you handle system upgrades and modernization?',
        answer: 'We specialize in modernizing obsolete systems with latest technologies. We ensure backward compatibility while improving performance and functionality.'
      }
    ]
  }
},

// 7. DIAGNOSTIC SERVICES
'diagnostic-services': {
  slug: 'diagnostic-services',
  category: 'hardware',
  template: 'standard',
  meta: { 
    title: 'Diagnostic Services | RADCON Technologies', 
    description: 'Expert diagnostic and repair services for electronic systems. PCB troubleshooting, component analysis, and system reliability improvement solutions.' 
  },
  hero: { 
    title: 'Diagnostic Services', 
    subtitle: 'Expert Troubleshooting and System Optimization',
    backgroundImage: '/images/diagnostic-hero.webp',
    overlay: true,
    breadcrumbs: [
      { label: 'Home', href: '/' }, 
      { label: 'Expertise', href: '/expertise' }, 
              { label: 'Hardware' },
      { label: 'Diagnostic Services' }
    ] 
  },
  overview: { 
    title: 'Comprehensive Electronic System Diagnostics', 
    content: `RADCON Technologies offers specialized diagnostic services for electronic systems and PCBs with reduced MTBF (Mean Time Between Failures). Our expertise spans across RF microwave, embedded systems, and power electronics.

We provide thorough analysis, troubleshooting, and design change services to identify and resolve system issues. Our solutions enhance overall system reliability and extend operational life of critical equipment.

With advanced diagnostic equipment and experienced engineers, we can quickly identify root causes of failures and implement effective solutions that prevent recurring issues.`, 
    highlights: [
      'PCB Fault Analysis', 
      'Component Testing', 
      'MTBF Improvement',
      'Design Optimization',
      'Repair Services'
    ], 
    image: '/images/diagnostic-services-image.webp',
    imagePosition: 'left' 
  },
      capabilities: [
      { 
        icon: 'magnifying-glass', 
        title: 'Fault Analysis', 
        description: 'Root cause analysis of electronic system and PCB failures.' 
      },
      { 
        icon: 'beaker', 
        title: 'Component Testing', 
        description: 'In-circuit and functional testing of electronic components.' 
      },
      { 
        icon: 'wrench-screwdriver', 
        title: 'Repair Services', 
        description: 'Component-level repair of complex electronic assemblies.' 
      },
      { 
        icon: 'sparkles', 
        title: 'Design Enhancement', 
        description: 'Modifications to improve reliability and performance.' 
      },
      { 
        icon: 'fire', 
        title: 'Thermal Analysis', 
        description: 'Thermal imaging and analysis to identify hot spots.' 
      },
      { 
        icon: 'signal', 
        title: 'Signal Analysis', 
        description: 'Oscilloscope and spectrum analyzer diagnostics.' 
      },
      { 
        icon: 'calendar-days', 
        title: 'Preventive Maintenance', 
        description: 'Scheduled testing to prevent unexpected failures.' 
      },
      { 
        icon: 'document-text', 
        title: 'Failure Reports', 
        description: 'Detailed documentation of findings and recommendations.' 
      },
      { 
        icon: 'arrow-up-circle', 
        title: 'Obsolescence Solutions', 
        description: 'Component substitution for obsolete parts.' 
      }
    ],
  
  process: [
    { 
      number: 1, 
      title: 'Initial Assessment', 
      description: 'Visual inspection and preliminary testing of the system.' 
    },
    { 
      number: 2, 
      title: 'Diagnostic Testing', 
      description: 'Comprehensive testing using specialized equipment.' 
    },
    { 
      number: 3, 
      title: 'Root Cause Analysis', 
      description: 'Identify the underlying cause of system failures.' 
    },
    { 
      number: 4, 
      title: 'Solution Development', 
      description: 'Design repairs or modifications to address issues.' 
    },
    { 
      number: 5, 
      title: 'Implementation', 
      description: 'Execute repairs or design changes with verification.' 
    },
    { 
      number: 6, 
      title: 'Validation', 
      description: 'Testing to ensure problems are resolved.' 
    }
  ],
  benefits: [
    { 
      icon: 'check-circle', 
      title: 'Reduced Downtime', 
      description: 'Quick diagnosis and repair minimize operational disruptions.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Cost Savings', 
      description: 'Repair instead of replacement saves significant costs.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Extended Life', 
      description: 'Improvements increase system operational lifetime.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Improved Reliability', 
      description: 'Design enhancements prevent recurring failures.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Expert Analysis', 
      description: 'Experienced engineers identify issues others miss.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Documentation', 
      description: 'Detailed reports for maintenance planning.' 
    }
  ],
  relatedServices: [
    { 
      slug: 'hardware-lifecycle-support', 
      title: 'Hardware Lifecycle Support', 
      category: 'services',
      description: 'Long-term maintenance and support services'
    },
    { 
      slug: 'embedded-systems', 
      title: 'Embedded Systems', 
      category: 'hardware',
      description: 'Embedded system troubleshooting'
    },
    { 
      slug: 'power-systems', 
      title: 'Power Systems', 
      category: 'hardware',
      description: 'Power supply diagnostics and repair'
    }
  ],
  cta: {
    title: 'Need System Diagnostics?',
    description: 'Our diagnostic experts can help identify and resolve your electronic system issues.',
    primaryButton: { text: 'Request Diagnosis', href: '/contact' },
    secondaryButton: { text: 'Learn More', href: '/expertise' }
  },
  faq: {
    title: 'Diagnostic Services FAQ',
    subtitle: 'Common questions about our diagnostic and repair services',
    items: [
      {
        question: 'What types of systems do you diagnose?',
        answer: 'We diagnose electronic systems, PCBs, RF microwave systems, embedded systems, and power electronics. We work with both commercial and military equipment.'
      },
      {
        question: 'How do you identify system failures?',
        answer: 'We use advanced diagnostic equipment including oscilloscopes, spectrum analyzers, thermal imagers, and specialized test equipment. We follow systematic troubleshooting procedures.'
      },
      {
        question: 'Do you provide component-level repair?',
        answer: 'Yes, we perform component-level repair of complex electronic assemblies. We can replace faulty components and modify circuits to improve reliability.'
      },
      {
        question: 'Can you improve system reliability?',
        answer: 'We analyze failure patterns and implement design improvements to enhance reliability. We focus on reducing MTBF and preventing recurring issues.'
      },
      {
        question: 'Do you handle obsolete component replacement?',
        answer: 'Yes, we provide obsolescence solutions by finding suitable replacements or designing alternative circuits. We ensure compatibility and performance.'
      },
      {
        question: 'What documentation do you provide?',
        answer: 'We provide detailed failure analysis reports, repair documentation, and recommendations for preventive maintenance. We also update technical documentation.'
      }
    ]
  }
},

// 8. ELECTROMECHANICAL SOLUTIONS
'electro-mechanical-solutions': {
  slug: 'electro-mechanical-solutions',
  category: 'hardware',
  template: 'standard',
  meta: { 
    title: 'Electromechanical Solutions | RADCON Technologies', 
    description: 'Complete electromechanical design and manufacturing. CNC machining, sheet metal, 3D printing, and custom enclosures with precision engineering.' 
  },
  hero: { 
    title: 'Electromechanical Solutions', 
    subtitle: 'Precision Mechanical Engineering for Electronic Systems',
    backgroundImage: '/images/electromechanical-hero.webp',
    overlay: true,
    breadcrumbs: [
      { label: 'Home', href: '/' }, 
      { label: 'Expertise', href: '/expertise' }, 
              { label: 'Hardware' },
      { label: 'Electromechanical Solutions' }
    ] 
  },
  overview: { 
    title: 'Complete Electromechanical Design and Manufacturing', 
    content: `RADCON Technologies maintains an independent electromechanical setup with mechanical and mechatronics engineers. From concept to finished product, our design engineers create solutions that seamlessly integrate electronics with precision mechanical components.

Our designs undergo rigorous simulation processes to ensure effective mechanical chassis before manufacturing. We utilize CNC machining, sheet metal fabrication, and advanced 3D printing technologies to create custom enclosures and mechanical assemblies.

Quality is maintained throughout the engineering process with detailed design, precision manufacturing, proper finishing, and thorough inspection to ensure everything meets customer specifications.`, 
    highlights: [
      'CNC Precision Machining', 
      '3D Printing Technologies', 
      'Thermal Management',
      'IP56 Protection',
      'MIL-SPEC Finishes'
    ], 
    image: '/images/electromechanical-image.webp',
    imagePosition: 'right' 
  },
      capabilities: [
      { 
        icon: 'cog-6-tooth', 
        title: 'CNC Machining', 
        description: 'Precision milling and turning with 0.1mm tolerances.' 
      },
      { 
        icon: 'squares-2x2', 
        title: 'Sheet Metal Fabrication', 
        description: 'Custom enclosures, brackets, and chassis design.' 
      },
      { 
        icon: 'cube', 
        title: '3D Printing', 
        description: 'FDM, SLA, and SLS rapid prototyping technologies.' 
      },
      { 
        icon: 'fire', 
        title: 'Thermal Analysis', 
        description: 'Heat transfer analysis and cooling solution design.' 
      },
      { 
        icon: 'beaker', 
        title: 'Injection Molding', 
        description: 'Plastic part design and mold development.' 
      },
      { 
        icon: 'bolt', 
        title: 'Weldment Design', 
        description: 'Structural frames and assemblies with certified welding.' 
      },
      { 
        icon: 'sparkles', 
        title: 'Surface Treatments', 
        description: 'Chromating, plating, anodizing to MIL specifications.' 
      },
      { 
        icon: 'shield', 
        title: 'Environmental Protection', 
        description: 'IP-rated enclosures for harsh environments.' 
      },
      { 
        icon: 'puzzle-piece', 
        title: 'System Integration', 
        description: 'Complete electromechanical assembly and testing.' 
      }
    ],
  
  process: [
    { 
      number: 1, 
      title: 'Concept Design', 
      description: '3D modeling and concept visualization with customer input.' 
    },
    { 
      number: 2, 
      title: 'Simulation', 
      description: 'FEA analysis for stress, thermal, and vibration.' 
    },
    { 
      number: 3, 
      title: 'Prototyping', 
      description: 'Rapid prototyping using 3D printing or machining.' 
    },
    { 
      number: 4, 
      title: 'Manufacturing', 
      description: 'CNC machining, fabrication, and assembly.' 
    },
    { 
      number: 5, 
      title: 'Finishing', 
      description: 'Surface treatments, painting, and coating application.' 
    },
    { 
      number: 6, 
      title: 'Quality Control', 
      description: 'Dimensional inspection and functional testing.' 
    }
  ],
  benefits: [
    { 
      icon: 'check-circle', 
      title: 'Integrated Design', 
      description: 'Seamless integration of electronics and mechanics.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Precision Manufacturing', 
      description: 'Tight tolerances ensure perfect fit and function.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Rapid Prototyping', 
      description: 'Quick iterations accelerate development cycles.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Durability', 
      description: 'Ruggedized designs for demanding applications.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Custom Solutions', 
      description: 'Tailored designs for unique requirements.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Complete Service', 
      description: 'From design through production under one roof.' 
    }
  ],
  relatedServices: [
    { 
      slug: 'embedded-systems', 
      title: 'Embedded Systems', 
      category: 'hardware',
      description: 'Electronics for electromechanical systems'
    },
    { 
      slug: 'printed-circuit-board', 
      title: 'Printed Circuit Board (PCB)', 
      category: 'hardware',
      description: 'PCB mounting and integration'
    },
    { 
      slug: 'engineering-services', 
      title: 'Engineering Services', 
      category: 'services',
      description: 'Mechanical engineering consultation'
    }
  ],
  cta: {
    title: 'Need Custom Mechanical Solutions?',
    description: 'Our electromechanical team can design and manufacture the perfect solution.',
    primaryButton: { text: 'Discuss Your Project', href: '/contact' },
    secondaryButton: { text: 'View Capabilities', href: '/expertise' }
  },
  faq: {
    title: 'Electromechanical Solutions FAQ',
    subtitle: 'Common questions about our electromechanical design and manufacturing services',
    items: [
      {
        question: 'What manufacturing processes do you use?',
        answer: 'We use CNC machining, sheet metal fabrication, 3D printing (FDM, SLA, SLS), injection molding, and welding. We choose the best process based on your requirements and volume.'
      },
      {
        question: 'What tolerances can you achieve?',
        answer: 'We achieve tight tolerances of ±0.1mm for precision machining. We use advanced CNC equipment and quality control processes to ensure accuracy.'
      },
      {
        question: 'Do you handle thermal management design?',
        answer: 'Yes, we perform thermal analysis and design cooling solutions including heat sinks, thermal interfaces, and ventilation systems. We ensure optimal thermal performance.'
      },
      {
        question: 'What materials do you work with?',
        answer: 'We work with metals (aluminum, steel, titanium), plastics, composites, and specialized materials. We select materials based on strength, weight, and environmental requirements.'
      },
      {
        question: 'Do you provide surface treatments?',
        answer: 'Yes, we provide surface treatments including chromating, plating, anodizing, and painting to MIL specifications. We ensure durability and corrosion resistance.'
      },
      {
        question: 'Can you design for harsh environments?',
        answer: 'We design IP-rated enclosures and ruggedized solutions for harsh environments. We consider temperature, humidity, vibration, and other environmental factors.'
      }
    ]
  }
},

// 9. CUSTOMER RELATIONSHIP MANAGEMENT
'customer-relationship-management': {
  slug: 'customer-relationship-management',
  category: 'services',
  template: 'standard',
  meta: { 
    title: 'Customer Relationship Management | RADCON Technologies', 
    description: 'Comprehensive CRM solutions and lifecycle support. Customer engagement, service optimization, and relationship management for sustained business growth.' 
  },
  hero: { 
    title: 'Customer Relationship Management', 
    subtitle: 'Building Lasting Partnerships Through Excellence',
    backgroundImage: '/images/crm-hero.webp',
    overlay: true,
    breadcrumbs: [
      { label: 'Home', href: '/' }, 
      { label: 'Expertise', href: '/expertise' }, 
              { label: 'Lifecycle Support' },
      { label: 'Customer Relationship Management' }
    ] 
  },
  overview: { 
    title: 'Strategic Customer Engagement and Support', 
    content: `RADCON Technologies understands that successful projects extend beyond technical delivery. Our CRM approach ensures continuous engagement, support, and value creation throughout the entire customer lifecycle.

We provide comprehensive support from initial consultation through long-term maintenance, ensuring customer satisfaction and project success. Our dedicated team manages relationships proactively, anticipating needs and delivering solutions.

Our CRM services integrate technical support, project management, and strategic consultation to ensure our clients receive maximum value from their technology investments.`, 
    highlights: [
      'Dedicated Account Management', 
      '24/7 Technical Support', 
      'Proactive Communication',
      'Service Level Agreements',
      'Customer Success Programs'
    ], 
    image: '/images/crm-image.webp',
    imagePosition: 'left' 
  },
      capabilities: [
      { 
        icon: 'phone', 
        title: 'Technical Support', 
        description: 'Round-the-clock technical assistance and troubleshooting.' 
      },
      { 
        icon: 'user', 
        title: 'Account Management', 
        description: 'Dedicated managers for personalized service delivery.' 
      },
      { 
        icon: 'academic-cap', 
        title: 'Training Programs', 
        description: 'Comprehensive training for effective system utilization.' 
      },
      { 
        icon: 'document-text', 
        title: 'Documentation', 
        description: 'Complete technical documentation and knowledge transfer.' 
      },
      { 
        icon: 'chat-bubble-left-right', 
        title: 'Feedback Management', 
        description: 'Continuous improvement through customer feedback.' 
      },
      { 
        icon: 'document-check', 
        title: 'SLA Management', 
        description: 'Defined service levels with guaranteed response times.' 
      },
      { 
        icon: 'chart-bar', 
        title: 'Performance Reporting', 
        description: 'Regular reports on service metrics and KPIs.' 
      },
      { 
        icon: 'arrow-trending-up', 
        title: 'Issue Escalation', 
        description: 'Structured escalation for critical issues.' 
      },
      { 
        icon: 'light-bulb', 
        title: 'Strategic Consultation', 
        description: 'Advisory services for technology roadmap planning.' 
      }
    ],
  
  process: [
    { 
      number: 1, 
      title: 'Onboarding', 
      description: 'Structured onboarding process for new customers.' 
    },
    { 
      number: 2, 
      title: 'Needs Assessment', 
      description: 'Regular evaluation of customer requirements and goals.' 
    },
    { 
      number: 3, 
      title: 'Service Delivery', 
      description: 'Consistent, high-quality service execution.' 
    },
    { 
      number: 4, 
      title: 'Performance Monitoring', 
      description: 'Continuous monitoring of service quality metrics.' 
    },
    { 
      number: 5, 
      title: 'Relationship Building', 
      description: 'Regular engagement to strengthen partnerships.' 
    },
    { 
      number: 6, 
      title: 'Value Creation', 
      description: 'Identifying opportunities for additional value.' 
    }
  ],
  benefits: [
    { 
      icon: 'check-circle', 
      title: 'Improved Satisfaction', 
      description: 'Proactive support increases customer satisfaction scores.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Reduced Downtime', 
      description: 'Quick issue resolution minimizes operational impact.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Better Communication', 
      description: 'Clear, consistent communication channels.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Knowledge Transfer', 
      description: 'Effective training ensures successful adoption.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Long-term Partnership', 
      description: 'Building relationships that grow over time.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Continuous Improvement', 
      description: 'Regular feedback drives service enhancement.' 
    }
  ],
  relatedServices: [
    { 
      slug: 'hardware-lifecycle-support', 
      title: 'Hardware Lifecycle Support', 
      category: 'services',
      description: 'Long-term hardware maintenance and support'
    },
    { 
      slug: 'engineering-services', 
      title: 'Engineering Services', 
      category: 'services',
      description: 'Technical consultation and engineering support'
    },
    { 
      slug: 'hr-services', 
      title: 'HR Services', 
      category: 'services',
      description: 'Resource management and staffing solutions'
    }
  ],
  cta: {
    title: 'Experience Our Customer-First Approach',
    description: 'Let us show you how dedicated support can transform your technology experience.',
    primaryButton: { text: 'Contact Us', href: '/contact' },
    secondaryButton: { text: 'Learn More', href: '/expertise' }
  },
  faq: {
    title: 'Customer Relationship Management FAQ',
    subtitle: 'Common questions about our CRM and customer support services',
    items: [
      {
        question: 'What CRM services do you provide?',
        answer: 'We provide dedicated account management, 24/7 technical support, training programs, documentation, feedback management, and strategic consultation throughout the customer lifecycle.'
      },
      {
        question: 'How do you ensure customer satisfaction?',
        answer: 'We maintain proactive communication, provide defined service level agreements (SLAs), offer comprehensive training, and continuously improve based on customer feedback.'
      },
      {
        question: 'What training programs do you offer?',
        answer: 'We provide comprehensive training on system operation, maintenance, troubleshooting, and best practices. Training is customized to your team\'s needs and experience level.'
      },
      {
        question: 'How do you handle technical support?',
        answer: 'We offer 24/7 technical support with defined response times. We have structured escalation procedures for critical issues and provide remote and on-site support.'
      },
      {
        question: 'Do you provide performance reporting?',
        answer: 'Yes, we provide regular reports on service metrics, KPIs, and system performance. We track uptime, response times, and customer satisfaction scores.'
      },
      {
        question: 'How do you manage long-term relationships?',
        answer: 'We assign dedicated account managers who understand your business needs. We conduct regular reviews, provide strategic consultation, and identify opportunities for value creation.'
      }
    ]
  }
},

// 10. HARDWARE LIFECYCLE SUPPORT
'hardware-lifecycle-support': {
  slug: 'hardware-lifecycle-support',
  category: 'services',
  template: 'standard',
  meta: { 
    title: 'Hardware Lifecycle Support | RADCON Technologies', 
    description: 'Complete hardware lifecycle management services. Maintenance, upgrades, obsolescence management, and long-term support for critical systems.' 
  },
  hero: { 
    title: 'Hardware Lifecycle Support', 
    subtitle: 'Maximizing Hardware Value Throughout Its Lifetime',
    backgroundImage: '/images/lifecycle-hero.webp',
    overlay: true,
    breadcrumbs: [
      { label: 'Home', href: '/' }, 
      { label: 'Expertise', href: '/expertise' }, 
              { label: 'Lifecycle Support' },
      { label: 'Hardware Lifecycle Support' }
    ] 
  },
  overview: { 
    title: 'Comprehensive Hardware Lifecycle Management', 
    content: `RADCON Technologies provides end-to-end hardware lifecycle support services that extend the operational life of your critical systems. From initial deployment through eventual replacement, we ensure your hardware investments deliver maximum value.

Our lifecycle support encompasses preventive maintenance, component upgrades, obsolescence management, and technology refresh planning. We help organizations maintain system availability while optimizing total cost of ownership.

With deep technical expertise and strategic partnerships, we keep your hardware systems running efficiently, even as technology evolves and components become obsolete.`, 
    highlights: [
      'Preventive Maintenance', 
      'Obsolescence Management', 
      'Component Upgrades',
      'Spare Parts Management',
      'Technology Refresh'
    ], 
    image: '/images/lifecycle-support-image.webp',
    imagePosition: 'right' 
  },
      capabilities: [
      { 
        icon: 'calendar-days', 
        title: 'Preventive Maintenance', 
        description: 'Scheduled maintenance to prevent unexpected failures.' 
      },
      { 
        icon: 'wrench-screwdriver', 
        title: 'Corrective Maintenance', 
        description: 'Rapid repair services to minimize downtime.' 
      },
      { 
        icon: 'clock', 
        title: 'Obsolescence Management', 
        description: 'Proactive planning for component end-of-life.' 
      },
      { 
        icon: 'arrow-up-circle', 
        title: 'System Upgrades', 
        description: 'Hardware upgrades to extend system capabilities.' 
      },
      { 
        icon: 'cube', 
        title: 'Spare Parts', 
        description: 'Strategic spare parts inventory management.' 
      },
      { 
        icon: 'arrow-path', 
        title: 'Technology Refresh', 
        description: 'Planning and execution of system replacements.' 
      },
      { 
        icon: 'shield-check', 
        title: 'Warranty Management', 
        description: 'Extended warranty and service contracts.' 
      },
      { 
        icon: 'document-text', 
        title: 'Technical Documentation', 
        description: 'Maintenance manuals and service records.' 
      },
      { 
        icon: 'academic-cap', 
        title: 'Technical Training', 
        description: 'Training for in-house maintenance teams.' 
      }
    ],
  
  process: [
    { 
      number: 1, 
      title: 'Asset Assessment', 
      description: 'Comprehensive evaluation of hardware assets and condition.' 
    },
    { 
      number: 2, 
      title: 'Support Planning', 
      description: 'Develop customized lifecycle support strategies.' 
    },
    { 
      number: 3, 
      title: 'Implementation', 
      description: 'Execute maintenance schedules and support programs.' 
    },
    { 
      number: 4, 
      title: 'Monitoring', 
      description: 'Continuous monitoring of system health and performance.' 
    },
    { 
      number: 5, 
      title: 'Optimization', 
      description: 'Regular review and optimization of support strategies.' 
    },
    { 
      number: 6, 
      title: 'Transition Planning', 
      description: 'Planning for eventual system replacement or upgrade.' 
    }
  ],
  benefits: [
    { 
      icon: 'check-circle', 
      title: 'Extended Asset Life', 
      description: 'Maximize operational lifetime of hardware investments.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Reduced TCO', 
      description: 'Lower total cost of ownership through optimized support.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Improved Availability', 
      description: 'Higher system uptime through preventive maintenance.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Risk Mitigation', 
      description: 'Proactive management reduces failure risks.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Budget Predictability', 
      description: 'Fixed support costs enable better budget planning.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Compliance', 
      description: 'Maintain regulatory compliance through proper documentation.' 
    }
  ],
  relatedServices: [
    { 
      slug: 'diagnostic-services', 
      title: 'Diagnostic Services', 
      category: 'hardware',
      description: 'System diagnostics and troubleshooting'
    },
    { 
      slug: 'customer-relationship-management', 
      title: 'Customer Relationship Management', 
      category: 'services',
      description: 'Comprehensive customer support services'
    },
    { 
      slug: 'engineering-services', 
      title: 'Engineering Services', 
      category: 'services',
      description: 'Technical consultation for lifecycle planning'
    }
  ],
  cta: {
    title: 'Protect Your Hardware Investment',
    description: 'Our lifecycle support services ensure your systems deliver value for years to come.',
    primaryButton: { text: 'Get Support Plan', href: '/contact' },
    secondaryButton: { text: 'Learn More', href: '/expertise' }
  },
  faq: {
    title: 'Hardware Lifecycle Support FAQ',
    subtitle: 'Common questions about our hardware lifecycle management services',
    items: [
      {
        question: 'What lifecycle support services do you provide?',
        answer: 'We provide preventive maintenance, corrective maintenance, obsolescence management, system upgrades, spare parts management, and technology refresh planning.'
      },
      {
        question: 'How do you extend hardware life?',
        answer: 'We implement preventive maintenance schedules, perform regular inspections, optimize operating conditions, and provide component upgrades to extend system life.'
      },
      {
        question: 'How do you handle obsolete components?',
        answer: 'We proactively identify obsolescence risks, find suitable replacements, design alternative solutions, and plan technology refresh strategies to minimize disruption.'
      },
      {
        question: 'What maintenance schedules do you offer?',
        answer: 'We offer flexible maintenance schedules including monthly, quarterly, and annual plans. We customize schedules based on your operational requirements and budget.'
      },
      {
        question: 'Do you provide spare parts management?',
        answer: 'Yes, we manage strategic spare parts inventory, source components, and maintain critical spares to minimize downtime and ensure rapid repair capabilities.'
      },
      {
        question: 'How do you plan technology refresh?',
        answer: 'We assess current systems, identify upgrade opportunities, plan migration strategies, and coordinate replacements to minimize operational impact.'
      }
    ]
  }
},

// 11. HR SERVICES
'hr-services': {
  slug: 'hr-services',
  category: 'services',
  template: 'standard',
  meta: { 
    title: 'HR Services | RADCON Technologies', 
    description: 'Strategic HR and talent management services. Technical recruitment, team building, and workforce optimization for technology companies.' 
  },
  hero: { 
    title: 'HR Services', 
    subtitle: 'Building High-Performance Technology Teams',
    backgroundImage: '/images/hr-services-hero.webp',
    overlay: true,
    breadcrumbs: [
      { label: 'Home', href: '/' }, 
      { label: 'Expertise', href: '/expertise' }, 
              { label: 'HR & Engineering Services' },
      { label: 'HR Services' }
    ] 
  },
  overview: { 
    title: 'Strategic Human Resource Solutions', 
    content: `RADCON Technologies provides specialized HR services tailored for technology organizations. We understand the unique challenges of recruiting, developing, and retaining technical talent in today's competitive market.

Our HR services combine industry expertise with modern talent management practices to help organizations build and maintain high-performing technical teams. From recruitment to development, we support the entire employee lifecycle.

We focus on creating work environments that attract top talent, foster innovation, and drive organizational success through effective people management strategies.`, 
    highlights: [
      'Technical Recruitment', 
      'Talent Development', 
      'Performance Management',
      'Team Building',
      'HR Consulting'
    ], 
    image: '/images/hr-services-image.webp',
    imagePosition: 'left' 
  },
      capabilities: [
      { 
        icon: 'users', 
        title: 'Technical Recruitment', 
        description: 'Specialized recruitment for engineering and technical roles.' 
      },
      { 
        icon: 'star', 
        title: 'Talent Management', 
        description: 'Comprehensive talent development and retention strategies.' 
      },
      { 
        icon: 'academic-cap', 
        title: 'Training & Development', 
        description: 'Technical and soft skills training programs.' 
      },
      { 
        icon: 'chart-bar', 
        title: 'Performance Management', 
        description: 'Goal setting, reviews, and performance improvement.' 
      },
      { 
        icon: 'user-group', 
        title: 'Team Building', 
        description: 'Programs to enhance collaboration and productivity.' 
      },
      { 
        icon: 'document-check', 
        title: 'HR Compliance', 
        description: 'Ensuring adherence to labor laws and regulations.' 
      },
      { 
        icon: 'banknotes', 
        title: 'Compensation Planning', 
        description: 'Competitive salary structures and benefits design.' 
      },
      { 
        icon: 'heart', 
        title: 'Culture Development', 
        description: 'Building innovation-driven organizational culture.' 
      },
      { 
        icon: 'light-bulb', 
        title: 'HR Consulting', 
        description: 'Strategic HR advisory and organizational design.' 
      }
    ],
  
  process: [
    { 
      number: 1, 
      title: 'Needs Analysis', 
      description: 'Assess organizational HR requirements and gaps.' 
    },
    { 
      number: 2, 
      title: 'Strategy Development', 
      description: 'Create customized HR strategies aligned with business goals.' 
    },
    { 
      number: 3, 
      title: 'Implementation', 
      description: 'Execute HR programs and initiatives.' 
    },
    { 
      number: 4, 
      title: 'Monitoring', 
      description: 'Track HR metrics and program effectiveness.' 
    },
    { 
      number: 5, 
      title: 'Optimization', 
      description: 'Continuous improvement of HR processes.' 
    },
    { 
      number: 6, 
      title: 'Support', 
      description: 'Ongoing HR support and consultation.' 
    }
  ],
  benefits: [
    { 
      icon: 'check-circle', 
      title: 'Top Talent', 
      description: 'Access to qualified technical professionals.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Reduced Turnover', 
      description: 'Improved retention through engagement strategies.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Productivity', 
      description: 'Enhanced team performance and output.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Cost Efficiency', 
      description: 'Optimized HR costs through effective management.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Compliance', 
      description: 'Reduced risk through proper HR practices.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Innovation', 
      description: 'Foster culture that drives innovation.' 
    }
  ],
  relatedServices: [
    { 
      slug: 'engineering-services', 
      title: 'Engineering Services', 
      category: 'services',
      description: 'Technical consulting and engineering support'
    },
    { 
      slug: 'customer-relationship-management', 
      title: 'Customer Relationship Management', 
      category: 'services',
      description: 'Customer support and relationship management'
    }
  ],
  cta: {
    title: 'Build Your Dream Team',
    description: 'Let us help you attract, develop, and retain the technical talent you need.',
    primaryButton: { text: 'Get HR Support', href: '/contact' },
    secondaryButton: { text: 'Learn More', href: '/expertise' }
  },
  faq: {
    title: 'HR Services FAQ',
    subtitle: 'Common questions about our HR and talent management services',
    items: [
      {
        question: 'What HR services do you provide?',
        answer: 'We provide technical recruitment, talent management, training and development, performance management, team building, HR compliance, compensation planning, and culture development.'
      },
      {
        question: 'How do you find technical talent?',
        answer: 'We use specialized recruitment strategies, industry networks, technical assessments, and targeted sourcing to find qualified engineering and technical professionals.'
      },
      {
        question: 'What training programs do you offer?',
        answer: 'We provide technical skills training, soft skills development, leadership training, and customized programs to enhance team capabilities and performance.'
      },
      {
        question: 'How do you help with retention?',
        answer: 'We develop engagement strategies, career development plans, competitive compensation structures, and positive work cultures to improve employee retention.'
      },
      {
        question: 'Do you handle HR compliance?',
        answer: 'Yes, we ensure compliance with labor laws, regulations, and industry standards. We help maintain proper documentation and implement best practices.'
      },
      {
        question: 'How do you build high-performance teams?',
        answer: 'We assess team dynamics, identify improvement opportunities, implement team building programs, and develop collaboration strategies to enhance productivity.'
      }
    ]
  }
},

// 12. ENGINEERING SERVICES
'engineering-services': {
  slug: 'engineering-services',
  category: 'services',
  template: 'standard',
  meta: { 
    title: 'Engineering Services | RADCON Technologies', 
    description: 'Professional engineering consultation and technical services. System design, project management, and engineering solutions for complex challenges.' 
  },
  hero: { 
    title: 'Engineering Services', 
    subtitle: 'Expert Technical Consultation and Engineering Excellence',
    backgroundImage: '/images/engineering-hero.webp',
    overlay: true,
    breadcrumbs: [
      { label: 'Home', href: '/' }, 
      { label: 'Expertise', href: '/expertise' }, 
              { label: 'HR & Engineering Services' },
      { label: 'Engineering Services' }
    ] 
  },
  overview: { 
    title: 'Comprehensive Engineering Solutions', 
    content: `RADCON Technologies offers professional engineering services that span the entire project lifecycle. Our multidisciplinary team provides technical expertise, project management, and innovative solutions for complex engineering challenges.

From feasibility studies to detailed design and implementation support, we deliver engineering excellence across hardware, software, and systems integration. Our services help organizations overcome technical challenges and achieve their project objectives.

We combine deep technical knowledge with practical experience to deliver solutions that are not only technically sound but also commercially viable and sustainable.`, 
    highlights: [
      'System Design', 
      'Technical Consultation', 
      'Project Management',
      'Feasibility Studies',
      'Technology Assessment'
    ], 
    image: '/images/engineering-services-image.webp',
    imagePosition: 'right' 
  },
      capabilities: [
      { 
        icon: 'squares-2x2', 
        title: 'System Design', 
        description: 'Complete system architecture and detailed design services.' 
      },
      { 
        icon: 'light-bulb', 
        title: 'Technical Consultation', 
        description: 'Expert advice on technology selection and implementation.' 
      },
      { 
        icon: 'folder', 
        title: 'Project Management', 
        description: 'End-to-end project planning and execution.' 
      },
      { 
        icon: 'beaker', 
        title: 'Feasibility Studies', 
        description: 'Technical and commercial viability assessments.' 
      },
      { 
        icon: 'cube', 
        title: 'Rapid Prototyping', 
        description: 'Quick proof-of-concept development and validation.' 
      },
      { 
        icon: 'puzzle-piece', 
        title: 'Systems Integration', 
        description: 'Complex multi-system integration services.' 
      },
      { 
        icon: 'magnifying-glass', 
        title: 'Design Review', 
        description: 'Independent design verification and validation.' 
      },
      { 
        icon: 'check-badge', 
        title: 'Standards Compliance', 
        description: 'Ensuring designs meet industry standards.' 
      },
      { 
        icon: 'phone', 
        title: 'Technical Support', 
        description: 'Ongoing engineering support and troubleshooting.' 
      }
    ],
  
  process: [
    { 
      number: 1, 
      title: 'Requirements Analysis', 
      description: 'Detailed understanding of project requirements and constraints.' 
    },
    { 
      number: 2, 
      title: 'Concept Development', 
      description: 'Generate and evaluate multiple solution concepts.' 
    },
    { 
      number: 3, 
      title: 'Detailed Design', 
      description: 'Complete engineering design with specifications.' 
    },
    { 
      number: 4, 
      title: 'Validation', 
      description: 'Design validation through analysis and testing.' 
    },
    { 
      number: 5, 
      title: 'Implementation Support', 
      description: 'Technical support during implementation phase.' 
    },
    { 
      number: 6, 
      title: 'Documentation', 
      description: 'Comprehensive technical documentation delivery.' 
    }
  ],
  benefits: [
    { 
      icon: 'check-circle', 
      title: 'Expert Knowledge', 
      description: 'Access to specialized engineering expertise.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Risk Reduction', 
      description: 'Minimize technical risks through proper design.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Faster Development', 
      description: 'Accelerate projects with experienced engineers.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Cost Optimization', 
      description: 'Efficient designs reduce implementation costs.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Quality Assurance', 
      description: 'Rigorous engineering ensures high quality.' 
    },
    { 
      icon: 'check-circle', 
      title: 'Innovation', 
      description: 'Creative solutions to complex problems.' 
    }
  ],
  relatedServices: [
    { 
      slug: 'embedded-systems', 
      title: 'Embedded Systems', 
      category: 'hardware',
      description: 'Embedded systems engineering'
    },
    { 
      slug: 'electro-mechanical-solutions', 
      title: 'Electromechanical Solutions', 
      category: 'hardware',
      description: 'Mechanical engineering services'
    },
    { 
      slug: 'hr-services', 
      title: 'HR Services', 
      category: 'services',
      description: 'Technical talent acquisition'
    }
  ],
  cta: {
    title: 'Need Engineering Expertise?',
    description: 'Our engineering team is ready to tackle your most challenging projects.',
    primaryButton: { text: 'Discuss Your Project', href: '/contact' },
    secondaryButton: { text: 'View Services', href: '/expertise' }
  },
  faq: {
    title: 'Engineering Services FAQ',
    subtitle: 'Common questions about our engineering consultation and technical services',
    items: [
      {
        question: 'What engineering services do you provide?',
        answer: 'We provide system design, technical consultation, project management, feasibility studies, rapid prototyping, systems integration, design review, and technical support.'
      },
      {
        question: 'How do you approach complex engineering challenges?',
        answer: 'We follow systematic engineering processes including requirements analysis, concept development, detailed design, validation, and implementation support. We leverage multidisciplinary expertise.'
      },
      {
        question: 'Do you provide feasibility studies?',
        answer: 'Yes, we conduct comprehensive feasibility studies to assess technical and commercial viability. We analyze risks, costs, timelines, and provide recommendations.'
      },
      {
        question: 'How do you ensure design quality?',
        answer: 'We perform independent design reviews, use industry best practices, implement quality assurance processes, and validate designs through analysis and testing.'
      },
      {
        question: 'Do you handle systems integration?',
        answer: 'Yes, we specialize in complex multi-system integration. We ensure compatibility, optimize interfaces, and provide comprehensive testing and validation.'
      },
      {
        question: 'What about project management?',
        answer: 'We provide end-to-end project management including planning, execution, monitoring, and delivery. We use proven methodologies and maintain clear communication.'
      }
    ]
  }
}
};

