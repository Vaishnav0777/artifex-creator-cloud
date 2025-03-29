
import React, { useState } from 'react';
import { Sparkles, Wand2, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

interface PromptInputProps {
  onGenerate: (prompt: string, settings: any) => void;
  isGenerating: boolean;
}

const PromptInput: React.FC<PromptInputProps> = ({ onGenerate, isGenerating }) => {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('photorealistic');
  const [enhancePrompt, setEnhancePrompt] = useState(true);
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [quality, setQuality] = useState([7]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    onGenerate(prompt, {
      style,
      enhancePrompt,
      aspectRatio,
      quality: quality[0]
    });
  };

  return (
    <section className="py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <Card className="border-2 shadow-sm">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="prompt" className="text-lg font-medium flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-artifex-purple" />
                  Describe your image
                </Label>
                <Textarea
                  id="prompt"
                  placeholder="A vibrant cityscape at sunset with neon lights, cyberpunk style..."
                  className="min-h-[120px] resize-none text-lg"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="style" className="font-medium">Image Style</Label>
                  <Select value={style} onValueChange={setStyle}>
                    <SelectTrigger id="style">
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="photorealistic">Photorealistic</SelectItem>
                      <SelectItem value="cartoon">Cartoon</SelectItem>
                      <SelectItem value="3d">3D Render</SelectItem>
                      <SelectItem value="pixel">Pixel Art</SelectItem>
                      <SelectItem value="painting">Digital Painting</SelectItem>
                      <SelectItem value="anime">Anime</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="aspectRatio" className="font-medium">Aspect Ratio</Label>
                  <Select value={aspectRatio} onValueChange={setAspectRatio}>
                    <SelectTrigger id="aspectRatio">
                      <SelectValue placeholder="Select ratio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1:1">Square (1:1)</SelectItem>
                      <SelectItem value="16:9">Landscape (16:9)</SelectItem>
                      <SelectItem value="9:16">Portrait (9:16)</SelectItem>
                      <SelectItem value="4:3">Standard (4:3)</SelectItem>
                      <SelectItem value="3:2">Classic (3:2)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="quality" className="font-medium">Quality</Label>
                  <Slider 
                    id="quality"
                    min={1} 
                    max={10} 
                    step={1}
                    value={quality}
                    onValueChange={setQuality}
                    className="pt-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground pt-1">
                    <span>Draft</span>
                    <span>High Quality</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch 
                  id="enhance-prompt" 
                  checked={enhancePrompt}
                  onCheckedChange={setEnhancePrompt}
                />
                <Label htmlFor="enhance-prompt" className="font-medium">
                  Enhance prompt with AI
                </Label>
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full animated-gradient-bg text-white"
                disabled={!prompt.trim() || isGenerating}
              >
                {isGenerating ? (
                  <>
                    <span className="animate-pulse">Generating...</span>
                    <Wand2 className="ml-2 h-5 w-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Generate Image
                    <ImageIcon className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PromptInput;
