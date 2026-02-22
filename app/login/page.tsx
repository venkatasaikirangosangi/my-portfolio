"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, MapPin, Building2, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";

export default function LoginPage() {
  const router = useRouter();
  const { theme } = useTheme();

  const handleSignIn = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen max-h-screen overflow-hidden bg-gradient-to-br from-[#232f3e] via-[#1a2332] to-[#0f1419] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white dark:bg-[#1e2a35] rounded-lg shadow-2xl overflow-hidden">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.15 }}
            className="bg-gradient-to-r from-[#232f3e] to-[#1a2632] p-4 text-center cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Shield className="w-10 h-10 text-aws-orange mx-auto mb-2" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl font-bold text-white mb-1"
            >
              DevOps Portfolio
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xs text-gray-300"
            >
              Cloud Engineer Console
            </motion.p>
          </motion.div>

          <div className="p-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ delay: 0.5, duration: 0.15 }}
              className="mb-4 text-center cursor-pointer"
            >
              <h2 className="text-2xl font-bold text-aws-text dark:text-white mb-1">
                Portfolio Access
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Sign in to view projects and experience
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ delay: 0.6, duration: 0.15 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0f1419] dark:to-[#1a2332] border border-gray-200 dark:border-[#3c4d5c] hover:border-aws-orange hover:ring-2 hover:ring-aws-orange rounded-lg p-4 mb-4 shadow-md cursor-pointer transition-all duration-150"
            >
              <div className="flex items-center gap-4 mb-4 pb-3 border-b border-gray-200 dark:border-[#3c4d5c]">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-full overflow-hidden shadow-lg border-2 border-aws-orange"
                >
                  <img 
                    src="/sai.jpg" 
                    alt="Venkata Sai Kiran"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-aws-text dark:text-white">Venkata Sai Kiran</h3>
                  <p className="text-sm text-aws-orange font-medium">Senior DevOps Engineer</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                  <MapPin className="w-4 h-4 text-aws-orange" />
                  <span className="font-medium">Bangalore, India</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                  <Building2 className="w-4 h-4 text-aws-orange" />
                  <span className="font-medium">Capgemini</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                  <Briefcase className="w-4 h-4 text-aws-orange" />
                  <span className="font-medium">3+ Years Experience</span>
                </div>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 20px 25px -5px rgba(255, 153, 0, 0.3)",
                transition: { duration: 0.1 }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSignIn}
              className="w-full bg-aws-orange hover:bg-aws-orange/90 text-white font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-aws-orange/30"
            >
              Sign in to Console
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-gray-50 dark:bg-[#0f1419] border-t border-gray-200 dark:border-[#3c4d5c] p-3 text-center"
          >
            <div className="flex justify-center gap-4 text-xs text-gray-600 dark:text-gray-400">
              <motion.a 
                whileHover={{ scale: 1.1, color: "#FF9900" }}
                href="mailto:venkatasaikirangosangi@gmail.com" 
                className="hover:text-aws-orange transition-colors"
              >
                Contact
              </motion.a>
              <span>•</span>
              <motion.a 
                whileHover={{ scale: 1.1, color: "#FF9900" }}
                href="/SaiKiran_Resume.pdf" 
                download 
                className="hover:text-aws-orange transition-colors"
              >
                Resume
              </motion.a>
              <span>•</span>
              <motion.a 
                whileHover={{ scale: 1.1, color: "#FF9900" }}
                href="https://www.linkedin.com/in/saikirangosangi/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-aws-orange transition-colors"
              >
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-4 flex justify-center gap-3"
        >
          {["Cloud Certified", "Multi-Cloud Expert", "Kubernetes Expert"].map((badge, index) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 1 + index * 0.1, 
                type: "spring",
                scale: { duration: 0.1 },
                y: { duration: 0.1 }
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -3
              }}
              className="bg-white/10 backdrop-blur-sm rounded px-2.5 py-1.5 text-xs text-white cursor-pointer"
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
