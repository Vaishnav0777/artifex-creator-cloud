
import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Sparkles className="h-5 w-5 text-artifex-purple" />
            <span className="text-lg font-bold">Artifex</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-4 md:mb-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Gallery
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Artifex. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
