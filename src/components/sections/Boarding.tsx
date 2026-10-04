import { HeartHandshake, Utensils, ShieldCheck } from "lucide-react";
import { official, photos } from "../../data/site";
import { Reveal } from "../animation/Reveal";
import { SchoolPhoto } from "../ui/SchoolPhoto";
import { ActionLink } from "../ui/ActionLink";
export function Boarding() {
  return (
    <section
      id="life-at-tis"
      className="section boarding"
      aria-labelledby="boarding-title"
    >
      <div className="container split-grid">
        <Reveal className="section-copy">
          <p className="eyebrow">LIFE AT TULAS</p>
          <h2 id="boarding-title">
            A school to call your own.
            <br />
            <em>A place to feel at home.</em>
          </h2>
          <p>
            Shared days become lasting connections. Separate hostels for boys
            and girls, nourishing vegetarian meals, and personal counselling
            support students as they settle into boarding life.
          </p>
          <ul className="boarding-list">
            <li>
              <HeartHandshake aria-hidden="true" /> Personal care and
              counselling
            </li>
            <li>
              <Utensils aria-hidden="true" /> Nutritious, multi-cuisine
              vegetarian meals
            </li>
            <li>
              <ShieldCheck aria-hidden="true" /> On-campus safety and medical
              support
            </li>
          </ul>
          <ActionLink href={official.boarding} variant="text">
            Step into boarding life
          </ActionLink>
        </Reveal>
        <Reveal className="boarding-photo">
          <SchoolPhoto image={photos.boarding} />
          <div className="boarding-photo-label">
            <span className="eyebrow">THE EVERYDAY, MADE MEANINGFUL</span>
            <span>
              Room to be <em>yourself.</em>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
