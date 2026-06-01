import heroImg from "../assets/hero.png";
import { useState } from "react";

function Home() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setContactForm({ name: "", email: "", message: "" });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white pb-24 md:pb-0 pt-16 md:pt-0">
      {/* Hero section needs proper background */}
      <header className="relative relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-20 right-1/4 translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left: Text Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 backdrop-blur-sm">
                Next-Gen Evaluation Platform
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Generate Flawless Exams <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Powered by Advanced AI
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0">
                Empower educators, universities, and enterprise teams to create highly rigorous, curriculum-aligned tests, quizzes, and assessments in seconds.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <button className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-lg shadow-indigo-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
                  Build an Exam Free
                </button>
                <button className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-all transform hover:-translate-y-0.5">
                  Request Enterprise Demo
                </button>
              </div>
            </div>

            {/* Hero Right: Visual Component Placeholder */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl opacity-10 blur-xl"></div>
              <div className="relative bg-slate-800/50 border border-slate-700/60 rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-2xl">
                {/* Hero Placeholder Image */}
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" 
                  alt="AI Exam Generator Dashboard interface abstract concept" 
                  className="rounded-xl w-full h-auto object-cover border border-slate-700"
                />
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 2. ANIMATED-STYLE STATISTICS SECTION */}
      <section className="py-12 border-y border-slate-800 bg-slate-950/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            {/* Stat Item 1 */}
            <div className="group p-4">
              <p className="text-3xl sm:text-4xl font-extrabold text-white transition-all duration-300 group-hover:scale-110 group-hover:text-indigo-400">
                15M+
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-400 mt-2 tracking-wide uppercase">Questions Generated</p>
            </div>

            {/* Stat Item 2 */}
            <div className="group p-4">
              <p className="text-3xl sm:text-4xl font-extrabold text-white transition-all duration-300 group-hover:scale-110 group-hover:text-purple-400">
                99.4%
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-400 mt-2 tracking-wide uppercase">Curriculum Accuracy</p>
            </div>

            {/* Stat Item 3 */}
            <div className="group p-4">
              <p className="text-3xl sm:text-4xl font-extrabold text-white transition-all duration-300 group-hover:scale-110 group-hover:text-pink-400">
                12,000+
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-400 mt-2 tracking-wide uppercase">Active Educators</p>
            </div>

            {/* Stat Item 4 */}
            <div className="group p-4">
              <p className="text-3xl sm:text-4xl font-extrabold text-white transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-400">
                &lt; 30s
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-400 mt-2 tracking-wide uppercase">Average Build Time</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION SECTION (Image Left, Text Right) */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Left */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-35 transition duration-500"></div>
                <div className="relative bg-slate-800 border border-slate-700/70 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" 
                    alt="AI connectivity map representing global education scaling mission" 
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Text Right */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase">Our Core Mission</h2>
              <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Making Academic Integrity & Quality Content Accessible Universally
              </p>
              <p className="text-slate-300 leading-relaxed">
                We believe assessment design should be intelligent, unbiased, and fast. Our mission is to alleviate the heavy administrative burden on instructors, giving them back hours of their week while boosting evaluation depth. By standardizing high-quality formatting and rigorous generation schemas, we help democratize premier educational testing tools.
              </p>
              <div className="pt-2">
                <a href="#about" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium group">
                  Learn more about our standards
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ABOUT US SECTION (Text Left, Image Right) */}
      <section id="about" className="py-20 lg:py-28 bg-slate-950/20 relative">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Left */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-xs font-bold tracking-widest text-purple-400 uppercase">About Us</h2>
              <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Engineered by Educators, Perfected by AI Engineers
              </p>
              <p className="text-slate-300 leading-relaxed">
                Founded by a dedicated collective of machine learning researchers and former university faculty, our platform bridges traditional Bloom's Taxonomy principles with custom-trained Large Language Models. We meticulously optimize for psychometric validation, anti-bias content framing, and accurate rubric structures, ensuring your tests are instantly ready for distribution.
              </p>
              
              {/* Glassmorphism Feature Cards Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm rounded-xl">
                  <h3 className="font-semibold text-white">Bloom's Taxonomy Fitted</h3>
                  <p className="text-sm text-slate-400 mt-1">Calibrate questions from basic recall to complex analytical thinking evaluation.</p>
                </div>
                <div className="p-4 bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm rounded-xl">
                  <h3 className="font-semibold text-white">Export Anywhere</h3>
                  <p className="text-sm text-slate-400 mt-1">Seamless formats matching Canvas, Blackboard, Moodle, or standalone clean PDFs.</p>
                </div>
              </div>
            </div>

            {/* Image Right */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-35 transition duration-500"></div>
                <div className="relative bg-slate-800 border border-slate-700/70 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" 
                    alt="Collaborative workspace designing modern machine learning education frameworks" 
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PRICING PLANS SECTION */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-3">Flexible Pricing</h2>
            <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Choose Your Perfect Plan
            </p>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Select a plan that fits your needs. Both plans include our powerful AI question generation engine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Limited Plan */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Limited Plan</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-white">₵7</span>
                    <span className="text-slate-400">per month</span>
                  </div>
                </div>

                <p className="text-slate-300 mb-8">
                  Perfect for getting started with AI-powered question generation.
                </p>

                <button className="w-full px-6 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-medium transition-all transform hover:-translate-y-0.5 mb-8">
                  Get Started
                </button>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-300">Generate AI Questions</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-400">No Marking Scheme Access</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-400">Print Limit (Up to 50 sheets)</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-400">Limited Export Options</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Unlimited Plan - Featured */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-slate-900 border border-indigo-500/50 rounded-2xl p-8 h-full ring-2 ring-indigo-500/20">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
                    MOST POPULAR
                  </span>
                </div>

                <div className="mb-6 pt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">Unlimited Plan</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">₵700</span>
                    <span className="text-slate-400">per month</span>
                  </div>
                </div>

                <p className="text-slate-300 mb-8">
                  Everything you need for unlimited question generation and complete control.
                </p>

                <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium shadow-lg shadow-indigo-950/50 transition-all transform hover:-translate-y-0.5 mb-8">
                  Get Started Now
                </button>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-300 font-medium">Unlimited Question Generation</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-300 font-medium">Full Marking Scheme Access</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-300 font-medium">Unlimited Printing</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-300 font-medium">All Export Formats</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-300 font-medium">Priority Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MODERN CONTACT SECTION */}
      <section id="generate" className="py-20 lg:py-28 relative">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-b from-slate-800/80 to-slate-900/80 border border-slate-700/80 rounded-2xl p-8 sm:p-12 backdrop-blur-lg shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
            
            <div className="text-center space-y-4 mb-10">
              <h2 className="text-3xl font-bold text-white tracking-tight">Have Questions? Let's Connect</h2>
              <p className="text-slate-300 max-w-md mx-auto">
                Interested in tailored institutional licensing models or custom fine-tuning solutions? Drop us a note.
              </p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    placeholder="Jane Doe"
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    placeholder="jane@university.edu"
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  required
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  placeholder="Tell us about your organization's testing volume requirements..."
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none"
                ></textarea>
              </div>

              <div className="text-center">
                <button 
                  type="submit" 
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium shadow-xl shadow-indigo-950/50 transition-all transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </div>

              {formSubmitted && (
                <div className="mt-4 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-center text-sm font-medium">
                  ✓ Thank you! Your message was sent successfully. Our education tech experts will be in touch shortly.
                </div>
              )}
            </form>

          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
