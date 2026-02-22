"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, BarChart, Activity, Building2, MapPin, Briefcase, Rocket, ExternalLink, Cloud } from "lucide-react";
import { SiKubernetes, SiDocker, SiTerraform, SiAmazon, SiJenkins, SiGitlab, SiAnsible, SiPython, SiGnubash, SiPrometheus, SiGrafana } from "react-icons/si";

export default function DashboardPage() {
  const metrics = [
    {
      title: "Experience",
      value: "3+ Years",
      icon: TrendingUp,
      color: "from-blue-500 to-blue-600",
      description: "DevOps Engineering"
    },
    {
      title: "Team Size",
      value: "10 Members",
      icon: Users,
      color: "from-green-500 to-green-600",
      description: "Currently Co-Leading"
    },
    {
      title: "Pipelines",
      value: "30+",
      icon: BarChart,
      color: "from-purple-500 to-purple-600",
      description: "CI/CD Delivered"
    },
    {
      title: "Automation",
      value: "80%",
      icon: Activity,
      color: "from-orange-500 to-orange-600",
      description: "Tasks Automated"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.01, y: -4, transition: { duration: 0.15 } }}
        whileTap={{ scale: 0.98 }}
        className="bg-white dark:bg-aws-cardDark rounded-lg border border-gray-200 dark:border-aws-border shadow-sm hover:shadow-xl transition-all hover:border-aws-orange dark:hover:border-blue-400 cursor-pointer"
      >
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
                Venkata Sai Kiran
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Senior Cloud DevOps Engineer at Capgemini • Bangalore, India
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1.5 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium">
                Kubernetes
              </span>
              <span className="px-3 py-1.5 bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-300 rounded-md text-xs font-medium">
                Docker
              </span>
              <span className="px-3 py-1.5 bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 rounded-md text-xs font-medium">
                Terraform
              </span>
              <span className="px-3 py-1.5 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-300 rounded-md text-xs font-medium">
                AWS
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.98 }}
              className="bg-white dark:bg-aws-cardDark rounded-lg p-6 shadow-md border border-gray-200 dark:border-aws-border hover:shadow-xl transition-all hover:border-aws-orange dark:hover:border-blue-400 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${metric.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                {metric.title}
              </h3>
              <p className="text-2xl font-bold text-aws-text dark:text-white mb-1">
                {metric.value}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {metric.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.15 } }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-aws-cardDark rounded-lg p-6 shadow-md border border-gray-200 dark:border-aws-border hover:shadow-xl transition-all hover:border-aws-orange dark:hover:border-blue-400 cursor-pointer"
        >
          <h2 className="text-xl font-bold text-aws-text dark:text-white mb-4">
            Current Role
          </h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Position</p>
              <p className="text-base font-semibold text-aws-text dark:text-white">
                Senior Cloud DevOps Engineer
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Company</p>
              <p className="text-base font-semibold text-aws-text dark:text-white">
                Capgemini
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
              <p className="text-base font-semibold text-aws-text dark:text-white">
                August 2024 - Present
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.15 } }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-aws-cardDark rounded-lg p-6 shadow-md border border-gray-200 dark:border-aws-border hover:shadow-xl transition-all hover:border-aws-orange dark:hover:border-blue-400 cursor-pointer"
        >
          <h2 className="text-xl font-bold text-aws-text dark:text-white mb-4">
            Key Highlights
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-aws-orange">✓</span>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Co-leading team of 10 DevOps engineers
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-aws-orange">✓</span>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                International experience with Mercedes-Benz in Germany
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-aws-orange">✓</span>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                AWS & Azure certified professional
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-aws-orange">✓</span>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Expert in Kubernetes, Docker, Terraform, Jenkins
              </span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Recent Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-aws-text dark:text-white">
            Featured Projects
          </h2>
          <a
            href="/projects"
            className="text-sm text-aws-orange hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-1"
          >
            View All <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.98 }}
            className="bg-white dark:bg-aws-cardDark rounded-lg p-6 shadow-md border border-gray-200 dark:border-aws-border hover:shadow-xl transition-all hover:border-aws-orange dark:hover:border-blue-400 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded">
                Active
              </span>
            </div>
            <h3 className="text-lg font-semibold text-aws-text dark:text-white mb-2">
              Mercedes-Benz Cloud Migration
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Contributed to cloud infrastructure migration to AWS with Kubernetes orchestration
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-xs rounded">
                AWS
              </span>
              <span className="px-2 py-1 bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 text-xs rounded">
                Kubernetes
              </span>
              <span className="px-2 py-1 bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 text-xs rounded">
                Terraform
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.98 }}
            className="bg-white dark:bg-aws-cardDark rounded-lg p-6 shadow-md border border-gray-200 dark:border-aws-border hover:shadow-xl transition-all hover:border-aws-orange dark:hover:border-blue-400 flex flex-col cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <BarChart className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">
                Completed
              </span>
            </div>
            <h3 className="text-lg font-semibold text-aws-text dark:text-white mb-2">
              CI/CD Pipeline Architecture
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1">
              Enterprise CI/CD pipelines using Jenkins and GitLab CI/CD for high-availability systems
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 text-xs rounded">
                Jenkins
              </span>
              <span className="px-2 py-1 bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-300 text-xs rounded">
                GitLab CI/CD
              </span>
              <span className="px-2 py-1 bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 text-xs rounded">
                Docker
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.98 }}
            className="bg-white dark:bg-aws-cardDark rounded-lg p-6 shadow-md border border-gray-200 dark:border-aws-border hover:shadow-xl transition-all hover:border-aws-orange dark:hover:border-blue-400 flex flex-col cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <Activity className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded">
                Live
              </span>
            </div>
            <h3 className="text-lg font-semibold text-aws-text dark:text-white mb-2">
              Scrum Run
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1">
              Real-time Scrum poker tool for agile team planning
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 text-xs rounded">
                React
              </span>
              <span className="px-2 py-1 bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-300 text-xs rounded">
                Node.js
              </span>
              <span className="px-2 py-1 bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 text-xs rounded">
                WebSocket
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        whileHover={{ scale: 1.01, y: -4, transition: { duration: 0.15 } }}
        className="bg-white dark:bg-aws-cardDark rounded-lg p-6 shadow-md border border-gray-200 dark:border-aws-border hover:shadow-xl hover:border-aws-orange dark:hover:border-blue-400 transition-all duration-150"
      >
        <h2 className="text-xl font-bold text-aws-text dark:text-white mb-4">
          Technology Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
            { name: "AWS", icon: SiAmazon, color: "#FF9900" },
            { name: "Azure", icon: Cloud, color: "#0078D4" },
            { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
            { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
            { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
            { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
            { name: "Grafana", icon: SiGrafana, color: "#F46800" }
          ].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -4, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-aws-sidebar rounded-lg border border-gray-200 dark:border-aws-border hover:border-aws-orange dark:hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Icon className="w-10 h-10" style={{ color: tech.color }} />
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
