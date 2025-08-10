// Learning Path Details Data
export const learningPathsData = {
  programming: {
     title: "Programming",
     description: "Learn to write efficient, scalable code and solve computational problems.",
     beginner: {
       concepts: ["Variables", "Data Types", "Loops", "Conditionals", "Functions"],
       languages: ["Python (easy syntax, versatile)"],
       tools: ["Python IDLE", "VS Code"],
       resources: [
         { name: "Codecademy: Python Course" },
         { name: "Coursera: Python for Everybody (University of Michigan)" },
         { name: "Book: \"Automate the Boring Stuff with Python\" by Al Sweigart" }
       ],
       projects: ["Calculator", "To-Do List", "Simple Text-Based Game"],
     },
     intermediate: {
       concepts: ["Object-Oriented Programming (OOP)", "Data Structures (Arrays, Linked Lists, Stacks, Queues)", "Algorithms (Sorting, Searching)"],
       languages: ["Python", "Java", "or C++"],
       tools: ["Git", "Jupyter Notebook"],
       resources: [
         { name: "LeetCode: Beginner to Intermediate Problems" },
         { name: "Udemy: Data Structures and Algorithms in Python" },
         { name: "Book: \"Introduction to Algorithms\" by Cormen" }
       ],
       projects: ["Inventory Management System", "Pathfinding Visualizer"],
     },
     advanced: {
       concepts: ["Advanced Algorithms (Dynamic Programming, Graph Algorithms)", "System Design", "Concurrency"],
       languages: ["Java", "C++", "or Go"],
       tools: ["Docker", "AWS Basics"],
       resources: [
         { name: "Coursera: Algorithms Specialization (Stanford)" },
         { name: "Educative.io: Grokking the System Design Interview" },
         { name: "Book: \"Designing Data-Intensive Applications\" by Martin Kleppmann" }
       ],
       projects: ["Distributed Task Scheduler", "Real-Time Chat Application"],
     }
   },
   web: {
     title: "Web Development",
     description: "Build dynamic, responsive websites and web applications.",
     beginner: {
       concepts: ["HTML", "CSS", "Basic JavaScript", "Responsive Design"],
       tools: ["VS Code", "Chrome DevTools"],
       frameworks: ["None (focus on vanilla skills)"],
       resources: [
         { name: "freeCodeCamp: Responsive Web Design" },
         { name: "MDN Web Docs: HTML, CSS, JavaScript Tutorials" },
         { name: "YouTube: Traversy Media (Web Dev Crash Course)" }
       ],
       projects: ["Personal Portfolio", "Landing Page"],
     },
     intermediate: {
       concepts: ["JavaScript (DOM, Events, Async)", "CSS Frameworks", "APIs"],
       tools: ["Git", "npm", "Postman"],
       frameworks: ["Bootstrap", "React (intro)"],
       resources: [
         { name: "Udemy: The Web Developer Bootcamp by Colt Steele" },
         { name: "freeCodeCamp: JavaScript Algorithms and Data Structures" },
         { name: "Book: \"Eloquent JavaScript\" by Marijn Haverbeke" }
       ],
       projects: ["Weather App", "Task Manager with API Integration"],
     },
     advanced: {
       concepts: ["Full-Stack Development", "Server-Side Rendering", "Authentication"],
       tools: ["Node.js", "Express", "MongoDB", "Webpack"],
       frameworks: ["React", "Next.js", "Django"],
       resources: [
         { name: "Full-Stack Open (University of Helsinki)" },
         { name: "Coursera: Server-Side Development with Node.js" },
         { name: "Book: \"Node.js Design Patterns\" by Mario Casciaro" }
       ],
       projects: ["E-Commerce Platform", "Social Media Dashboard"],
     }
   },
   design: {
     title: "UI/UX Design",
     description: "Design intuitive, user-centered interfaces and experiences.",
     beginner: {
       concepts: ["Design Principles", "Wireframing", "Prototyping", "User Research"],
       tools: ["Figma", "Adobe XD"],
       skills: ["Color Theory", "Typography"],
       resources: [
         { name: "Coursera: UI/UX Design Specialization (CalArts)" },
         { name: "Interaction Design Foundation: Free UX Courses" },
         { name: "YouTube: DesignCourse (Figma Tutorials)" }
       ],
       projects: ["Mobile App Wireframe", "Website Redesign Mockup"],
     },
     intermediate: {
       concepts: ["Usability Testing", "Information Architecture", "Design Systems"],
       tools: ["Figma (advanced)", "InVision"],
       skills: ["User Personas", "A/B Testing"],
       resources: [
         { name: "Udemy: UI/UX Design Bootcamp by Jonas Schmedtmann" },
         { name: "Book: \"Don't Make Me Think\" by Steve Krug" },
         { name: "Nielsen Norman Group: UX Articles" }
       ],
       projects: ["E-Commerce App Prototype", "User Flow Diagrams"],
     },
     advanced: {
       concepts: ["Accessibility (a11y)", "Motion Design", "Advanced User Testing"],
       tools: ["Figma Plugins", "After Effects (for animations)"],
       skills: ["Heuristic Evaluation", "Micro-Interactions"],
       resources: [
         { name: "Coursera: Advanced UX Design (Google)" },
         { name: "Book: \"Designing Interfaces\" by Jenifer Tidwell" },
         { name: "Smashing Magazine: Advanced UX Techniques" }
       ],
       projects: ["Cross-Platform Design System", "AR/VR Interface Mockup"],
     }
   },
   data: {
     title: "Data Science",
     description: "Analyze data to derive insights and build predictive models.",
     beginner: {
       concepts: ["Statistics", "Data Cleaning", "Visualization"],
       tools: ["Python (Pandas, Matplotlib)", "Excel"],
       skills: ["Descriptive Statistics", "SQL Basics"],
       resources: [
         { name: "Coursera: Data Science Specialization (Johns Hopkins)" },
         { name: "Kaggle: Learn Data Science Basics" },
         { name: "Book: \"Python for Data Analysis\" by Wes McKinney" }
       ],
       projects: ["Sales Data Dashboard", "Basic Data Analysis"],
     },
     intermediate: {
       concepts: ["Machine Learning (Regression, Classification)", "Data Wrangling"],
       tools: ["Python (Scikit-learn, Seaborn)", "Jupyter Notebook"],
       skills: ["Feature Engineering", "Model Evaluation"],
       resources: [
         { name: "fast.ai: Practical Deep Learning" },
         { name: "Udemy: Machine Learning A-Z" },
         { name: "Book: \"Hands-On Machine Learning\" by Aurélien Géron" }
       ],
       projects: ["House Price Prediction", "Customer Segmentation"],
     },
     advanced: {
       concepts: ["Deep Learning", "Big Data", "NLP"],
       tools: ["TensorFlow", "PySpark", "Hadoop"],
       skills: ["Model Deployment", "Scalable Data Pipelines"],
       resources: [
         { name: "Coursera: Deep Learning Specialization (Andrew Ng)" },
         { name: "Book: \"Deep Learning\" by Ian Goodfellow" },
         { name: "Kaggle: Advanced Competitions" }
       ],
       projects: ["Image Classification Model", "Sentiment Analysis Tool"],
     }
   },
   devops: {
     title: "DevOps",
     description: "Automate and manage infrastructure for scalable applications.",
     beginner: {
       concepts: ["Linux Basics", "Version Control", "CI/CD Concepts"],
       tools: ["Git", "GitHub", "Jenkins"],
       skills: ["Bash Scripting", "YAML"],
       resources: [
         { name: "Udemy: DevOps Beginners to Advanced" },
         { name: "Linux Foundation: Introduction to DevOps" },
         { name: "YouTube: TechWorld with Nana (DevOps Tutorials)" }
       ],
       projects: ["Set Up a CI Pipeline", "Basic Docker Container"],
     },
     intermediate: {
       concepts: ["Containerization", "Orchestration", "Cloud Basics"],
       tools: ["Docker", "Kubernetes", "AWS EC2"],
       skills: ["Terraform", "Monitoring"],
       resources: [
         { name: "Coursera: Google Cloud DevOps" },
         { name: "Book: \"The DevOps Handbook\" by Gene Kim" },
         { name: "KodeKloud: Kubernetes for Beginners" }
       ],
       projects: ["Microservices Deployment", "Infrastructure as Code"],
     },
     advanced: {
       concepts: ["Advanced Orchestration", "Security", "Chaos Engineering"],
       tools: ["Kubernetes (advanced)", "Prometheus", "Istio"],
       skills: ["Service Mesh", "Incident Response"],
       resources: [
         { name: "Udemy: Advanced Kubernetes" },
         { name: "Book: \"Site Reliability Engineering\" by Google" },
         { name: "CNCF: Advanced DevOps Courses" }
       ],
       projects: ["Multi-Cluster Kubernetes Setup", "Automated Disaster Recovery"],
     }
   },
   mobile: {
     title: "Mobile App Development",
     description: "Create applications for iOS and Android platforms.",
     beginner: {
       concepts: ["Mobile UI Basics", "Event Handling", "App Lifecycle"],
       tools: ["Android Studio", "Xcode"],
       languages: ["Java (Android)", "Swift (iOS)"],
       resources: [
         { name: "Udemy: Android Development for Beginners" },
         { name: "Hacking with Swift" },
         { name: "YouTube: CodeWithChris (iOS Tutorials)" }
       ],
       projects: ["Simple To-Do App", "Basic Calculator App"],
     },
     intermediate: {
       concepts: ["APIs & Networking", "Local Storage", "Navigation Patterns"],
       tools: ["React Native", "Flutter"],
       languages: ["JavaScript", "Dart"],
       resources: [
         { name: "freeCodeCamp: React Native Course" },
         { name: "Flutter.dev: Official Docs" },
         { name: "Book: \"Programming Flutter\" by Carmine Zaccagnino" }
       ],
       projects: ["Weather App", "Expense Tracker"],
     },
     advanced: {
       concepts: ["Push Notifications", "Background Services", "App Optimization"],
       tools: ["Firebase", "GraphQL APIs"],
       languages: ["Kotlin", "SwiftUI"],
       resources: [
         { name: "Ray Wenderlich: Advanced iOS & Android Tutorials" },
         { name: "Udemy: Advanced React Native Concepts" },
         { name: "Google Codelabs: Advanced Android Development" }
       ],
       projects: ["Real-Time Chat App", "E-Commerce Mobile App"],
     }
   },
 
   cybersecurity: {
     title: "Cybersecurity",
     description: "Protect systems, networks, and data from cyber threats.",
     beginner: {
       concepts: ["Cybersecurity Fundamentals", "Types of Threats", "Basic Networking"],
       tools: ["Wireshark", "Kali Linux"],
       skills: ["Password Security", "Network Scanning"],
       resources: [
         { name: "Coursera: Introduction to Cyber Security (NYU)" },
         { name: "Cybrary: Beginner Security Training" },
         { name: "YouTube: NetworkChuck Cybersecurity Basics" }
       ],
       projects: ["Basic Vulnerability Scan", "Password Strength Checker"],
     },
     intermediate: {
       concepts: ["Encryption", "Penetration Testing", "Web Security"],
       tools: ["Metasploit", "Burp Suite"],
       skills: ["Ethical Hacking", "Incident Response"],
       resources: [
         { name: "Udemy: The Complete Ethical Hacking Course" },
         { name: "Hack The Box Labs" },
         { name: "Book: \"The Web Application Hacker’s Handbook\"" }
       ],
       projects: ["Pen Test on a Local Network", "Secure Login System"],
     },
     advanced: {
       concepts: ["Advanced Threat Hunting", "Forensics", "Cloud Security"],
       tools: ["Splunk", "AWS Security Hub"],
       skills: ["Reverse Engineering", "Zero Trust Architecture"],
       resources: [
         { name: "SANS Institute: Advanced Security Training" },
         { name: "Book: \"Practical Malware Analysis\"" },
         { name: "Black Hat Conference Talks" }
       ],
       projects: ["Malware Analysis Report", "Automated Security Monitoring Tool"],
     }
   },
 
   game: {
     title: "Game Development",
     description: "Design and build interactive games across multiple platforms.",
     beginner: {
       concepts: ["Game Loops", "Sprites", "Basic Physics"],
       tools: ["Unity", "Godot"],
       languages: ["C#", "GDScript"],
       resources: [
         { name: "Unity Learn: Beginner Pathway" },
         { name: "GDQuest: Godot Tutorials" },
         { name: "YouTube: Brackeys (Game Dev Tutorials)" }
       ],
       projects: ["2D Platformer", "Simple Puzzle Game"],
     },
     intermediate: {
       concepts: ["3D Game Development", "AI in Games", "Networking Basics"],
       tools: ["Unreal Engine", "Photon Networking"],
       languages: ["C++", "Blueprints"],
       resources: [
         { name: "Unreal Engine Documentation" },
         { name: "Udemy: 3D Game Development with Unity" },
         { name: "Book: \"Game Programming Patterns\" by Robert Nystrom" }
       ],
       projects: ["Multiplayer Shooter", "3D Adventure Game"],
     },
     advanced: {
       concepts: ["Procedural Generation", "Advanced Physics", "Optimization"],
       tools: ["Custom Game Engines", "Shader Graph"],
       languages: ["C++", "HLSL/GLSL"],
       resources: [
         { name: "GDC Vault: Advanced Game Dev Talks" },
         { name: "Book: \"Real-Time Rendering\"" },
         { name: "YouTube: The Cherno (Game Engine Dev)" }
       ],
       projects: ["Open-World Game", "Custom Physics Engine"],
     }
   },
 
   aiml: {
     title: "AI & Machine Learning",
     description: "Build intelligent systems that can learn from data.",
     beginner: {
       concepts: ["AI Basics", "Linear Regression", "Classification"],
       tools: ["Python", "Scikit-learn"],
       skills: ["Data Preprocessing", "Model Evaluation"],
       resources: [
         { name: "Coursera: Machine Learning by Andrew Ng" },
         { name: "Kaggle: Intro to Machine Learning" },
         { name: "Book: \"AI Crash Course\" by Hadelin de Ponteves" }
       ],
       projects: ["Spam Classifier", "Stock Price Predictor"],
     },
     intermediate: {
       concepts: ["Deep Learning", "CNNs", "RNNs"],
       tools: ["TensorFlow", "PyTorch"],
       skills: ["Hyperparameter Tuning", "Transfer Learning"],
       resources: [
         { name: "fast.ai: Practical Deep Learning for Coders" },
         { name: "Udemy: PyTorch for Deep Learning" },
         { name: "Book: \"Deep Learning with Python\" by François Chollet" }
       ],
       projects: ["Image Recognition App", "Text Sentiment Analysis"],
     },
     advanced: {
       concepts: ["Reinforcement Learning", "GANs", "Large Language Models"],
       tools: ["Ray RLlib", "Hugging Face Transformers"],
       skills: ["Model Deployment", "Scalable AI Pipelines"],
       resources: [
         { name: "DeepMind: RL Lectures" },
         { name: "Book: \"Hands-On Reinforcement Learning\"" },
         { name: "Hugging Face Course" }
       ],
       projects: ["Self-Driving Car Simulation", "AI Chatbot"],
     }
   },
 
   blockchain: {
     title: "Blockchain Development",
     description: "Build decentralized applications and smart contracts.",
     beginner: {
       concepts: ["Blockchain Basics", "Cryptocurrency Concepts", "Wallets & Transactions"],
       tools: ["MetaMask", "Remix IDE"],
       languages: ["Solidity", "JavaScript"],
       resources: [
         { name: "Ethereum.org: Developer Docs" },
         { name: "CryptoZombies: Learn Solidity" },
         { name: "YouTube: Dapp University" }
       ],
       projects: ["Basic Token on Ethereum", "Simple Voting DApp"],
     },
     intermediate: {
       concepts: ["Smart Contract Security", "Oracles", "IPFS"],
       tools: ["Hardhat", "Truffle Suite"],
       languages: ["Solidity", "TypeScript"],
       resources: [
         { name: "Udemy: Ethereum and Solidity Developer Course" },
         { name: "Chainlink Documentation" },
         { name: "Book: \"Mastering Ethereum\"" }
       ],
       projects: ["NFT Marketplace", "Decentralized Exchange"],
     },
     advanced: {
       concepts: ["Layer 2 Solutions", "Cross-Chain Interoperability", "DAO Governance"],
       tools: ["Polygon", "Cosmos SDK"],
       languages: ["Rust (for Solana)", "Go (for Hyperledger)"],
       resources: [
         { name: "Solana Docs" },
         { name: "Book: \"Blockchain in Action\"" },
         { name: "Ethereum Research Forum" }
       ],
       projects: ["Cross-Chain Bridge", "Fully On-Chain Game"],
     }
   }
 };
 
 export type LearningPathCategory =
   | 'web'
   | 'programming'
   | 'design'
   | 'data'
   | 'devops'
   | 'mobile'
   | 'cybersecurity'
   | 'game'
   | 'aiml'
   | 'blockchain';
 