import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function GetStarted() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<{
    role: string;
    skills: string[];
    interests: string[];
    availability: string;
  }>({
    role: '',
    skills: [],
    interests: [],
    availability: ''
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-400 to-purple-500 pt-20">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= num ? 'bg-purple-500 text-white' : 'bg-purple-100 text-purple-400'
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>

          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">I want to...</h2>
              <div className="space-y-4">
                <button
                  onClick={() => {
                    setFormData({ ...formData, role: 'volunteer' });
                    setStep(2);
                  }}
                  className="w-full p-4 text-left rounded-lg border-2 border-purple-200 hover:border-purple-500 focus:outline-none focus:border-purple-500"
                >
                  Volunteer my skills
                </button>
                <button
                  onClick={() => {
                    setFormData({ ...formData, role: 'nonprofit' });
                    setStep(2);
                  }}
                  className="w-full p-4 text-left rounded-lg border-2 border-purple-200 hover:border-purple-500 focus:outline-none focus:border-purple-500"
                >
                  Find volunteers for my nonprofit
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {formData.role === 'volunteer' ? 'Select your skills' : 'What skills do you need?'}
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {['Web Development', 'Design', 'Marketing', 'Writing', 'Management', 'Finance'].map((skill) => (
                  <button
                    key={skill}
                    onClick={() => {
                      const updatedSkills = formData.skills.includes(skill)
                        ? formData.skills.filter(s => s !== skill)
                        : [...formData.skills, skill];
                      setFormData({ ...formData, skills: updatedSkills });
                    }}
                    className={`p-3 rounded-lg border-2 ${
                      formData.skills.includes(skill)
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-purple-200'
                    } hover:border-purple-500`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(3)}
                className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors"
              >
                Continue
              </button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Almost there!</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                    Availability
                  </label>
                  <select
                    id="availability"
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full p-2 border-2 border-purple-200 rounded-lg"
                  >
                    <option value="">Select availability</option>
                    <option value="0-5">0-5 hours/week</option>
                    <option value="5-10">5-10 hours/week</option>
                    <option value="10+">10+ hours/week</option>
                  </select>
                </div>
              </div>
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors flex items-center justify-center"
              >
                Complete Profile <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}