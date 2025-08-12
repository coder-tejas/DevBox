"use client";
import React, { useState, useEffect } from "react";
import {
  Code2,
  Sparkles,
  Zap,
  Globe,
  ArrowRight,
  Terminal,
  PlayCircle,
} from "lucide-react";
import UserButton from "@/features/auth/components/user-button";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState<Array<{ id: number; left: number; top: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }));
    setStars(newStars);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Stars */}
      <div className="fixed inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white opacity-30 animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      {/* Gradient Orb that follows mouse */}
      <div
        className="fixed w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            DevBox
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Docs
          </a>
          <UserButton />

          <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition-all shadow-lg shadow-purple-500/50">
            <a href="/dashboard">
              Start Building
              </a>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-32">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">
              AI-Powered Development
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block">Code Anywhere,</span>
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Deploy Instantly
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A cloud-based IDE with AI assistance that helps you build, test, and
            deploy your projects faster than ever before.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a href="/dashboard">
            <button className="group px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition-all shadow-2xl shadow-purple-500/50 font-semibold text-lg flex items-center gap-2">
                Start Coding Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
                </a>
            <button className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all font-semibold text-lg flex items-center gap-2">
              <PlayCircle className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-violet-500/20 mx-auto mb-4">
                <Zap className="w-6 h-6 text-violet-400" />
              </div>
              <div className="text-3xl font-bold mb-2">10x Faster</div>
              <div className="text-gray-400">Development Speed</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/20 mx-auto mb-4">
                <Terminal className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-3xl font-bold mb-2">50+ Languages</div>
              <div className="text-gray-400">Supported</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-pink-500/20 mx-auto mb-4">
                <Globe className="w-6 h-6 text-pink-400" />
              </div>
              <div className="text-3xl font-bold mb-2">1M+ Devs</div>
              <div className="text-gray-400">Trust DevBox</div>
            </div>
          </div>  
        </div>
      </main>
    </div>
  );
}
