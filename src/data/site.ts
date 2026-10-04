export const official = {
  home: "https://tis.edu.in/",
  admissions: "https://admission.tis.edu.in/",
  about: "https://tis.edu.in/about-tis/why-choose-us/",
  academics: "https://tis.edu.in/academics/streams-offered/",
  boarding: "https://tis.edu.in/boarding-life/facilities/",
  clubs: "https://tis.edu.in/beyond-academics/clubs-and-societies/",
  awards: "https://tis.edu.in/about-tis/awards-achievements/",
  brochure: "https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf",
  map: "https://maps.app.goo.gl/maBF8syXueQkw31E6",
  phone: "+91 98379 83791",
  phoneHref: "tel:+919837983791",
  email: "info@tis.edu.in",
} as const;

export interface NavItem {
  label: string;
  href: string;
}
export const navigation: NavItem[] = [
  { label: "Discover TIS", href: "#discover" },
  { label: "Academics", href: "#academics" },
  { label: "Life at TIS", href: "#life-at-tis" },
  { label: "Beyond the classroom", href: "#beyond" },
];

export interface SchoolImage {
  name: string;
  alt: string;
  width: number;
  height: number;
  position?: string;
}
export const photos = {
  hero: {
    name: "hero",
    alt: "The Tulas International School campus and its landscaped grounds in Dehradun",
    width: 1912,
    height: 1441,
  },
  library: {
    name: "library",
    alt: "A TIS student smiling with books beside the school library shelves",
    width: 1589,
    height: 729,
    position: "30% center",
  },
  boarding: {
    name: "boarding",
    alt: "TIS students wearing helmets and cycling together along a tree-lined campus path",
    width: 715,
    height: 554,
  },
  archery: {
    name: "archery",
    alt: "TIS students practising archery on the school sports ground",
    width: 704,
    height: 520,
  },
  swimming: {
    name: "swimming",
    alt: "Students swimming in the outdoor pool at Tulas International School",
    width: 713,
    height: 509,
  },
  riding: {
    name: "riding",
    alt: "A TIS student taking part in horse riding on campus",
    width: 716,
    height: 509,
  },
} satisfies Record<string, SchoolImage>;

export const sports: { title: string; detail: string; image: SchoolImage }[] = [
  { title: "Find your focus.", detail: "Archery", image: photos.archery },
  { title: "Make your own waves.", detail: "Swimming", image: photos.swimming },
  { title: "Take a new stride.", detail: "Horse riding", image: photos.riding },
];
export const streams = ["Science", "Commerce", "Humanities"] as const;

export const schoolFacts = [
  { value: "22", label: "acre pollution-free campus" },
  { value: "16+", label: "Olympic sports" },
  { value: "24×7", label: "medical assistance" },
  { value: "6:1", label: "student–teacher ratio" },
] as const;

export const rankings = [
  {
    rank: "#1",
    place: "Dehradun",
    detail: "Co-Educational Boarding School in Dehradun by Education Today",
  },
  {
    rank: "#2",
    place: "Uttarakhand",
    detail: "Co-Educational Boarding School in North India by Education Today",
  },
  {
    rank: "#1",
    place: "North India",
    detail: "Co-Educational Boarding School in North India by Outlook",
  },
  {
    rank: "#4",
    place: "India",
    detail: "Co-Educational Boarding School in India by Education Today",
  },
] as const;

export const parentFeedback = [
  {
    quote:
      "Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.",
    name: "Namita Agarwal",
    relationship: "M/O Krishna Agarwal",
  },
  {
    quote:
      "Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.",
    name: "Sandeep Kumar",
    relationship: "F/O Aryan",
  },
] as const;
