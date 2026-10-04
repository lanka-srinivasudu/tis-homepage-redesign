import { BookOpen, Heart, Sprout } from "lucide-react";
import { Reveal } from "../animation/Reveal";
import { ActionLink } from "../ui/ActionLink";
import { official } from "../../data/site";
export function Introduction() {
  return (
    <section
      id="discover"
      className="section intro"
      aria-labelledby="intro-title"
    >
      <div className="container">
        <Reveal className="intro-grid">
          <div>
            <p className="eyebrow">WELCOME TO TULAS</p>
            <h2 id="intro-title">
              Every child holds
              <br />a world of <em>possibilities.</em>
            </h2>
          </div>
          <div className="intro-copy">
            <p className="lead">
              Our CBSE curriculum focuses on academic excellence, holistic
              development, and preparing students to be global leaders.
            </p>
            <p>
              At Tulas International School, learning reaches beyond lessons.
              Our boarding and day school community in Dehradun gives young
              people space to explore, create and grow together.
            </p>
            <ActionLink href={official.about} variant="text">
              Get to know TIS
            </ActionLink>
          </div>
        </Reveal>
        <Reveal className="values-row">
          <div>
            <BookOpen aria-hidden="true" />
            <span>
              <strong>Curiosity comes first</strong>
              <small>A foundation in CBSE learning</small>
            </span>
          </div>
          <div>
            <Heart aria-hidden="true" />
            <span>
              <strong>A place to belong</strong>
              <small>Boarding and day school life</small>
            </span>
          </div>
          <div>
            <Sprout aria-hidden="true" />
            <span>
              <strong>Growth in every direction</strong>
              <small>Sport, creativity and discovery</small>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
