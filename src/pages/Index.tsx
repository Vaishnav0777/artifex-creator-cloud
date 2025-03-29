
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PromptInput from '@/components/PromptInput';
import ImageResults, { GeneratedImage } from '@/components/ImageResults';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

// Sample placeholder images for demo purposes
const placeholderImages = [
  'https://images.unsplash.com/photo-1686135161528-d0ccc9c7d86a',
  'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
];

const Index: React.FC = () => {
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleGenerateImage = (prompt: string, settings: any) => {
    setIsGenerating(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      // In a real app, this would call an actual AI image generation API
      const newImage: GeneratedImage = {
        id: Math.random().toString(36).substring(2, 9),
        url: placeholderImages[Math.floor(Math.random() * placeholderImages.length)],
        prompt: prompt,
        timestamp: new Date()
      };
      
      setGeneratedImages(prev => [newImage, ...prev]);
      setIsGenerating(false);
      toast.success('Image generated successfully!');
    }, 3000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <PromptInput onGenerate={handleGenerateImage} isGenerating={isGenerating} />
        <ImageResults images={generatedImages} isGenerating={isGenerating} />
        <Features />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
