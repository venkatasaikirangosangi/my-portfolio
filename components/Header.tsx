"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bell, Search, User, Settings, Sun, Moon, LogOut, FileText, Mail, ChevronDown, HelpCircle, BookOpen, MessageSquare, Globe2, Server, Activity, DollarSign, Code2, Download, LayoutDashboard, Menu } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showRegion, setShowRegion] = useState(false);
  const [showPageMenu, setShowPageMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("ap-south-1");
  const pathname = usePathname();
  const [notifications, setNotifications] = useState([
    { 
      id: 1, 
      type: 'success',
      title: "Mercedes-Benz Deployment", 
      message: "Production release v3.2.1 deployed successfully to EKS cluster. All health checks passed.", 
      time: "15 min ago", 
      unread: true,
      link: "/projects",
      icon: "check"
    },
    { 
      id: 2, 
      type: 'info',
      title: "Kubernetes Cluster Update", 
      message: "EKS cluster upgraded to v1.28. Node groups scaled across 3 availability zones.", 
      time: "1 hour ago", 
      unread: true,
      link: "/projects",
      icon: "activity"
    },
    { 
      id: 3, 
      type: 'warning',
      title: "AWS Cost Alert", 
      message: "Monthly spend reached 85% of budget. Review EC2 instances and CloudWatch logs retention.", 
      time: "3 hours ago", 
      unread: true,
      link: "/skills",
      icon: "alert"
    },
    { 
      id: 4, 
      type: 'success',
      title: "Terraform State Sync", 
      message: "Infrastructure code merged to main. S3 backend state updated for ap-south-1 region.", 
      time: "5 hours ago", 
      unread: false,
      link: "/projects",
      icon: "check"
    },
    { 
      id: 5, 
      type: 'info',
      title: "Team Collaboration Update", 
      message: "Successfully onboarded 2 developers with GitLab CI/CD access and AWS IAM roles.", 
      time: "1 day ago", 
      unread: false,
      link: "/experience",
      icon: "user"
    },
  ]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timezone = regionTimezones[selectedRegion] || "Asia/Kolkata";
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        timeZone: timezone,
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [selectedRegion]);

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, unread: false } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, unread: false }))
    );
  };

  const getNotificationIcon = (icon: string) => {
    switch(icon) {
      case 'check': return '✓';
      case 'activity': return '⟳';
      case 'alert': return '⚠';
      case 'user': return '👤';
      default: return '•';
    }
  };

  const getNotificationColor = (type: string) => {
    switch(type) {
      case 'success': return 'text-green-600 dark:text-green-400';
      case 'warning': return 'text-yellow-600 dark:text-yellow-400';
      case 'info': return 'text-blue-600 dark:text-blue-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const services = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard, description: "Console Home" },
    { name: "Projects", path: "/projects", icon: Server, description: "EC2 Instances" },
    { name: "Skills", path: "/skills", icon: Activity, description: "CloudWatch Metrics" },
    { name: "Experience", path: "/experience", icon: DollarSign, description: "Cost Explorer" },
    { name: "About", path: "/about", icon: User, description: "IAM Profile" },
    { name: "Contact", path: "/contact", icon: Mail, description: "SNS Notifications" },
  ];

  const regions = [
    { code: "ap-south-1", name: "Bangalore", country: "🇮🇳 India", timezone: "IST (UTC+5:30)", description: "Current Location" },
    { code: "eu-central-1", name: "Germany", country: "🇩🇪 Europe", timezone: "CET (UTC+1)", description: "Mercedes-Benz Client" },
  ];

  const currentRegion = regions.find(r => r.code === selectedRegion) || regions[0];

  // Timezone mapping for regions
  const regionTimezones: { [key: string]: string } = {
    "ap-south-1": "Asia/Kolkata",
    "eu-central-1": "Europe/Berlin",
  };

  const getPageTitle = () => {
    const routes: { [key: string]: string } = {
      '/': 'Dashboard',
      '/dashboard': 'Dashboard',
      '/projects': 'EC2 - Projects',
      '/skills': 'CloudWatch - Skills',
      '/experience': 'Cost Explorer - Experience',
      '/about': 'IAM - About',
      '/contact': 'SNS - Contact',
    };
    return routes[pathname] || 'Dashboard';
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#232f3e] dark:bg-[#232f3e] border-b border-[#3c4d5c] px-4 py-2 relative z-40"
    >
      <div className="flex items-center gap-4 min-w-0">
        {/* Left Section: Menu button + Breadcrumb + Search */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Mobile Menu Button */}
          {onMenuClick && (
            <motion.button
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded text-white flex-shrink-0"
              title="Open menu"
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          )}
          
          {/* Page Title Breadcrumb with Dropdown */}
          <div className="relative flex-shrink-0">
            <motion.button
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              onClick={() => {
                setShowPageMenu(!showPageMenu);
                setShowNotifications(false);
                setShowProfile(false);
                setShowServices(false);
                setShowRegion(false);
              }}
              className="flex items-center gap-2 text-sm bg-[#1a2332] px-3 py-1.5 rounded border border-[#3c4d5c] cursor-pointer hover:border-aws-orange transition-colors"
            >
              <LayoutDashboard className="w-4 h-4 text-aws-orange" />
              <span className="text-gray-400">/</span>
              <span className="text-white font-medium whitespace-nowrap">{getPageTitle()}</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </motion.button>

            <AnimatePresence>
              {showPageMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="fixed left-4 md:absolute md:left-0 mt-2 w-72 max-w-[calc(100vw-2rem)] bg-white dark:bg-[#1e2a35] border border-gray-300 dark:border-[#3c4d5c] rounded-lg shadow-xl z-[100]"
                  style={{ top: '60px' }}
                >
                  <div className="p-2">
                    {services.map((service) => {
                      const Icon = service.icon;
                      const isActive = pathname === service.path;
                      return (
                        <Link key={service.path} href={service.path}>
                          <button
                            onClick={() => setShowPageMenu(false)}
                            className={`w-full text-left px-3 py-2.5 rounded transition-colors flex items-center gap-3 ${
                              isActive 
                                ? 'bg-aws-orange/10 text-aws-orange' 
                                : 'text-aws-text dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2a3f51]'
                            }`}
                          >
                            <Icon className={`w-4 h-4 ${isActive ? 'text-aws-orange' : 'text-gray-500 dark:text-gray-400'}`} />
                            <div className="flex-1">
                              <p className="text-sm font-medium">{service.name}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{service.description}</p>
                            </div>
                            {isActive && (
                              <div className="w-1.5 h-1.5 bg-aws-orange rounded-full" />
                            )}
                          </button>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md min-w-0">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search [Alt+S]"
                className="w-full bg-[#2a3f51] border border-[#3c4d5c] rounded pl-10 pr-4 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-aws-orange focus:ring-1 focus:ring-aws-orange"
              />
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1 hidden md:block"></div>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide min-w-0">
          {/* Download Resume */}
          <motion.a
            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            href="/SaiKiran_Resume.pdf"
            download="Venkata_Sai_Kiran_Resume.pdf"
            className="flex items-center gap-2 px-3 py-1.5 rounded text-white text-sm font-medium whitespace-nowrap flex-shrink-0"
            title="Download Resume"
          >
            <Download className="w-4 h-4" />
            <span className="hidden lg:inline">Resume</span>
          </motion.a>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            onClick={toggleTheme}
            className="p-2 rounded text-white flex-shrink-0"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>

          {/* Notifications */}
          <div className="relative flex-shrink-0">
            <motion.button
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfile(false);
                setShowServices(false);
                setShowRegion(false);
              }}
              className="relative p-2 rounded text-white flex-shrink-0"
            >
              <Bell className="w-5 h-5" />
              {notifications.filter(n => n.unread).length > 0 && (
                <span className="absolute top-1 right-1 flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aws-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-aws-orange items-center justify-center">
                    <span className="text-white text-xs font-bold">{notifications.filter(n => n.unread).length}</span>
                  </span>
                </span>
              )}
            </motion.button>

            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="fixed right-4 mt-2 w-96 max-w-[calc(100vw-2rem)] bg-white dark:bg-[#1e2a35] border border-gray-300 dark:border-[#3c4d5c] rounded-lg shadow-2xl z-[100]"
                  style={{ top: '60px' }}
                >
                  <div className="p-4 border-b border-gray-200 dark:border-[#3c4d5c] flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-aws-text dark:text-white">Notifications</h3>
                    {notifications.filter(n => n.unread).length > 0 && (
                      <button 
                        onClick={markAllAsRead}
                        className="text-xs text-aws-orange hover:text-aws-orange/80 font-medium transition-colors"
                      >
                        Mark all as read
                      </button>
                    )}
                  </div>
                  <div className="max-h-[32rem] overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="p-8 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">No notifications</p>
                      </div>
                    ) : (
                      notifications.map((notif) => (
                        <Link key={notif.id} href={notif.link}>
                          <div
                            onClick={() => {
                              markAsRead(notif.id);
                              setShowNotifications(false);
                            }}
                            className={`p-4 border-b border-gray-200 dark:border-[#3c4d5c] hover:bg-gray-50 dark:hover:bg-[#2a3f51] cursor-pointer transition-colors ${
                              notif.unread ? "bg-blue-50/50 dark:bg-[#2a3f51]/30" : ""
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`text-xl mt-0.5 ${getNotificationColor(notif.type)}`}>
                                {getNotificationIcon(notif.icon)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                  <p className="text-sm font-semibold text-aws-text dark:text-white">{notif.title}</p>
                                  {notif.unread && <span className="w-2 h-2 bg-aws-orange rounded-full mt-1.5 flex-shrink-0" />}
                                </div>
                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1.5 leading-relaxed">{notif.message}</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-xs text-gray-500 dark:text-gray-500">{notif.time}</span>
                                  <span className="text-gray-400">•</span>
                                  <span className="text-xs text-aws-orange hover:underline">View details →</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))
                    )}
                  </div>
                  <div className="p-3 text-center border-t border-gray-200 dark:border-[#3c4d5c] bg-gray-50 dark:bg-[#1a2633]">
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {notifications.filter(n => n.unread).length} unread • {notifications.length} total
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Region Selector */}
          <div className="relative flex-shrink-0">
            <motion.button
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              onClick={() => {
                setShowRegion(!showRegion);
                setShowNotifications(false);
                setShowProfile(false);
                setShowServices(false);
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded cursor-pointer border-l border-[#3c4d5c] ml-2 pl-3"
            >
              <Globe2 className="w-4 h-4 text-gray-400" />
              <p className="text-xs text-white hidden md:inline">{currentRegion.name}</p>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </motion.button>

            <AnimatePresence>
              {showRegion && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="fixed right-4 mt-2 w-80 max-w-[calc(100vw-2rem)] bg-white dark:bg-[#1e2a35] border border-gray-300 dark:border-[#3c4d5c] rounded-lg shadow-xl z-[100]"
                  style={{ top: '60px' }}
                >
                  <div className="p-3 border-b border-gray-200 dark:border-[#3c4d5c]">
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">Select Region</p>
                  </div>
                  <div className="p-2">
                    {regions.map((region) => (
                      <button
                        key={region.code}
                        onClick={() => {
                          setSelectedRegion(region.code);
                          setShowRegion(false);
                        }}
                        className={`w-full text-left px-3 py-2.5 text-sm rounded flex items-start gap-3 transition-colors ${
                          selectedRegion === region.code 
                            ? "bg-aws-orange/10 dark:bg-aws-orange/20" 
                            : "hover:bg-gray-100 dark:hover:bg-[#2a3f51]"
                        }`}
                      >
                        <div className="text-2xl mt-0.5 opacity-80 dark:opacity-100 dark:brightness-150 dark:contrast-125">
                          {region.country.split(' ')[0]}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold text-aws-text dark:text-white">{region.name}</p>
                            {selectedRegion === region.code && (
                              <span className="text-xs bg-aws-orange text-white px-2 py-0.5 rounded">Active</span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{region.code}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{region.description}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{region.timezone}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="p-3 text-center border-t border-gray-200 dark:border-[#3c4d5c] bg-gray-50 dark:bg-[#1a2633]">
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Regions where I've worked or available for opportunities
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Clock */}
          <div className="flex items-center justify-center px-3 py-1.5 border-l border-[#3c4d5c] flex-shrink-0">
            <p className="text-xs text-white font-mono whitespace-nowrap">{currentTime}</p>
          </div>

          {/* User Profile */}
          <div className="relative flex-shrink-0">
            <motion.button
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              onClick={() => {
                setShowProfile(!showProfile);
                setShowNotifications(false);
                setShowServices(false);
                setShowRegion(false);
              }}
              className="flex items-center gap-2 px-2 sm:px-3 py-1.5 rounded border-l border-[#3c4d5c] ml-2 pl-2 sm:pl-3"
            >
              <User className="w-4 h-4 text-gray-400" />
              <div className="text-left hidden md:block">
                <p className="text-xs text-white font-medium">Sai Kiran</p>
              </div>
              <ChevronDown className="w-3 h-3 text-gray-400 hidden sm:block" />
            </motion.button>

            <AnimatePresence>
              {showProfile && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="fixed right-4 mt-2 w-64 max-w-[calc(100vw-2rem)] bg-white dark:bg-[#1e2a35] border border-gray-300 dark:border-[#3c4d5c] rounded-lg shadow-xl z-[100]"
                  style={{ top: '60px' }}
                >
                  <div className="p-4 border-b border-gray-200 dark:border-[#3c4d5c] bg-gray-50 dark:bg-[#1a2633]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-aws-orange">
                        <img 
                          src="/sai.jpg" 
                          alt="Venkata Sai Kiran"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-aws-text dark:text-white">Venkata Sai Kiran</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Senior DevOps Engineer</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <Link href="/about">
                      <button className="w-full text-left px-3 py-2.5 text-sm text-aws-text dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2a3f51] rounded transition-colors flex items-center gap-3">
                        <User className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span>View Profile</span>
                      </button>
                    </Link>
                    <Link href="/experience">
                      <button className="w-full text-left px-3 py-2.5 text-sm text-aws-text dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2a3f51] rounded transition-colors flex items-center gap-3">
                        <FileText className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span>Experience</span>
                      </button>
                    </Link>
                    <Link href="/contact">
                      <button className="w-full text-left px-3 py-2.5 text-sm text-aws-text dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2a3f51] rounded transition-colors flex items-center gap-3">
                        <Mail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span>Contact</span>
                      </button>
                    </Link>
                    <div className="border-t border-gray-200 dark:border-[#3c4d5c] my-2"></div>
                    <a href="/SaiKiran_Resume.pdf" download="Venkata_Sai_Kiran_Resume.pdf">
                      <button className="w-full text-left px-3 py-2.5 text-sm text-aws-text dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2a3f51] rounded transition-colors flex items-center gap-3">
                        <Download className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span>Download Resume</span>
                      </button>
                    </a>
                    <div className="border-t border-gray-200 dark:border-[#3c4d5c] my-2"></div>
                    <Link href="/login">
                      <button className="w-full text-left px-3 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors flex items-center gap-3">
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
