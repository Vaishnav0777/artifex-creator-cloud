
import React from 'react';
import { Sparkles, Brush, Download, Gauge, Wand2, Palette } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: <Wand2 className="h-6 w-6 text-artifex-purple" />,
    title: "Text to Image",
    description: "Transform your text descriptions into striking images with our advanced AI technology."
  },
  {
    icon: <Palette className="h-6 w-6 text-artifex-purple" />,
    title: "Style Selection",
    description: "Choose from various artistic styles to customize the look and feel of your generated images."
  },
  {
    icon: <Brush className="h-6 w-6 text-artifex-purple" />,
    title: "AI Enhancement",
    description: "Let our AI enhance your prompts for even better results with improved details and composition."
  },
  {
    icon: <Gauge className="h-6 w-6 text-artifex-purple" />,
    title: "Fast Generation",
    description: "Experience quick image creation with our optimized AI processing pipeline."
  },
  {
    icon: <Download className="h-6 w-6 text-artifex-purple" />,
    title: "Easy Download",
    description: "Save your creations instantly in high resolution for use in any project."
  },
  {
    icon: <Sparkles className="h-6 w-6 text-artifex-purple" />,
    title: "Unlimited Creativity",
    description: "No limits to what you can create - from realistic photos to abstract art and beyond."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-text mb-4">Powerful Features</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover what our AI image generator can do for your creative projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
