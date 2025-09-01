import { Heart, Users, ArrowRight, CheckCircle, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

const GetInvolvedSection = () => {
const memberBenefits = [
  "Akses kepada semua program sokongan dan sesi pemulihan",
  "Kaunseling dengan rakan sebaya dan sokongan profesional",
  "Program keluarga dan bengkel komuniti",
  "Campur tangan krisis dan rangkaian sokongan 24/7",
  "Peluang untuk menjadi penyokong rakan sebaya",
  "Pendidikan dan sumber kesihatan mental berterusan"
];

const volunteerBenefits = [
  "Latihan menyeluruh dalam sokongan kesihatan mental",
  "Jadual fleksibel mengikut ketersediaan anda",
  "Sumbangan bermakna kepada pemulihan komuniti",
  "Pembangunan profesional dan peningkatan kemahiran",
  "Akses kepada sokongan dan pemantauan berterusan",
  "Menjadi sebahagian daripada keluarga empati yang kolaboratif"
];


  // const volunteerRoles = [
  //   {
  //     title: "Peer Support Facilitator",
  //     time: "4-6 hours/week",
  //     training: "20 hours",
  //     description: "Lead support groups and facilitate healing conversations"
  //   },
  //   {
  //     title: "Crisis Response Volunteer",
  //     time: "On-call shifts",
  //     training: "40 hours",
  //     description: "Provide immediate support during mental health crises"
  //   },
  //   {
  //     title: "Community Educator",
  //     time: "2-4 hours/week",
  //     training: "15 hours",
  //     description: "Deliver mental health literacy programs in schools and workplaces"
  //   },
  //   {
  //     title: "Family Program Assistant",
  //     time: "3-5 hours/week",
  //     training: "25 hours",
  //     description: "Support families navigating mental health challenges together"
  //   }
  // ];

  return (
    <section
  id="get-involved"
  className="py-20 healing-gradient scroll-mt-20"
>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sertai <span className="text-secondary-foreground">Keluarga Empati</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
             Sama ada anda mencari sokongan atau ingin berkongsi kekuatan, 
          ada dua cara bermakna untuk menjadi sebahagian daripada komuniti penyembuhan kami.


            
          </p>
        </div>

        {/* Dual Pathways */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Community Member Path */}
          <div className="bg-background backdrop-blur-sm rounded-3xl p-8 border border-background/20 shadow-healing">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                 Ahli
              </h3>
              <p className="text-foreground/80 leading-relaxed">
              Sertai keluarga empati kami sebagai seseorang yang mencari sokongan, penyembuhan dan hubungan.  
              Setiap ahli dihargai dan berpeluang untuk menjadi penyokong rakan sebaya.

              </p>
            </div>

            {/* Member Benefits */}
            <div className="space-y-3 mb-8">
              <h4 className="font-semibold text-foreground mb-4">Apa yang anda akan terima:</h4>
              {memberBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                 <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90 leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Member CTA */}
            <div className="space-y-4">
              <Button 
                variant="warm" 
                size="lg" 
                className="w-full bg-background text-foreground hover:bg-background/90"
              >
                Daftar Sebagai Ahli
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-foreground/70 text-center">
                 Percuma • Sulit • Respon pantas
              </p>
            </div>
          </div>

          {/* Volunteer Path */}
          <div className="bg-background backdrop-blur-sm rounded-3xl p-8 border border-background/20 shadow-healing">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Sukarelawan
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Kongsikan kemahiran dan kasih sayang anda sambil berkembang secara peribadi dan profesional.  
              Ramai sukarelawan kami merasai penyembuhan yang sama seperti yang mereka berikan.

              </p>
            </div>

            {/* Volunteer Benefits */}
            <div className="space-y-3 mb-8">
              <h4 className="font-semibold text-foreground mb-4">Apa yang anda akan dapat:</h4>
              {volunteerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90 leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Volunteer CTA */}
            <div className="space-y-4">
              <Button 
                variant="warm" 
                size="lg" 
                className="w-full bg-background text-foreground hover:bg-background/90"
              >
                Daftar Sebagai Sukarelawan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-foreground/70 text-center">
               Masa fleksibel • Latihan penuh disediakan • Sokongan berterusan
              </p>
            </div>
          </div>
        </div>

        {/* Volunteer Roles */}
        {/* <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Volunteer <span className="text-secondary-foreground">Opportunities</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {volunteerRoles.map((role, index) => (
              <div 
                key={role.title}
                className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-background/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {role.title}
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                    <Clock className="h-3 w-3 mr-1" />
                    {role.time}
                  </Badge>
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                    <BookOpen className="h-3 w-3 mr-1" />
                    {role.training} training
                  </Badge>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Bottom CTA */}
        {/* <div className="text-center">
          <div className="bg-background/20 backdrop-blur-sm rounded-2xl p-8 border border-background/30">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Join Our Mission?
            </h3>
            <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
              Every person who joins our empathy family makes our community stronger 
              and our impact more meaningful. Which path calls to you?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="warm" 
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                I Need Support
              </Button>
              <Button 
                variant="warm" 
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                I Want to Help
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default GetInvolvedSection;