/* ═══════════════════════════════════════════
   SwipeLearn — topics.js
   ═══════════════════════════════════════════
   TOPICS & QUIZ DATA - CSE
═══════════════════════════════════════════ */

const TOPICS_DATA = {
  /* WEB DEVELOPMENT TOPICS */
  web: [
    {
      id: "html",
      label: "HTML",
      iconClass: "devicon-html5-plain colored",
      desc: "Structure of the web",
      color: "#e34c26",
      quiz: [
        { q: "What does HTML stand for?", opts: ["HyperText Markup Language", "HighText Machine Language", "HyperText Machine Language", "HyperLink Text Markup Language"], ans: 0 },
        { q: "Which tag creates a hyperlink?", opts: ["<link>", "<a>", "<href>", "<nav>"], ans: 1 },
        { q: "Which element is the root of an HTML document?", opts: ["<head>", "<body>", "<html>", "<root>"], ans: 2 },
        { q: "Which HTML5 element defines navigation links?", opts: ["<navigation>", "<menu>", "<nav>", "<links>"], ans: 2 },
        { q: "What does the <canvas> tag do?", opts: ["Displays images", "Draws graphics via scripting", "Creates 3D scenes", "Embeds videos"], ans: 1 }
      ]
    },
    {
      id: "css",
      label: "CSS",
      iconClass: "devicon-css3-plain colored",
      desc: "Style, layout & animations",
      color: "#264de4",
      quiz: [
        { q: "What does CSS stand for?", opts: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], ans: 1 },
        { q: "Which property changes text color?", opts: ["font-color", "text-color", "color", "foreground"], ans: 2 },
        { q: "How do you center a block element horizontally?", opts: ["text-align:center", "margin:auto", "align:center", "float:center"], ans: 1 },
        { q: "Which unit is relative to the viewport width?", opts: ["px", "em", "vw", "rem"], ans: 2 },
        { q: "Which CSS property creates space inside an element?", opts: ["margin", "spacing", "padding", "gap"], ans: 2 }
      ]
    },
    {
      id: "js",
      label: "JavaScript",
      iconClass: "devicon-javascript-plain colored",
      desc: "Dynamic & interactive web",
      color: "#f7df1e",
      quiz: [
        { q: "Which keyword declares a block-scoped variable?", opts: ["var", "local", "let", "define"], ans: 2 },
        { q: "What does typeof null return?", opts: ["'null'", "'undefined'", "'object'", "'boolean'"], ans: 2 },
        { q: "Which method adds an element to the end of an array?", opts: ["append()", "push()", "insert()", "add()"], ans: 1 },
        { q: "What does === check?", opts: ["Value only", "Type only", "Value and type", "Neither"], ans: 2 },
        { q: "Which method removes the last element of an array?", opts: ["shift()", "pop()", "splice()", "delete()"], ans: 1 }
      ]
    },
    {
      id: "react",
      label: "React",
      iconClass: "devicon-react-original colored",
      desc: "Component-based UI library",
      color: "#61dafb",
      quiz: [
        { q: "React is maintained by?", opts: ["Google", "Microsoft", "Meta (Facebook)", "Amazon"], ans: 2 },
        { q: "Which hook manages component state?", opts: ["useEffect", "useState", "useRef", "useContext"], ans: 1 },
        { q: "What is JSX?", opts: ["A CSS preprocessor", "A JS syntax extension", "A backend framework", "A DB query language"], ans: 1 },
        { q: "What is the virtual DOM?", opts: ["A browser feature", "A lightweight copy of the real DOM", "A CSS file", "A JS engine"], ans: 1 },
        { q: "Which hook handles side effects?", opts: ["useState", "useMemo", "useEffect", "useReducer"], ans: 2 }
      ]
    },
    {
      id: "nodejs",
      label: "Node.js",
      iconClass: "devicon-nodejs-plain colored",
      desc: "Server-side JavaScript runtime",
      color: "#68a063",
      quiz: [
        { q: "Node.js uses which engine?", opts: ["SpiderMonkey", "V8", "JavaScriptCore", "Chakra"], ans: 1 },
        { q: "Which module handles file system in Node?", opts: ["http", "path", "fs", "os"], ans: 2 },
        { q: "npm stands for?", opts: ["Node Package Manager", "New Project Manager", "Node Program Module", "None"], ans: 0 },
        { q: "Which method starts an HTTP server?", opts: ["server.start()", "server.listen()", "server.run()", "server.open()"], ans: 1 },
        { q: "Node.js is best described as?", opts: ["Multi-threaded", "Event-driven & non-blocking", "Synchronous only", "Browser-based"], ans: 1 }
      ]
    }
  ],

  /* MACHINE LEARNING TOPICS */
  ml: [
    {
      id: "python",
      label: "Python",
      iconClass: "devicon-python-plain colored",
      desc: "Core language for ML & data",
      color: "#3572a5",
      quiz: [
        { q: "Which library is essential for numerical computing?", opts: ["pandas", "matplotlib", "NumPy", "seaborn"], ans: 2 },
        { q: "What does len([1,2,3]) return?", opts: ["2", "3", "4", "0"], ans: 1 },
        { q: "Which keyword defines a function?", opts: ["function", "fn", "def", "define"], ans: 2 },
        { q: "What is a Python dict?", opts: ["An ordered list", "A key-value store", "A tuple", "A set"], ans: 1 },
        { q: "Which operator is used for floor division?", opts: ["/", "%", "//", "**"], ans: 2 }
      ]
    },
    {
      id: "tensorflow",
      label: "TensorFlow",
      iconClass: "devicon-tensorflow-original colored",
      desc: "Deep learning framework",
      color: "#ff6f00",
      quiz: [
        { q: "TensorFlow was developed by?", opts: ["Facebook", "Google Brain", "OpenAI", "DeepMind"], ans: 1 },
        { q: "What is a tensor?", opts: ["A function", "A multi-dimensional array", "A neuron", "A loss function"], ans: 1 },
        { q: "Which API simplifies model building in TF?", opts: ["NumPy", "Pandas", "Keras", "Scikit-learn"], ans: 2 },
        { q: "What does model.fit() do?", opts: ["Evaluates model", "Trains model", "Predicts output", "Compiles model"], ans: 1 },
        { q: "What is backpropagation?", opts: ["Forward pass", "Algorithm to update weights", "Data preprocessing", "Activation function"], ans: 1 }
      ]
    },
    {
      id: "nlp",
      label: "NLP",
      icon: "🗣️",
      desc: "Natural Language Processing",
      color: "#a78bfa",
      quiz: [
        { q: "NLP stands for?", opts: ["Neural Learning Process", "Natural Language Processing", "Numeric Logic Programming", "None"], ans: 1 },
        { q: "Tokenization means?", opts: ["Encrypting text", "Splitting text into tokens", "Translating text", "Summarizing text"], ans: 1 },
        { q: "Which model architecture transformed NLP in 2017?", opts: ["RNN", "CNN", "Transformer", "LSTM"], ans: 2 },
        { q: "BERT was introduced by?", opts: ["OpenAI", "Google", "Meta", "Microsoft"], ans: 1 },
        { q: "Stemming reduces words to?", opts: ["Full sentences", "Root form", "Synonyms", "Acronyms"], ans: 1 }
      ]
    },
    {
      id: "cv",
      label: "Computer Vision",
      icon: "👁️",
      desc: "Image recognition & processing",
      color: "#f472b6",
      quiz: [
        { q: "CNN stands for?", opts: ["Central Neural Node", "Convolutional Neural Network", "Computed Numeric Net", "None"], ans: 1 },
        { q: "Which layer extracts features in CNN?", opts: ["Dense layer", "Dropout layer", "Convolutional layer", "Pooling layer"], ans: 2 },
        { q: "Max pooling does what?", opts: ["Averages values", "Takes maximum in a window", "Normalizes values", "Flattens tensors"], ans: 1 },
        { q: "YOLO is used for?", opts: ["Speech recognition", "Real-time object detection", "Image segmentation", "Face generation"], ans: 1 },
        { q: "Which dataset is famous for image classification benchmarks?", opts: ["MNIST", "COCO", "ImageNet", "CIFAR-10"], ans: 2 }
      ]
    }
  ],

  /* DATA STRUCTURES & ALGORITHMS */
  dsa: [
    {
      id: "arrays",
      label: "Arrays",
      icon: "📊",
      desc: "Linear data structures",
      color: "#3dfcb0",
      quiz: [
        { q: "Time complexity of accessing element by index?", opts: ["O(n)", "O(log n)", "O(1)", "O(n²)"], ans: 2 },
        { q: "Which sort has average O(n log n)?", opts: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"], ans: 2 },
        { q: "Worst-case time for linear search?", opts: ["O(1)", "O(log n)", "O(n)", "O(n²)"], ans: 2 },
        { q: "Two-pointer approach works best for?", opts: ["Trees", "Graphs", "Sorted arrays", "Stacks"], ans: 2 },
        { q: "Prefix sums solve?", opts: ["Sorting problems", "Range sum queries", "Graph traversal", "DP only"], ans: 1 }
      ]
    },
    {
      id: "trees",
      label: "Trees",
      icon: "🌳",
      desc: "Hierarchical data structures",
      color: "#7c5cfc",
      quiz: [
        { q: "Height of balanced BST with n nodes?", opts: ["O(n)", "O(log n)", "O(1)", "O(n²)"], ans: 1 },
        { q: "Which traversal visits left→root→right?", opts: ["Preorder", "Postorder", "Inorder", "Level-order"], ans: 2 },
        { q: "BFS uses which data structure?", opts: ["Stack", "Heap", "Queue", "Array"], ans: 2 },
        { q: "AVL trees maintain balance by?", opts: ["Hashing", "Rotations", "Sorting", "Heapifying"], ans: 1 },
        { q: "A full binary tree has nodes where each node has?", opts: ["Exactly 1 child", "0 or 2 children", "At most 1 child", "Exactly 2 children"], ans: 1 }
      ]
    },
    {
      id: "graphs",
      label: "Graphs",
      icon: "🕸️",
      desc: "Nodes, edges & traversals",
      color: "#fbbf24",
      quiz: [
        { q: "DFS uses which data structure?", opts: ["Queue", "Stack", "Heap", "Array"], ans: 1 },
        { q: "Dijkstra's algorithm finds?", opts: ["Minimum spanning tree", "Shortest path", "Topological order", "Connected components"], ans: 1 },
        { q: "A directed acyclic graph is called?", opts: ["DAG", "DFG", "DCG", "DBG"], ans: 0 },
        { q: "Which algorithm detects negative weight cycles?", opts: ["Dijkstra", "Prim", "Bellman-Ford", "Floyd-Warshall"], ans: 2 },
        { q: "An undirected graph with n nodes needs at least how many edges to be connected?", opts: ["n", "n-1", "n+1", "n²"], ans: 1 }
      ]
    },
    {
      id: "dp",
      label: "Dynamic Prog.",
      icon: "♟️",
      desc: "Optimal substructure & memoization",
      color: "#f87171",
      quiz: [
        { q: "DP solves problems by?", opts: ["Greedy choices", "Breaking into overlapping subproblems", "Random sampling", "Divide & conquer only"], ans: 1 },
        { q: "Memoization is a form of?", opts: ["Tabulation", "Top-down DP", "Bottom-up DP", "Greedy"], ans: 1 },
        { q: "Fibonacci with DP has time complexity?", opts: ["O(2ⁿ)", "O(n²)", "O(n)", "O(log n)"], ans: 2 },
        { q: "The knapsack problem is a classic example of?", opts: ["Graph theory", "Dynamic programming", "Sorting", "Hashing"], ans: 1 },
        { q: "LCS stands for?", opts: ["Least Common Subsequence", "Longest Common Subsequence", "Last Common String", "None"], ans: 1 }
      ]
    }
  ],

  /* DATABASE MANAGEMENT SYSTEMS */
  dbms: [
    {
      id: "sql",
      label: "SQL",
      iconClass: "devicon-mysql-plain colored",
      desc: "Structured Query Language",
      color: "#00758f",
      quiz: [
        { q: "SQL stands for?", opts: ["Structured Query Language", "Simple Query Language", "Standard Query Logic", "None"], ans: 0 },
        { q: "Which command retrieves data?", opts: ["INSERT", "UPDATE", "SELECT", "DELETE"], ans: 2 },
        { q: "PRIMARY KEY ensures?", opts: ["Uniqueness & not null", "Only uniqueness", "Only not null", "Foreign reference"], ans: 0 },
        { q: "JOIN combines rows based on?", opts: ["Random matching", "A related column", "Row count", "Index"], ans: 1 },
        { q: "ACID in DBMS stands for?", opts: ["Atomicity Consistency Isolation Durability", "All Confirmed Indexed Data", "Async Cached Indexed DB", "None"], ans: 0 }
      ]
    },
    {
      id: "nosql",
      label: "NoSQL",
      icon: "🍃",
      desc: "Non-relational databases",
      color: "#4db33d",
      quiz: [
        { q: "MongoDB stores data as?", opts: ["Tables", "JSON-like documents", "XML files", "CSV rows"], ans: 1 },
        { q: "Which is NOT a NoSQL database?", opts: ["MongoDB", "Redis", "Cassandra", "MySQL"], ans: 3 },
        { q: "CAP theorem stands for?", opts: ["Consistency Availability Partition-tolerance", "Copy Access Protocol", "Clustered Access Points", "None"], ans: 0 },
        { q: "Redis is best known as?", opts: ["Document DB", "In-memory key-value store", "Graph DB", "Column store"], ans: 1 },
        { q: "NoSQL databases are typically?", opts: ["Strictly relational", "Schema-flexible", "Require SQL", "Always slower"], ans: 1 }
      ]
    }
  ],

  /* OPERATING SYSTEMS */
  os: [
    {
      id: "processes",
      label: "Processes",
      icon: "⚙️",
      desc: "Process lifecycle & scheduling",
      color: "#94a3b8",
      quiz: [
        { q: "A process in the 'waiting' state is waiting for?", opts: ["CPU", "I/O or event", "Memory", "Network"], ans: 1 },
        { q: "Round Robin is a type of?", opts: ["Memory management", "CPU scheduling", "Disk scheduling", "Network protocol"], ans: 1 },
        { q: "A deadlock requires how many Coffman conditions?", opts: ["2", "3", "4", "5"], ans: 2 },
        { q: "Which scheduling gives shortest average wait time?", opts: ["FCFS", "Round Robin", "SJF", "Priority"], ans: 2 },
        { q: "PCB stands for?", opts: ["Process Control Block", "Program Counter Buffer", "Processor Cache Block", "None"], ans: 0 }
      ]
    },
    {
      id: "memory",
      label: "Memory Mgmt.",
      icon: "🧮",
      desc: "Paging, segmentation & virtual memory",
      color: "#7dd3fc",
      quiz: [
        { q: "Paging avoids?", opts: ["Thrashing", "External fragmentation", "Internal fragmentation", "Deadlocks"], ans: 1 },
        { q: "A page fault occurs when?", opts: ["Page is in RAM", "Page is not in RAM", "TLB hits", "Cache hits"], ans: 1 },
        { q: "LRU stands for?", opts: ["Least Recently Used", "Last Read Unit", "Low Resource Utilization", "None"], ans: 0 },
        { q: "Virtual memory allows programs to use?", opts: ["Less RAM than physical", "More address space than physical RAM", "Faster CPU", "Larger caches"], ans: 1 },
        { q: "Thrashing occurs when?", opts: ["CPU is idle", "Too many page faults slow execution", "Disk is full", "RAM overclocked"], ans: 1 }
      ]
    }
  ],

  /* COMPUTER NETWORKS */
  cn: [
    {
      id: "osi",
      label: "OSI Model",
      icon: "📶",
      desc: "7-layer network model",
      color: "#22d3ee",
      quiz: [
        { q: "How many layers does the OSI model have?", opts: ["4", "5", "6", "7"], ans: 3 },
        { q: "Which layer handles routing?", opts: ["Data Link", "Transport", "Network", "Session"], ans: 2 },
        { q: "TCP operates at which layer?", opts: ["Network", "Transport", "Session", "Application"], ans: 1 },
        { q: "HTTP is at which OSI layer?", opts: ["Transport", "Session", "Presentation", "Application"], ans: 3 },
        { q: "MAC address belongs to which layer?", opts: ["Physical", "Data Link", "Network", "Transport"], ans: 1 }
      ]
    },
    {
      id: "tcp",
      label: "TCP/IP",
      icon: "🔗",
      desc: "Internet protocol suite",
      color: "#0ea5e9",
      quiz: [
        { q: "TCP handshake involves how many steps?", opts: ["2", "3", "4", "5"], ans: 1 },
        { q: "IP address version 4 has how many bits?", opts: ["16", "32", "64", "128"], ans: 1 },
        { q: "DNS translates?", opts: ["IP to MAC", "Domain names to IP", "HTTP to HTTPS", "None"], ans: 1 },
        { q: "Which port does HTTPS use by default?", opts: ["80", "21", "443", "8080"], ans: 2 },
        { q: "UDP differs from TCP by being?", opts: ["Connection-oriented", "Reliable", "Connectionless & faster", "Slower"], ans: 2 }
      ]
    }
  ],

  /* CYBERSECURITY */
  cybersec: [
    {
      id: "cryptography",
      label: "Cryptography",
      icon: "🔑",
      desc: "Encryption, hashing & PKI",
      color: "#f43f5e",
      quiz: [
        { q: "AES stands for?", opts: ["Advanced Encryption Standard", "Automatic Encoding System", "Asymmetric Encryption Scheme", "None"], ans: 0 },
        { q: "RSA is an example of?", opts: ["Symmetric encryption", "Asymmetric encryption", "Hashing", "None"], ans: 1 },
        { q: "SHA-256 produces a hash of how many bits?", opts: ["128", "256", "512", "64"], ans: 1 },
        { q: "A digital signature provides?", opts: ["Encryption only", "Authentication & integrity", "Confidentiality only", "None"], ans: 1 },
        { q: "SSL/TLS is used for?", opts: ["File compression", "Secure data transmission", "User authentication only", "Routing"], ans: 1 }
      ]
    },
    {
      id: "ethicalhacking",
      label: "Ethical Hacking",
      icon: "🕵️",
      desc: "Penetration testing & vulnerabilities",
      color: "#e11d48",
      quiz: [
        { q: "Penetration testing is also called?", opts: ["Black box audit", "Pen testing", "White hat hacking", "All of the above"], ans: 3 },
        { q: "SQL injection targets?", opts: ["Network packets", "Web app database queries", "Operating system", "Hardware"], ans: 1 },
        { q: "A man-in-the-middle attack intercepts?", opts: ["Physical devices", "Communication between two parties", "Only emails", "DNS only"], ans: 1 },
        { q: "XSS stands for?", opts: ["Extra Secure Script", "Cross-Site Scripting", "Cross-Server System", "None"], ans: 1 },
        { q: "Nmap is used for?", opts: ["Encrypting files", "Network scanning & port discovery", "Password cracking", "Firewall config"], ans: 1 }
      ]
    },
    {
      id: "networksec",
      label: "Network Security",
      icon: "🛡️",
      desc: "Firewalls, IDS & VPNs",
      color: "#fb7185",
      quiz: [
        { q: "A firewall filters traffic based on?", opts: ["URL only", "Rules/policies on ports & IPs", "Bandwidth", "Signal strength"], ans: 1 },
        { q: "IDS stands for?", opts: ["Internet Data Server", "Intrusion Detection System", "Internal DNS Server", "None"], ans: 1 },
        { q: "VPN provides?", opts: ["Faster internet", "Encrypted private tunnel over public network", "Free bandwidth", "None"], ans: 1 },
        { q: "DoS attack aims to?", opts: ["Steal data", "Overwhelm & disrupt a service", "Install malware", "Spoof identity"], ans: 1 },
        { q: "Zero-day vulnerability is?", opts: ["A patched flaw", "Unknown flaw with no fix yet", "Old exploit", "Server misconfiguration"], ans: 1 }
      ]
    }
  ],

  /* CLOUD COMPUTING */
  cloud: [
    {
      id: "aws",
      label: "AWS",
      iconClass: "devicon-amazonwebservices-original colored",
      desc: "Amazon Web Services fundamentals",
      color: "#ff9900",
      quiz: [
        { q: "Amazon S3 is used for?", opts: ["Computing", "Object storage", "Relational database", "CDN"], ans: 1 },
        { q: "EC2 stands for?", opts: ["Elastic Compute Cloud", "Extended Cloud Computing", "Enhanced Container Control", "None"], ans: 0 },
        { q: "AWS Lambda is a?", opts: ["Virtual machine service", "Serverless function service", "Container registry", "CDN service"], ans: 1 },
        { q: "IAM in AWS manages?", opts: ["Network routing", "Identity & access permissions", "Storage buckets", "Billing only"], ans: 1 },
        { q: "Which AWS service is a managed relational database?", opts: ["DynamoDB", "S3", "RDS", "Lambda"], ans: 2 }
      ]
    },
    {
      id: "docker",
      label: "Docker & K8s",
      iconClass: "devicon-docker-plain colored",
      desc: "Containers & orchestration",
      color: "#2496ed",
      quiz: [
        { q: "A Docker container is?", opts: ["A virtual machine", "A lightweight isolated process package", "A cloud server", "A storage volume"], ans: 1 },
        { q: "Dockerfile is used to?", opts: ["Run containers", "Define instructions to build an image", "Connect containers", "Monitor resources"], ans: 1 },
        { q: "Kubernetes is used for?", opts: ["Building images", "Orchestrating containers at scale", "Writing code", "Version control"], ans: 1 },
        { q: "A Kubernetes Pod contains?", opts: ["Nodes", "One or more containers", "Clusters", "Storage volumes only"], ans: 1 },
        { q: "Docker Hub is?", opts: ["A container runtime", "A public registry of Docker images", "A cloud provider", "An IDE"], ans: 1 }
      ]
    },
    {
      id: "devops",
      label: "DevOps",
      icon: "🔄",
      desc: "CI/CD, automation & pipelines",
      color: "#a3e635",
      quiz: [
        { q: "CI/CD stands for?", opts: ["Continuous Integration / Continuous Delivery", "Code Inspection / Code Deployment", "None", "Centralized Infrastructure / Cloud Delivery"], ans: 0 },
        { q: "Jenkins is a tool for?", opts: ["Container management", "CI/CD automation", "Database management", "Cloud hosting"], ans: 1 },
        { q: "Infrastructure as Code (IaC) means?", opts: ["Writing app code on servers", "Managing infrastructure through code/config files", "Manual server setup", "None"], ans: 1 },
        { q: "Terraform is used for?", opts: ["Application testing", "IaC provisioning across cloud providers", "Container building", "Monitoring"], ans: 1 },
        { q: "Git is a?", opts: ["Cloud platform", "Distributed version control system", "CI/CD tool", "Container runtime"], ans: 1 }
      ]
    }
  ],

  /* ARTIFICIAL INTELLIGENCE */
  ai: [
    {
      id: "search",
      label: "Search Algorithms",
      icon: "🔍",
      desc: "BFS, DFS, A* & heuristics",
      color: "#c084fc",
      quiz: [
        { q: "A* search uses which function?", opts: ["f(n)=g(n)+h(n)", "f(n)=g(n)×h(n)", "f(n)=h(n) only", "f(n)=g(n) only"], ans: 0 },
        { q: "Admissible heuristic never?", opts: ["Underestimates cost", "Overestimates true cost", "Returns zero", "Changes during search"], ans: 1 },
        { q: "Uninformed search has access to?", opts: ["Heuristic information", "Only problem definition (no heuristic)", "Goal state directly", "All states at once"], ans: 1 },
        { q: "Greedy best-first search expands nodes based on?", opts: ["Path cost g(n)", "Heuristic h(n) only", "f(n)=g(n)+h(n)", "Depth only"], ans: 1 },
        { q: "Minimax algorithm is used in?", opts: ["Pathfinding", "Two-player game trees", "Neural networks", "Clustering"], ans: 1 }
      ]
    },
    {
      id: "reinforcement",
      label: "Reinforcement Learning",
      icon: "🎮",
      desc: "Agents, rewards & Q-learning",
      color: "#7c3aed",
      quiz: [
        { q: "In RL, the agent learns by?", opts: ["Labelled examples", "Receiving rewards & penalties from environment", "Clustering data", "Gradient descent only"], ans: 1 },
        { q: "Q-learning is a?", opts: ["Supervised method", "Model-free RL algorithm", "Unsupervised method", "Genetic algorithm"], ans: 1 },
        { q: "Epsilon-greedy strategy manages?", opts: ["Learning rate", "Exploration vs exploitation trade-off", "Batch size", "None"], ans: 1 },
        { q: "MDP stands for?", opts: ["Maximum Decision Process", "Markov Decision Process", "Minimal Data Pipeline", "None"], ans: 1 },
        { q: "AlphaGo used which technique?", opts: ["Rule-based AI", "Deep Reinforcement Learning", "Supervised learning only", "Search only"], ans: 1 }
      ]
    }
  ],

  /* SOFTWARE ENGINEERING */
  softeng: [
    {
      id: "sdlc",
      label: "SDLC & Agile",
      icon: "🔄",
      desc: "Software development lifecycle",
      color: "#34d399",
      quiz: [
        { q: "Agile emphasizes?", opts: ["Heavy documentation", "Working software & iterative delivery", "Fixed requirements", "Waterfall phases"], ans: 1 },
        { q: "Scrum sprints are typically?", opts: ["6-month cycles", "1-4 week iterative cycles", "Annual releases", "One-time deliveries"], ans: 1 },
        { q: "TDD stands for?", opts: ["Technical Design Document", "Test-Driven Development", "Total Design Deployment", "None"], ans: 1 },
        { q: "Which model suits well-defined requirements?", opts: ["Agile", "Scrum", "Waterfall", "Extreme Programming"], ans: 2 },
        { q: "Code review improves?", opts: ["Code size", "Code quality & finds bugs early", "Deployment speed", "None"], ans: 1 }
      ]
    },
    {
      id: "designpatterns",
      label: "Design Patterns",
      icon: "🧩",
      desc: "GoF patterns & architecture",
      color: "#10b981",
      quiz: [
        { q: "Singleton ensures?", opts: ["Multiple instances", "Only one instance of a class", "Fast performance", "None"], ans: 1 },
        { q: "Observer pattern implements?", opts: ["Caching", "Event-driven pub/sub notification", "Data encryption", "Sorting"], ans: 1 },
        { q: "Factory pattern creates objects?", opts: ["Destroys objects", "Without specifying exact class", "Sorts collections", "None"], ans: 1 },
        { q: "MVC stands for?", opts: ["Model View Controller", "Module Version Control", "Multiple Value Cache", "None"], ans: 0 },
        { q: "SOLID principles are for?", opts: ["Database design", "Object-oriented software design", "Network config", "Testing only"], ans: 1 }
      ]
    }
  ],

  /* ECE DOMAINS */
  signals: [
    {
      id: "ctft",
      label: "CTFT Basics",
      icon: "📈",
      desc: "Continuous-time Fourier Transform fundamentals",
      color: "#f472b6",
      quiz: [
        { q: "CTFT converts a signal from?", opts: ["Time domain to frequency domain", "Frequency to time", "Analog to digital", "Digital to analog"], ans: 0 },
        { q: "The Fourier transform of a time-shifted signal causes?", opts: ["Amplitude scaling only", "Phase shift in frequency domain", "No change", "Frequency inversion"], ans: 1 },
        { q: "Energy signals have?", opts: ["Finite energy", "Infinite energy", "Zero bandwidth", "No spectrum"], ans: 0 },
        { q: "Convolution in time domain equals?", opts: ["Multiplication in frequency domain", "Differentiation in frequency domain", "Integration in frequency domain", "No relation"], ans: 0 },
        { q: "Nyquist criterion helps avoid?", opts: ["Attenuation", "Aliasing", "Harmonics", "Noise"], ans: 1 }
      ]
    },
    {
      id: "laplace",
      label: "Laplace Transform",
      icon: "∫",
      desc: "s-domain analysis and system behavior",
      color: "#a78bfa",
      quiz: [
        { q: "Laplace transform is mainly used for?", opts: ["Image compression", "Solving differential equations", "Data encryption", "Circuit layout"], ans: 1 },
        { q: "Region of convergence (ROC) indicates?", opts: ["Where transform exists", "Signal amplitude", "Sampling frequency", "Filter order"], ans: 0 },
        { q: "Poles are values where transfer function?", opts: ["Becomes zero", "Becomes infinite", "Is constant", "Is periodic"], ans: 1 },
        { q: "A stable LTI system has poles in?", opts: ["Right-half plane", "Imaginary axis only", "Left-half plane", "At origin only"], ans: 2 },
        { q: "Inverse Laplace transform gives?", opts: ["Frequency response", "Time-domain signal", "Power spectrum", "Phase only"], ans: 1 }
      ]
    }
  ],

  vlsi: [
    {
      id: "mosfet",
      label: "MOSFET",
      icon: "🔋",
      desc: "MOS transistor operation and regions",
      color: "#8b5cf6",
      quiz: [
        { q: "MOSFET has how many terminals?", opts: ["2", "3", "4", "5"], ans: 2 },
        { q: "CMOS stands for?", opts: ["Complementary Metal-Oxide-Semiconductor", "Current Mode Operating System", "Complex MOS", "None"], ans: 0 },
        { q: "In digital CMOS, static power is ideally?", opts: ["Very high", "Zero", "Equal to dynamic power", "Negative"], ans: 1 },
        { q: "Threshold voltage is the minimum gate voltage to?", opts: ["Break oxide", "Create inversion channel", "Increase leakage", "Decrease mobility"], ans: 1 },
        { q: "PMOS conducts strongly when gate is?", opts: ["High", "Low", "Floating", "At threshold"], ans: 1 }
      ]
    },
    {
      id: "fabrication",
      label: "VLSI Fabrication",
      icon: "🏭",
      desc: "Lithography and chip manufacturing flow",
      color: "#7c3aed",
      quiz: [
        { q: "Photolithography uses?", opts: ["Magnetic masks", "Light to transfer patterns", "Only heat", "Only pressure"], ans: 1 },
        { q: "Doping in semiconductors is done to?", opts: ["Reduce wafer size", "Control conductivity", "Increase color", "Lower melting point"], ans: 1 },
        { q: "Wafer material most commonly used is?", opts: ["Copper", "Silicon", "Aluminum", "Graphite"], ans: 1 },
        { q: "Etching process removes?", opts: ["Unwanted material", "All metal layers", "Only resist", "Clock skew"], ans: 0 },
        { q: "Smaller technology node generally means?", opts: ["Larger transistors", "Higher integration density", "Lower performance", "No change"], ans: 1 }
      ]
    }
  ],

  comm: [
    {
      id: "analogmod",
      label: "Analog Modulation",
      icon: "📻",
      desc: "AM, FM and PM concepts",
      color: "#14b8a6",
      quiz: [
        { q: "AM stands for?", opts: ["Amplitude Modulation", "Analog Mapping", "Adaptive Modulation", "None"], ans: 0 },
        { q: "FM is generally more resistant to?", opts: ["Power loss", "Noise", "Bandwidth", "Interference by design"], ans: 1 },
        { q: "Carrier signal is used to?", opts: ["Store data", "Transport information over channel", "Amplify noise", "Filter harmonics"], ans: 1 },
        { q: "Demodulation is the process of?", opts: ["Encrypting signal", "Recovering original message", "Sampling signal", "Compressing signal"], ans: 1 },
        { q: "FM bandwidth is estimated by?", opts: ["Ohm's law", "Carson's rule", "Kirchhoff's law", "Nyquist only"], ans: 1 }
      ]
    },
    {
      id: "digitalcomm",
      label: "Digital Communication",
      icon: "📡",
      desc: "Bit transmission and error control",
      color: "#22c55e",
      quiz: [
        { q: "Bit Error Rate (BER) measures?", opts: ["Data speed", "Fraction of bits received in error", "Signal power", "Channel length"], ans: 1 },
        { q: "QPSK carries how many bits per symbol?", opts: ["1", "2", "3", "4"], ans: 1 },
        { q: "Channel coding is used for?", opts: ["Compression", "Error detection and correction", "Encryption only", "Synchronization only"], ans: 1 },
        { q: "Shannon capacity gives the?", opts: ["Maximum reliable data rate", "Antenna gain", "Symbol timing", "Noise margin only"], ans: 0 },
        { q: "OFDM is widely used in?", opts: ["Wi-Fi and LTE", "AM radio only", "CD players", "Ethernet hubs"], ans: 0 }
      ]
    }
  ],

  /* EEE DOMAINS */
  circuits: [
    {
      id: "networklaws",
      label: "Network Laws",
      icon: "🔌",
      desc: "Ohm, KCL and KVL fundamentals",
      color: "#eab308",
      quiz: [
        { q: "Ohm's law is?", opts: ["V = I/R", "V = IR", "I = VR", "P = VI"], ans: 1 },
        { q: "KCL applies at a?", opts: ["Loop", "Node", "Resistor", "Power source"], ans: 1 },
        { q: "KVL states sum of voltages in a loop is?", opts: ["One", "Infinite", "Zero", "Current"], ans: 2 },
        { q: "Unit of capacitance is?", opts: ["Henry", "Farad", "Ohm", "Siemens"], ans: 1 },
        { q: "Power in a resistor can be written as?", opts: ["I/R", "V/I", "I^2R", "R/V"], ans: 2 }
      ]
    },
    {
      id: "acanalysis",
      label: "AC Analysis",
      icon: "〰️",
      desc: "Reactance, impedance and phasors",
      color: "#f59e0b",
      quiz: [
        { q: "Impedance combines?", opts: ["Resistance and reactance", "Current and voltage", "Power and energy", "Frequency and phase"], ans: 0 },
        { q: "Inductive reactance increases with?", opts: ["Lower frequency", "Higher frequency", "Higher resistance", "Lower voltage"], ans: 1 },
        { q: "Capacitive reactance decreases with?", opts: ["Higher frequency", "Lower frequency", "Higher current", "Higher power"], ans: 0 },
        { q: "Power factor is the cosine of?", opts: ["Current", "Voltage", "Phase angle", "Frequency"], ans: 2 },
        { q: "RMS value of sinusoid is peak divided by?", opts: ["2", "sqrt(2)", "pi", "4"], ans: 1 }
      ]
    }
  ],

  machines: [
    {
      id: "transformers",
      label: "Transformers",
      icon: "⚙️",
      desc: "Principle, losses and efficiency",
      color: "#f97316",
      quiz: [
        { q: "Transformer works on?", opts: ["Electrostatic induction", "Mutual induction", "Photoelectric effect", "Piezoelectric effect"], ans: 1 },
        { q: "Step-up transformer increases?", opts: ["Current", "Voltage", "Frequency", "Power factor"], ans: 1 },
        { q: "Core losses include?", opts: ["Copper loss only", "Hysteresis and eddy current loss", "Mechanical loss", "Stray load only"], ans: 1 },
        { q: "Transformer frequency at output is?", opts: ["Changed", "Same as input", "Half", "Double"], ans: 1 },
        { q: "Ideal transformer efficiency is?", opts: ["0%", "50%", "100%", "Depends on load only"], ans: 2 }
      ]
    },
    {
      id: "motors",
      label: "Electric Motors",
      icon: "🏭",
      desc: "DC and induction motor basics",
      color: "#fb7185",
      quiz: [
        { q: "Slip in induction motor is?", opts: ["Ns - Nr over Ns", "Nr - Ns over Nr", "Ns + Nr", "Nr/Ns only"], ans: 0 },
        { q: "Synchronous speed depends on?", opts: ["Voltage only", "Supply frequency and poles", "Rotor resistance", "Load torque"], ans: 1 },
        { q: "Back EMF in DC motor mainly?", opts: ["Opposes supply voltage", "Increases supply voltage", "Reduces flux", "Increases speed always"], ans: 0 },
        { q: "Induction motors are generally?", opts: ["Self-starting", "Need external starter always", "Only single-phase", "Not used industrially"], ans: 0 },
        { q: "Torque in motor is proportional to?", opts: ["Flux and armature current", "Frequency only", "Voltage only", "Resistance only"], ans: 0 }
      ]
    }
  ],

  power: [
    {
      id: "generation",
      label: "Power Generation",
      icon: "⚡",
      desc: "Thermal, hydro and renewable basics",
      color: "#86efac",
      quiz: [
        { q: "Alternators generate?", opts: ["DC", "AC", "Both always", "Pulse only"], ans: 1 },
        { q: "Solar PV converts?", opts: ["Heat to power", "Light to electricity", "Wind to electricity", "Chemical to light"], ans: 1 },
        { q: "Load factor is ratio of?", opts: ["Average load to peak load", "Peak load to average load", "Generation to demand", "Voltage to current"], ans: 0 },
        { q: "Frequency in Indian grid is nominally?", opts: ["50 Hz", "60 Hz", "25 Hz", "100 Hz"], ans: 0 },
        { q: "Plant efficiency improvement reduces?", opts: ["Fuel consumption", "Output power", "Voltage level", "Transmission losses only"], ans: 0 }
      ]
    },
    {
      id: "transmission",
      label: "Transmission",
      icon: "🗼",
      desc: "HV lines and power delivery",
      color: "#4ade80",
      quiz: [
        { q: "High transmission voltage is used to?", opts: ["Increase losses", "Reduce I^2R losses", "Reduce power", "Increase current"], ans: 1 },
        { q: "Corona loss occurs in?", opts: ["Underground cables only", "Overhead lines", "Transformers only", "Batteries"], ans: 1 },
        { q: "Substations are used for?", opts: ["Only generation", "Voltage transformation and switching", "Billing only", "Storage only"], ans: 1 },
        { q: "Per unit system helps in?", opts: ["Complexity reduction in calculations", "Increasing line voltage", "Insulation testing only", "Tariff setting"], ans: 0 },
        { q: "Reactive power is mainly managed by?", opts: ["Capacitors/reactors", "Resistors", "Fuses", "Meters"], ans: 0 }
      ]
    }
  ],

  /* MECH DOMAINS */
  thermo: [
    {
      id: "laws",
      label: "Thermo Laws",
      icon: "🌡️",
      desc: "First and second law fundamentals",
      color: "#ef4444",
      quiz: [
        { q: "First law of thermodynamics is conservation of?", opts: ["Mass", "Energy", "Momentum", "Entropy"], ans: 1 },
        { q: "Second law introduces concept of?", opts: ["Pressure", "Entropy", "Volume", "Enthalpy only"], ans: 1 },
        { q: "A reversible process is?", opts: ["Always fast", "Idealized with no entropy generation", "Impossible", "At constant pressure only"], ans: 1 },
        { q: "SI unit of entropy is?", opts: ["J", "J/kg-K", "Pa", "W"], ans: 1 },
        { q: "Heat engine efficiency is output?", opts: ["Heat input/Work", "Work output/Heat input", "Work input/Heat output", "Power/Volume"], ans: 1 }
      ]
    },
    {
      id: "cycles",
      label: "Power Cycles",
      icon: "🔄",
      desc: "Otto, Diesel and Rankine cycles",
      color: "#f87171",
      quiz: [
        { q: "Otto cycle is ideal cycle for?", opts: ["Diesel engines", "Spark ignition engines", "Gas turbines", "Steam turbines"], ans: 1 },
        { q: "Diesel cycle adds heat at?", opts: ["Constant volume", "Constant pressure", "Constant temperature", "Constant entropy"], ans: 1 },
        { q: "Rankine cycle is used in?", opts: ["Steam power plants", "Petrol engines", "Refrigerators only", "Air compressors only"], ans: 0 },
        { q: "Carnot efficiency depends on?", opts: ["Working fluid only", "Source and sink temperatures", "Pressure ratio", "Cycle speed"], ans: 1 },
        { q: "Regeneration in cycles generally?", opts: ["Lowers efficiency", "Improves thermal efficiency", "Stops turbine", "Increases friction"], ans: 1 }
      ]
    }
  ],

  fluid: [
    {
      id: "properties",
      label: "Fluid Properties",
      icon: "💧",
      desc: "Density, viscosity and pressure",
      color: "#38bdf8",
      quiz: [
        { q: "Pressure at a point in static fluid acts?", opts: ["Only upward", "Only downward", "Equally in all directions", "Only sideways"], ans: 2 },
        { q: "Dynamic viscosity unit is?", opts: ["Pa·s", "N", "J", "m/s"], ans: 0 },
        { q: "Specific gravity is ratio of?", opts: ["Mass to volume", "Fluid density to water density", "Pressure to area", "Force to volume"], ans: 1 },
        { q: "Bernoulli equation is based on conservation of?", opts: ["Mass only", "Energy", "Momentum only", "Charge"], ans: 1 },
        { q: "Reynolds number predicts?", opts: ["Boiling point", "Flow regime", "Fluid color", "Compressibility only"], ans: 1 }
      ]
    },
    {
      id: "flow",
      label: "Flow Mechanics",
      icon: "🌊",
      desc: "Laminar/turbulent flow and continuity",
      color: "#0ea5e9",
      quiz: [
        { q: "Continuity equation is derived from conservation of?", opts: ["Mass", "Energy", "Momentum", "Temperature"], ans: 0 },
        { q: "Laminar flow is generally at?", opts: ["High Reynolds number", "Low Reynolds number", "Any Reynolds number", "Supersonic only"], ans: 1 },
        { q: "Head loss in pipe flow increases with?", opts: ["Smaller roughness and shorter length", "Higher velocity and longer length", "Lower viscosity", "Lower density"], ans: 1 },
        { q: "Venturimeter measures?", opts: ["Temperature", "Discharge/flow rate", "Viscosity", "Density"], ans: 1 },
        { q: "Boundary layer forms due to?", opts: ["No-slip condition", "Perfect slip", "Zero viscosity", "Constant density"], ans: 0 }
      ]
    }
  ],

  manufacturing: [
    {
      id: "casting",
      label: "Casting",
      icon: "🧱",
      desc: "Molds, solidification and defects",
      color: "#84cc16",
      quiz: [
        { q: "Casting process involves?", opts: ["Removing material", "Pouring molten metal into mold", "Only welding", "Only rolling"], ans: 1 },
        { q: "Riser in casting is used to?", opts: ["Decorate mold", "Feed molten metal during shrinkage", "Cool faster", "Filter gases only"], ans: 1 },
        { q: "Common casting defect is?", opts: ["Porosity", "Threading", "Knurling", "Shot peening"], ans: 0 },
        { q: "Pattern allowance is given for?", opts: ["No reason", "Shrinkage and machining", "Color coding", "Lubrication"], ans: 1 },
        { q: "Die casting is suitable for?", opts: ["High volume production", "Single prototype only", "Wood parts", "Ceramic only"], ans: 0 }
      ]
    },
    {
      id: "machining",
      label: "Machining",
      icon: "🛠️",
      desc: "Turning, milling and drilling",
      color: "#65a30d",
      quiz: [
        { q: "Lathe machine primarily performs?", opts: ["Milling", "Turning", "Drilling only", "Grinding only"], ans: 1 },
        { q: "Cutting speed unit is commonly?", opts: ["m/min", "kg/s", "N-m", "Pa"], ans: 0 },
        { q: "Tool wear generally increases with?", opts: ["Lower temperature", "Higher cutting speed", "Lower feed", "Coolant use"], ans: 1 },
        { q: "Milling cutter rotates while workpiece?", opts: ["Always rotates together", "Moves relative to cutter", "Is molten", "Is fixed forever"], ans: 1 },
        { q: "CNC stands for?", opts: ["Computer Numerical Control", "Central Network Control", "Cutting Number Code", "None"], ans: 0 }
      ]
    }
  ],

  /* CIVIL DOMAINS */
  structural: [
    {
      id: "som",
      label: "Strength of Materials",
      icon: "🏛️",
      desc: "Stress, strain and deformation",
      color: "#84cc16",
      quiz: [
        { q: "Stress is force per?", opts: ["Volume", "Area", "Length", "Mass"], ans: 1 },
        { q: "Young's modulus is ratio of?", opts: ["Stress to strain", "Strain to stress", "Load to area", "Force to volume"], ans: 0 },
        { q: "Unit of stress is?", opts: ["N", "Pa", "J", "W"], ans: 1 },
        { q: "Shear stress acts?", opts: ["Normal to area", "Tangential to area", "At center only", "Randomly"], ans: 1 },
        { q: "Factor of safety is?", opts: ["Ultimate stress / working stress", "Working stress / ultimate stress", "Load / area", "Stress / strain"], ans: 0 }
      ]
    },
    {
      id: "rcdesign",
      label: "RCC Design",
      icon: "🏗️",
      desc: "Reinforced concrete member design",
      color: "#65a30d",
      quiz: [
        { q: "Concrete is strong in?", opts: ["Tension", "Compression", "Both equal", "Neither"], ans: 1 },
        { q: "Steel reinforcement is mainly provided to resist?", opts: ["Compression only", "Tension", "Color fading", "Shrinkage only"], ans: 1 },
        { q: "M20 concrete means characteristic strength of?", opts: ["10 MPa", "20 MPa", "30 MPa", "40 MPa"], ans: 1 },
        { q: "Clear cover in RCC is provided for?", opts: ["Decoration", "Corrosion and fire protection", "Weight reduction", "Faster curing"], ans: 1 },
        { q: "Limit state design considers?", opts: ["Only collapse", "Safety and serviceability", "Only economy", "Only aesthetics"], ans: 1 }
      ]
    }
  ],

  geotech: [
    {
      id: "soilprops",
      label: "Soil Properties",
      icon: "🌍",
      desc: "Classification and index properties",
      color: "#b45309",
      quiz: [
        { q: "Soil with particle size < 0.002 mm is?", opts: ["Sand", "Silt", "Clay", "Gravel"], ans: 2 },
        { q: "Atterberg limits apply mainly to?", opts: ["Coarse soils", "Fine-grained soils", "Rocks", "Concrete"], ans: 1 },
        { q: "Void ratio is ratio of?", opts: ["Volume of voids to volume of solids", "Solids to voids", "Water to air", "Mass to volume"], ans: 0 },
        { q: "Specific gravity of soil solids is around?", opts: ["0.5", "1.0", "2.65", "5.0"], ans: 2 },
        { q: "Compaction increases?", opts: ["Void space", "Dry density", "Water content always", "Compressibility"], ans: 1 }
      ]
    },
    {
      id: "foundations",
      label: "Foundations",
      icon: "🧱",
      desc: "Bearing capacity and settlement",
      color: "#92400e",
      quiz: [
        { q: "Shallow foundations include?", opts: ["Pile foundation", "Raft footing", "Caisson", "Well foundation"], ans: 1 },
        { q: "Bearing capacity is the soil's ability to?", opts: ["Hold water", "Support loads safely", "Increase settlement", "Reduce cohesion"], ans: 1 },
        { q: "Pile foundations are used when?", opts: ["Top soil is weak", "Soil is always hard", "No loads exist", "Only for small buildings"], ans: 0 },
        { q: "Settlement should be?", opts: ["Unlimited", "Within permissible limits", "Ignored", "Maximum possible"], ans: 1 },
        { q: "SPT is used to estimate?", opts: ["Concrete strength", "Soil resistance/profile", "Steel grade", "Traffic density"], ans: 1 }
      ]
    }
  ],

  transport: [
    {
      id: "highway",
      label: "Highway Engineering",
      icon: "🛣️",
      desc: "Road geometry and pavement basics",
      color: "#22c55e",
      quiz: [
        { q: "Camber on roads is provided for?", opts: ["Aesthetics", "Drainage", "Speed increase", "Lane marking"], ans: 1 },
        { q: "Flexible pavement primarily uses?", opts: ["Bituminous layers", "Prestressed concrete only", "Steel plates", "Wood"], ans: 0 },
        { q: "Super-elevation helps vehicles on curves by?", opts: ["Reducing sight distance", "Countering centrifugal force", "Increasing potholes", "Reducing friction to zero"], ans: 1 },
        { q: "IRC in India relates to?", opts: ["Road standards", "Railways", "Airports", "Ports only"], ans: 0 },
        { q: "PCU stands for?", opts: ["Pavement Control Unit", "Passenger Car Unit", "Public Corridor Unit", "None"], ans: 1 }
      ]
    },
    {
      id: "traffic",
      label: "Traffic Engineering",
      icon: "🚦",
      desc: "Flow, control and intersection design",
      color: "#16a34a",
      quiz: [
        { q: "Traffic volume is measured in?", opts: ["km/h", "vehicles per unit time", "tons", "joules"], ans: 1 },
        { q: "LOS in traffic engineering means?", opts: ["Level of Service", "Length of Signal", "Lane Operating Speed", "Line of Sight"], ans: 0 },
        { q: "Signal cycle time is?", opts: ["Time for one complete red-yellow-green sequence", "Only green interval", "Only red interval", "Pedestrian time"], ans: 0 },
        { q: "Peak Hour Factor indicates?", opts: ["Fuel efficiency", "Variation in traffic flow during peak hour", "Pavement thickness", "Road safety only"], ans: 1 },
        { q: "Roundabouts generally help by?", opts: ["Increasing conflict points", "Reducing severe conflict points", "Eliminating all delays", "Increasing stop times"], ans: 1 }
      ]
    }
  ]
};

export { TOPICS_DATA };
