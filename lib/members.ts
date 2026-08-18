export interface Member {
  id: number;
  name: string;
  slug: string;
  position: string;
  image: string | null;
  message?: string;
  quote?: string;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const availableMemberImages = [
  "/images/pastpresident/Alisha.jpg",
  "/images/pastpresident/Jitendra.jpg",
  "/images/pastpresident/Prakash.png",
  "/images/pastpresident/Priyanka.jpg",
  "/images/pastpresident/Roshan.jpg",
  "/images/pastpresident/Rubin.jpg",
  "/images/pastpresident/Rujan.jpg",
  "/images/pastpresident/Sajesh.jpg",
  "/images/pastpresident/sama.jpg",
  "/images/pastpresident/sanjal.jpg",
  "/images/pastpresident/sanju.jpg",
  "/images/pastpresident/Shovana Shakya.jpeg",
  "/images/pastpresident/Sugen.JPG",
  "/images/pastpresident/Rajesh.jpg",
  "/images/pastpresident/Pranil-Shakya.jpg",
  "/images/pastpresident/manjil.png",
];

const normalizeKey = (value: string) =>
  value
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[^a-z0-9]/g, "");

function resolveMemberImage(name: string): string | null {
  const normalizedName = normalizeKey(name);
  const firstName = normalizeKey(name.split(" ")[0] ?? name);

  return (
    availableMemberImages.find((image) => {
      const fileName = image.split("/").pop() ?? "";
      const normalizedImage = normalizeKey(fileName);

      return (
        normalizedName.includes(normalizedImage) ||
        normalizedImage.includes(normalizedName) ||
        normalizedImage === firstName
      );
    }) ?? null
  );
}

const RASHIK_MESSAGE = `Rotaract Club of Lalitpur—the name itself holds a huge space in my heart. The legacy and history it carries are truly inspiring.

I first joined because of my friends and our shared interest in basketball within the club. Over time, I discovered the countless opportunities the club provides for personal growth, leadership, and lifelong friendships.

Some of my favorite memories include the Rotaract Premier League, basketball tournaments, Coffee Gig, tree plantation programs, health camps, and most importantly, The Candle Walk.

Being able to participate, learn, enjoy, then gradually contribute to managing and eventually organizing signature events like The Candle Walk has been one of my proudest achievements as a Rotaractor. Those experiences shaped me both personally and professionally.

Looking back, I cherish every Saturday meeting, every outing with friends afterwards, futsal matches, basketball games, shared meals, and countless unforgettable moments.

Rotaract has given me memories, friendships, confidence, and experiences that I'll always carry with me.

Thank you. 🙏`;

const pastPresidentNames = [
  "Sanju Shakya",
  "Gopal K. Shrestha",
  "Govinda Awale",
  "Rajesh Bajracharya",
  "Gajanana Dakhwa",
  "Biseshwor Man Shrestha",
  "Sajesh Tamrakar",
  "Nitisha Tamrakar",
  "Sugen Shakya",
  "Rujan Bajracharya",
  "Prakash R. Bajracharya",
  "Roshan Bajracharya",
  "Jitendra Bajracharya",
  "Alisha Shakya",
  "Bijay Benjankar",
  "Prabin Maharjan",
  "Sanjal Byanjankar",
  "Rashik Shakya",
  "Priyanka Shakya",
  "Sama Shrestha",
  "Nischal Tamrakar",
  "Rubin Bajracharya",
  "Pranil Shakya",
  "Shovana Shakya",
  "Manjil Shakya",
];

const memberMessages: Record<string, string> = {
  "Rashik Shakya": RASHIK_MESSAGE,
};

const memberQuotes: Record<string, string> = {
  "Rashik Shakya":
    "Rotaract has given me memories, friendships, confidence, and experiences that I'll always carry with me.",
};

export const teamMembers: Member[] = pastPresidentNames.map((name, index) => ({
  id: index + 1,
  name,
  slug: slugify(name),
  position: "Past President",
  image: resolveMemberImage(name),
  message: memberMessages[name],
  quote: memberQuotes[name],
}));

export function getMemberBySlug(slug: string): Member | undefined {
  return teamMembers.find((member) => member.slug === slug);
}

export function getAdjacentMembers(slug: string): {
  previous: Member | null;
  next: Member | null;
} {
  const index = teamMembers.findIndex((member) => member.slug === slug);
  if (index === -1) return { previous: null, next: null };

  return {
    previous: index > 0 ? teamMembers[index - 1] : null,
    next: index < teamMembers.length - 1 ? teamMembers[index + 1] : null,
  };
}
