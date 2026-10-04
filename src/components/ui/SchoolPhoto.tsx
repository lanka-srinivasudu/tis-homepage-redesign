import type { SchoolImage } from "../../data/site";
export function SchoolPhoto({
  image,
  className = "",
  priority = false,
  sizes = "(max-width: 700px) 100vw, 50vw",
}: {
  image: SchoolImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <img
      className={`school-photo ${className}`}
      src={`/images/${image.name}-1200.webp`}
      srcSet={`/images/${image.name}-640.webp 640w, /images/${image.name}-1200.webp 1200w${image.name === "hero" ? ", /images/hero-1920.webp 1920w" : ""}`}
      sizes={sizes}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      style={{ objectPosition: image.position }}
    />
  );
}
