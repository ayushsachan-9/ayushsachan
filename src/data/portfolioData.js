/**
 * Portfolio Data Configuration for Ayush Sachan
 * Grounded, human, and authentic portfolio data for an ECE student.
 */

export const personalInfo = {
  name: "Ayush Sachan",
  title: "Electronics & Communication Engineering Undergrad",
  tagline: "I build hardware and embedded systems that solve real everyday problems.",
  bio: [
    "I'm an undergraduate studying Electronics & Communication Engineering (ECE). I like working at the intersection of circuits, microcontrollers, and software.",
    "A lot of off-the-shelf smart devices stop working when the internet drops, or use cheap motion sensors that turn off the lights if you sit still reading a book. In my projects, I focus on building resilient, practical systems—like using mmWave radar that detects human breathing so lights don't shut off, and adding 433MHz RF backups so everything keeps working without Wi-Fi."
  ],
  email: "ayushsachan.work@gmail.com", // EDIT: Update with your active email
  github: "https://github.com",        // EDIT: Add your GitHub profile URL
  linkedin: "https://linkedin.com",    // EDIT: Add your LinkedIn profile URL
  resumeUrl: "#",                      // EDIT: Link to your resume PDF or place resume.pdf in /public
  location: "India",
  status: "Looking for summer / ECE internships",
};

export const skillsData = [
  {
    category: "Microcontrollers & Embedded",
    items: [
      { name: "ESP32 & ESP8266", note: "Wi-Fi, Bluetooth BLE, GPIOs, FreeRTOS" },
      { name: "Raspberry Pi Zero / 4", note: "Linux edge server, local MQTT broker, scripting" },
      { name: "Arduino (Uno / Nano)", note: "Rapid prototyping, peripheral interfacing" },
      { name: "C / C++", note: "Firmware logic, memory-efficient embedded code" },
      { name: "Python", note: "Automation scripts, data processing on Pi" },
    ]
  },
  {
    category: "Sensors & Actuators",
    items: [
      { name: "mmWave Radar", note: "Human micro-movement and breathing detection" },
      { name: "Temperature & Humidity (DHT22)", note: "Ambient room climate monitoring" },
      { name: "Air Quality (MQ-135)", note: "Air pollution & ventilation trigger" },
      { name: "Gas & Smoke (MQ-2)", note: "Hazardous gas and smoke monitoring" },
      { name: "Flame Sensor", note: "Fire detection & safety tripwires" },
      { name: "Relay Modules", note: "Mains AC appliance switching & isolation" },
      { name: "433MHz RF Modules", note: "Offline remote control transceiver" },
    ]
  },
  {
    category: "Protocols & Communication",
    items: [
      { name: "MQTT & WebSockets", note: "Low-latency device-to-hub communication" },
      { name: "I2C, SPI, UART", note: "Serial communication with sensor modules" },
      { name: "Wi-Fi & RF 433MHz", note: "Dual-layer wireless control with offline fallback" },
    ]
  },
  {
    category: "Core ECE & Tools",
    items: [
      { name: "Digital Electronics", note: "Logic design, microprocessors" },
      { name: "Circuit Prototyping", note: "Breadboarding, schematics, power supply wiring" },
      { name: "Git & Linux", note: "Version control, headless server setup" },
    ]
  }
];

export const syncSpaceDetails = {
  title: "Sync-Space",
  subtitle: "Home & Industrial Automation System with mmWave Presence and Offline Fallback",
  image: "/images/homeautomation.png",
  whyIBuiltIt: "Commercial smart switches have two big flaws: they depend 100% on cloud internet to do anything, and they use simple PIR motion sensors that turn off the lights if someone is simply sitting quietly or sleeping. I wanted to build an automation system that works reliably offline, senses real human presence through micro-movements, and actively saves electricity based on actual habits.",
  
  hardwareStack: [
    { component: "Raspberry Pi Zero", role: "Central Hub / Local Server (handles logic, logs habits, coordinates nodes)" },
    { component: "ESP32 Microcontrollers", role: "Room Nodes (one per room to read sensors and switch relays)" },
    { component: "mmWave Radar Sensor", role: "Detects human respiration/micro-movements, avoiding false shut-offs" },
    { component: "Multi-channel Relays", role: "Switches AC appliances (lights, fans, air conditioner, plugs)" },
    { component: "433MHz RF Transceiver", role: "Provides local remote control when Wi-Fi or Internet is completely down" },
    { component: "Sensors (DHT22, MQ-135, MQ-2, Flame)", role: "Monitors temperature, humidity, air quality, gas leaks, and fire" },
    { component: "Ultrasonic / Level Sensor", role: "Tracks water tank level to prevent overflows and schedule cleaning" }
  ],

  keyFeatures: [
    {
      title: "Respiration-Based Presence (mmWave)",
      desc: "Instead of standard PIR sensors that only catch walking movement, mmWave radar detects the subtle chest motion of human breathing. Appliances stay on while you are in the room, and reliably turn off when everyone leaves."
    },
    {
      title: "100% Offline Control (Zero Cloud Lock-in)",
      desc: "If the internet goes down, everything still works. The Raspberry Pi Zero runs the broker locally, and appliances can be switched via a 433MHz RF remote, local voice, or standard manual wall switches."
    },
    {
      title: "Adaptive Temperature & Habit Learning",
      desc: "Learns daily habits over time. For example, if you consistently set the AC to a specific temperature at night, the hub correlates ambient room temperature with past patterns and sets it automatically."
    },
    {
      title: "Geofencing Arrival Prep",
      desc: "Defines a geographic radius around the house. When returning from college or work, the system triggers the AC to bring the room to a comfortable temperature before you walk in."
    },
    {
      title: "Water Tank Management",
      desc: "Monitors water level in the overhead tank, automatically turns off the pump to eliminate water wastage, and issues alerts when the tank needs periodic cleaning."
    },
    {
      title: "Industrial & Safety Adaptation",
      desc: "Can be adapted for small workshops and labs using MQ-135 and MQ-2 sensors to monitor hazardous gases, smoke, and fire, sounding local alarms immediately."
    }
  ],

  powerModes: [
    {
      name: "Normal Mode",
      summary: "Turns off appliances automatically when sensors detect nobody in the room."
    },
    {
      name: "Smart Mode",
      summary: "Combines sensor data with learned daily routines to balance comfort and electricity savings."
    },
    {
      name: "Extreme Mode",
      summary: "Identifies phantom/vampire loads from idle sockets and switches them off to minimize electricity bills."
    },
    {
      name: "Ultra-Low Power Mode",
      summary: "Away / vacation setting. Shuts down non-critical circuits and estimates monthly energy consumption."
    }
  ]
};

export const otherProjects = [
  {
    id: "library-system",
    title: "Library Management System",
    category: "Software & Database System",
    image: "/images/library-management.jpg",
    description: "A desktop/web management application designed to handle book indexing, student checkouts, return tracking, and inventory logs to eliminate paper record keeping.",
    tech: ["Database Management", "Python / SQL", "UI Interface", "Automation"],
    status: "Completed"
  },
  {
    id: "project-3",
    title: "Project #3 (In Progress)",
    category: "Embedded / Hardware",
    image: null,
    description: "Currently working on my next hardware project. Circuit schematics, firmware code, and test results will be added here soon.",
    tech: ["Microcontroller", "Circuit Prototyping", "C / C++"],
    status: "Work in progress"
  }
];

export const education = {
  degree: "B.Tech in Electronics & Communication Engineering (ECE)",
  institution: "Engineering College / University", // EDIT: Your university name
  batch: "2023 – 2027",                           // EDIT: Your batch
  coursework: [
    "Microprocessors & Microcontrollers",
    "Digital Electronics & Logic Design",
    "Signals and Systems",
    "Sensors & Transducers",
    "Computer Networks",
    "Analog Circuits"
  ]
};
