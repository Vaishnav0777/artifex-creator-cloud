
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter gradient-text max-w-3xl">
            Transform Your Ideas Into Stunning Images with AI
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-[700px]">
            Create beautiful, unique artwork from simple text descriptions using our advanced AI image generator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button className="px-8 animated-gradient-bg text-white" size="lg">
              Start Creating <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
