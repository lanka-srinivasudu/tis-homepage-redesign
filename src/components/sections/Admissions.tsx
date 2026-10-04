import { Phone } from "lucide-react";
import { official } from "../../data/site";
import { Reveal } from "../animation/Reveal";
import { ActionLink } from "../ui/ActionLink";
export function Admissions() {
  return (
    <section
      id="admissions"
      className="admissions"
      aria-labelledby="admissions-title"
    >
      <div className="admissions-rings" aria-hidden="true" />
      <Reveal className="container admissions-inner">
        <div>
          <p className="eyebrow light">THE NEXT CHAPTER STARTS HERE</p>
          <h2 id="admissions-title">
            Small steps today.
            <br />
            <em>Extraordinary possibilities tomorrow.</em>
          </h2>
          <p>Get to know Tulas. We’re here to help you take the next step.</p>
        </div>
        <div className="admissions-actions">
          <ActionLink href={official.admissions} variant="light">
            Start your application
          </ActionLink>
          <a className="admissions-phone" href={official.phoneHref}>
            <Phone size={16} aria-hidden="true" />
            <span>
              Talk to our admissions team<strong>{official.phone}</strong>
            </span>
          </a>
          <a className="brochure-link" href={official.brochure}>
            Read the school brochure <span>(PDF, 28 MB)</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
