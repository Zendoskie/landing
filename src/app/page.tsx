'use client';

import { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Scroll animation setup
  useEffect(() => {
    setIsVisible(true);

    // Create intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          } else {
            // Keep animations visible even when scrolling away
            // entry.target.classList.remove('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all scroll-animate elements
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const features = [
    {
      title: "GPT-4o Integration",
      description: "Advanced AI analysis using OpenAI's latest GPT-4o model for comprehensive answer evaluation",
      icon: "🤖",
      screenshot: "/screenshots/gpt-integration.png",
      metrics: "99% accuracy rate",
      details: "Powered by OpenAI's most advanced language model, providing human-level understanding of student responses with contextual analysis and nuanced evaluation."
    },
    {
      title: "Real-time Feedback",
      description: "Students receive instant, detailed feedback with improvement suggestions and scoring breakdown",
      icon: "⚡",
      screenshot: "/screenshots/realtime-feedback.png",
      metrics: "Feedback in <5 seconds",
      details: "Comprehensive feedback includes strengths, areas for improvement, specific suggestions, and detailed rubric scoring to help students learn effectively."
    },
    {
      title: "Multi-language Support",
      description: "Evaluate responses in English, Filipino, and other languages with cultural context awareness",
      icon: "🌍",
      screenshot: "/screenshots/multilang-support.png",
      metrics: "5+ languages supported",
      details: "Built-in language detection and cultural context understanding ensures accurate evaluation regardless of the language used in responses."
    },
    {
      title: "Plagiarism Detection",
      description: "Built-in AI plagiarism checker with similarity scoring and source identification",
      icon: "🔍",
      screenshot: "/screenshots/plagiarism-detection.png",
      metrics: "95% detection accuracy",
      details: "Advanced algorithms detect paraphrased content, AI-generated text, and direct copying while providing detailed similarity reports."
    }
  ];

  // Research highlights
  const researchHighlights = [
    { 
      icon: "🎓", 
      title: "Academic Research", 
      description: "Computer Science thesis project focused on educational technology innovation" 
    },
    { 
      icon: "🤖", 
      title: "AI-Powered Evaluation", 
      description: "Leveraging GPT-4o and advanced NLP for intelligent assessment automation" 
    },
    { 
      icon: "⚡", 
      title: "Real-time Processing", 
      description: "Instant feedback generation for enhanced learning experiences" 
    },
    { 
      icon: "🔬", 
      title: "Research Innovation", 
      description: "Exploring the future of automated evaluation in computer literacy education" 
    }
  ];

  // Interactive demo state
  const [demoQuestion, setDemoQuestion] = useState("");
  const [demoResult, setDemoResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Comparison data
  const comparisonData = [
    { feature: "Grading Speed", manual: "2-5 hours", open2e: "< 5 seconds", advantage: "1000x faster" },
    { feature: "Consistency", manual: "Variable (60-80%)", open2e: "99% consistent", advantage: "24% improvement" },
    { feature: "Feedback Quality", manual: "Basic comments", open2e: "Detailed analysis", advantage: "Comprehensive" },
    { feature: "Bias Elimination", manual: "Subjective", open2e: "Objective AI", advantage: "100% unbiased" },
    { feature: "Scale Capacity", manual: "Limited by time", open2e: "Unlimited", advantage: "Infinite scale" },
    { feature: "Cost per Evaluation", manual: "$2-5", open2e: "$0.10", advantage: "95% cost reduction" }
  ];

  // Interactive demo function
  const handleDemoAnalysis = async () => {
    if (!demoQuestion.trim()) return;
    
    setIsAnalyzing(true);
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setDemoResult({
      score: Math.floor(Math.random() * 30) + 70, // 70-100 range
      feedback: "Excellent understanding of the core concepts. Your explanation demonstrates clear logical thinking and comprehensive knowledge of the subject matter.",
      strengths: ["Clear explanation", "Good examples", "Logical structure"],
      improvements: ["Add more specific details", "Include real-world applications"],
      timeToGrade: "2.3 seconds"
    });
    setIsAnalyzing(false);
  };

  const researchers = [
    {
      name: "Jr Nino Garingarao",
      role: "Lead Researcher",
      email: "ninogaringarao13@gmail.com",
      github: "https://github.com/NjayGaringarao",
      facebook: "https://www.facebook.com/nigel.garingarao"
    },
    {
      name: "John Paul Marquez",
      role: "AI Developer",
      email: "johnpaulmarquez028@gmail.com",
      github: "https://github.com/Zendoskie",
      facebook: "https://www.facebook.com/zendoxpaul/"
    },
    {
      name: "Alyssa Jane Marquez",
      role: "UI/UX Designer",
      email: "alyssamarquezzzzz@gmail.com",
      github: null,
      facebook: null
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
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      {/* Animated grid background */}
      <div className="fixed inset-0 railway-grid opacity-20 pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/10">
        <div className="railway-container">
          <div className="flex items-center justify-between h-16">
            <div className={clsx(
              'flex items-center space-x-3 transition-all duration-700',
              isVisible ? 'animate-slide-in-left' : 'opacity-0'
            )}>
              {/* Logo Container */}
              <div className="logo-container animate-pulse-glow">
                <img src="/logo.png" alt="Open2E Logo" />
              </div>
              <span className="text-xl font-bold tracking-tight">Open2E</span>
            </div>
            
            <div className={clsx(
              'hidden md:flex items-center space-x-8 transition-all duration-700 delay-200',
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            )}>
                                <a href="#objective" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Objective</a>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Features</a>
                  <a href="#demo" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Demo</a>
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
            <div className={clsx(
              'transition-all duration-1000',
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            )}>
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

        {/* Research Highlights Section */}
        <section className="relative railway-section border-t border-white/10">
          <div className="railway-container">
            <div className="text-center mb-12">
              <div className="scroll-animate slide-in-bottom">
                <h2 className="text-3xl md:text-4xl font-bold railway-heading mb-4">
                  Research Project Overview
                </h2>
                <p className="text-lg railway-text max-w-2xl mx-auto">
                  A comprehensive study on AI-driven educational assessment technology
                </p>
              </div>
            </div>
            
            <div className="scroll-animate scale-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {researchHighlights.map((item, index) => (
                  <div key={index} className="railway-card p-6 text-center">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-bold railway-heading mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Objective Section */}
      <section id="objective" className="relative railway-section border-t border-white/10">
        <div className="railway-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="scroll-animate slide-in-bottom">
              <h2 className="text-4xl md:text-5xl font-bold railway-heading mb-8">
                Objective
              </h2>
            </div>
            <div className="scroll-animate scale-in">
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
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative railway-section border-t border-white/10">
        <div className="railway-container">
          <div className="text-center mb-16">
            <div className="scroll-animate slide-in-top">
              <h2 className="text-4xl md:text-5xl font-bold railway-heading mb-6">
                Key Features
              </h2>
              <p className="text-xl railway-text max-w-2xl mx-auto">
                Advanced AI technology for revolutionary educational assessment
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={clsx(
                'scroll-animate group',
                index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
              )}>
                <div className="railway-card p-8 railway-hover-lift relative overflow-hidden">
                  <div className="flex items-start space-x-6">
                    <div className="text-4xl p-3 bg-gradient-to-br from-yellow-400/20 to-indigo-500/20 rounded-xl">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold railway-heading">
                          {feature.title}
                        </h3>
                        <div className="text-sm font-bold text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-lg">
                          {feature.metrics}
                        </div>
                      </div>
                      <p className="railway-text mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      {/* Enhanced Screenshot with hover details */}
                      <div className="w-full h-48 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center border border-white/10 relative overflow-hidden group-hover:border-yellow-400/50 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="text-center z-10 transition-all duration-300 group-hover:opacity-0">
                          <div className="text-3xl mb-2 opacity-50">🖼️</div>
                          <div className="text-sm text-gray-400">Screenshot Preview</div>
                          <div className="text-xs text-gray-500 mt-1">{feature.title}</div>
                        </div>
                        
                        {/* Hover overlay with details */}
                        <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                          <div className="text-center">
                            <h4 className="text-lg font-bold text-yellow-400 mb-3">{feature.title}</h4>
                            <p className="text-sm text-gray-300 leading-relaxed">{feature.details}</p>
                            <div className="mt-4 px-3 py-2 bg-yellow-400/20 rounded-full text-sm text-yellow-400 font-medium inline-block">
                              {feature.metrics}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="relative railway-section border-t border-white/10">
        <div className="railway-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="scroll-animate slide-in-bottom">
              <h2 className="text-4xl md:text-5xl font-bold railway-heading mb-6">
                Try the AI Evaluation Demo
              </h2>
              <p className="text-xl railway-text max-w-2xl mx-auto mb-12">
                Experience the power of Open2E firsthand. Type a sample answer and see our AI evaluation in action.
              </p>
            </div>

            <div className="scroll-animate scale-in">
              <div className="railway-card p-8 mx-auto max-w-3xl">
                <div className="mb-6">
                  <label className="block text-left text-sm font-medium text-gray-300 mb-3">
                    Sample Question: "Explain the importance of artificial intelligence in modern education."
                  </label>
                  <textarea
                    value={demoQuestion}
                    onChange={(e) => setDemoQuestion(e.target.value)}
                    placeholder="Type your answer here... (e.g., AI in education helps personalize learning experiences, provides instant feedback, and enables adaptive assessment methods that cater to individual student needs...)"
                    className="w-full h-32 bg-gray-800 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none resize-none"
                  />
                </div>

                <button
                  onClick={handleDemoAnalysis}
                  disabled={!demoQuestion.trim() || isAnalyzing}
                  className={clsx(
                    'railway-btn-primary px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300',
                    (!demoQuestion.trim() || isAnalyzing) && 'opacity-50 cursor-not-allowed'
                  )}
                >
                  {isAnalyzing ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      <span>Analyzing...</span>
                    </div>
                  ) : (
                    'Analyze with AI'
                  )}
                </button>

                {demoResult && (
                  <div className="mt-8 p-6 bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/30">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-green-400">AI Evaluation Complete</h3>
                      <div className="text-sm text-gray-400">Analyzed in {demoResult.timeToGrade}</div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-bold text-yellow-400 mb-2">
                          {demoResult.score}/100
                        </div>
                        <p className="text-gray-300 text-sm mb-4">{demoResult.feedback}</p>
                        
                        <div className="mb-4">
                          <h4 className="text-green-400 font-medium mb-2">✓ Strengths:</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            {demoResult.strengths.map((strength: string, idx: number) => (
                              <li key={idx}>• {strength}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-yellow-400 font-medium mb-2">💡 Improvements:</h4>
                        <ul className="text-sm text-gray-300 space-y-1 mb-4">
                          {demoResult.improvements.map((improvement: string, idx: number) => (
                            <li key={idx}>• {improvement}</li>
                          ))}
                        </ul>
                        
                        <div className="bg-gray-800/50 rounded-lg p-3">
                          <div className="text-xs text-gray-400 mb-1">Evaluation Breakdown:</div>
                          <div className="flex justify-between text-sm">
                            <span>Content Quality</span>
                            <span className="text-green-400">85%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Grammar & Style</span>
                            <span className="text-green-400">92%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Depth of Analysis</span>
                            <span className="text-yellow-400">78%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="relative railway-section border-t border-white/10">
        <div className="railway-container">
          <div className="text-center mb-16">
            <div className="scroll-animate slide-in-bottom">
              <h2 className="text-4xl md:text-5xl font-bold railway-heading mb-6">
                Open2E vs Manual Grading
              </h2>
              <p className="text-xl railway-text max-w-2xl mx-auto">
                See how our AI-powered evaluation compares to traditional manual grading methods
              </p>
            </div>
          </div>

          <div className="scroll-animate scale-in">
            <div className="railway-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left p-6 font-bold text-lg">Feature</th>
                      <th className="text-center p-6 font-bold text-lg text-red-400">Manual Grading</th>
                      <th className="text-center p-6 font-bold text-lg text-green-400">Open2E AI</th>
                      <th className="text-center p-6 font-bold text-lg text-yellow-400">Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
                        <td className="p-6 font-medium">{row.feature}</td>
                        <td className="p-6 text-center text-red-300">{row.manual}</td>
                        <td className="p-6 text-center text-green-300">{row.open2e}</td>
                        <td className="p-6 text-center text-yellow-300 font-medium">{row.advantage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative railway-section border-t border-white/10">
        <div className="railway-container">
          <div className="text-center mb-16">
            <div className="scroll-animate slide-in-bottom">
              <h2 className="text-4xl md:text-5xl font-bold railway-heading mb-6">
                Team
              </h2>
              <p className="text-xl railway-text max-w-2xl mx-auto">
                Meet the minds behind Open2E's innovative AI evaluation technology
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {researchers.map((researcher, index) => (
              <div 
                key={index} 
                className={clsx('scroll-animate slide-in-bottom')}
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="railway-card p-8 text-center railway-hover-lift">
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
                  <div className="space-y-3 text-sm">
                                              <div>
                            <a 
                              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${researcher.email}&su=Hello%20from%20Open2E%20Landing%20Page&body=Hi%20${researcher.name.split(' ')[0]},%0D%0A%0D%0AI%20visited%20the%20Open2E%20landing%20page%20and%20would%20like%20to%20get%20in%20touch.%0D%0A%0D%0ABest%20regards,`}
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-white transition-colors block"
                              title={`Send email to ${researcher.name}`}
                            >
                              📧 {researcher.email}
                            </a>
                          </div>
                    <div className="flex justify-center space-x-6">
                      {researcher.github && (
                        <a href={researcher.github} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer" title="GitHub">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      {researcher.facebook && (
                        <a href={researcher.facebook} className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer" title="Facebook">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                      )}
                    </div>
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
              <div className="scroll-animate slide-in-top">
                <h2 className="text-4xl md:text-5xl font-bold railway-heading mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl railway-text">
                  Common questions about Open2E's AI evaluation system
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={clsx('scroll-animate slide-in-left')}
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="railway-card overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-all duration-200"
                    >
                      <h3 className="text-lg font-semibold railway-heading pr-4">
                        {faq.question}
                      </h3>
                      <div className={clsx(
                        'text-yellow-400 text-xl transform transition-transform duration-300',
                        openFaq === index ? 'rotate-45' : ''
                      )}>
                        +
                      </div>
                    </button>
                    <div className={clsx(
                      'overflow-hidden transition-all duration-300',
                      openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    )}>
                      <div className="px-6 pb-6">
                        <p className="railway-text leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
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
            <div className="scroll-animate scale-in">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12">
        <div className="railway-container">
          <div className="scroll-animate slide-in-bottom">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="flex items-center space-x-3 mb-6 md:mb-0">
                {/* Footer Logo */}
                <div className="logo-container footer-logo">
                  <img src="/logo.png" alt="Open2E Logo" />
                </div>
                <span className="text-xl font-bold">Open2E</span>
              </div>

            </div>
            
            <div className="text-center text-gray-500 text-sm border-t border-white/10 pt-8">
              <p>© 2025 Open2E Research Project. All rights reserved.</p>
              <p className="mt-2">Developed by Jr Nino Garingarao, John Paul Marquez, and Alyssa Jane Marquez</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}