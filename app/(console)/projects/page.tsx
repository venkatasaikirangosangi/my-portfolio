"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Server,
  ExternalLink,
  Github,
  Cpu,
  Database,
  Cloud,
  GitBranch,
  Container,
  Settings,
} from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");

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
              <Server className="w-8 h-8 text-aws-orange" />
              Projects (EC2 Instances)
            </h1>
            <p className="text-aws-textLight dark:text-gray-400">
              Running production-grade projects across multiple environments
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.98 }}
            className="text-center px-4 py-2 bg-aws-orange rounded border border-aws-orange cursor-pointer hover:shadow-md transition-shadow"
          >
            <p className="text-white text-xs mb-1">Total Projects</p>
            <p className="text-2xl font-bold text-white">{projects.length}</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex gap-2 flex-wrap"
      >
        {["All", "Cloud Migration", "DevOps", "Infrastructure", "Infrastructure as Code", "Side Project"].map((filter) => (
          <motion.button
            key={filter}
            whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
              selectedFilter === filter
                ? "bg-aws-orange text-white border border-aws-orange"
                : "bg-white dark:bg-aws-cardDark text-gray-600 dark:text-gray-400 hover:text-aws-text dark:hover:text-white border border-gray-300 dark:border-aws-border hover:border-aws-orange dark:hover:border-blue-400 hover:shadow-md"
            }`}
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="space-y-4">
        {projects
          .filter(project => selectedFilter === "All" || project.type === selectedFilter)
          .map((project, index) => {
          const Icon = project.icon;
          
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01, y: -4, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.98 }}
              className="bg-white dark:bg-aws-cardDark border border-gray-300 dark:border-aws-border rounded shadow-sm p-6 cursor-pointer hover:shadow-lg hover:border-aws-orange dark:hover:border-blue-400 transition-all duration-150"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                {/* Icon */}
                <div className="p-4 bg-gray-100 dark:bg-aws-sidebar rounded-lg">
                  <Icon className="w-8 h-8 text-aws-orange" />
                </div>

                {/* Content */}
                <div className="flex-1 w-full min-w-0">
                  <div className="flex flex-col sm:flex-row items-start justify-between mb-3 gap-2">
                    <div className="w-full">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-aws-text dark:text-white break-words">
                          {project.name}
                        </h3>
                        <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs font-medium rounded-full flex items-center gap-1 whitespace-nowrap">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          {project.status}
                        </span>
                        <span className="px-2 py-1 bg-aws-blue/10 text-aws-blue text-xs font-medium rounded-full whitespace-nowrap">
                          {project.type}
                        </span>
                      </div>
                      <p className="text-aws-textLight dark:text-gray-400 mb-3 break-words">{project.description}</p>
                      <p className="text-gray-500 dark:text-gray-500 text-sm mb-3 break-words">Instance ID: {project.id}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-aws-sidebar text-aws-text dark:text-gray-300 text-sm rounded border border-gray-300 dark:border-aws-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 dark:bg-aws-sidebar rounded p-3">
                        <p className="text-gray-500 dark:text-gray-500 text-xs mb-1 uppercase">{key}</p>
                        <p className="text-aws-text dark:text-white font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
