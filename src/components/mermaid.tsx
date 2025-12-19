"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "loose",
});

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.run({ nodes: [ref.current] });
    }
  }, [chart]);

  return (
    <div className="flex justify-center my-8 bg-card/50 p-4 rounded-lg border border-border/50">
      <div ref={ref} className="mermaid text-center">
        {chart}
      </div>
    </div>
  );
}
