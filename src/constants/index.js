export const navLinks = [
  { id: "about", title: "About" },
  { id: "rates", title: "Rates" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const EMAIL = "editor@lazyistudio.com";
export const POD_REPORT = "https://www.youtube.com/@ThePodReport01";

/* ---------- Overview: the four boxes beside the intro ---------- */
const services = [
  {
    title: "Narrative Structure",
    description:
      "Before anything is cut, the beat order and the argument go on paper and get approved. You see the shape of the film while it is still cheap to change. Nothing gets built on a guess I made alone.",
  },
  {
    title: "Retention Editing",
    description:
      "A three hour podcast became a thirteen minute film that holds. Pacing is decided by what the viewer still needs, not by what I like. The opening has to earn the runtime or the rest never gets watched.",
  },
  {
    title: "Archival Treatment",
    description:
      "Network bugs, chyrons, timestamps and broadcast banners stay in frame. They are the cheapest credibility a cut can buy, and removing them costs more than it tidies. Each era carries its own distress, so the chronology reads without a date card.",
  },
  {
    title: "Information Design",
    description:
      "Charts, maps and diagrams built for one job, which is to make the point land before the voiceover explains it. Every graphic is original and drawn for your subject. If a piece of it can be deleted without losing meaning, it goes.",
  },
];

/* ---------- The way I work: the four skills, short form ---------- */
const skills = [
  {
    title: "Narrative Structure",
    line: "The beat order and the argument agreed on paper before a single asset is made.",
  },
  {
    title: "Retention Editing",
    line: "Three hours of source cut to thirteen minutes that holds. The opening earns the runtime.",
  },
  {
    title: "Archival Treatment",
    line: "Chyrons, network bugs and broadcast banners kept in frame on purpose. Provenance is the design.",
  },
  {
    title: "Information Design",
    line: "Charts, maps and diagrams built to carry the argument rather than fill the screen.",
  },
];

/* ---------- Rate card, carried over from lazyistudio.com/hire ---------- */
const packages = [
  {
    order: "Consultation",
    title: "Start with a consultation",
    price: "$500",
    terms: "One week · fixed",
    description:
      "A written evaluation of your channel, your next three ideas put through the three questions, a beat-by-beat structure for the strongest one, the build documents I would use to make it, and a sixty-minute recorded call. Book a package within thirty days and the full $500 comes off the price.",
    cta: "Book a consultation",
    mailto: `mailto:${EMAIL}?subject=Consultation%20enquiry&body=Channel%20link%3A%0AWhat%20I%20want%20to%20get%20out%20of%20it%3A%0ANext%20two%20or%20three%20video%20ideas%3A`,
    bg: "bg-emerald-900",
    colors: [[16, 185, 129]],
    speed: 5.1,
  },
  {
    order: "Package A",
    title: "The Film",
    price: "Quoted",
    terms: "One long form piece · two vertical cutdowns",
    description:
      "One film of eight to twelve minutes, built from a structure approved on paper before a single asset is made. Two vertical cutdowns taken from the film's strongest beat. Original motion design throughout, a visual language document you keep, and sound design, mix, colour, captions and every delivery format you need. Best for channel building and founder or investor narrative.",
    cta: "Ask about The Film",
    mailto: `mailto:${EMAIL}?subject=The%20Film%20package&body=Channel%20link%3A%0AWhat%20the%20piece%20needs%20to%20do%3A%0ATiming%3A`,
    bg: "bg-pink-900",
    colors: [
      [255, 166, 158],
      [221, 255, 247],
    ],
    speed: 3,
    dotSize: 2,
  },
  {
    order: "Package B",
    title: "The Offer",
    price: "Quoted",
    terms: "One VSL · three verticals",
    description:
      "One video sales letter of three to six minutes, cut to a brief and a proof structure rather than a script read. Three verticals built around different objections so they can be tested against each other. Full graphic build to your brand guideline, claim and attribution handling so the piece is runnable on paid media, and every delivery format. Best for paid acquisition, landing pages and launches.",
    cta: "Ask about The Offer",
    mailto: `mailto:${EMAIL}?subject=The%20Offer%20package&body=Brief%20or%20landing%20page%3A%0AWhat%20the%20piece%20needs%20to%20do%3A%0ATiming%3A`,
    bg: "bg-sky-600",
    colors: [[125, 211, 252]],
    speed: 3,
  },
  {
    order: "Custom",
    title: "Something that fits neither",
    price: "$125",
    terms: "Per hour · ten hour minimum",
    description:
      "A single graphic sequence, a rescue on an edit that has stalled, a recut of something that already exists, or ongoing support for a channel that ships every week. Quoted as a block of hours agreed in advance with a written scope. For anything that looks like a finished piece, a package is cheaper and I will tell you so.",
    cta: "Describe the job",
    mailto: `mailto:${EMAIL}?subject=Custom%20work%20enquiry&body=What%20the%20work%20is%3A%0ADeadline%3A%0AAnything%20that%20already%20exists%3A`,
    bg: "bg-violet-900",
    colors: [[145, 94, 255]],
    speed: 3,
  },
];

/* ---------- Work index, carried over from lazyistudio.com/data/projects.js ---------- */
const works = [
  {
    slug: "dave-smith-long-form",
    ref: "LIS-01",
    featured: true,
    preview: ["/media/lis-01-loop.webm", "/media/lis-01-loop.mp4"],
    added: "2026-08-14",
    title: "Dave Smith on the Military Industrial Complex, Israel, Iraq and Ron Paul",
    channel: "The Pod Report",
    format: "Long form · horizontal",
    duration: "12:51",
    year: "2026",
    aspect: "16/9",
    role: "Edit · motion graphics · archival treatment · colour",
    lede: "Thirteen minutes cut from a long podcast, with an evidence insert roughly every fifth beat and two colour temperatures held apart on purpose.",
    marked: "two colour temperatures held apart on purpose",
    youtube: "NuEBAi3DYmE",
  },
  {
    slug: "military-industrial-complex",
    ref: "LIS-02",
    featured: true,
    preview: ["/media/lis-02-loop.webm", "/media/lis-02-loop.mp4"],
    added: "2026-07-02",
    title: "How the Military Industrial Complex Really Works",
    channel: "The Pod Report",
    format: "Short form · vertical",
    duration: "0:52",
    year: "2026",
    aspect: "9/16",
    role: "Edit · motion graphics · archival treatment · colour",
    lede: "A fifty-two second explanation of a defence-contracting relationship, built entirely from archive and diagram with no presenter on screen.",
    marked: "no presenter on screen",
    youtube: "E5U_ToPMPpc",
  },
  {
    slug: "ron-paul-2016",
    ref: "LIS-03",
    featured: false,
    preview: ["/media/lis-03-loop.webm", "/media/lis-03-loop.mp4"],
    added: "2026-06-18",
    title: "How Trump's jump to the bandwagon in the 2016 primary was laid down by Ron Paul",
    channel: "The Pod Report",
    format: "Short form · vertical",
    duration: "0:35",
    year: "2026",
    aspect: "9/16",
    role: "Edit · archival treatment · annotation",
    lede: "Thirty-five seconds of almost pure archive, where the argument is made by what is kept in frame rather than by anything added to it.",
    marked: "what is kept in frame",
    youtube: "u43w5dI6ro8",
  },
  {
    slug: "100m-freedom-vsl",
    ref: "LIS-04",
    featured: true,
    added: "2026-05-20",
    title: "100M For Freedom · the case for becoming a Founding Member",
    channel: "100M For Freedom",
    format: "Direct response · horizontal",
    duration: "3:59",
    year: "2026",
    aspect: "16/9",
    role: "Edit · motion graphics · art direction · sound design · colour",
    lede: "A four minute sales letter built to a written brief and a brand direction borrowed from a different company, where everything except the script is constructed.",
    marked: "everything except the script is constructed",
    youtube: "E3Iz8Nqg0eU",
  },
  {
    slug: "100m-freedom-vertical-01",
    ref: "LIS-05",
    featured: false,
    added: "2026-05-24",
    title: "100M For Freedom · what the movement is",
    channel: "100M For Freedom",
    format: "Short form · vertical",
    duration: "1:18",
    year: "2026",
    aspect: "9/16",
    role: "Edit · motion graphics · art direction",
    lede: "The definition beat pulled out of the long piece and rebuilt for a phone, closing on the one action the whole film exists to ask for.",
    marked: "rebuilt for a phone",
    youtube: "FaPhb_t2lOY",
  },
  {
    slug: "100m-freedom-vertical-02",
    ref: "LIS-06",
    featured: false,
    added: "2026-05-24",
    title: "100M For Freedom · one hundred million",
    channel: "100M For Freedom",
    format: "Short form · vertical",
    duration: "0:41",
    year: "2026",
    aspect: "9/16",
    role: "Edit · motion graphics · art direction",
    lede: "Forty seconds that argue from scale rather than from history, and finish on a figure that has to hold at arm's length on a phone.",
    marked: "argue from scale rather than from history",
    youtube: "4M4zvZlK9n0",
  },
];

export { services, skills, packages, works };
