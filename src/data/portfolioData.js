/**
 * Portfolio Data Configuration for Ayush Sachan
 * Editorial, high-craft portfolio data inspired by nirbhay.me
 */

export const personalInfo = {
  name: "Ayush Sachan",
  location: "India",
  status: "Available for ECE & Embedded Internships",
  tagline: "Electronics & Communication Engineering Undergrad",
  lede: "Hardware and embedded systems builder. I design resilient IoT devices, sensor networks, and edge automation systems.",
  
  bullets: [
    {
      text: "Building ",
      bold: "Sync-Space",
      after: ", a distributed multi-node automation and safety system powered by Raspberry Pi Zero and ESP32 with mmWave human respiration sensing and 100% offline RF failover."
    },
    {
      text: "Writing firmware routines in ",
      bold: "Embedded C/C++ and Python",
      after: ", implementing sensor fusion (mmWave radar, MQ gas, flame, DHT22) and dynamic power load-shedding algorithms."
    },
    {
      text: "Undergraduate in ",
      bold: "Electronics & Communication Engineering (ECE)",
      after: ", focused on microcontrollers, signals, and hardware-software co-design."
    }
  ],

  email: "ayushsachan.work@gmail.com",
  github: "https://github.com/ayushsachan-9",
  linkedin: "https://linkedin.com",
  resumeUrl: "#", // Update with your resume PDF link or place resume.pdf in public/
};

export const projectsData = [
  {
    id: "sync-space",
    title: "Sync-Space",
    status: "Live Prototype",
    image: "/images/homeautomation.png",
    description: "A distributed, multi-tiered edge automation and environmental safety system. Uses high-frequency mmWave radar to detect human respiration micro-movements (preventing the false shut-offs of standard PIR sensors), learns temporal temperature habits, manages water tank utilities, and falls back to 433MHz RF for 100% offline operation when internet drops.",
    stack: [
      "Raspberry Pi Zero",
      "ESP32",
      "mmWave Radar",
      "Embedded C++",
      "Python",
      "MQTT",
      "RF 433MHz",
      "Relays"
    ],
    details: {
      problem: "Commercial smart devices depend on constant cloud connections and use cheap PIR motion sensors that turn off lights if someone sits still or sleeps. Sync-Space solves this with mmWave respiration detection, local edge broker coordination, and dual-layer RF backup.",
      hardware: [
        "Raspberry Pi Zero (Central Local Hub / Edge Broker)",
        "ESP32 Microcontrollers (Distributed Room Nodes)",
        "mmWave Radar Sensor (Respiration & Micro-Movement Presence)",
        "Optoisolated Multi-Channel Relays (Mains Appliance Switching)",
        "433MHz RF Transceivers (Zero-Internet Remote Control)",
        "Sensors: MQ-135 (Air Quality), MQ-2 (Gas/Smoke), Flame, DHT22"
      ],
      modes: [
        { name: "Normal Mode", desc: "Turns off appliances automatically when mmWave detects zero human respiration in the room." },
        { name: "Smart Mode", desc: "Combines sensor data with learned daily habits to set optimal AC temperatures automatically." },
        { name: "Extreme Mode", desc: "Gates vampire loads on idle sockets and alerts users of abnormal energy draws." },
        { name: "Ultra-Low Power Mode", desc: "Extended away/vacation mode with real-time monthly billing forecasting." }
      ]
    }
  },
  {
    id: "library-system",
    title: "Library Management System",
    status: "Completed",
    image: "/images/library-management.jpg",
    description: "A streamlined resource management application engineered to solve asset checkouts, inventory indexing, and student records to eliminate manual paper logs.",
    stack: [
      "Database Architecture",
      "Python",
      "SQL",
      "System Design",
      "Inventory Tracking"
    ],
    details: {
      problem: "Manual book checkout and ledger record-keeping cause inventory bottlenecks and tracking errors in institutional libraries.",
      hardware: [
        "Database Engine (Structured SQL indexing)",
        "Client Management Terminal",
        "Barcode / RFID Scanner Interface"
      ]
    }
  },
  {
    id: "project-3",
    title: "Project #3 (In Development)",
    status: "Work in progress",
    image: null,
    description: "Currently working on my next hardware innovation. Circuit schematics, firmware code, and test bench telemetry will be added here soon.",
    stack: [
      "Microcontroller",
      "Firmware Development",
      "Circuit Prototyping",
      "Embedded C"
    ]
  }
];

export const skillsList = [
  {
    title: "Microcontrollers & Compute",
    items: "ESP32 (Wi-Fi/BLE, FreeRTOS), Raspberry Pi Zero / 4 (Linux Edge Hub), Arduino Uno/Nano, STM32"
  },
  {
    title: "Sensors & Actuators",
    items: "mmWave Radar (Respiration Sensing), DHT22, MQ-135 (AQI), MQ-2 (Smoke/Gas), Infrared Flame, Relays, 433MHz RF"
  },
  {
    title: "Protocols & Networking",
    items: "MQTT, WebSockets, I2C, SPI, UART, Wi-Fi 802.11, RF 433MHz Transceivers"
  },
  {
    title: "Languages & Tools",
    items: "C, C++, Python, Embedded C, PlatformIO, Git, Linux / Bash, Circuit Breadboarding & Schematics"
  }
];

export const educationInfo = {
  degree: "Bachelor of Technology — Electronics & Communication Engineering",
  institution: "Engineering College / University",
  period: "2023 – 2027",
  coursework: [
    "Microprocessors & Microcontrollers",
    "Digital Electronics & Logic Design",
    "Signals & Systems",
    "Analog Circuits",
    "Computer Networks",
    "Sensors & Transducers"
  ]
};
