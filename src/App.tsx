import React from 'react';
import SiteShell from './components/layout/SiteShell';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ProofMetricsStrip from './components/sections/ProofMetricsStrip';
import ProjectCaseStudiesSection from './components/sections/ProjectCaseStudiesSection';
import RoleSelector from './components/sections/RoleSelector';
import SkillsSnapshot from './components/sections/SkillsSnapshot';
import WorkPrinciples from './components/sections/WorkPrinciples';
import VideoPlaceholder from './components/sections/VideoPlaceholder';
import ContactCTA from './components/sections/ContactCTA';

export default function App() {
  return (
    <SiteShell>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProofMetricsStrip />
        <ProjectCaseStudiesSection />
        <RoleSelector />
        <SkillsSnapshot />
        <WorkPrinciples />
        <VideoPlaceholder />
        <ContactCTA />
      </main>
      <Footer />
    </SiteShell>
  );
}
