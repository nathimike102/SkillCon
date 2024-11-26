import { Brain, Users, BarChart, Globe } from 'lucide-react';

export default function Features() {
  const features = [
    {
      name: 'AI-Powered Matching',
      description: 'Our advanced algorithm ensures perfect matches between volunteers and nonprofits based on skills, interests, and availability.',
      icon: Brain
    },
    {
      name: 'Impact Tracking',
      description: 'Real-time visualization of your contributions with detailed metrics and shareable impact reports.',
      icon: BarChart
    },
    {
      name: 'Global Accessibility',
      description: 'Multi-language support and low-bandwidth options make volunteering accessible worldwide.',
      icon: Globe
    },
    {
      name: 'Community Building',
      description: 'Connect with like-minded volunteers and organizations to create lasting relationships.',
      icon: Users
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-purple-900 to-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-300 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Empowering Meaningful Connections
          </p>
          <p className="mt-4 max-w-2xl text-xl text-purple-200 lg:mx-auto">
            Our platform combines cutting-edge technology with human-centered design to create impactful volunteer experiences.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-4 gap-12">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-white">{feature.name}</h3>
                  <p className="mt-2 text-base text-purple-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}