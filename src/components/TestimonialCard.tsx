import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  testimonial: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, location, testimonial, rating }) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 border border-border">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-card-foreground mb-4 italic">"{testimonial}"</p>
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-lg">{name.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-semibold text-card-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;