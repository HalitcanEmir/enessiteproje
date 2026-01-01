'use client';

import HeroSlider from '@/components/HeroSlider';
import ProjectsSection from '@/components/ProjectsSection';
import ReferencesSection from '@/components/ReferencesSection';
import { featuredProjects } from '@/data/projects';

export default function HomePage() {

  return (
    <div className="relative">
      {/* Full Screen Hero Slider */}
      <HeroSlider projects={featuredProjects} />

      {/* Projects Section */}
      <ProjectsSection />

      {/* References Section */}
      <ReferencesSection />
    </div>
  );
}

