"use client";

import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone, Linkedin, Github, Twitter, Globe } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "d54ffe75-f214-4e4a-b514-0e141ef0f14d",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "venkatasaikirangosangi@gmail.com",
      link: "mailto:venkatasaikirangosangi@gmail.com",
      color: "text-red-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7382140349",
      link: "tel:+917382140349",
      color: "text-green-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      link: "#",
      color: "text-blue-500",
    },
    {
      icon: Globe,
      label: "LinkedIn",
      value: "linkedin.com/in/saikirangosangi",
      link: "https://www.linkedin.com/in/saikirangosangi/",
      color: "text-purple-500",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", link: "https://github.com/venkatasaikirangosangi", color: "hover:text-gray-400" },
    { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/saikirangosangi/", color: "hover:text-blue-500" },
    { icon: Twitter, label: "Twitter", link: "https://twitter.com", color: "hover:text-blue-400" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.15 } }}
        whileTap={{ scale: 0.98 }}
        className="bg-white dark:bg-aws-cardDark border border-gray-300 dark:border-aws-border rounded shadow-sm p-6 cursor-pointer hover:shadow-lg hover:border-aws-orange dark:hover:border-blue-400 transition-all duration-150"
      >
        <h1 className="text-2xl font-bold text-aws-text dark:text-white mb-2 flex items-center gap-3">
          <Mail className="w-8 h-8 text-green-500" />
          Contact (SNS Notification)
        </h1>
        <p className="text-aws-textLight dark:text-gray-400">
          Send a message through the Simple Notification Service
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.01, transition: { duration: 0.15 } }}
          className="lg:col-span-2 bg-white dark:bg-aws-cardDark border border-gray-300 dark:border-aws-border rounded shadow-sm p-6 hover:shadow-lg hover:border-aws-orange dark:hover:border-blue-400 transition-all duration-150"
        >
          <h2 className="text-xl font-semibold text-aws-text dark:text-white mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-gray-50 dark:bg-aws-sidebar border border-gray-300 dark:border-aws-border rounded px-4 py-3 text-aws-text dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-aws-orange dark:focus:border-blue-400 hover:border-aws-orange dark:hover:border-blue-400 focus:shadow-md hover:shadow-sm transition-all duration-150"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-gray-50 dark:bg-aws-sidebar border border-gray-300 dark:border-aws-border rounded px-4 py-3 text-aws-text dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-aws-orange dark:focus:border-blue-400 hover:border-aws-orange dark:hover:border-blue-400 focus:shadow-md hover:shadow-sm transition-all duration-150"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                Subject *
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-gray-50 dark:bg-aws-sidebar border border-gray-300 dark:border-aws-border rounded px-4 py-3 text-aws-text dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-aws-orange dark:focus:border-blue-400 hover:border-aws-orange dark:hover:border-blue-400 focus:shadow-md hover:shadow-sm transition-all duration-150"
                placeholder="Project Collaboration Inquiry"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-gray-50 dark:bg-aws-sidebar border border-gray-300 dark:border-aws-border rounded px-4 py-3 text-aws-text dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-aws-orange dark:focus:border-blue-400 hover:border-aws-orange dark:hover:border-blue-400 focus:shadow-md hover:shadow-sm resize-none transition-all duration-150"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400 text-sm"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm"
              >
                ✗ Failed to send message. Please try again or email me directly.
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-aws-orange hover:bg-aws-orange/80 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 border border-aws-orange hover:border-aws-orange dark:hover:border-blue-400 hover:shadow-lg transition-all duration-150"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <div className="space-y-6">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02, x: 4, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.98 }}
            className="bg-white dark:bg-aws-cardDark border border-gray-300 dark:border-aws-border rounded shadow-sm p-6 cursor-pointer hover:shadow-lg hover:border-aws-orange dark:hover:border-blue-400 transition-all duration-150"
          >
            <h3 className="text-lg font-semibold text-aws-text dark:text-white mb-4">Contact Information</h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.link}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start gap-3 p-2.5 bg-gray-50 dark:bg-aws-sidebar hover:bg-gray-100 dark:hover:bg-aws-hover rounded border border-gray-300 dark:border-aws-border hover:border-aws-orange dark:hover:border-blue-400 transition-colors"
                  >
                    <Icon className={`w-4 h-4 ${method.color} flex-shrink-0 mt-0.5`} />
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-500 dark:text-gray-400 text-xs mb-0.5">{method.label}</p>
                      <p className="text-aws-text dark:text-white text-xs font-medium break-words">{method.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02, x: 4, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.98 }}
            className="bg-white dark:bg-aws-cardDark border border-gray-300 dark:border-aws-border rounded shadow-sm p-6 cursor-pointer hover:shadow-lg hover:border-aws-orange dark:hover:border-blue-400 transition-all duration-150"
          >
            <h3 className="text-lg font-semibold text-aws-text dark:text-white mb-4">Connect on Social</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.15 } }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 p-4 bg-gray-50 dark:bg-aws-sidebar hover:bg-gray-100 dark:hover:bg-aws-hover rounded border border-gray-300 dark:border-aws-border hover:border-aws-orange dark:hover:border-blue-400 flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-150 ${social.color}`}
                  >
                    <Icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.02, x: 4, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-6 cursor-pointer hover:shadow-lg hover:border-green-500/40 dark:hover:border-blue-400 transition-all duration-150"
          >
            <h3 className="text-aws-text dark:text-white font-semibold mb-2">Quick Response</h3>
            <p className="text-aws-textLight dark:text-gray-300 text-sm">
              I typically respond within 24 hours. For urgent inquiries, feel free to reach out
              directly via email or phone.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Availability Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.15 } }}
        whileTap={{ scale: 0.98 }}
        className="bg-white dark:bg-aws-cardDark border border-gray-300 dark:border-aws-border rounded shadow-sm p-6 cursor-pointer hover:shadow-lg hover:border-aws-orange dark:hover:border-blue-400 transition-all duration-150"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <div>
              <h3 className="text-aws-text dark:text-white font-semibold">Currently Available</h3>
              <p className="text-aws-textLight dark:text-gray-400 text-sm">
                Open to freelance projects and full-time opportunities
              </p>
            </div>
          </div>
          <motion.a
            href="https://calendar.app.google/2yHzXNbVQt2v7LtZ9"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-2 bg-aws-orange hover:bg-aws-orange/80 text-white rounded-lg font-medium text-center cursor-pointer"
          >
            Schedule a Call
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
