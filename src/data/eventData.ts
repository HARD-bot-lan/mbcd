import { EventEdition } from '../types/event'

export const eventData: EventEdition[] = [
  {
    year: 2024,
    title: "Morocco Blockchain & Cryptocurrency Days",
    subtitle: "Shaping the Future of a Decentralized World",
    dates: {
      start: "2024-02-15",
      end: "2024-02-28"
    },
    location: {
      venue: "INPT, Av. Allal Al Fassi",
      city: "Rabat",
      country: "Morocco"
    },
    theme: "Shaping the Future of a Decentralized World",
    status: "past",
    description: "The 2024 edition brought together international experts, industry leaders, policymakers, entrepreneurs, and academics for three days of keynotes, panels, workshops, and a CTF competition, all focused on blockchain and cryptocurrency innovation in Morocco.",
    highlights: [
      "Capture The Flag (CTF) Competition hosted by SecDojo",
      "Keynotes: Blockchain, Crypto, Regulatory, Business, and Tech Perspectives",
      "Panel Q&A: Revolutionizing Trade Finance and Industries Through Blockchain",
      "Workshops: Blockchain Security, Innovation, and Real-World Applications",
      "Networking and Collaboration Opportunities"
    ],
    Learning: 3,
    Workshops: 1,
    Expected_Attendees: 100,
    speakers: [
      {
        id: "lahbib",
        name: "Farah LAHBIB",
        title: "Director in charge of Trade Finance and Credit",
        company: "Office Chérifien des Phosphates Group - OCP",
        image: "/editions pic/2024/Speakers/FarahLahbib.jpg",
        bio: "",
        expertise: ["Trade Finance", "Blockchain", "Corporate Treasury"],
        social: {}
      },
      {
        id: "hiba",
        name: "Hiba AFAILAL",
        title: "Representative",
        company: "Bank Al-Maghrib",
        image: "/editions pic/2024/Speakers/HIBA.jpeg",
        bio: "",
        expertise: ["Blockchain", "Finance", "Regulation"],
        social: {}
      },
      {
        id: "asmaa",
        name: "Asmaa ELMRINI",
        title: "Organizational and AMOA Manager",
        company: "TMPA, Tanger MED",
        image: "/editions pic/2024/Speakers/asmaa.jpg",
        bio: "",
        expertise: ["Logistics", "Blockchain", "Digitalization"],
        social: {}
      },
      {
        id: "anass",
        name: "Anass El ALAOUI EL BAHI",
        title: "Digital Transformation Manager",
        company: "Caisse Marocaine de Retraite - CMR",
        image: "/editions pic/2024/Speakers/ANASSELBAHI.jpg",
        bio: "",
        expertise: ["Digital Transformation", "Blockchain", "Public Sector"],
        social: {}
      },
      {
        id: "khalid",
        name: "Khalid MADIDI",
        title: "Financial & Trade Risk Manager, Group Credit Risk Management & Trade Finance",
        company: "OCP Group",
        image: "/editions pic/2024/Speakers/madidi.jpg", 
        bio: "",
        expertise: ["Trade Finance", "Risk Management", "Blockchain"],
        social: {}
      },
      {
        id: "bella",
        name: "Badr BELLAJ",
        title: "CTO",
        company: "MCHAIN",
        image: "/editions pic/2024/Speakers/BELLAJ.jpg",
        bio: "",
        expertise: ["Blockchain Infrastructure", "Web3", "Enterprise Blockchain"],
        social: {}
      },
      {
        id: "sara",
        name: "Sara TUCCI-PIERGIOVANNI",
        title: "Head of Laboratory CEA LIST",
        company: "University Paris-Saclay",
        image: "/editions pic/2024/Speakers/SARA.jpg",
        bio: "",
        expertise: ["Trusted Computing", "Blockchain Research", "Digital Identity"],
        social: {}
      },
      {
        id: "peter",
        name: "Peter ROBINSON",
        title: "Head of Blockchain Research",
        company: "Immutable, Brisbane, Australia",
        image: "/editions pic/2024/Speakers/PETER.jpeg",
        bio: "",
        expertise: ["NFTs", "Gaming Blockchain", "Scalable L2 Solutions"],
        social: {}
      },
      {
        id: "amani",
        name: "Amani ALTARAWNEH",
        title: "Professor",
        company: "Tennessee Tech University, Cookeville, USA",
        image: "/editions pic/2024/Speakers/AMANI.png",
        bio: "",
        expertise: ["Cybersecurity", "Blockchain Security", "Academic Research"],
        social: {}
      },
      {
        id: "sofia",
        name: "SOFIA ELMRABET",
        title: "Fintech & Tech Lawyer",
        company: "Pledge Avocats, Paris, France",
        image: "/editions pic/2024/Speakers/sofia.jpg",
        bio: "",
        expertise: ["Regulation", "Crypto Law", "Compliance"],
        social: {}
      },
      {
        id: "hicham",
        name: "Hicham Benbella",
        title: "Representative",
        company: "ORACLE",
        image: "/editions pic/2024/Speakers/imgi_16_HICHAM.png",
        bio: "",
        expertise: ["Enterprise Systems", "Blockchain Integration", "Cloud"],
        social: {}
      },
      {
        id: "ilham",
        name: "Ilham EL BOULOUMI",
        title: "Chainlink Community Advocate",
        company: "DataChainEd / Chainlink",
        image: "/editions pic/2024/Speakers/imgi_17_ilham.jpg",
        bio: "",
        expertise: ["Decentralized Oracles", "Web3 Education", "Developer Advocacy"],
        social: {}
      },
      {
        id: "karim",
        name: "Karim ZKIK",
        title: "Professor",
        company: "School of Business, Rennes, France",
        image: "/editions pic/2024/Speakers/imgi_18_karim.jpg",
        bio: "",
        expertise: ["Digital Economy", "Blockchain Strategy", "Innovation Management"],
        social: {}
      }
    ],    
    agenda: [
      {
        id: "ctf",
        time: "2024-02-15",
        title: "Capture The Flag (CTF) Competition",
        description: "Hosted by SecDojo. A flagship event designed to challenge and inspire participants to demonstrate their technical expertise in Blockchain security and related fields. Prizes for top teams.",
        room: "INPT Campus",
        track: "Competition",
        type: "session"
      },
      {
        id: "conf",
        time: "2024-02-27",
        title: "Conference & Round Table",
        description: "Keynotes, panels, and open Q&A on blockchain, crypto, regulatory, business, and tech perspectives. Speakers from OCP, Bank Al-Maghrib, MCHAIN, Immutable, TMPA Tanger MED, and more.",
        room: "INPT, Rabat",
        track: "Conference",
        type: "session"
      },
      {
        id: "training",
        time: "2024-02-28",
        title: "Training & Workshop Session",
        description: "Workshops and training on blockchain security, innovation, and real-world applications. Bridging academia and industry.",
        room: "INPT, Rabat",
        track: "Training",
        type: "workshop"
      }
    ],
    media: [
      { id: "1", type: "image", url: "/editions pic/2024/1 (1).JPG", title: "Event Photo 1", description: "" },
      { id: "2", type: "image", url: "/editions pic/2024/1 (2).JPG", title: "Event Photo 2", description: "" },
      { id: "3", type: "image", url: "/editions pic/2024/1 (3).JPG", title: "Event Photo 3", description: "" },
      { id: "4", type: "image", url: "/editions pic/2024/1 (4).JPG", title: "Event Photo 4", description: "" },
      { id: "5", type: "image", url: "/editions pic/2024/1 (5).JPG", title: "Event Photo 5", description: "" },
      { id: "6", type: "image", url: "/editions pic/2024/1 (6).JPG", title: "Event Photo 6", description: "" },
      { id: "7", type: "image", url: "/editions pic/2024/1 (7).JPG", title: "Event Photo 7", description: "" },
      { id: "8", type: "image", url: "/editions pic/2024/1 (8).JPG", title: "Event Photo 8", description: "" },
      { id: "9", type: "image", url: "/editions pic/2024/1 (9).JPG", title: "Event Photo 9", description: "" },
      { id: "10", type: "image", url: "/editions pic/2024/1 (10).JPG", title: "Event Photo 10", description: "" },
      { id: "11", type: "image", url: "/editions pic/2024/1 (11).JPG", title: "Event Photo 11", description: "" },
      { id: "12", type: "image", url: "/editions pic/2024/1 (12).JPG", title: "Event Photo 12", description: "" },
      { id: "13", type: "image", url: "/editions pic/2024/1 (13).JPG", title: "Event Photo 13", description: "" },
      { id: "14", type: "image", url: "/editions pic/2024/1 (14).JPG", title: "Event Photo 14", description: "" },
      { id: "15", type: "image", url: "/editions pic/2024/1 (15).JPG", title: "Event Photo 15", description: "" },
      { id: "16", type: "image", url: "/editions pic/2024/1 (16).JPG", title: "Event Photo 16", description: "" },
      { id: "17", type: "image", url: "/editions pic/2024/1 (17).JPG", title: "Event Photo 17", description: "" },
      { id: "18", type: "image", url: "/editions pic/2024/1 (18).JPG", title: "Event Photo 18", description: "" },
      { id: "19", type: "image", url: "/editions pic/2024/1 (19).JPG", title: "Event Photo 19", description: "" },
      { id: "20", type: "image", url: "/editions pic/2024/1 (20).JPG", title: "Event Photo 20", description: "" },
      { id: "21", type: "image", url: "/editions pic/2024/1 (21).JPG", title: "Event Photo 21", description: "" },
      { id: "22", type: "image", url: "/editions pic/2024/1 (22).JPG", title: "Event Photo 22", description: "" },
      { id: "23", type: "image", url: "/editions pic/2024/1 (23).JPG", title: "Event Photo 23", description: "" },
      { id: "24", type: "image", url: "/editions pic/2024/1 (24).JPG", title: "Event Photo 24", description: "" },
      { id: "25", type: "image", url: "/editions pic/2024/1 (25).JPG", title: "Event Photo 25", description: "" },
      { id: "26", type: "image", url: "/editions pic/2024/1 (26).JPG", title: "Event Photo 26", description: "" },
      { id: "27", type: "image", url: "/editions pic/2024/1 (27).JPG", title: "Event Photo 27", description: "" },
      { id: "28", type: "image", url: "/editions pic/2024/1 (28).JPG", title: "Event Photo 28", description: "" },
      { id: "29", type: "image", url: "/editions pic/2024/1 (29).JPG", title: "Event Photo 29", description: "" },
      { id: "30", type: "image", url: "/editions pic/2024/1 (30).JPG", title: "Event Photo 30", description: "" }
    ],
    driveGalleryUrl: "https://drive.google.com/drive/folders/your-folder-id",
    committee: [
      {
        id: "ouaddah",
        name: "Aafaf OUADDAH",
        role: "General Chair",
        department: "INPT, Rabat",
        email: "",
        image: "/editions pic/2024/commitee/afaf.jpeg"
      },
      {
        id: "zaidouni",
        name: "Dounia ZAIDOUNI",
        role: "Organisation Committee",
        department: "INPT, Rabat",
        email: "",
        image: "/editions pic/2024/commitee/Dounia.jpeg"
      },
      {
        id: "bousselam",
        name: "Kaouthar BOUSSELAM",
        role: "Organisation Committee",
        department: "INPT, Rabat",
        email: "",
        image: "/editions pic/2024/commitee/Kaouthar.jpeg"
      },
      {
        id: "elasri",
        name: "Ikram EL ASRI",
        role: "Organisation Committee",
        department: "INPT, Rabat",
        email: "",
        image: "/editions pic/2024/commitee/ikram.png"
      },
      {
        id: "hanin",
        name: "Charifa HANIN",
        role: "Organisation Committee",
        department: "INPT, Rabat",
        email: "",
        image: "/editions pic/2024/commitee/charifa.jpg"
      },
      {
        id: "benomar",
        name: "Aziza BENOMAR",
        role: "Organisation Committee",
        department: "INPT, Rabat",
        email: "",
        image: "/editions pic/2024/commitee/aziza.jpeg"
      },
      {
        id: "bounouader",
        name: "Nawal BOUNOUADER",
        role: "Organisation Committee",
        department: "INPT, Rabat",
        email: "",
        image: "/editions pic/2024/commitee/nawal.png"
      },
      {
        id: "elakkaoui",
        name: "Zineb EL AKKAOUI",
        role: "Organisation Committee",
        department: "INPT, Rabat",
        email: "",
        image: "/editions pic/2024/commitee/Zineb.jpeg"
      },
      {
        id: "chafnaji",
        name: "Houda CHAFNAJI",
        role: "Organisation Committee",
        department: "INPT, Rabat",
        email: "",
        image: "/editions pic/2024/commitee/houda.jpg"
      },
      {
        id: "radgui",
        name: "Amina RADGUI",
        role: "Organisation Committee",
        department: "INPT, Rabat",
        email: "",
        image: "/editions pic/2024/commitee/radgui.jpg"
      },
    
      // 🔵 CTF Committee
      {
        id: "belmekki-abdelhamid",
        name: "Abdelhamid BELMEKKI",
        role: "CTF Committee",
        department: "INPT, Rabat",
        email: "",
        image: "/editions pic/2024/commitee/fallbackimg.png"
      },
      {
        id: "belmekki-elmostafa",
        name: "EL Mostafa BELMEKKI",
        role: "CTF Committee",
        department: "INPT, Rabat",
        email: "",
        image: "/editions pic/2024/commitee/elmostafa.jpg"
      },
      {
        id: "idrissi",
        name: "Hamza KAMAL IDRISSI",
        role: "CTF Committee",
        department: "INPT, Rabat",
        email: "",
        image: "/editions pic/2024/commitee/idrissi.jpeg"
      },
    
      // 🟣 Media & Communication Committee
      {
        id: "karakchou",
        name: "Leila KARAKCHOU",
        role: "Media & Communication Committee",
        department: "INPT, Rabat",
        email: "",
        image: "/editions pic/2024/commitee/karakchou.jpg"
      },
      {
        id: "gangaffou",
        name: "Nora GANGAFFOU",
        role: "Media & Communication Committee",
        department: "INPT, Rabat",
        email: "",
        image: "/editions pic/2024/commitee/fallbackimg.png"
      }
    ],    
    partners: [
      {
        id: "inpt",
        name: "INPT",
        logo: "/Logo_inpt.PNG",
        tier: "platinum",
        website: "https://www.inpt.ac.ma/",
        description: "Institut National des Postes et Télécommunications"
      },
      {
        id: "secdojo",
        name: "SecDojo",
        logo: "/Logo1 (2).png",
        tier: "gold",
        website: "https://secdojo.com/",
        description: "Cybersecurity training platform"
      },
      {
        id: "chainlink",
        name: "Chainlink",
        logo: "/Chainlink_Logo_Blue.svg.png",
        tier: "silver",
        website: "https://chain.link/",
        description: "Web3 services platform"
      }
    ],
    tickets: [],
    registrationOpen: false,
    earlyBirdDeadline: undefined,
    countdownEnabled: false,
    socialMedia: {},
    newsletterSignup: false,
    contactEmail: "blockchaincryptodays@gmail.com",
    pastEditions: [],
    agendaPdfUrl: ""
  },
  {
    year: 2025,
    registrationFormUrl: "https://docs.google.com/forms/d/",
    title: "Morocco Blockchain & Cryptocurrency Days",
    subtitle: "To Be Announced",
    dates: {
      start: "2025-02-15",
      end: "2025-02-28"
    },
    location: {
      venue: "INPT, Av. Allal Al Fassi",
      city: "Rabat",
      country: "Morocco"
    },
    theme: "Shaping the Future of a Decentralized World",
    status: "current",
    description: "Details for the 2025 edition will be announced soon. Stay tuned for more information about Morocco's leading blockchain and cryptocurrency event!",
    highlights: [],
    speakers: [],
    Learning: 0,
    Workshops: 0,
    Expected_Attendees: 0,
    agenda: [],
    committee: [],
    partners: [],
    tickets: [],
    registrationOpen: true,
    earlyBirdDeadline: undefined,
    countdownEnabled: false,
    socialMedia: {},
    newsletterSignup: false,
    contactEmail: "",
    agendaPdfUrl: undefined,
    sponsorshipPdfUrl: "/sponsorship-kit.pdf",
    pastEditions: [
      {
        year: 2024,
        title: "Morocco Blockchain & Cryptocurrency Days",
        dates: {
          start: "2024-02-15",
          end: "2024-02-28"
        },
        location: {
          venue: "INPT, Av. Allal Al Fassi",
          city: "Rabat",
          country: "Morocco"
        },
        theme: "Shaping the Future of a Decentralized World",
        highlights: [
          "Capture The Flag (CTF) Competition hosted by SecDojo",
          "Keynotes: Blockchain, Crypto, Regulatory, Business, and Tech Perspectives",
          "Panel Q&A: Revolutionizing Trade Finance and Industries Through Blockchain",
          "Workshops: Blockchain Security, Innovation, and Real-World Applications",
          "Networking and Collaboration Opportunities"
        ],
        media: [
          { id: "1", type: "image", url: "/editions pic/2024/1 (1).JPG", title: "Event Photo 1", description: "" },
          { id: "2", type: "image", url: "/editions pic/2024/1 (2).JPG", title: "Event Photo 2", description: "" },
          { id: "3", type: "image", url: "/editions pic/2024/1 (3).JPG", title: "Event Photo 3", description: "" },
          { id: "4", type: "image", url: "/editions pic/2024/1 (4).JPG", title: "Event Photo 4", description: "" },
          { id: "5", type: "image", url: "/editions pic/2024/1 (5).JPG", title: "Event Photo 5", description: "" },
          { id: "6", type: "image", url: "/editions pic/2024/1 (6).JPG", title: "Event Photo 6", description: "" },
          { id: "7", type: "image", url: "/editions pic/2024/1 (7).JPG", title: "Event Photo 7", description: "" },
          { id: "8", type: "image", url: "/editions pic/2024/1 (8).JPG", title: "Event Photo 8", description: "" },
          { id: "9", type: "image", url: "/editions pic/2024/1 (9).JPG", title: "Event Photo 9", description: "" },
          { id: "10", type: "image", url: "/editions pic/2024/1 (10).JPG", title: "Event Photo 10", description: "" },
          { id: "11", type: "image", url: "/editions pic/2024/1 (11).JPG", title: "Event Photo 11", description: "" },
          { id: "12", type: "image", url: "/editions pic/2024/1 (12).JPG", title: "Event Photo 12", description: "" },
          { id: "13", type: "image", url: "/editions pic/2024/1 (13).JPG", title: "Event Photo 13", description: "" },
          { id: "14", type: "image", url: "/editions pic/2024/1 (14).JPG", title: "Event Photo 14", description: "" },
          { id: "15", type: "image", url: "/editions pic/2024/1 (15).JPG", title: "Event Photo 15", description: "" },
          { id: "16", type: "image", url: "/editions pic/2024/1 (16).JPG", title: "Event Photo 16", description: "" },
          { id: "17", type: "image", url: "/editions pic/2024/1 (17).JPG", title: "Event Photo 17", description: "" },
          { id: "18", type: "image", url: "/editions pic/2024/1 (18).JPG", title: "Event Photo 18", description: "" },
          { id: "19", type: "image", url: "/editions pic/2024/1 (19).JPG", title: "Event Photo 19", description: "" },
          { id: "20", type: "image", url: "/editions pic/2024/1 (20).JPG", title: "Event Photo 20", description: "" },
          { id: "21", type: "image", url: "/editions pic/2024/1 (21).JPG", title: "Event Photo 21", description: "" },
          { id: "22", type: "image", url: "/editions pic/2024/1 (22).JPG", title: "Event Photo 22", description: "" },
          { id: "23", type: "image", url: "/editions pic/2024/1 (23).JPG", title: "Event Photo 23", description: "" },
          { id: "24", type: "image", url: "/editions pic/2024/1 (24).JPG", title: "Event Photo 24", description: "" },
          { id: "25", type: "image", url: "/editions pic/2024/1 (25).JPG", title: "Event Photo 25", description: "" },
          { id: "26", type: "image", url: "/editions pic/2024/1 (26).JPG", title: "Event Photo 26", description: "" },
          { id: "27", type: "image", url: "/editions pic/2024/1 (27).JPG", title: "Event Photo 27", description: "" },
          { id: "28", type: "image", url: "/editions pic/2024/1 (28).JPG", title: "Event Photo 28", description: "" },
          { id: "29", type: "image", url: "/editions pic/2024/1 (29).JPG", title: "Event Photo 29", description: "" },
          { id: "30", type: "image", url: "/editions pic/2024/1 (30).JPG", title: "Event Photo 30", description: "" }
        ],        
        driveGalleryUrl: "https://drive.google.com/drive/folders/your-folder-id",
        summary: "The 2024 edition brought together international experts, industry leaders, policymakers, entrepreneurs, and academics for three days of keynotes, panels, workshops, and a CTF competition, all focused on blockchain and cryptocurrency innovation in Morocco.",
        agendaPdfUrl: "/agendas/2024-detailed-agenda.pdf"
      }
    ]
  }
]