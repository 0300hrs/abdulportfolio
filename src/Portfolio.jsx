import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import projects from "./assets/projects.json";
import ProjectCard from "./components/ProjectCard";
import {
  Sun,
  Moon,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  User,
  Folder,
  Code,
  Zap,
  Image,
  Film,
  Palette,
  BadgeAlert,
  Eye,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";

const Portfolio = () => {
  const [theme, setTheme] = useState("light");
  const [isVisible, setIsVisible] = useState(false);
  const [project, setProject] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={theme}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link
                  to="/"
                  className="text-2xl font-bold text-purple-600 dark:text-purple-400"
                >
                  Brightest Media
                </Link>
              </div>

              <nav className="hidden md:flex space-x-8">
                <Link
                  to="/"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Portfolio
                </Link>
                <a
                  href="#about"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Contact
                </a>
              </nav>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Creative Portfolio
                <span className="text-purple-600 dark:text-purple-400">
                  {" "}
                  Gallery
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Discover exceptional creative work that bridges the gap between
                imagination and reality. Our portfolio showcases innovative
                designs, strategic thinking, and flawless execution across
                various media.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-lg">
                  <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Creative Solutions
                  </span>
                </div>
                <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-lg">
                  <Palette className="w-5 h-5 text-purple-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Brand Identity
                  </span>
                </div>
                <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-lg">
                  <Code className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Web Development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Explore our latest creative work and design solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:2-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  About Brightest Media
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  We are a creative agency specializing in digital experiences,
                  brand identity, and strategic design. Our team combines
                  artistic vision with technical expertise to deliver
                  exceptional results for our clients.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  With over 10 years of experience in the industry, we have
                  worked with startups, established brands, and everything in
                  between. Our approach is collaborative, innovative, and
                  results-driven.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Expert Team
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Folder className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      200+ Projects
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Fast Delivery
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                      <Image className="w-8 h-8 text-purple-600 mb-3" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Design
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Visual identity and branding solutions
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                      <Film className="w-8 h-8 text-purple-600 mb-3" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Video
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Professional video production
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                      <Code className="w-8 h-8 text-purple-600 mb-3" />
                      <h3 className="font-semibized text-gray-900 dark:text-white">
                        Development
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Web and mobile development
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                      <Zap className="w-8 h-8 text-purple-600 mb-3" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Strategy
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Digital marketing and strategy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Ready to bring your vision to life? Let's start a conversation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's Discuss Your Project
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">
                      hello@brightestmedia.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">
                      +1 (555) 123-4567
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">
                      New York, NY 10001
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <BadgeAlert className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <BadgeAlert className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <BadgeAlert className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-800 dark:text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-800 dark:text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-800 dark:text-white"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">
                  Brightest Media
                </h3>
                <p className="text-gray-400">
                  Creating exceptional digital experiences that inspire and
                  engage.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-purple-400 transition-colors"
                    >
                      Brand Identity
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-purple-400 transition-colors"
                    >
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-purple-400 transition-colors"
                    >
                      Video Production
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-purple-400 transition-colors"
                    >
                      Marketing
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-purple-400 transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-purple-400 transition-colors"
                    >
                      Career
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-purple-400 transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-purple-400 transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <BadgeAlert className="w-5 h-5" />{" "}
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <BadgeAlert className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <BadgeAlert className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Brightest Media. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-50"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};
export default Portfolio;
