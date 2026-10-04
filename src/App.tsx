import { MotionConfig } from "framer-motion";
import { ScrollProgress } from "./components/animation/ScrollProgress";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Introduction } from "./components/sections/Introduction";
import { Academics } from "./components/sections/Academics";
import { Boarding } from "./components/sections/Boarding";
import { BeyondClassroom } from "./components/sections/BeyondClassroom";
import { Admissions } from "./components/sections/Admissions";
import { SchoolEvidence } from "./components/sections/SchoolEvidence";
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Introduction />
        <Academics />
        <Boarding />
        <BeyondClassroom />
        <SchoolEvidence />
        <Admissions />
      </main>
      <Footer />
    </MotionConfig>
  );
}
