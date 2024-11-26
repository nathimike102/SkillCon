import { ArrowRight, Users, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-300 via-purple-200 to-purple-300 lg:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-300/30 to-purple-200/30 animate-gradient"></div>
      </motion.div>

      <div className="container mx-auto relative px-4">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="sm:text-center lg:text-left"
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block"
                >
                  Connect Your Skills
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="block text-purple-500"
                >
                  With Meaningful Impact
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Join SkillCon to match your expertise with nonprofits that need
                your help. Our AI-powered platform finds the perfect
                opportunities for your skills and passion.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div className="rounded-md shadow">
                  <Link
                    to="/get-started"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-400 hover:bg-purple-500 md:py-4 md:text-lg md:px-10 transition-all transform hover:scale-105 duration-200"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-500 bg-purple-50 hover:bg-purple-100 md:py-4 md:text-lg md:px-10 transition-all transform hover:scale-105 duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </main>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3 lg:gap-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 text-purple-600 bg-white/80 p-4 rounded-lg shadow-sm"
            >
              <Users className="h-8 w-8" />
              <span>5000+ Volunteers</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 text-purple-600 bg-white/80 p-4 rounded-lg shadow-sm"
            >
              <Award className="h-8 w-8" />
              <span>1000+ Projects</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 text-purple-600 bg-white/80 p-4 rounded-lg shadow-sm"
            >
              <Sparkles className="h-8 w-8" />
              <span>AI-Powered Matching</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
