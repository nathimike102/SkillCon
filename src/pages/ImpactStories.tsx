import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Award, Users } from 'lucide-react';

export default function ImpactStories() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stories = [
    {
      title: "Tech Skills for Change",
      organization: "Digital Literacy Foundation",
      volunteer: "Sarah Chen",
      impact: "Taught 200+ seniors essential digital skills",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "Seeing seniors connect with their families online for the first time was incredibly rewarding."
    },
    {
      title: "Garden Revival Project",
      organization: "Community Greens",
      volunteer: "Michael Rodriguez",
      impact: "Restored 15 senior home gardens",
      image: "https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "Every garden we restore brings joy and safety to a senior's life."
    },
    {
      title: "Youth Mentorship Success",
      organization: "Future Leaders Initiative",
      volunteer: "Aisha Johnson",
      impact: "Mentored 12 students to college acceptance",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "Watching my mentees achieve their dreams is the greatest reward."
    }
  ];

  const stats = [
    { icon: Heart, value: "50,000+", label: "Volunteer Hours" },
    { icon: Users, value: "1,000+", label: "Active Volunteers" },
    { icon: Award, value: "500+", label: "Completed Projects" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-purple-200 to-purple-300 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Impact Stories</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories of volunteers making a difference in their communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16" ref={ref}>
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-purple-500 font-medium mb-2">{story.organization}</p>
                <p className="text-gray-600 mb-4">{story.impact}</p>
                <blockquote className="italic text-gray-600 border-l-4 border-purple-300 pl-4">
                  "{story.quote}"
                  <footer className="mt-2 text-sm text-gray-500">- {story.volunteer}</footer>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 rounded-lg p-6 text-center shadow-lg"
            >
              <stat.icon className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}