import React from 'react';
import SiteShell from './components/layout/SiteShell';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import OpeningSignal from './components/sections/OpeningSignal';
import OriginSignal from './components/sections/OriginSignal';
import SystemsBuilt from './components/sections/SystemsBuilt';
import EvidenceLayer from './components/sections/EvidenceLayer';
import InteractiveLab from './components/sections/InteractiveLab';
import SkillsSnapshot from './components/sections/SkillsSnapshot';
import ExperienceSnapshot from './components/sections/ExperienceSnapshot';
import FinalMission from './components/sections/FinalMission';
import ContactCTA from './components/sections/ContactCTA';

export default function App() {
  return (
    <SiteShell>
      <Header />
      <main id="main-content" className="flex-grow bg-[var(--bg-primary)]">
        {/* 9 Chapters Flow */}
        <OpeningSignal />
        <OriginSignal />
        <SystemsBuilt />
        <EvidenceLayer />
        <InteractiveLab />
        <SkillsSnapshot />
        <ExperienceSnapshot />
        <FinalMission />
        <ContactCTA />
      </main>
      <Footer />
    </SiteShell>
  );
}
