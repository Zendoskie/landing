'use client';

import { useState } from 'react';

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      title: "AI-Powered Evaluation",
      description: "Advanced AI analysis for comprehensive answer evaluation and feedback",
      icon: "🤖",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      title: "Enumeration Checker",
      description: "Precise enumeration verification with expected answer matching",
      icon: "📋",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      title: "Advanced Analytics",
      description: "Detailed performance insights and learning progress tracking",
      icon: "📊",
      gradient: "from-green-400 to-emerald-400"
    },
    {
      title: "AI Chat Assistant",
      description: "Interactive AI support for learning and problem-solving guidance",
      icon: "💬",
      gradient: "from-orange-400 to-red-400"
    }
  ];

  return (
    <div className="min-h-screen w-full gradient-bg relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 p-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          OpenE
        </div>
        <div className="flex gap-6 text-sm text-uGrayLight">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#download" className="hover:text-primary transition-colors">Download</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-uBlue mb-6 animate-float">
            OpenE
          </h1>
          <h2 className="text-2xl md:text-3xl text-uGray dark:text-uGrayLight font-light mb-8 leading-relaxed">
            Computer Literacy Evaluation Platform
          </h2>
          <p className="text-lg md:text-xl text-uGrayLight dark:text-uGrayLightLight mb-12 max-w-2xl mx-auto leading-relaxed">
            A powerful desktop application designed for comprehensive evaluation and analysis of computer science concepts with AI-powered insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-primary to-uBlue text-white dark:text-uBlack font-semibold px-8 py-4 rounded-xl text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
              Download OpenE
            </button>
            <button className="glass-dark text-primary border border-primary/30 font-semibold px-8 py-4 rounded-xl text-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105">
              View on GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-uBlack dark:text-uGray mb-6">
              Powerful Features
            </h3>
            <p className="text-xl text-uGrayLight dark:text-uGrayLightLight max-w-2xl mx-auto">
              Everything you need for comprehensive computer literacy evaluation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="glass-dark p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group cursor-pointer hover:-translate-y-2"
              >
                <div className={`text-4xl mb-4 transition-transform duration-300 ${hoveredFeature === index ? 'scale-110' : ''}`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-uBlack dark:text-uGray mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h4>
                <p className="text-uGrayLight dark:text-uGrayLightLight leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-dark p-12 rounded-3xl">
            <h3 className="text-4xl font-bold text-uBlack dark:text-uGray mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-uGrayLight dark:text-uGrayLightLight mb-8 leading-relaxed">
              Download OpenE and transform your computer literacy evaluation experience
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button className="bg-gradient-to-r from-primary to-uBlue text-white dark:text-uBlack font-semibold px-10 py-4 rounded-xl text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <span>🖥️</span>
                Download for Windows
              </button>
              <button className="bg-gradient-to-r from-uGray to-uGrayLight text-white font-semibold px-10 py-4 rounded-xl text-lg shadow-xl hover:shadow-uGray/25 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <span>🍎</span>
                Download for macOS
              </button>
            </div>
            
            <div className="text-sm text-uGrayLightLight space-y-2">
              <p>System Requirements: Windows 10+ / macOS 10.15+</p>
              <p>Version 0.1.0 • Released 2025 • MIT License</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h3 className="text-4xl font-bold text-uBlack dark:text-uGray mb-8">
              About OpenE
            </h3>
            <p className="text-lg text-uGray dark:text-uGrayLight leading-relaxed mb-8">
              OpenE is a modern desktop application built with Tauri and React, designed specifically for 
              computer literacy education. Our platform combines cutting-edge AI technology with intuitive 
              design to provide comprehensive evaluation tools for educators and students alike.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-uGrayLight">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Tauri</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">React</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">TypeScript</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">AI-Powered</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Cross-Platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-uGrayLight text-sm mb-4 md:mb-0">
            © 2025 OpenE. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-uGrayLight">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}