import { TrendingUp, Users, Heart, Globe, Clock, Star } from "lucide-react";

const ImpactSection = () => {
  const stats = [
    {
      icon: Users,
      number: "2,500+",
      label: "Lives Touched",
      description: "Community members and families who have found support and healing"
    },
    {
      icon: Heart,
      number: "850+",
      label: "Active Volunteers",
      description: "Dedicated community members contributing to our empathy family"
    },
    {
      icon: Clock,
      number: "15,000+",
      label: "Support Hours",
      description: "Hours of peer support, counseling, and community care provided"
    },
    {
      icon: TrendingUp,
      number: "89%",
      label: "Positive Outcomes",
      description: "Participants reporting improved mental wellbeing and community connection"
    },
    {
      icon: Globe,
      number: "12",
      label: "Partner Organizations",
      description: "Collaborating mental health organizations expanding our reach"
    },
    {
      icon: Star,
      number: "95%",
      label: "Satisfaction Rate",
      description: "Community members who would recommend our programs to others"
    }
  ];

  const achievements = [
  {
    year: "2019",
    title: "Inspirasi Dari Wad Psikiatri",
    description:
      "Diasaskan oleh Syahida Zulkarnain selepas pengalaman melihat pesakit psikiatri di PPUM yang mampu berinteraksi tanpa stigma, berbeza dengan masyarakat luar.",
  },
  {
    year: "2020",
    title: "Kumpulan Sokongan Pertama",
    description:
      "Empati mula mengumpulkan anak muda melalui Siri Lepak & Luah — sebuah kumpulan sokongan santai yang membolehkan peserta berkongsi tanpa prejudis.",
  },
  {
    year: "2021",
    title: "Sokongan & Pengiktirafan",
    description:
      "Menerima sokongan rapat daripada Jabatan Perdana Menteri dan pelbagai pihak berkepentingan, mengukuhkan kedudukan Empati sebagai suara anak muda.",
  },
  {
    year: "2022",
    title: "60 Ahli Komuniti",
    description:
      "Komuniti berkembang kepada lebih 60 anak muda yang aktif dalam sistem sokongan Empati.",
  },
  {
    year: "2023",
    title: "Program Pemerkasaan",
    description:
      "Melancarkan aktiviti seperti Terapi Seni, Yoga dan Bengkel Pemerkasaan Diri dengan akses lebih murah atau percuma untuk ahli.",
  },
  {
    year: "2024",
    title: "NGO Empati Didaftarkan",
    description:
      "Empati secara rasmi beroperasi sebagai NGO, berlandaskan 11 teras terapi kumpulan sokongan oleh Dr. Irvin Yalom, dengan tema ‘Sama-Sama Sembuh’.",
  },
];

  return (
    <section id="impact" className="py-20 community-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Measuring Our <span className="text-secondary-foreground">Collective Impact</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Every number represents a story of transformation, connection, and hope. 
            These are the tangible results of our empathy family working together.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20 shadow-warm hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">
                    {stat.label}
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Journey of <span className="text-secondary-foreground">Growth & Impact</span>
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-background/30"></div>
            
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.year}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-background/20 transform md:-translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20 shadow-warm">
                    <div className="text-2xl font-bold text-secondary mb-2">
                      {achievement.year}
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">
                      {achievement.title}
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-background/10 backdrop-blur-sm rounded-3xl p-8 border border-background/20 shadow-warm">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Be Part of Our Growing Impact
            </h3>
            <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
              Every person who joins our empathy family contributes to these numbers 
              and becomes part of our collective story of healing and transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;