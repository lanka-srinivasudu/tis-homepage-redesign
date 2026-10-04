import { ArrowUpRight } from "lucide-react";
import { official, photos, streams } from "../../data/site";
import { Reveal } from "../animation/Reveal";
import { SchoolPhoto } from "../ui/SchoolPhoto";
import { ActionLink } from "../ui/ActionLink";
export function Academics() {
  return (
    <section
      id="academics"
      className="section academics"
      aria-labelledby="academics-title"
    >
      <div className="container split-grid">
        <Reveal className="academic-photo">
          <SchoolPhoto image={photos.library} />
          <span className="photo-note">For the endlessly curious.</span>
          <span className="image-index" aria-hidden="true">
            01 / THE JOY OF LEARNING
          </span>
        </Reveal>
        <Reveal className="section-copy">
          <p className="eyebrow">MINDS OPEN. POSSIBILITIES FOLLOW.</p>
          <h2 id="academics-title">
            More than answers.
            <br />
            <em>A love of asking.</em>
          </h2>
          <p>
            Build a strong academic foundation, then find a path that feels your
            own. In Grade XI, students can choose from three streams, with
            English as a compulsory subject and electives shaped by their
            interests.
          </p>
          <div className="stream-list">
            {streams.map((stream, index) => (
              <a href={official.academics} key={stream}>
                <span className="list-index">0{index + 1}</span>
                <span>{stream}</span>
                <ArrowUpRight size={19} aria-hidden="true" />
                <span className="sr-only">
                  {" "}
                  — view official streams information
                </span>
              </a>
            ))}
          </div>
          <ActionLink href={official.academics} variant="text">
            Explore academics
          </ActionLink>
        </Reveal>
      </div>
    </section>
  );
}
