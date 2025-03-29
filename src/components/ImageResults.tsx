
import React from 'react';
import { Download, Share2, ImagePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  timestamp: Date;
}

interface ImageResultsProps {
  images: GeneratedImage[];
  isGenerating: boolean;
}

const ImageResults: React.FC<ImageResultsProps> = ({ images, isGenerating }) => {
  const handleDownload = (image: GeneratedImage) => {
    // In a real application, this would download the image
    const a = document.createElement('a');
    a.href = image.url;
    a.download = `artifex-${image.id}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Your Creations</h2>
          {images.length > 0 && (
            <Button variant="outline" size="sm">
              View All
            </Button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isGenerating && (
            <Card className="overflow-hidden border-2 border-dashed border-muted animate-pulse-slow">
              <CardContent className="p-0">
                <div className="relative aspect-square bg-muted flex items-center justify-center">
                  <Skeleton className="h-full w-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImagePlus className="h-12 w-12 text-muted-foreground/40" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4">
                <div className="w-full space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </CardFooter>
            </Card>
          )}
          
          {images.map((image) => (
            <Card key={image.id} className="overflow-hidden border-2 hover:shadow-md transition-all">
              <CardContent className="p-0">
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <img 
                    src={image.url} 
                    alt={image.prompt}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardContent>
              <CardFooter className="p-4 flex justify-between items-center">
                <div className="max-w-[70%]">
                  <p className="text-sm text-muted-foreground truncate" title={image.prompt}>
                    {image.prompt}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost" onClick={() => handleDownload(image)}>
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
          
          {!isGenerating && images.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-lg">
              <ImagePlus className="h-12 w-12 text-muted-foreground/40 mb-4" />
              <h3 className="text-lg font-medium mb-2">No images generated yet</h3>
              <p className="text-muted-foreground mb-4">
                Use the prompt box above to create your first AI-generated image
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageResults;
