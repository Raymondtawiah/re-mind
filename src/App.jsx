import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block mb-8">
              <img src={heroImg} className="base" width="170" height="179" alt="" />
              <img src={reactLogo} className="framework" alt="React logo" />
              <img src={viteLogo} className="vite" alt="Vite logo" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Get started
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Edit <code className="bg-gray-100 px-1 rounded">src/App.jsx</code> and save to test <code className="bg-gray-100 px-1 rounded">HMR</code>
            </p>
            <button
              type="button"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </button>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
              We are dedicated to providing innovative solutions that empower
              individuals and organizations to achieve their goals through
              cutting-edge technology and exceptional service.
            </p>
          </div>
        </section>

        {/* About Us Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              About Us
            </h2>
            <div className="grid gap-12 md:grid-cols-2">
              {/* Image on left, text on right */}
              <div>
                <img
                  src={heroImg}
                  alt="About Us"
                  className="rounded-lg shadow-lg h-96 w-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Who We Are
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We are a passionate team of developers, designers, and
                  innovators committed to excellence in everything we do.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Founded in 2026, we've grown from a small startup to a
                  leading provider of digital solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Alternate About Us Section - Image on right, text on left */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Text on left, image on right */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  What We Do
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We specialize in creating user-friendly applications that
                  solve real-world problems. Our expertise spans web
                  development, mobile apps, and AI-powered solutions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our client-centered approach ensures we deliver solutions
                  that not only meet but exceed expectations.
                </p>
              </div>
              <div>
                <img
                  src={heroImg}
                  alt="What We Do"
                  className="rounded-lg shadow-lg h-96 w-full object-cover"
                />
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
