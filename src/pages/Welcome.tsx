import React from 'react';
import { Heart, Users, Search } from 'lucide-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Heart className="w-16 h-16 text-[#E53935] mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-[#333333] mb-4">
            Welcome to BloodDonor
          </h1>
          <p className="text-[#777777] text-lg mb-8">
            Connect with blood donors and save lives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Heart className="w-8 h-8" />,
              title: "Donate Blood",
              description: "Register as a donor and help save lives in your community"
            },
            {
              icon: <Search className="w-8 h-8" />,
              title: "Find Donors",
              description: "Quickly search for compatible blood donors near you"
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Join Community",
              description: "Be part of a community dedicated to helping others"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-[#E53935] mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#333333] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#777777]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => navigate('/login')}>
            Login
          </Button>
          <Button 
            variant="secondary"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};