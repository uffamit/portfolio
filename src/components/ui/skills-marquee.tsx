"use client";

import Image from "next/image";
import { skillsData } from "@/data/portfolio-data";

export function SkillsMarquee() {
  // Duplicate the skills list to create the seamless loop effect
  const allSkills = [...skillsData.technical, ...skillsData.technical];

  return (
    <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max gap-8 py-4 animate-scroll">
        {allSkills.map((skill, index) => {
          // Check if this skill needs color inversion in dark mode
          const isInvertable = ['Flask', 'Express.js', 'Framer Motion', 'Next.js', 'GitHub'].includes(skill.name);
          
          return (
            <div
              key={`${skill.name}-${index}`}
              className="flex flex-col items-center justify-center gap-2 w-[100px] group"
            >
              <div className="relative h-16 w-16 flex items-center justify-center p-3 rounded-xl bg-background/40 backdrop-blur-sm shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className={`object-contain transition-all duration-300 opacity-80 group-hover:opacity-100 ${isInvertable ? 'dark:invert' : ''}`}
                />
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
