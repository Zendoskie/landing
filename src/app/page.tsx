'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "GPT-4o Integration",
      description: "Advanced AI analysis using OpenAI's latest GPT-4o model for comprehensive answer evaluation",
      icon: "🤖",
      screenshot: "/screenshots/gpt-integration.png"
    },
    {
      title: "NLP Analysis",
      description: "Natural Language Processing for accurate understanding and scoring of student responses",
      icon: "🧠",
      screenshot: "/screenshots/nlp-analysis.png"
    },
    {
      title: "Instant Feedback",
      description: "Get detailed, constructive feedback in seconds rather than hours of manual grading",
      icon: "⚡",
      screenshot: "/screenshots/instant-feedback.png"
    },
    {
      title: "Consistent Scoring",
      description: "Eliminate grading inconsistencies with standardized AI evaluation criteria",
      icon: "📊",
      screenshot: "/screenshots/consistent-scoring.png"
    }
  ];

  const researchers = [
    {
      name: "Jr Nino Garingarao",
      role: "Developer",
      email: "jngaringarao@example.com",
      github: "https://github.com/jrgaringarao"
    },
    {
      name: "John Paul Marquez",
      role: "UI/UX Designer",
      email: "jpmarquez@example.com",
      github: "https://github.com/johnpaulmarquez"
    },
    {
      name: "Alyssa Jane Marquez",
      role: "Project Manager",
      email: "ajmarquez@example.com",
      github: "https://github.com/alyssajmarquez"
    }
  ];

  const faqs = [
    {
      question: "How accurate is the AI evaluation compared to human grading?",
      answer: "Our system achieves 95%+ consistency with expert human evaluators through advanced GPT-4o integration and NLP analysis, while eliminating human bias and fatigue factors."
    },
    {
      question: "What subjects can Open2E evaluate?",
      answer: "Open2E is perfect for computer literacy, critical thinking subjects, essay questions, and any open-ended responses that require analytical evaluation."
    },
    {
      question: "How fast is the evaluation process?",
      answer: "Evaluations are completed in seconds, compared to minutes or hours for manual grading. Batch processing allows hundreds of responses to be evaluated simultaneously."
    },
    {
      question: "Is student data secure?",
      answer: "Yes, we prioritize data security with encrypted processing and do not store student responses permanently. All evaluations are processed securely through our API."
    },
    {
      question: "Can teachers customize evaluation criteria?",
      answer: "Absolutely! Teachers can set custom rubrics, weight different aspects of answers, and adjust scoring parameters to match their specific requirements."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated grid background */}
      <div className="fixed inset-0 railway-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 railway-bg pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/10">
        <div className="railway-container">
          <div className="flex items-center justify-between h-16">
            <div className={`flex items-center space-x-3 transition-all duration-700 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              {/* Logo */}
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-indigo-500 rounded-lg flex items-center justify-center animate-pulse-glow">
                <span className="text-black font-bold text-sm">2E</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Open2E</span>
            </div>
            
            <div className={`hidden md:flex items-center space-x-8 transition-all duration-700 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <a href="#objective" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Objective</a>
              <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Features</a>
              <a href="#team" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Team</a>
              <a href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">FAQ</a>
              <a href="#download" className="railway-btn-secondary px-4 py-2 rounded-lg text-sm">Download</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative railway-section">
        <div className="railway-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="text-6xl md:text-8xl font-bold railway-heading mb-6 animate-float">
                <span className="bg-gradient-to-r from-yellow-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Open2E
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-light mb-6 text-gray-300 leading-relaxed">
                AI-Powered Open-Ended Question Evaluation
              </p>
              <p className="text-lg railway-text max-w-2xl mx-auto mb-12">
                Intelligent evaluation tool that uses GPT-4o and NLP to automatically analyze and score student responses — providing clear, consistent, and constructive feedback in seconds.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="railway-btn-primary px-8 py-4 rounded-xl text-lg font-semibold">
                  Try Open2E Now
                </button>
                <button className="railway-btn-secondary px-8 py-4 rounded-xl text-lg font-semibold">
                  View Research
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objective Section */}
      <section id="objective" className="relative railway-section border-t border-white/10">
        <div className="railway-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold railway-heading mb-8">
              Research Objective
            </h2>
            <div className="railway-card p-8 mx-auto">
              <p className="text-xl railway-text leading-relaxed mb-6">
                Manual grading of open-ended questions is slow, inconsistent, and stressful for both teachers and students. 
                Our intelligent evaluation tool uses <span className="text-yellow-400 font-semibold">GPT-4o and NLP</span> to automatically 
                analyze and score student responses — providing clear, consistent, and constructive feedback in seconds.
              </p>
              <p className="text-lg text-gray-400">
                Perfect for computer literacy and other critical-thinking subjects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative railway-section border-t border-white/10">
        <div className="railway-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold railway-heading mb-6">
              Key Features
            </h2>
            <p className="text-xl railway-text max-w-2xl mx-auto">
              Advanced AI technology for revolutionary educational assessment
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="railway-card p-8 railway-hover-lift">
                <div className="flex items-start space-x-6">
                  <div className="text-4xl p-3 bg-gradient-to-br from-yellow-400/20 to-indigo-500/20 rounded-xl">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold railway-heading mb-3">
                      {feature.title}
                    </h3>
                    <p className="railway-text mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    {/* Screenshot placeholder */}
                    <div className="w-full h-48 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center border border-white/10 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="text-center z-10">
                        <div className="text-3xl mb-2 opacity-50">🖼️</div>
                        <div className="text-sm text-gray-400">Screenshot Preview</div>
                        <div className="text-xs text-gray-500 mt-1">{feature.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative railway-section border-t border-white/10">
        <div className="railway-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold railway-heading mb-6">
              Research Team
            </h2>
            <p className="text-xl railway-text max-w-2xl mx-auto">
              Meet the minds behind Open2E's innovative AI evaluation technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {researchers.map((researcher, index) => (
              <div key={index} className="railway-card p-8 text-center railway-hover-lift">
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl text-black font-bold">
                    {researcher.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold railway-heading mb-2">
                  {researcher.name}
                </h3>
                <p className="text-yellow-400 font-medium mb-4">{researcher.role}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <a href={`mailto:${researcher.email}`} className="text-gray-400 hover:text-white transition-colors">
                      {researcher.email}
                    </a>
                  </div>
                  <div>
                    <a href={researcher.github} className="text-indigo-400 hover:text-indigo-300 transition-colors" target="_blank" rel="noopener noreferrer">
                      GitHub Profile →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative railway-section border-t border-white/10">
        <div className="railway-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold railway-heading mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl railway-text">
                Common questions about Open2E's AI evaluation system
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="railway-card overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-all duration-200"
                  >
                    <h3 className="text-lg font-semibold railway-heading pr-4">
                      {faq.question}
                    </h3>
                    <div className={`text-yellow-400 text-xl transform transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                      +
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6">
                      <p className="railway-text leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative railway-section border-t border-white/10">
        <div className="railway-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="railway-card p-12">
              <h2 className="text-4xl font-bold railway-heading mb-6">
                Download Open2E
              </h2>
              <p className="text-xl railway-text mb-8 leading-relaxed">
                Get started with AI-powered evaluation for your educational needs
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button className="railway-btn-primary px-10 py-4 rounded-xl text-lg font-semibold flex items-center space-x-2">
                  <span>🐧</span>
                  <span>Download for Linux</span>
                </button>
                <button className="railway-btn-secondary px-10 py-4 rounded-xl text-lg font-semibold flex items-center space-x-2">
                  <span>🖥️</span>
                  <span>Download for Windows</span>
                </button>
              </div>
              
              <div className="text-sm text-gray-500 space-y-1">
                <p>System Requirements: Linux (Ubuntu 20.04+) / Windows 10+</p>
                <p>Version 1.0.0 • Research Release • Open Source</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12">
        <div className="railway-container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">2E</span>
              </div>
              <span className="text-xl font-bold">Open2E</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="https://github.com/your-repo/open2e" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://facebook.com/open2e" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://instagram.com/open2e" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm border-t border-white/10 pt-8">
            <p>© 2025 Open2E Research Project. All rights reserved.</p>
            <p className="mt-2">Developed by Jr Nino Garingarao, John Paul Marquez, and Alyssa Jane Marquez</p>
          </div>
        </div>
      </footer>
    </div>
  );
}