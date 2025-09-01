// src/data/partnersData.ts
import { Heart, Award, Users, Building2, Stethoscope, GraduationCap } from "lucide-react";

export interface Partner {
  id: number;
  name: string;
  icon: any;
}

export const partners: Partner[] = [
  { id: 1, name: "Perikatan Kesihatan Mental Kebangsaan", icon: Stethoscope },
  { id: 2, name: "Yayasan Kesejahteraan Komuniti", icon: Heart },
  { id: 3, name: "Jabatan Psikologi Universiti", icon: GraduationCap },
  { id: 4, name: "Daerah Kesihatan Tempatan", icon: Building2 },
  { id: 5, name: "Rangkaian Sokongan Rakan Sebaya", icon: Users },
  { id: 6, name: "Makmal Inovasi Kesihatan Mental", icon: Award },
];

