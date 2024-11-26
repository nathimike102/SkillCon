import React from 'react';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-5xl font-bold text-purple-900 mb-6 tracking-tight">
            About SkillCon
          </h1>
          <p className="text-2xl text-purple-700 font-light">
            Connecting Skills, Building Communities
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          className="bg-white rounded-2xl p-10 mb-16 shadow-xl backdrop-blur-sm bg-opacity-90"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-semibold text-purple-900 mb-6">Our Mission</h2>
          <p className="text-purple-700 leading-relaxed text-lg">
            SkillCon is dedicated to bridging the gap between skilled volunteers and non-profit organizations. 
            We create a platform where helpers can find meaningful opportunities to contribute their expertise, 
            making it easier for both volunteers and organizations to connect and create positive impact in our communities.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-10 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 backdrop-blur-sm bg-opacity-90"
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold text-purple-900 mb-6">For Volunteers</h3>
            <ul className="text-purple-700 space-y-4 text-lg">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Share your skills and expertise
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Find meaningful volunteer opportunities
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Make a positive social impact
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Connect with inspiring nonprofits
              </li>
            </ul>
          </motion.div>
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 backdrop-blur-sm bg-opacity-90"
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold text-purple-900 mb-6">For Nonprofits</h3>
            <ul className="text-purple-700 space-y-4 text-lg">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Access skilled volunteers
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Post volunteer opportunities
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Find expertise for your projects
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Amplify your social impact
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          className="bg-white rounded-2xl p-10 shadow-xl backdrop-blur-sm bg-opacity-90"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <h2 className="text-3xl font-semibold text-purple-900 mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Embracing new technologies and ideas to make volunteering more accessible and impactful"
              },
              {
                title: "Integrity",
                description: "Building trust through transparent connections between volunteers and nonprofits"
              },
              {
                title: "Impact",
                description: "Empowering positive social change through skilled volunteerism"
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 rounded-xl hover:bg-purple-50 transition-colors duration-300"
                variants={fadeIn}
              >
                <h3 className="text-2xl font-semibold text-purple-900 mb-4">{value.title}</h3>
                <p className="text-purple-700 text-lg">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
