import { ArrowDown, MapPin } from "lucide-react";
import { official, photos } from "../../data/site";
import { ActionLink } from "../ui/ActionLink";
import { SchoolPhoto } from "../ui/SchoolPhoto";
export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <SchoolPhoto
        image={photos.hero}
        priority
        sizes="100vw"
        className="hero-image"
      />
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="eyebrow light">
          <span /> TULAS INTERNATIONAL SCHOOL
        </p>
        <h1 id="hero-title">
          A place to learn.
          <br />A world to <em>discover.</em>
        </h1>
        <p className="hero-description">
          Big dreams. New friendships. Room to become.
          <br className="desktop-break" /> Your child’s next chapter begins at
          Tulas.
        </p>
        <div className="hero-actions">
          <ActionLink href={official.admissions}>
            Begin your Tulas journey
          </ActionLink>
          <ActionLink href="#discover" variant="outline">
            Discover our school
          </ActionLink>
        </div>
      </div>
      <div className="container hero-bottom">
        <span>
          <MapPin size={15} aria-hidden="true" /> DEHRADUN, UTTARAKHAND
        </span>
        <a href="#discover">
          A little curiosity goes a long way{" "}
          <ArrowDown size={17} aria-hidden="true" />
        </a>
      </div>
      <div className="hero-caption">A space to grow. In every way.</div>
    </section>
  );
}
