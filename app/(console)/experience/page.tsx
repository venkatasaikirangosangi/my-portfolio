"use client";

import { motion } from "framer-motion";
import { DollarSign, Briefcase, Award, Calendar } from "lucide-react";

export default function ExperiencePage() {
  const experiences = [
    {
      company: "Capgemini",
      position: "Senior Cloud DevOps Engineer",
      period: "Aug 2024 - Present",
      location: "Bangalore, India",
      type: "Full-time",
      description: "Co-leading a team of 10 members, building and maintaining CI/CD architecture for high-availability production systems.",
      achievements: [
        "Building and maintaining CI/CD architecture using Jenkins and GitLab CI/CD",
        "Managing and scaling Kubernetes clusters across AWS with advanced networking, RBAC, and auto-scaling",
        "Developing reusable Terraform modules for provisioning production-grade infrastructure",
        "Leading large-scale enterprise migration from on-premise infrastructure to AWS cloud",
        "Driving automation using Ansible for standardized deployments and configurations",
        "Implementing GitOps workflows, mentoring juniors, and reviewing infrastructure code",
        "Successfully completed on-site engagement in Stuttgart, Germany with Mercedes-Benz",
      ],
      technologies: ["AWS", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitLab CI/CD", "Docker", "Helm"],
    },
    {
      company: "Capgemini",
      position: "DevOps Engineer",
      period: "Aug 2022 - Jul 2024",
      location: "Bangalore, India",
      type: "Full-time",
      description: "Built and maintained CI/CD pipelines for containerized and monolithic applications.",
      achievements: [
        "Built and maintained CI/CD pipelines for containerized and monolithic applications",
        "Automated monitoring, log rotation, and deployments using Shell and Python scripts",
        "Containerized applications using Docker and deployed to Kubernetes clusters",
        "Provisioned cloud infrastructure using Terraform and automated configuration with Ansible",
        "Managed Git repositories, branch strategies, and access control using GitHub and GitLab",
      ],
      technologies: ["Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "AWS", "Shell", "Python"],
    },
  ];

  const timeline = [
    { year: "2022", event: "Started at Capgemini", color: "bg-blue-500" },
    { year: "2023", event: "AWS & Azure Certifications", color: "bg-aws-orange" },
    { year: "2024", event: "Senior DevOps Role", color: "bg-orange-500" },
    { year: "2025", event: "Germany Onsite", color: "bg-green-500" },
    { year: "2025", event: "Team Lead (10 Members)", color: "bg-purple-500" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.01, y: -4, transition: { duration: 0.15 } }}
        whileTap={{ scale: 0.98 }}
        className="bg-white dark:bg-aws-cardDark border border-gray-300 dark:border-aws-border rounded shadow-sm p-6 cursor-pointer hover:shadow-lg hover:border-aws-orange dark:hover:border-blue-400 transition-all duration-150"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-aws-text dark:text-white mb-2 flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-green-500" />
              Experience (Cost Explorer)
            </h1>
            <p className="text-aws-textLight dark:text-gray-400">
              Professional journey and career investments over time
            </p>
          </div>
          <div className="flex gap-4">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="text-center px-4 py-2 bg-aws-orange rounded border border-aws-orange cursor-pointer shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-white text-xs mb-1">Total Experience</p>
              <p className="text-2xl font-bold text-white">3+ Years</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="text-center px-4 py-2 bg-aws-orange rounded border border-aws-orange cursor-pointer shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-white text-xs mb-1">Companies</p>
              <p className="text-2xl font-bold text-white">1</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.01, y: -4, transition: { duration: 0.15 } }}
        className="bg-white dark:bg-aws-cardDark border border-gray-300 dark:border-aws-border rounded shadow-sm p-6 hover:shadow-lg hover:border-aws-orange dark:hover:border-blue-400 transition-all duration-150"
      >
        <h3 className="text-lg font-semibold text-aws-text dark:text-white mb-6 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-aws-orange" />
          Career Timeline
        </h3>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-aws-border" />
          
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 4, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 relative cursor-pointer"
              >
                <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-sm z-10 transition-shadow duration-150 hover:shadow-lg`}>
                  {item.year}
                </div>
                <div className="flex-1 bg-gray-100 dark:bg-aws-sidebar border border-gray-300 dark:border-aws-border rounded-lg p-3 hover:border-aws-orange dark:hover:border-blue-400 hover:shadow-md transition-all duration-150">
                  <p className="text-aws-text dark:text-white font-medium">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Experience Cards */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.15 }}
            whileHover={{ scale: 1.01, y: -4, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.98 }}
            className="bg-white dark:bg-aws-cardDark border border-gray-300 dark:border-aws-border rounded shadow-sm p-6 cursor-pointer hover:shadow-lg hover:border-aws-orange dark:hover:border-blue-400 transition-all duration-150"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="w-6 h-6 text-aws-orange" />
                  <h3 className="text-xl font-semibold text-aws-text dark:text-white">
                    {exp.position}
                  </h3>
                  <span className="px-3 py-1 bg-aws-blue/10 text-aws-blue text-xs font-medium rounded-full">
                    {exp.type}
                  </span>
                </div>
                <p className="text-aws-orange font-medium mb-1">{exp.company}</p>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <span>{exp.period}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <p className="text-aws-textLight dark:text-gray-300 mb-4">{exp.description}</p>

            {/* Achievements */}
            <div className="mb-4">
              <h4 className="text-aws-text dark:text-white font-medium mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-500" />
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.15 + i * 0.05 }}
                    className="flex items-start gap-2 text-aws-textLight dark:text-gray-400 text-sm"
                  >
                    <span className="text-green-500 mt-1">▸</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-aws-text dark:text-white font-medium mb-2 text-sm">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-aws-sidebar text-aws-text dark:text-gray-300 text-xs rounded border border-gray-300 dark:border-aws-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
