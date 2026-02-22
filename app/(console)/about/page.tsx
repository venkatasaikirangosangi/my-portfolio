"use client";

import { motion } from "framer-motion";
import { User, MapPin, Briefcase, GraduationCap, Code2, Heart, Coffee, Download } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Years of Experience", value: "3+", icon: Briefcase },
    { label: "Team Size", value: "10", icon: Code2 },
    { label: "Certifications", value: "3", icon: GraduationCap },
    { label: "Coffee Consumed", value: "∞", icon: Coffee },
  ];

  const interests = [
    "Music",
    "Technology & Gadgets",
    "Travel & Exploring",
    "Gaming",
    "Coffee Enthusiast",
    "Continuous Learning",
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.15 } }}
        whileTap={{ scale: 0.98 }}
        className="bg-white dark:bg-aws-cardDark border border-gray-300 dark:border-aws-border rounded-lg p-6 cursor-pointer hover:shadow-lg hover:border-aws-orange dark:hover:border-blue-400 transition-all duration-150"
      >
        <h1 className="text-2xl font-bold text-aws-text dark:text-white mb-2 flex items-center gap-3">
          <User className="w-8 h-8 text-aws-orange" />
          About Me (IAM User Profile)
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Identity and Access Management - User Profile Overview
        </p>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.01, y: -4, transition: { duration: 0.15 } }}
        className="bg-white dark:bg-aws-cardDark border border-gray-300 dark:border-aws-border rounded shadow-sm overflow-hidden cursor-pointer hover:shadow-lg hover:border-aws-orange dark:hover:border-blue-400 transition-all duration-150"
      >
        <div className="h-32 bg-gradient-to-r from-aws-orange to-aws-blue" />
        <div className="px-6 pb-6">
          <div className="flex items-end gap-6 -mt-16 mb-6">
            <div className="w-32 h-32 rounded-full border-4 border-white dark:border-aws-cardDark overflow-hidden bg-gray-200 dark:bg-gray-700">
              <img src="/sai.jpg" alt="Venkata Sai Kiran" className="w-full h-full object-cover object-center" />
            </div>
            <div className="flex-1 mt-16">
              <div>
                <h2 className="text-3xl font-bold text-aws-text dark:text-white mb-2">Venkata Sai Kiran</h2>
                <p className="text-xl text-aws-orange mb-2">Senior Cloud DevOps Engineer</p>
                <div className="flex items-center gap-4 text-aws-textLight dark:text-gray-400 text-sm">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Bangalore, India
                  </span>
                  <span>•</span>
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.15 } }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gray-50 dark:bg-aws-sidebar border border-gray-300 dark:border-aws-border rounded-lg p-4 text-center cursor-pointer hover:shadow-lg hover:border-aws-orange dark:hover:border-blue-400 transition-all duration-150"
                >
                  <Icon className="w-6 h-6 text-aws-orange mx-auto mb-2" />
                  <p className="text-2xl font-bold text-aws-text dark:text-white mb-1">{stat.value}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 text-aws-textLight dark:text-gray-300 leading-relaxed"
          >
            <p>
              DevOps Engineer with 3+ years of experience, currently co-leading a team of 10 members as a Senior DevOps Engineer at Capgemini.
              Expertise in CI/CD, cloud infrastructure, containerization, and automation. Strong background in Linux and Windows systems.
              Known for streamlining deployments, enhancing system reliability, and mentoring team members to deliver efficient, scalable solutions.
            </p>
            <p>
              Currently building and maintaining CI/CD architecture for high-availability production systems using Jenkins and GitLab CI/CD.
              Managing and scaling Kubernetes clusters across AWS with advanced networking, RBAC, and auto-scaling. Developing reusable Terraform
              modules for provisioning and auditing production-grade infrastructure.
            </p>
            <p>
              Actively involved in a large-scale enterprise migration from on-premise infrastructure to AWS cloud, supporting cloud architecture design,
              infrastructure provisioning using Terraform, automation with Ansible, and adoption of cloud-native best practices. Successfully completed
              an on-site client engagement in Stuttgart, Germany, representing Capgemini for direct collaboration with Mercedes-Benz stakeholders.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Interests & Passions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.15 } }}
        whileTap={{ scale: 0.98 }}
        className="bg-white dark:bg-aws-cardDark border border-gray-300 dark:border-aws-border rounded shadow-sm p-6 cursor-pointer hover:shadow-lg hover:border-aws-orange dark:hover:border-blue-400 transition-all duration-150"
      >
        <h3 className="text-lg font-semibold text-aws-text dark:text-white mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-red-500" />
          Interests & Passions
        </h3>
        <div className="flex flex-wrap gap-3">
          {interests.map((interest, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -2, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gray-100 dark:bg-aws-sidebar hover:bg-gray-200 dark:hover:bg-aws-hover border border-gray-300 dark:border-aws-border hover:border-aws-orange dark:hover:border-blue-400 rounded-full text-aws-text dark:text-gray-300 text-sm cursor-pointer hover:shadow-md transition-all duration-150"
            >
              {interest}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.15 } }}
        whileTap={{ scale: 0.98 }}
        className="bg-gradient-to-r from-aws-orange/10 to-aws-blue/10 border border-aws-orange/20 rounded shadow-sm p-6 cursor-pointer hover:shadow-lg hover:border-aws-orange/40 dark:hover:border-blue-400 transition-all duration-150"
      >
        <h3 className="text-lg font-semibold text-aws-text dark:text-white mb-3">My Philosophy</h3>
        <p className="text-aws-textLight dark:text-gray-300 italic text-lg">
          "Automate everything, monitor constantly, and never stop learning. The best infrastructure
          is the one that runs so smoothly, you forget it's there."
        </p>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.15 } }}
        whileTap={{ scale: 0.98 }}
        className="bg-white dark:bg-aws-cardDark border border-gray-300 dark:border-aws-border rounded shadow-sm p-6 cursor-pointer hover:shadow-lg hover:border-aws-orange dark:hover:border-blue-400 transition-all duration-150"
      >
        <h3 className="text-lg font-semibold text-aws-text dark:text-white mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-aws-blue" />
          Education
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gray-100 dark:bg-aws-sidebar rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-aws-orange" />
            </div>
            <div>
              <h4 className="text-aws-text dark:text-white font-medium">Bachelor of Engineering (B.E) - Electronics and Communication</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Visvesvaraya Technological University • Jul 2019 - Jun 2022</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                CGPA: 8.03
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
