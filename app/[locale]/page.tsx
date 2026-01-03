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
      
      {/* Sentinel for Intersection Observer - detects when hero is scrolled past */}
      <div id="navbar-sentinel" className="absolute top-[100vh] left-0 w-full h-1 pointer-events-none" />

      {/* Projects Section */}
      <ProjectsSection />

      {/* References Section */}
      <ReferencesSection />
    </div>
  );
}

