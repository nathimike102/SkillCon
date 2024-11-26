import { useState } from 'react';
import { Clock, MapPin, Users, Search } from 'lucide-react';

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');

  const projects = [
    {
      title: "Website Redesign for Environmental NGO",
      organization: "EcoWatch Foundation",
      location: "Remote",
      commitment: "5-10 hours/week",
      duration: "3 months",
      skills: ["Web Development", "UI/UX Design"],
      volunteers: 2,
      description: "Help us modernize our website to better showcase our environmental conservation efforts."
    },
    {
      title: "Senior Care & Garden Maintenance",
      organization: "Golden Years Support",
      location: "Local - San Francisco",
      commitment: "2-4 hours/week",
      duration: "Ongoing",
      skills: ["Physical Labor", "Elderly Care"],
      volunteers: 3,
      description: "Help seniors maintain their gardens and outdoor spaces, making their homes safe and beautiful."
    },
    {
      title: "Youth Mentorship Program",
      organization: "Future Leaders Initiative",
      location: "Hybrid",
      commitment: "3-5 hours/week",
      duration: "6 months",
      skills: ["Mentoring", "Education"],
      volunteers: 5,
      description: "Guide and inspire young students in their academic and personal development journey."
    },
    {
      title: "Community Food Bank Organization",
      organization: "FeedHope Network",
      location: "Local - Multiple Locations",
      commitment: "4-6 hours/week",
      duration: "Flexible",
      skills: ["Physical Labor", "Organization"],
      volunteers: 8,
      description: "Help sort, package, and distribute food to families in need throughout the community."
    },
    {
      title: "Pet Shelter Support",
      organization: "Paws & Hearts",
      location: "Local - Oakland",
      commitment: "3-4 hours/week",
      duration: "Ongoing",
      skills: ["Animal Care", "Physical Labor"],
      volunteers: 4,
      description: "Support our animal shelter with daily care, cleaning, and animal socialization activities."
    },
    {
      title: "Digital Literacy for Seniors",
      organization: "TechConnect",
      location: "Remote/Local",
      commitment: "2-3 hours/week",
      duration: "3 months",
      skills: ["Teaching", "Technology"],
      volunteers: 6,
      description: "Teach basic computer and internet skills to seniors, helping them stay connected in the digital age."
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkill = selectedSkill === '' || project.skills.some(skill => skill.toLowerCase() === selectedSkill.toLowerCase());
    return matchesSearch && matchesSkill;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-300 to-purple-400 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Available Projects</h1>
          <div className="flex flex-wrap gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-purple-300 pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <select 
              title="Select a skill"
              className="px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-purple-300"
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
            >
              <option value="">All Skills</option>
              <option value="Web Development">Web Development</option>
              <option value="Physical Labor">Physical Labor</option>
              <option value="Teaching">Teaching</option>
              <option value="Mentoring">Mentoring</option>
              <option value="Animal Care">Animal Care</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-purple-600 font-medium mb-4">{project.organization}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    {project.commitment}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    {project.volunteers} volunteer{project.volunteers > 1 ? 's' : ''} needed
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-600">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors transform hover:scale-105 duration-200">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}