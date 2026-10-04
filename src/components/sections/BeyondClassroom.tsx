import { ArrowUpRight } from "lucide-react";
import { official, sports } from "../../data/site";
import { Reveal } from "../animation/Reveal";
import { SchoolPhoto } from "../ui/SchoolPhoto";
import { ActionLink } from "../ui/ActionLink";
export function BeyondClassroom() {
  return (
    <section
      id="beyond"
      className="section beyond"
      aria-labelledby="beyond-title"
    >
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">GO BEYOND THE CLASSROOM</p>
            <h2 id="beyond-title">
              Find what makes
              <br />
              you feel <em>alive.</em>
            </h2>
          </div>
          <div>
            <p>
              A new pursuit. A little courage. A moment of discovery. There’s
              more than one way to find your stride at Tulas.
            </p>
            <ActionLink href={official.clubs} variant="text">
              Explore clubs & societies
            </ActionLink>
          </div>
        </Reveal>
        <div className="sports-grid">
          {sports.map((sport, index) => (
            <Reveal key={sport.detail} delay={index * 0.06}>
              <a
                className="sport-card"
                href={official.boarding}
                aria-label={`${sport.detail} — explore TIS facilities`}
              >
                <div className="sport-image">
                  <SchoolPhoto
                    image={sport.image}
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                  <span className="sport-number">0{index + 1}</span>
                  <span className="round-arrow">
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </span>
                </div>
                <p className="eyebrow">{sport.detail}</p>
                <h3>{sport.title}</h3>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="beyond-bottom">
          <span>On the field. On the stage. In your element.</span>
          <p>Discover sports, music, art and drama at TIS.</p>
        </Reveal>
      </div>
    </section>
  );
}
