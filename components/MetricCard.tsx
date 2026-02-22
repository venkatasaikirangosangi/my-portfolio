"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  delay?: number;
}

export default function MetricCard({
  label,
  value,
  change,
  trend,
  delay = 0,
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-aws-cardDark border border-gray-300 dark:border-aws-border rounded shadow-sm p-5"
    >
      <p className="text-aws-textLight dark:text-gray-400 text-sm mb-2">{label}</p>
      <div className="flex items-end justify-between">
        <h3 className="text-3xl font-light text-aws-text dark:text-white">{value}</h3>
        <div className={`flex items-center gap-1 ${
          trend === "up" ? "text-green-600" : "text-red-600"
        }`}>
          {trend === "up" ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span className="text-sm">{change}</span>
        </div>
      </div>
    </motion.div>
  );
}
