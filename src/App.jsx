import heroImg from "./assets/hero.png";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section - AI Exam Generator */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Hero Content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AI-Powered Exam Generation
                  </span>
                  <br />
                  <span className="text-gray-800">Made Simple</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Transform your assessment workflow with our intelligent platform.
                  Generate curriculum-aligned questions, quizzes, and marking schemes
                  in seconds using advanced AI technology designed for educators.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                    Get Started Free
                  </button>
                  <button className="border border-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-xl hover:bg-gray-50 transition-all duration-300">
                    Watch Demo
                  </button>
                </div>
              </div>
              {/* Hero Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-xl"></div>
                <img
                  src={heroImg}
                  alt="AI Education Platform"
                  className="relative rounded-2xl shadow-2xl w-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

{/* Mission Section - Image Left, Content Right */}
        <section className="bg-white py-20 lg:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1 animate-fade-in-left">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img
                    src={heroImg}
                    alt="AI Education Technology"
                    className="relative rounded-2xl shadow-xl h-80 w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="order-1 lg:order-2 animate-fade-in-right">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We empower educators to focus on what matters most - teaching and inspiring students.
                  Our AI Exam Generator transforms hours of manual assessment creation into minutes,
                  delivering professional, curriculum-aligned questions and marking schemes that enhance
                  learning outcomes while reducing workload.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Save Time</h3>
                    <p className="text-sm text-gray-600">Automate assessment creation in seconds</p>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 7.835A7 7 0 1012 3v0"></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Improve Quality</h3>
                    <p className="text-sm text-gray-600">AI-powered assessment accuracy</p>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-3-3h-4m-5 0H4a3 3 0 00-3 3v2h5m5 0v-2a3 3 0 013-3h4a3 3 0 013 3v2"></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Empower Educators</h3>
                    <p className="text-sm text-gray-600">Smart tools for modern teaching</p>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Student Success</h3>
                    <p className="text-sm text-gray-600">Enhanced learning outcomes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section - Content Left, Image Right */}
        <section className="bg-gray-50 py-20 lg:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className="animate-fade-in-left">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  About Us
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  AI Exam Generator was founded by educators and technologists who understood the
                  challenge of creating quality assessments at scale. Our platform serves teachers,
                  schools, institutions, and training centers worldwide, generating professional
                  exam questions, quizzes, and marking schemes powered by advanced artificial intelligence.
                </p>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  We combine educational expertise with cutting-edge technology to deliver reliable,
                  accurate, and efficient assessment solutions that educators trust and students love.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                    <p className="text-sm text-gray-600">Pioneering AI in education</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-gray-900 mb-2">Educational Excellence</h3>
                    <p className="text-sm text-gray-600">Evidence-based assessment design</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-gray-900 mb-2">Reliability</h3>
                    <p className="text-sm text-gray-600">Trusted by educators worldwide</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-gray-900 mb-2">User Success</h3>
                    <p className="text-sm text-gray-600">Your achievements are our priority</p>
                  </div>
                </div>
              </div>
              {/* Image */}
              <div className="animate-fade-in-right">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img
                    src={heroImg}
                    alt="AI Education Platform"
                    className="relative rounded-2xl shadow-xl h-80 w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Contact Us
            </h2>
            <div className="grid gap-12 md:grid-cols-2">
              {/* Form on left */}
              <div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter your message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              {/* Text on right */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Get in Touch
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We'd love to hear from you! Whether you have a question,
                  feedback, or just want to say hello, feel free to reach out.
                </p>
                <div className="space-y-4">
                  <p className="flex items-start">
                    <span className="flex-shrink-0 w-6">
                      📍
                    </span>
                    <span className="text-gray-600">
                      123 Innovation Drive, Tech City, TC 45678
                    </span>
                  </p>
                  <p className="flex items-start">
                    <span className="flex-shrink-0 w-6">
                      📧
                    </span>
                    <span className="text-gray-600">
                      info@example.com
                    </span>
                  </p>
                  <p className="flex items-start">
                    <span className="flex-shrink-0 w-6">
                      📞
                    </span>
                    <span className="text-gray-600">
                      +1 (555) 123-4567
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
