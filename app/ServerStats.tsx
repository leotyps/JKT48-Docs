import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Key, FileSearch, CheckCircle } from "lucide-react";

export default function ServerStats() {
  const [stats, setStats] = useState({
    totalKeys: 0,
    activeKeys: 0,
    totalRequests: 0,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://v2.jkt48connect.my.id/api/admin/stats?username=vzy&password=vzy');
        
        if (!response.ok) {
          throw new Error('Failed to fetch stats');
        }
        
        const data = await response.json();
        
        if (data.status) {
          setStats({
            totalKeys: data.data.totalKeys,
            activeKeys: data.data.activeKeys,
            totalRequests: data.data.totalRequests,
            isLoading: false,
            error: null
          });
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        setStats(prev => ({
          ...prev,
          isLoading: false,
          error: error.message
        }));
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  if (stats.isLoading) {
    return (
      <div className="w-full flex justify-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (stats.error) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        Unable to load server statistics at this time.
      </div>
    );
  }

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Total API Keys */}
      <motion.div 
        variants={itemVariants}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-muted flex items-center"
      >
        <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 mr-4">
          <Key className="h-6 w-6 text-blue-600 dark:text-blue-300" />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Total API Keys</p>
          <h4 className="text-2xl font-bold mt-1">{stats.totalKeys}</h4>
        </div>
      </motion.div>

      {/* Active API Keys */}
      <motion.div 
        variants={itemVariants}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-muted flex items-center"
      >
        <div className="rounded-full bg-green-100 dark:bg-green-900 p-3 mr-4">
          <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-300" />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Active API Keys</p>
          <h4 className="text-2xl font-bold mt-1">{stats.activeKeys}</h4>
        </div>
      </motion.div>

      {/* Total Requests */}
      <motion.div 
        variants={itemVariants}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-muted flex items-center"
      >
        <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-3 mr-4">
          <FileSearch className="h-6 w-6 text-purple-600 dark:text-purple-300" />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Total API Requests</p>
          <h4 className="text-2xl font-bold mt-1">{stats.totalRequests}</h4>
        </div>
      </motion.div>
    </motion.div>
  );
}
