// src/data/galleryData.tsx
import volunteerEvent from "@/assets/volunteer-event.jpg";
import therapySession from "@/assets/therapy-session.jpg";
import heroCommunity from "@/assets/hero-community.jpg";

export const galleryItems = [
  // Acara Komuniti
  { id: 1, src: volunteerEvent, alt: "Sukarelawan komuniti", category: "Acara Komuniti" },
  { id: 2, src: heroCommunity, alt: "Perjumpaan kejiranan", category: "Acara Komuniti" },
  { id: 3, src: volunteerEvent, alt: "Kempen kesedaran", category: "Acara Komuniti" },

  // Kumpulan Sokongan
  { id: 4, src: therapySession, alt: "Sesi kumpulan sokongan", category: "Kumpulan Sokongan" },
  { id: 5, src: therapySession, alt: "Lingkaran perkongsian", category: "Kumpulan Sokongan" },
  { id: 6, src: therapySession, alt: "Perbualan penyembuhan", category: "Kumpulan Sokongan" },

  // Latihan
  { id: 7, src: volunteerEvent, alt: "Bengkel sukarelawan", category: "Latihan" },
  { id: 8, src: heroCommunity, alt: "Sesi perkongsian kemahiran", category: "Latihan" },

  // Program
  { id: 9, src: therapySession, alt: "Kaunseling keluarga", category: "Program" },
  { id: 10, src: volunteerEvent, alt: "Mentor belia", category: "Program" },

  // Sambutan
  { id: 11, src: heroCommunity, alt: "Sambutan komuniti", category: "Sambutan" },
  { id: 12, src: volunteerEvent, alt: "Majlis pencapaian", category: "Sambutan" },
];
