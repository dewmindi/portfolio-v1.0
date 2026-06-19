export const featuredProjects = [
  {
    id: "1",
    slug: "cyelon-herbs",
    title: "Cyelon Herbs",
    description: "E commerce website for a premium herbal tea brand, featuring a clean design and smooth animations.",
    imageUrl: "/project1.jpg",
    link: "https://ceylonherbsltd.com/",
    video: "/ceylon-herbs.mov",
    featured: true,
  },
  {
    id: "2",
    slug: "milano-cafe",
    title: "Milano Cafe ",
    description: "Brand identity and website for a trendy cafe bar in Milan, showcasing a modern aesthetic and user-friendly interface.",
    imageUrl: "/project2.jpg",
    link: "https://milanocafebar.com.au/",
    video: "/milano-cafe-bar.mov",
    featured: true,
  },
  {
    id: "3",
    slug: "jr-global",
    title: "JR Global ",
    description: "Immigration consultancy website with a focus on clean design, intuitive navigation, and responsive layout across devices.",
    imageUrl: "/project2.jpg",
    link: "https://jrglobalpathways.com/",
    video: "/jr-global.mov",
    featured: true,
  },
  {
    id: "4",
    slug: "pristine-tech",
    title: "Pristine Tech",
    description: "Telecommuinications company website with a focus on clean design, intuitive navigation, and responsive layout for optimal user experience across devices.",
    imageUrl: "/project2.jpg",
    link: "https://pristinetech.dewmindi.online/",
    video: "/project-page3.MOV",
    featured: false,
  },
  {
    id: "5",
    slug: "milano-cafe-bar",
    title: "Milano Cafe Bar",
    description: "Brand identity and website for a trendy cafe bar in Milan, showcasing a modern aesthetic and user-friendly interface.",
    imageUrl: "/project2.jpg",
    link: "https://scuba.dewmindi.online/",
    video: "/project-page4.MOV",
    featured: false,
  },
  {
    id: "6",
    slug: "milano-cafe-bar-2",
    title: "Scuba Dive School",
    description: "Brand identity and website for a trendy cafe bar in Milan, showcasing a modern aesthetic and user-friendly interface.",
    imageUrl: "/project2.jpg",
    link: "https://cygnusau.com.au/",
    video: "/project-page5.MOV",
    featured: false,
  },
];

export type Project = (typeof featuredProjects)[number];

export const getProjectBySlug = (slug: string) =>
  featuredProjects.find((p) => p.slug === slug);
