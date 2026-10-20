import React from 'react';
import { Cpu, Radio, Shield, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Cpu,
      title: "Microcontrollers & Edge Hubs",
      desc: "Working with ESP32 and Raspberry Pi Zero for distributed setups where local nodes make decisions without depending on remote servers."
    },
    {
      icon: Radio,
      title: "Sensor Interfacing",
      desc: "Interfacing mmWave radar, gas, temperature, and flame sensors over UART, I2C, and analog pins for accurate real-time telemetry."
    },
    {
      icon: Shield,
      title: "Offline-First Design",
      desc: "Designing hardware with dual-mode fallback: Wi-Fi when available, 433MHz RF and manual relays when the network drops."
    },
    {
      icon: Zap,
      title: "Power & Automation Logic",
      desc: "Writing firmware routines to gate vampire loads, turn off unused circuits, and manage utility systems like water pumps."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="space-y-3 mb-10">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            How I Approach Hardware
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            I focus on practical engineering rather than just connecting modules together. The goal is always to make systems that are reliable, fault-tolerant, and straightforward to maintain.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-2"
              >
                <div className="flex items-center gap-2.5 text-white font-medium text-base">
                  <div className="p-1.5 rounded-lg bg-neutral-800 text-neutral-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{item.title}</span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed pl-8">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
