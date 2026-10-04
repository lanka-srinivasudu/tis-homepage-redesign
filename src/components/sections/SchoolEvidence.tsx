import { Quote } from "lucide-react";
import {
  official,
  parentFeedback,
  rankings,
  schoolFacts,
} from "../../data/site";
import { Reveal } from "../animation/Reveal";
import { ActionLink } from "../ui/ActionLink";

export function SchoolEvidence() {
  return (
    <section className="section evidence" aria-labelledby="evidence-title">
      <div className="container">
        <Reveal className="evidence-intro">
          <div>
            <p className="eyebrow">TULAS AT A GLANCE</p>
            <h2 id="evidence-title">
              Built for learning.
              <br />
              <em>Made for growing.</em>
            </h2>
          </div>
          <p>
            Tulas International School was established in 2012 under the
            aegis of Rishabh Educational Trust to impart education through
            seamless opportunities.
          </p>
        </Reveal>

        <Reveal className="facts-grid">
          {schoolFacts.map((fact) => (
            <div className="fact" key={fact.label}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
        </Reveal>

        <div className="evidence-grid">
          <Reveal className="rankings-panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow light">RECOGNITION</p>
                <h3>Published school rankings</h3>
              </div>
              <ActionLink href={official.awards} variant="light">
                View awards
              </ActionLink>
            </div>
            <ol className="ranking-list">
              {rankings.map((ranking) => (
                <li key={`${ranking.rank}-${ranking.place}`}>
                  <strong>{ranking.rank}</strong>
                  <span>
                    <b>In {ranking.place}</b>
                    <small>{ranking.detail}</small>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="parents-panel">
            <p className="eyebrow">FROM THE PARENTS</p>
            <h3>What families say</h3>
            <div className="parent-feedback">
              {parentFeedback.map((feedback) => (
                <figure key={feedback.name}>
                  <Quote size={24} aria-hidden="true" />
                  <blockquote>{feedback.quote}</blockquote>
                  <figcaption>
                    <strong>{feedback.name}</strong>
                    <span>{feedback.relationship}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
