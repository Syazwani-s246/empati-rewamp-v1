// import { useState } from "react";
// import { Heart, Users, Lightbulb, HandHeart } from "lucide-react";
// import therapySession from "@/assets/therapy-session.jpg";
// import { Button } from "@/components/ui/button";

// const AboutSection = () => {

//   const [showTimeline, setShowTimeline] = useState(false);

//   const values = [
//     {
//       icon: Heart,
//       title: "Sokongan Mental",
//       description: "Menyediakan sokongan melalui Siri Lepak & Luah serta WhatsApp Group untuk membantu kesihatan mental secara bersama."
//     },
//     {
//       icon: Users,
//       title: "Bantuan Kesihatan",
//       description: "Memberikan akses serta maklumat mengenai bantuan kesihatan mental terdekat bagi individu yang memerlukan."
//     },
//     {
//       icon: Lightbulb,
//       title: "Aktiviti Penjagaan",
//       description: "Menawarkan aktiviti penjagaan diri seperti Terapi Seni, Yoga, dan Bengkel Pemerkasaan Diri secara percuma atau lebih murah."
//     },
//     {
//       icon: HandHeart,
//       title: "Program Sosial",
//       description: "Memberikan peluang kepada individu yang berminat untuk menganjurkan program impak sosial yang memberi manfaat kepada masyarakat."
//     }
//   ];

//   const achievements = [
//     {
//       year: "2019",
//       title: "Inspirasi Dari Wad Psikiatri",
//       description:
//         "Diasaskan oleh Syahida Zulkarnain selepas pengalaman melihat pesakit psikiatri di PPUM yang mampu berinteraksi tanpa stigma, berbeza dengan masyarakat luar.",
//     },
//     {
//       year: "2020",
//       title: "Kumpulan Sokongan Pertama",
//       description:
//         "Empati mula mengumpulkan anak muda melalui Siri Lepak & Luah — sebuah kumpulan sokongan santai yang membolehkan peserta berkongsi tanpa prejudis.",
//     },
//     {
//       year: "2021",
//       title: "Sokongan & Pengiktirafan",
//       description:
//         "Menerima sokongan rapat daripada Jabatan Perdana Menteri dan pelbagai pihak berkepentingan, mengukuhkan kedudukan Empati sebagai suara anak muda.",
//     },
//     {
//       year: "2022",
//       title: "60 Ahli Komuniti",
//       description:
//         "Komuniti berkembang kepada lebih 60 anak muda yang aktif dalam sistem sokongan Empati.",
//     },
//     {
//       year: "2023",
//       title: "Program Pemerkasaan",
//       description:
//         "Melancarkan aktiviti seperti Terapi Seni, Yoga dan Bengkel Pemerkasaan Diri dengan akses lebih murah atau percuma untuk ahli.",
//     },
//     {
//       year: "2024",
//       title: "NGO Empati Didaftarkan",
//       description:
//         "Empati secara rasmi beroperasi sebagai NGO, berlandaskan 11 teras terapi kumpulan sokongan oleh Dr. Irvin Yalom, dengan tema ‘Sama-Sama Sembuh’.",
//     },
//   ];


//   return (
//     <section id="about" className="py-20 bg-background">
//       <div className="container mx-auto px-4 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Mengenai  <span className="text-gradient">Empati</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Empati diasaskan dengan visi untuk membina masyarakat yang bebas stigma
//             dan prejudis. Kami percaya bahawa proses penyembuhan adalah perjalanan
//             kolektif, “Sama-Sama Sembuh”.
//           </p>
//         </div>

//         {/* Main Content */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
//           {/* Image */}
//           <div className="relative">
//             <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-warm hover-lift">
//               <img
//                 src={therapySession}
//                 alt="Community therapy session"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//           </div>

//           {/* Content */}
//           <div className="space-y-6">
//             <h3 className="text-3xl font-bold text-foreground">
//               Melangkaui Sokongan Tradisional
//             </h3>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               Di NGO Empati, kami percaya bahawa penyembuhan bukan sekadar proses
//               individu, tetapi perjalanan kolaboratif. Setiap orang, sama ada ahli
//               komuniti yang mencari sokongan atau sukarelawan yang menawarkan
//               kemahiran, membawa nilai dan perspektif tersendiri dalam misi
//               penyembuhan bersama.
//             </p>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               Pendekatan kami mewujudkan ruang sokongan dua hala: hari ini seseorang
//               mungkin hadir sebagai peserta, tetapi esok mereka boleh menjadi
//               penyokong sebaya; manakala sukarelawan pula sering menemui
//               kesembuhan melalui khidmat yang diberikan. Inilah ekosistem sokongan
//               lestari yang bakal kukuh dengan setiap individu baharu.
//             </p>



//             {/* CTA button */}
//             <div className="text-center mt-12">
//               <Button
//                 variant="butterfly"
//                 size="lg"
//                 onClick={() => setShowTimeline(!showTimeline)}
//               >
//                 {showTimeline ? "Kembali Ringkas" : "Lihat Perjalanan Kami"}
//               </Button>
//             </div>

//           </div>
//         </div>

//         {/* Timeline (toggle) */}
//         {showTimeline && (
//           <section id="timeline" className="py-20 bg-background">
//             <div className="max-w-4xl mx-auto">
//               <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
//                 Perjalanan <span className="text-secondary-foreground">Empati</span>
//               </h3>
//               {/* Timeline */}
//               <div className="max-w-4xl mx-auto">
//                 <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
//                   Our Journey of <span className="text-secondary-foreground">Growth & Impact</span>
//                 </h3>

//                 <div className="relative">
//                   {/* Timeline line */}
//                   <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-background/30"></div>

//                   {achievements.map((achievement, index) => (
//                     <div
//                       key={achievement.year}
//                       className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//                         }`}
//                     >
//                       {/* Timeline dot */}
//                       <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-background/20 transform md:-translate-x-1/2 z-10"></div>

//                       {/* Content */}
//                       <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
//                         <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20 shadow-warm">
//                           <div className="text-2xl font-bold text-secondary mb-2">
//                             {achievement.year}
//                           </div>
//                           <h4 className="text-xl font-semibold text-foreground mb-3">
//                             {achievement.title}
//                           </h4>
//                           <p className="text-foreground/80 leading-relaxed">
//                             {achievement.description}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}
//       </div>
   




// <div className="mt-20">
//   <h3 className="text-3xl font-bold text-foreground mb-10">
//     Keistimewaan Kami
//   </h3>


//   {/* Values Grid */}
//   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//     {values.map((value, index) => (
//       <div
//         key={value.title}
//         className="p-6 bg-card rounded-2xl shadow-card hover-lift border border-border"
//         style={{ animationDelay: `${index * 0.1}s` }}
//       >
//         <div className="mb-4">
//           <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
//             <value.icon className="h-6 w-6 text-primary" />
//           </div>
//         </div>
//         <h4 className="text-xl font-semibold mb-3 text-foreground">
//           {value.title}
//         </h4>
//         <p className="text-muted-foreground leading-relaxed">
//           {value.description}
//         </p>
//       </div>
//     ))}
//   </div>
// </div>

// {/* Mission Statement */ }
// <div className="mt-20 text-center">
//   <div className="max-w-4xl mx-auto p-8 bg-secondary/10 rounded-3xl border border-secondary/20 shadow-warm">
//     <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-6">
//       "Kami percaya kesembuhan lahir dari sokongan bersama. Setiap individu membawa kekuatan tersendiri, mencipta ruang di mana kasih sayang menjadi sumber pemulihan."
//     </blockquote>
//     <cite className="text-lg text-primary font-semibold">
//       — Komuniti NGO Empati
//     </cite>
//   </div>
// </div>
//       </div >
//     </section >
//   );
// };

// export default AboutSection;