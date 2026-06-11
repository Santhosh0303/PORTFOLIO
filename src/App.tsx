import React from 'react';
import SiteShell from './components/layout/SiteShell';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import HumanRevealSection from './components/sections/HumanRevealSection';
import InteractionMoment from './components/sections/InteractionMoment';
import ProofMetricsStrip from './components/sections/ProofMetricsStrip';
import FeaturedProjectsPreview from './components/sections/FeaturedProjectsPreview';
import RoleSelector from './components/sections/RoleSelector';
import ProjectCaseStudiesSection from './components/sections/ProjectCaseStudiesSection';
import PauseMoment from './components/sections/PauseMoment';
import WorkPrinciples from './components/sections/WorkPrinciples';
import VideoPlaceholder from './components/sections/VideoPlaceholder';
import SkillsSnapshot from './components/sections/SkillsSnapshot';
import WhyIBuild from './components/sections/WhyIBuild';
import ContactCTA from './components/sections/ContactCTA';

export default function App() {
  return (
    <SiteShell>
      <Header />
      <main className="flex-grow bg-black">
        {/* Cinematic Flow */}
        <HeroSection />
        <HumanRevealSection />
        <InteractionMoment />
        <ProofMetricsStrip />
        <FeaturedProjectsPreview />
        <RoleSelector />
        <ProjectCaseStudiesSection />
        <PauseMoment />
        <WorkPrinciples />
        <VideoPlaceholder />
        <SkillsSnapshot />
        <WhyIBuild />
        <ContactCTA />
      </main>
      <Footer />
    </SiteShell>
  );
}
