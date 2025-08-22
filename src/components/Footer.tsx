import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import empatiLogo from "@/assets/empati-logo.png";

const Footer = () => {
  const footerLinks = {
    "About Us": [
      "Our Story",
      "Our Approach",
      "Leadership Team",
      "Annual Reports",
      "Careers"
    ],
    "Programs": [
      "Peer Support Circles",
      "Crisis Response",
      "Family Workshops",
      "Mental Health Literacy",
      "Community Forums"
    ],
    "Get Involved": [
      "Become a Member",
      "Volunteer Opportunities",
      "Donate",
      "Corporate Partnerships",
      "Events Calendar"
    ],
    "Resources": [
      "Mental Health Resources",
      "Crisis Support",
      "Educational Materials",
      "Community Guidelines",
      "Privacy Policy"
    ]
  };

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={empatiLogo} 
                  alt="NGO Empati" 
                  className="h-10 w-10"
                />
                <span className="text-2xl font-bold">NGO Empati</span>
              </div>
              <p className="text-background/80 leading-relaxed mb-6">
                Creating unified communities where traditional boundaries between staff and 
                volunteers dissolve into one empathy family working toward shared healing 
                and mental wellness for all.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-background/90">(555) 123-HELP</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-background/90">hello@ngoempati.org</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-background/90">123 Community St, Healing City</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-gentle group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-background group-hover:text-primary-foreground" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-lg font-semibold mb-6 text-background">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-background/80 hover:text-primary transition-gentle"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Crisis Support Banner */}
        <div className="py-8 border-t border-background/20">
          <div className="bg-primary/10 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Heart className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold text-background">
                Need Immediate Support?
              </h3>
            </div>
            <p className="text-background/80 mb-4">
              Our crisis response team is available 24/7 for anyone experiencing a mental health emergency.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="sm">
                Call Crisis Line: (555) 123-HELP
              </Button>
              <Button variant="outline" size="sm" className="border-background/30 text-background hover:bg-background/10">
                Text Support: Text "HELP" to 12345
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/70 text-sm">
              © 2024 NGO Empati. All rights reserved. Building empathy families since 2019.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/70 hover:text-primary transition-gentle">
                Privacy Policy
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-gentle">
                Terms of Service
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-gentle">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;