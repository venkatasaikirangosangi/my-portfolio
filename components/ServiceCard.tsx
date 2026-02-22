"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  status: string;
  link: string;
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  status,
  link,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={link}>
        <div className="bg-white dark:bg-aws-cardDark border border-gray-300 dark:border-aws-border rounded shadow-sm p-5 cursor-pointer hover:shadow-md transition-shadow h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="p-2.5 bg-aws-blue/10 rounded">
              <Icon className="w-6 h-6 text-aws-blue" />
            </div>
            <ArrowRight className="w-4 h-4 text-aws-textLight hover:text-aws-blue transition-colors" />
          </div>
          
          <h3 className="text-aws-text dark:text-white font-medium text-base mb-2">{title}</h3>
          <p className="text-aws-textLight dark:text-gray-400 text-sm mb-4">{description}</p>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-xs text-aws-textLight dark:text-gray-400">{status}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
