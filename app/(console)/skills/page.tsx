"use client";

import { motion } from "framer-motion";
import { Activity, TrendingUp, Zap } from "lucide-react";

export default function SkillsPage() {
  const skillCategories = [
    {
      category: "Cloud Technologies",
      skills: [
        { name: "AWS", level: 90, color: "bg-aws-orange" },
        { name: "Azure", level: 85, color: "bg-blue-600" },
        { name: "VMware", level: 75, color: "bg-gray-600" },
      ],
    },
    {
      category: "Container & Orchestration",
      skills: [
        { name: "Kubernetes", level: 92, color: "bg-blue-500" },
        { name: "Docker", level: 95, color: "bg-blue-400" },
        { name: "Helm", level: 88, color: "bg-purple-500" },
      ],
    },
    {
      category: "CI/CD Tools",
      skills: [
        { name: "Jenkins", level: 93, color: "bg-red-600" },
        { name: "GitLab CI/CD", level: 90, color: "bg-orange-600" },
      ],
    },
    {
      category: "Infrastructure as Code",
      skills: [
        { name: "Terraform", level: 91, color: "bg-purple-600" },
        { name: "Ansible", level: 87, color: "bg-red-500" },
      ],
    },
    {
      category: "Version Control",
      skills: [
        { name: "Git", level: 94, color: "bg-orange-500" },
        { name: "GitHub", level: 92, color: "bg-gray-600" },
        { name: "GitLab", level: 90, color: "bg-orange-600" },
      ],
    },
    {
      category: "Build Tools",
      skills: [
        { name: "Maven", level: 85, color: "bg-red-600" },
        { name: "Gradle", level: 82, color: "bg-green-600" },
      ],
    },
    {
      category: "Scripting Languages",
      skills: [
        { name: "Shell/Bash", level: 93, color: "bg-gray-500" },
        { name: "Python", level: 88, color: "bg-yellow-500" },
        { name: "Groovy", level: 80, color: "bg-blue-600" },
      ],
    },
    {
      category: "Operating Systems",
      skills: [
        { name: "Linux", level: 92, color: "bg-yellow-600" },
        { name: "Windows", level: 85, color: "bg-blue-500" },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.01, y: -4, transition: { duration: 0.15 } }}
        whileTap={{ scale: 0.98 }}
        className="bg-white dark:bg-aws-cardDark border border-gray-300 dark:border-aws-border rounded-lg p-6 cursor-pointer hover:shadow-lg hover:border-aws-orange dark:hover:border-blue-400 transition-all duration-150"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-aws-text dark:text-white mb-2 flex items-center gap-3">
              <Activity className="w-8 h-8 text-aws-orange" />
              Skills (CloudWatch Metrics)
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Real-time monitoring of technical capabilities and proficiency levels
            </p>
          </div>
          <div className="flex gap-4">
            <motion.div
              whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.98 }}
              className="text-center px-4 py-2 bg-aws-orange rounded border border-aws-orange cursor-pointer hover:shadow-md transition-shadow"
            >
              <p className="text-white text-xs mb-1">Total Skills</p>
              <p className="text-2xl font-bold text-white">21</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.98 }}
              className="text-center px-4 py-2 bg-aws-orange rounded border border-aws-orange cursor-pointer hover:shadow-md transition-shadow"
            >
              <p className="text-white text-xs mb-1">Avg Proficiency</p>
              <p className="text-2xl font-bold text-white">88%</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {[
          { label: "Expert Level", value: "12", icon: Zap, color: "text-yellow-500" },
          { label: "Advanced", value: "8", icon: TrendingUp, color: "text-green-500" },
          { label: "Intermediate", value: "4", icon: Activity, color: "text-blue-500" },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.98 }}
              className="bg-white dark:bg-aws-cardDark border border-gray-300 dark:border-aws-border rounded shadow-sm p-4 flex items-center gap-4 cursor-pointer hover:shadow-lg hover:border-aws-orange dark:hover:border-blue-400 transition-all duration-150"
            >
              <div className={`p-3 bg-gray-100 dark:bg-aws-sidebar rounded-lg ${stat.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-aws-text dark:text-white">{stat.value}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Skills Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + categoryIndex * 0.1 }}
            whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.98 }}
            className="bg-white dark:bg-aws-cardDark border border-gray-300 dark:border-aws-border rounded shadow-sm p-6 cursor-pointer hover:shadow-lg hover:border-aws-orange dark:hover:border-blue-400 transition-all duration-150"
          >
            <h3 className="text-lg font-semibold text-aws-text dark:text-white mb-4">
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-aws-text dark:text-gray-300 text-sm font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-aws-sidebar rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 1,
                        ease: "easeOut",
                      }}
                      className={`h-full ${skill.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="bg-white dark:bg-aws-cardDark border border-gray-300 dark:border-aws-border rounded-lg p-6"
      >
        <h3 className="text-lg font-semibold text-aws-text dark:text-white mb-4">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "AWS Certified Cloud Practitioner", level: "CLF-002", color: "bg-aws-orange" },
            { name: "Azure Administrator", level: "AZ-104", color: "bg-blue-600" },
            { name: "Azure Fundamentals", level: "AZ-900", color: "bg-blue-500" },
          ].map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-50 dark:bg-aws-sidebar border border-gray-300 dark:border-aws-border rounded-lg p-4 text-center cursor-pointer hover:shadow-lg hover:border-aws-orange dark:hover:border-blue-400 transition-all duration-150"
            >
              <div className={`w-12 h-12 ${cert.color} rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg`}>
                ✓
              </div>
              <p className="text-aws-text dark:text-white font-medium text-sm mb-1">{cert.name}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">{cert.level}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
