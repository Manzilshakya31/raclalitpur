export interface ProjectCoordinator {
  name: string;
  designation: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  date: string;
  venue: string;
  duration: string;
  volunteeringHours: number;
  budget: string;
  displayStat: string;
  edition?: string;
  sdgs?: string[];
  partnerClubs?: string[];
  youtubeUrl?: string;
  objectives: string[];
  summary: string[];
  coordinators: ProjectCoordinator[];
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "candle-walk",
    name: "Candle Walk 1146",
    tagline:
      "Lighting candles, preserving culture, and walking together toward unity.",
    category: "CULTURAL PRESERVATION",
    date: "October 21, 2025",
    venue: "Patan Durbar Square and surrounding streets of Lalitpur",
    duration: "5 hours",
    volunteeringHours: 75,
    budget: "NRs. 2,00,000",
    displayStat: "1,000+ participants",
    edition: "17th consecutive year",
    youtubeUrl: "https://www.youtube.com/watch?v=SfW9rbiq-ow",
    objectives: [
      "Cultural Preservation: To promote and preserve Newari traditions, music (Baja), and the Nepal Sambat calendar among the younger generation.",
      "Community Recognition: To honor and appreciate local icons who have dedicated their lives to building and strengthening the Newari community.",
      "Public Image: To enhance the visibility of Rotaract in the community by leading a high-impact, culturally significant public event.",
      "Unity: To bring together people of all ages to celebrate local identity and foster social cohesion through shared heritage.",
    ],
    summary: [
      "The Candle Walk is an annual flagship event organized by the Rotaract Club of Lalitpur to celebrate the New Year of Nepal Sambat while promoting cultural preservation, Nepalese traditions, and youth engagement through community participation. First initiated in Nepal Sambat 1126, Candle Walk 1146 marked the 17th consecutive year of this meaningful celebration, bringing together Rotaractors, local communities, cultural groups, dignitaries, and citizens to honor Nepal's rich heritage and strengthen community spirit.",
      "The event commenced with vibrant cultural performances presented by various community groups, reflecting Nepal's diverse traditions and artistic heritage. Performances by the CBR Group, YMBA Group, and other community representatives created an energetic and festive atmosphere, setting the tone for the evening.",
      "The formal inauguration ceremony was graced by the Deputy Mayor of Lalitpur Metropolitan City, Mrs. Manjali Shakya Bajracharya, as the Chief Guest. The event was further honored by the presence of SSP Hobindra Bogati, DSP officials, and supporting police personnel, whose participation and coordination added significance, safety, and greater public engagement to the celebration.",
      "During the opening session, Rtr. Manjil Shakya, President of Rotaract Club of Lalitpur and Event Coordinator, welcomed all attendees and highlighted the historical and cultural importance of Nepal Sambat, while emphasizing the purpose of Candle Walk in preserving local identity and inspiring younger generations to remain connected to Nepalese heritage.",
      "One of the major highlights of the program was the felicitation and honor ceremony, where the Rotaract Club of Lalitpur recognized the Kartik Nach – Narsingh, Daitya, and Bara groups for their outstanding contributions toward preserving and promoting Nepalese culture. As a token of appreciation and respect, they were honored with Hanapau by the Chief Guest.",
      "Following remarks from distinguished guests and dignitaries, the program transitioned into the much-anticipated Candle Walk Rally. Accompanied by the traditional rhythms of Dhime Baja and Dhaa Baja, participants lit candles and joined a peaceful procession that began and concluded at Hakhaa, passing through the historic streets of Patan.",
      "The rally served not only as a celebration of the Nepal Sambat New Year but also as a powerful symbol of unity, peace, cultural pride, and community solidarity. A particularly memorable attraction of the procession was the cart of Sankhadhar Sakhwaa, honoring the founder of Nepal Sambat and drawing admiration from participants and spectators alike.",
      "This year's event witnessed an overwhelming public response, with more than 1,000 participants actively joining the celebration. The streets of Mangalbazar were filled with people gathered to witness and participate, creating a remarkable atmosphere and demonstrating the growing impact and popularity of Candle Walk within the community.",
      "The event concluded with closing remarks delivered by Rtr. Aakriti, Secretary of the Event, who expressed heartfelt gratitude to all attendees, dignitaries, cultural groups, volunteers, supporters, and participants for their invaluable contribution and enthusiasm in making Candle Walk 1146 a memorable and successful celebration of Nepalese culture, tradition, and togetherness.",
    ],
    coordinators: [{ name: "Rtr. Manjil Shakya", designation: "President" }],
    images: ["/images/project/candle-walk.png"],
  },
  {
    slug: "nyano-maya",
    name: "Nyano Maya",
    tagline: "Empowering young girls through awareness, care, and compassion.",
    category: "COMMUNITY OUTREACH",
    date: "February 14, 2026",
    venue: "Future Hope Nepal Children's Home",
    duration: "3 hours",
    volunteeringHours: 40,
    budget: "NRs. 15,000",
    displayStat: "20 beneficiaries",
    sdgs: ["Good Health and Well-being", "Gender Equality"],
    objectives: [
      "To raise awareness among young girls about menstrual hygiene, healthy practices, and the importance of reproductive health education.",
      "To promote mental health awareness and emotional well-being by encouraging open discussions and positive coping mechanisms.",
      "To provide essential support to the residents of Future Hope Nepal Children's Home through the donation of stationery materials, clothing, and food items.",
      "To empower and uplift young girls by creating a safe, supportive, and interactive learning environment.",
      "To foster compassion, social responsibility, and community engagement among Rotaractors through meaningful service activities.",
    ],
    summary: [
      "On 14th February 2026, the Rotaract Club of Lalitpur successfully conducted its signature project, Nyano Maya, at Future Hope Nepal Children's Home. The project was organized with the objective of supporting and empowering the young girls residing at the home through awareness, education, and meaningful engagement.",
      "The program was attended by approximately 20 girls from different age groups, with an average age of around 14 years. Keeping the needs of the participants in mind, the club conducted an interactive Menstrual Hygiene Awareness Session, focusing on menstrual health, hygiene management, and the importance of maintaining proper self-care practices. The session also encouraged open discussion to help break common misconceptions and stigma surrounding menstruation.",
      "In addition, a Mental Health Awareness Session was facilitated to promote emotional well-being, self-confidence, and mental resilience. Through engaging discussions and activities, participants were encouraged to understand the importance of mental health, express their thoughts freely, and develop positive coping mechanisms.",
      "Beyond the awareness sessions, club members spent quality time interacting with the girls, creating a warm, supportive, and inclusive environment. To further support the children's home, the club donated stationery materials, clothing, and food items based on the needs of the residents. These contributions aimed to assist in their daily lives and support their educational and personal development.",
      "The project concluded successfully with active participation, meaningful learning experiences, and heartfelt interactions. Through Nyano Maya, the Rotaract Club of Lalitpur reaffirmed its commitment to empowering young girls, promoting health awareness, and extending care and support to those in need through sustainable community service initiatives.",
    ],
    coordinators: [
      { name: "Rtr. Shubhashika Tamrakar", designation: "Service Project Chair" },
    ],
    images: [
      "/images/project/nyano_maya.jpeg",
      "/images/project/nyano_maya_1.jpeg",
    ],
  },
  {
    slug: "matya-health-camp",
    name: "Matya Health Camp",
    tagline:
      "Community health support during Lalitpur's living cultural celebration.",
    category: "HEALTH SERVICE",
    date: "August 11, 2025",
    venue: "Bhinchebahal, Ibabahil, and Nakabahil",
    duration: "11 hours",
    volunteeringHours: 20,
    budget: "NRs. 35,000",
    displayStat: "3 service locations",
    partnerClubs: [
      "Rotaract Club of Jawalakhel Manjushree",
      "Rotaract Club of Patan West",
      "Rotaract Club of Chandragiri",
      "Rotaract Club of Metro City",
      "Rotaract Club of Patan Heritage",
    ],
    objectives: [
      "To assist people participating in Matya and make their journey more comfortable and pleasant.",
      "To help preserve and keep our cultural traditions alive through active participation.",
      "To encourage and support the spirit of those walking in the festival.",
    ],
    summary: [
      "On 11th August, the Rotaract Club of Lalitpur successfully organized and participated in the Matya Health Camp in collaboration with fellow Zone 12 clubs: Rotaract Club of Jawalakhel Manjushree, Rotaract Club of Patan West, Rotaract Club of Chandragiri, Rotaract Club of Metro City, and Rotaract Club of Patan Heritage.",
      "The health camp was conducted across three locations: Bhinchebahal, Ibabahil, and Nakabahil to support participants and visitors during the Matya celebration.",
      "The initiative focused on providing basic health support, first aid assistance, and volunteer services throughout the event. Members coordinated across multiple stations to ensure accessibility and timely support for individuals participating in the celebration.",
      "Through teamwork and coordinated effort among Zone 12 clubs, the health camp was able to extend community service while promoting health awareness and volunteer engagement during one of the significant local events.",
    ],
    coordinators: [
      { name: "Rtr. Shubhashika Tamrakar", designation: "Service Project Chair" },
    ],
    images: ["/images/project/matya_health_camp.jpg"],
  },
  {
    slug: "lumanti-magazine",
    name: "Lumanti Magazine — Vol. 18",
    tagline: "Documenting our journey, celebrating our community.",
    category: "PUBLICATION",
    date: "July 12, 2025",
    venue: "Virinchi College, Kumaripati",
    duration: "2 hours",
    volunteeringHours: 48,
    budget: "NRs. 30,000",
    displayStat: "120 Rotaractors",
    objectives: [
      "To publish and launch Lumanti Vol. 18 as a platform for knowledge sharing and club documentation.",
      "To encourage member participation in writing, coordination, and publication activities.",
      "To strengthen collaboration with sponsors and partner institutions.",
    ],
    summary: [
      "The Lumanti Vol. 18 project focused on the successful publication and launch of the club's annual souvenir. The project involved data collection, article writing, editorial coordination, sponsorship management, design and printing, and the organization of an official launch event. Through collective effort and collaboration with contributors, sponsors, and partner institutions, the project aimed to document meaningful insights, showcase creative work, and strengthen the club's professional presence.",
    ],
    coordinators: [{ name: "Rtr. Aakriti Simkhada", designation: "Secretary" }],
    images: ["/images/project/magazine.jpg"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
