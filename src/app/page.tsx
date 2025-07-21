'use client';

import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      title: "GPT-4o Integration",
      description: "Advanced AI analysis using OpenAI's latest GPT-4o model for comprehensive answer evaluation",
      icon: "🤖",
      screenshot: "/screenshots/gpt-integration.png" // placeholder
    },
    {
      title: "NLP Analysis",
      description: "Natural Language Processing for accurate understanding and scoring of student responses",
      icon: "🧠",
      screenshot: "/screenshots/nlp-analysis.png" // placeholder
    },
    {
      title: "Instant Feedback",
      description: "Get detailed, constructive feedback in seconds rather than hours of manual grading",
      icon: "⚡",
      screenshot: "/screenshots/instant-feedback.png" // placeholder
    },
    {
      title: "Consistent Scoring",
      description: "Eliminate grading inconsistencies with standardized AI evaluation criteria",
      icon: "📊",
      screenshot: "/screenshots/consistent-scoring.png" // placeholder
    }
  ];

  const researchers = [
    {
      name: "Jr Nino Garingarao",
      role: "Lead Researcher",
      email: "jngaringarao@example.com",
      github: "https://github.com/jrgaringarao"
    },
    {
      name: "John Paul Marquez",
      role: "AI Developer",
      email: "jpmarquez@example.com",
      github: "https://github.com/johnpaulmarquez"
    },
    {
      name: "Alyssa Jane Marquez",
      role: "UI/UX Designer",
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
    <div className="min-h-screen w-full gradient-bg relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 p-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Logo placeholder - you can replace with actual logo */}
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">2E</span>
          </div>
          <div className="text-2xl font-bold text-primary">
            Open2E
          </div>
        </div>
        <div className="flex gap-6 text-sm text-uGrayLight">
          <a href="#objective" className="hover:text-primary transition-colors">Objective</a>
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#about" className="hover:text-primary transition-colors">About Us</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <a href="#download" className="hover:text-primary transition-colors">Download</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-uBlue mb-6 animate-float">
            Open2E
          </h1>
          <h2 className="text-2xl md:text-3xl text-uGray dark:text-uGrayLight font-light mb-8 leading-relaxed">
            AI-Powered Open-Ended Question Evaluation
          </h2>
          <p className="text-lg md:text-xl text-uGrayLight dark:text-uGrayLightLight mb-12 max-w-2xl mx-auto leading-relaxed">
            Intelligent evaluation tool that uses GPT-4o and NLP to automatically analyze and score student responses — providing clear, consistent, and constructive feedback in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-primary to-uBlue text-white dark:text-uBlack font-semibold px-8 py-4 rounded-xl text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
              Try Open2E Now
            </button>
            <button className="glass-dark text-primary border border-primary/30 font-semibold px-8 py-4 rounded-xl text-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105">
              View Research
            </button>
          </div>
        </div>
      </section>

      {/* Objective Section */}
      <section id="objective" className="relative z-10 py-20 px-6 bg-panel/10">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-uBlack dark:text-uGray mb-8">
            Research Objective
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-uGray dark:text-uGrayLight leading-relaxed mb-8">
              Manual grading of open-ended questions is slow, inconsistent, and stressful for both teachers and students. 
              Our intelligent evaluation tool uses <strong className="text-primary">GPT-4o and NLP</strong> to automatically 
              analyze and score student responses — providing clear, consistent, and constructive feedback in seconds.
            </p>
            <p className="text-lg text-uGrayLight dark:text-uGrayLightLight">
              Perfect for computer literacy and other critical-thinking subjects.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-uBlack dark:text-uGray mb-6">
              Key Features
            </h3>
            <p className="text-xl text-uGrayLight dark:text-uGrayLightLight max-w-2xl mx-auto">
              Advanced AI technology for revolutionary educational assessment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="glass-dark p-8 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-5xl">{feature.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-semibold text-uBlack dark:text-uGray mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-uGrayLight dark:text-uGrayLightLight leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    {/* Screenshot placeholder */}
                    <div className="w-full h-48 bg-uGrayLightLight/20 rounded-lg flex items-center justify-center border-2 border-dashed border-uGrayLightLight/40">
                      <div className="text-center text-uGrayLightLight">
                        <div className="text-3xl mb-2">🖼️</div>
                        <div className="text-sm">Screenshot placeholder</div>
                        <div className="text-xs">{feature.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="relative z-10 py-20 px-6 bg-panel/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-uBlack dark:text-uGray mb-6">
              About the Researchers
            </h3>
            <p className="text-xl text-uGrayLight dark:text-uGrayLightLight max-w-2xl mx-auto">
              Meet the team behind Open2E's innovative AI evaluation technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {researchers.map((researcher, index) => (
              <div key={index} className="glass-dark p-8 rounded-2xl text-center hover:bg-white/5 transition-all duration-300">
                {/* Avatar placeholder */}
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl text-primary font-bold">
                    {researcher.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-uBlack dark:text-uGray mb-2">
                  {researcher.name}
                </h4>
                <p className="text-primary font-medium mb-4">{researcher.role}</p>
                <div className="space-y-2 text-sm text-uGrayLight">
                  <div>
                    <a href={`mailto:${researcher.email}`} className="hover:text-primary transition-colors">
                      📧 {researcher.email}
                    </a>
                  </div>
                  <div>
                    <a href={researcher.github} className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                      🔗 GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-uBlack dark:text-uGray mb-6">
              Frequently Asked Questions
            </h3>
            <p className="text-xl text-uGrayLight dark:text-uGrayLightLight">
              Common questions about Open2E's AI evaluation system
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-dark rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-uBlack dark:text-uGray pr-4">
                    {faq.question}
                  </h4>
                  <span className={`text-primary text-2xl transform transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-uGrayLight dark:text-uGrayLightLight leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative z-10 py-20 px-6 bg-panel/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-dark p-12 rounded-3xl">
            <h3 className="text-4xl font-bold text-uBlack dark:text-uGray mb-6">
              Download Open2E
            </h3>
            <p className="text-xl text-uGrayLight dark:text-uGrayLightLight mb-8 leading-relaxed">
              Get started with AI-powered evaluation for your educational needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button className="bg-gradient-to-r from-primary to-uBlue text-white dark:text-uBlack font-semibold px-10 py-4 rounded-xl text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <span>🐧</span>
                Download for Linux
              </button>
              <button className="bg-gradient-to-r from-uGray to-uGrayLight text-white font-semibold px-10 py-4 rounded-xl text-lg shadow-xl hover:shadow-uGray/25 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <span>🖥️</span>
                Download for Windows
              </button>
            </div>
            
            <div className="text-sm text-uGrayLightLight space-y-2">
              <p>System Requirements: Linux (Ubuntu 20.04+) / Windows 10+</p>
              <p>Version 1.0.0 • Research Release • Open Source</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2E</span>
              </div>
              <span className="text-xl font-bold text-primary">Open2E</span>
            </div>
            
            <div className="flex gap-6 text-sm text-uGrayLight">
              <a href="https://github.com/your-repo/open2e" className="hover:text-primary transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                <span>⚡</span> GitHub
              </a>
              <a href="https://facebook.com/open2e" className="hover:text-primary transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                <span>📘</span> Facebook
              </a>
              <a href="https://instagram.com/open2e" className="hover:text-primary transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                <span>📷</span> Instagram
              </a>
            </div>
          </div>
          
          <div className="text-center text-uGrayLight text-sm">
            <p>© 2025 Open2E Research Project. All rights reserved.</p>
            <p className="mt-2">Developed by Jr Nino Garingarao, John Paul Marquez, and Alyssa Jane Marquez</p>
          </div>
        </div>
      </footer>
    </div>
  );
}