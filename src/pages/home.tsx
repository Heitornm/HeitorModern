import React, { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"

// Divisão de código com React.lazy para turbinar o FCP/Speed Index
const ProjetosSection = React.lazy(() => import("@/components/projetos-section").then(m => ({ default: m.ProjetosSection })))
const AboutSection = React.lazy(() => import("@/components/about-section").then(m => ({ default: m.AboutSection })))
const ExperienceSection = React.lazy(() => import("@/components/experience-section").then(m => ({ default: m.ExperienceSection })))
const EducationSection = React.lazy(() => import("@/components/education-section").then(m => ({ default: m.EducationSection })))
const SkillsSection = React.lazy(() => import("@/components/skills-section").then(m => ({ default: m.SkillsSection })))
const ContactSection = React.lazy(() => import("@/components/contact-section").then(m => ({ default: m.ContactSection })))
const Footer = React.lazy(() => import("@/components/footer").then(m => ({ default: m.Footer })))

// Esqueleto simples (Skeleton) para evitar pulos de layout (CLS) durante o carregamento atrasado
const SectionLoader = () => (
  <div className="w-full h-48 animate-pulse bg-slate-800/40 my-8 rounded-xl" />
)

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 antialiased">
      <Navigation />
      <HeroSection />
      
      <Suspense fallback={<SectionLoader />}>
        <ProjetosSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </Suspense>
    </div>
  )
}