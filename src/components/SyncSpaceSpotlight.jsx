import React, { useState } from 'react';
import { syncSpaceDetails } from '../data/portfolioData';
import { Cpu, Radio, Zap, AlertCircle } from 'lucide-react';

export default function SyncSpaceSpotlight() {
  const [activeModeIndex, setActiveModeIndex] = useState(1);

  return (
    <section id="sync-space" className="py-16 md:py-24 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
            Featured Project // Hardware Case Study
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {syncSpaceDetails.title}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {syncSpaceDetails.subtitle}
          </p>
        </div>

        {/* Prototype Photo */}
        <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 mb-10">
          <div className="p-2 sm:p-4 flex items-center justify-center bg-black/40">
            <img
              src={syncSpaceDetails.image}
              alt="Sync Space hardware prototype setup"
              className="w-full max-h-[460px] object-contain rounded-lg"
              onError={(e) => {
                e.target.src = "/image/homeautomation.png";
              }}
            />
          </div>
          <div className="px-4 py-2.5 border-t border-neutral-800 text-xs text-neutral-400 bg-neutral-900/50 flex items-center justify-between">
            <span>Hardware prototype bench test & component layout</span>
            <span className="text-neutral-500 font-mono">Raspberry Pi Zero + ESP32 Nodes</span>
          </div>
        </div>

        {/* Why I Built It */}
        <div className="mb-12 p-6 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-3">
          <h3 className="text-base font-semibold text-white flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-neutral-300" />
            <span>Problem & Motivation</span>
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            {syncSpaceDetails.whyIBuiltIt}
          </p>
        </div>

        {/* How It Works & Architecture */}
        <div className="space-y-6 mb-12">
          <h3 className="text-lg font-bold text-white tracking-tight">
            System Architecture
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-2">
              <div className="text-sm font-semibold text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-neutral-300" />
                <span>Central Hub (Raspberry Pi Zero)</span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Runs the local server and MQTT broker. Logs daily usage patterns, correlates ambient room temperatures with user AC adjustments, and coordinates room nodes without sending telemetry to external cloud servers.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-2">
              <div className="text-sm font-semibold text-white flex items-center gap-2">
                <Radio className="w-4 h-4 text-neutral-300" />
                <span>Room Nodes (ESP32)</span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Deployed per room to read UART data from mmWave radar sensors, read analog sensor signals (gas, flame, humidity), and drive optoisolated relays that switch mains AC appliances.
              </p>
            </div>
          </div>
        </div>

        {/* Key Engineering Details */}
        <div className="space-y-6 mb-12">
          <h3 className="text-lg font-bold text-white tracking-tight">
            Key Engineering Features
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {syncSpaceDetails.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-1.5"
              >
                <div className="font-semibold text-sm text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0"></span>
                  <span>{feat.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pl-3.5">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Power Modes */}
        <div className="p-6 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-5 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-neutral-300" />
                <span>Energy Saving Modes</span>
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Firmware routines configured to reduce electricity waste:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {syncSpaceDetails.powerModes.map((mode, idx) => (
              <button
                key={idx}
                onClick={() => setActiveModeIndex(idx)}
                className={`p-3 rounded-lg text-left border text-xs transition-colors ${
                  activeModeIndex === idx
                    ? 'bg-neutral-800 border-neutral-600 text-white font-medium'
                    : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <div className="font-semibold">{mode.name}</div>
              </button>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-neutral-300">
            <span className="font-semibold text-white mr-2">
              {syncSpaceDetails.powerModes[activeModeIndex].name}:
            </span>
            <span>{syncSpaceDetails.powerModes[activeModeIndex].summary}</span>
          </div>
        </div>

        {/* Bill of Materials / Components */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-white">
            Hardware Components Used
          </h3>

          <div className="divide-y divide-neutral-800 border border-neutral-800 rounded-xl overflow-hidden bg-neutral-900/30">
            {syncSpaceDetails.hardwareStack.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 text-sm"
              >
                <span className="font-mono text-xs sm:text-sm text-neutral-200 font-semibold sm:w-1/3">
                  {item.component}
                </span>
                <span className="text-xs sm:text-sm text-neutral-400 sm:w-2/3">
                  {item.role}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
