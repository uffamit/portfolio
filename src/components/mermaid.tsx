"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { ZoomIn, ZoomOut, Maximize2, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "strict",
  maxTextSize: 50000,
  maxEdges: 2000,
});

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const normalRef = useRef<HTMLDivElement>(null);
  const fullscreenRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!isFullscreen && normalRef.current) {
      mermaid.run({ nodes: [normalRef.current] });
    }
  }, [chart, isFullscreen]);

  useEffect(() => {
    if (isFullscreen && fullscreenRef.current) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        if (fullscreenRef.current) {
          mermaid.run({ nodes: [fullscreenRef.current] });
        }
      }, 100);
    }
  }, [isFullscreen, chart]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    if (isFullscreen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      // Set scale to 200% when entering fullscreen
      setScale(2);
      setPosition({ x: 0, y: 0 });
    } else {
      document.body.style.overflow = '';
      // Reset scale when exiting fullscreen
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isFullscreen]);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handlePan = (direction: 'up' | 'down' | 'left' | 'right') => {
    const step = 50;
    setPosition((prev) => {
      switch (direction) {
        case 'up':
          return { ...prev, y: prev.y + step };
        case 'down':
          return { ...prev, y: prev.y - step };
        case 'left':
          return { ...prev, x: prev.x + step };
        case 'right':
          return { ...prev, x: prev.x - step };
        default:
          return prev;
      }
    });
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-background z-50 flex flex-col"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsFullscreen(false);
            }
          }}
        >
          {/* Control Panel - Top Right */}
          <div className="absolute top-4 right-4 z-10 flex gap-2 bg-background/90 backdrop-blur-sm p-2 rounded-lg border border-border/50 shadow-lg">
            <Button
              size="sm"
              variant="ghost"
              onClick={handleZoomIn}
              title="Zoom In"
              className="h-8 w-8 p-0"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleZoomOut}
              title="Zoom Out"
              className="h-8 w-8 p-0"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={toggleFullscreen}
              title="Exit Fullscreen"
              className="h-8 w-8 p-0"
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation Controls - Top Left */}
          <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-sm p-2 rounded-lg border border-border/50 shadow-lg">
            <div className="grid grid-cols-3 gap-1">
              <div></div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handlePan('up')}
                title="Pan Up"
                className="h-8 w-8 p-0"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
              <div></div>
              
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handlePan('left')}
                title="Pan Left"
                className="h-8 w-8 p-0"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleReset}
                title="Reset View"
                className="h-8 w-8 p-0"
              >
                <Maximize2 className="h-3 w-3" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handlePan('right')}
                title="Pan Right"
                className="h-8 w-8 p-0"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
              
              <div></div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handlePan('down')}
                title="Pan Down"
                className="h-8 w-8 p-0"
              >
                <ArrowDown className="h-4 w-4" />
              </Button>
              <div></div>
            </div>
          </div>

          {/* Zoom Level Indicator */}
          <div className="absolute bottom-4 left-4 z-10 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-border/50 text-xs font-mono">
            {Math.round(scale * 100)}%
          </div>

          {/* Fullscreen Diagram Container */}
          <div className="flex-1 flex justify-center items-center overflow-hidden p-8">
            <div
              className="transition-transform duration-200"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transformOrigin: "center",
              }}
            >
              <div ref={fullscreenRef} className="mermaid text-center">
                {chart}
              </div>
            </div>
          </div>
        </div>
      )}

      {!isFullscreen && (
        <div className="relative my-8 bg-card/50 rounded-lg border border-border/50 overflow-hidden">
          {/* Control Panel - Top Right */}
          <div className="absolute top-4 right-4 z-10 flex gap-2 bg-background/90 backdrop-blur-sm p-2 rounded-lg border border-border/50 shadow-lg">
            <Button
              size="sm"
              variant="ghost"
              onClick={handleZoomIn}
              title="Zoom In"
              className="h-8 w-8 p-0"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleZoomOut}
              title="Zoom Out"
              className="h-8 w-8 p-0"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={toggleFullscreen}
              title="Fullscreen"
              className="h-8 w-8 p-0"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation Controls - Top Left */}
          <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-sm p-2 rounded-lg border border-border/50 shadow-lg">
            <div className="grid grid-cols-3 gap-1">
              <div></div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handlePan('up')}
                title="Pan Up"
                className="h-8 w-8 p-0"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
              <div></div>
              
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handlePan('left')}
                title="Pan Left"
                className="h-8 w-8 p-0"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleReset}
                title="Reset View"
                className="h-8 w-8 p-0"
              >
                <Maximize2 className="h-3 w-3" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handlePan('right')}
                title="Pan Right"
                className="h-8 w-8 p-0"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
              
              <div></div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handlePan('down')}
                title="Pan Down"
                className="h-8 w-8 p-0"
              >
                <ArrowDown className="h-4 w-4" />
              </Button>
              <div></div>
            </div>
          </div>

          {/* Zoom Level Indicator */}
          <div className="absolute bottom-4 left-4 z-10 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-border/50 text-xs font-mono">
            {Math.round(scale * 100)}%
          </div>

          {/* Diagram Container */}
          <div ref={containerRef} className="flex justify-center items-center p-4 overflow-hidden min-h-[300px]">
            <div
              className="transition-transform duration-200"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transformOrigin: "center",
              }}
            >
              <div ref={normalRef} className="mermaid text-center">
                {chart}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
