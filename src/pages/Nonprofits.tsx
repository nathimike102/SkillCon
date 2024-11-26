import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, BarChart, Zap, ArrowRight } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

export default function Nonprofits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: Users,
      title: "Access Skilled Volunteers",
      description: "Connect with pre-vetted professionals ready to contribute their expertise to your cause."
    },
    {
      icon: Zap,
      title: "AI-Powered Matching",
      description: "Our intelligent system matches your needs with the most suitable volunteers."
    },
    {
      icon: BarChart,
      title: "Track Impact",
      description: "Measure and visualize the impact of volunteer contributions with our analytics dashboard."
    }
  ];

  const testimonials = [
    {
      quote: "SkillCon has transformed how we find and work with skilled volunteers. The AI matching is incredibly accurate!",
      author: "Maria Rodriguez",
      organization: "Environmental Defense Coalition",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "The quality of volunteers we've connected with through SkillCon has exceeded our expectations.",
      author: "James Chen",
      organization: "Tech Education Initiative",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">For Nonprofits</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empower your organization with skilled volunteers who are passionate about making a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16" ref={ref}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <benefit.icon className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-xl p-8 mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Create Your Profile",
                description: "Register your organization and describe your mission and needs."
              },
              {
                step: 2,
                title: "Post Projects",
                description: "List your volunteer opportunities with detailed requirements."
              },
              {
                step: 3,
                title: "Connect & Collaborate",
                description: "Review matches and start working with skilled volunteers."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-500">{step.step}</span>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-purple-500">{testimonial.organization}</div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <RouterLink
            to="/get-started"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-400 hover:bg-purple-500 transition-colors"
          >
            Register Your Nonprofit
            <ArrowRight className="ml-2 h-5 w-5" />
          </RouterLink>
        </motion.div>
      </div>
    </div>
  );
}
