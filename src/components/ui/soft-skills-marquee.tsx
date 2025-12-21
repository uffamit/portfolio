"use client";

import { Badge } from "@/components/ui/badge";
import { skillsData } from "@/data/portfolio-data";

export function SoftSkillsMarquee() {
  // Duplicate the skills list to create the seamless loop effect
  const allSkills = [...skillsData.soft, ...skillsData.soft];

  return (
    <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max gap-4 py-4 animate-scroll hover:[animation-play-state:paused]">
        {allSkills.map((skill, index) => (
          <Badge
            key={`${skill}-${index}`}
            className="text-sm px-4 py-2 hover:scale-105 transition-transform whitespace-nowrap"
            variant="secondary"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
