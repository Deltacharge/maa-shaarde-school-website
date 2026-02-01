import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-bold text-lg leading-tight">Little Stars</h2>
                <p className="text-xs opacity-70">Montessori School</p>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Nurturing young minds through the Montessori method. Where every child discovers their unique potential in a safe, loving environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Admissions", path: "/admissions" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Programs</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li>Playgroup (2-3 years)</li>
              <li>Nursery (3-4 years)</li>
              <li>Kindergarten (4-5 years)</li>
              <li>1st Class (5-6 years)</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-sm opacity-80">
                  123 Education Lane, Learning District, City - 560001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                <a href="tel:+1234567890" className="text-sm opacity-80 hover:text-primary transition-colors">
                  +1 234 567 890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                <a href="mailto:info@littlestars.edu" className="text-sm opacity-80 hover:text-primary transition-colors">
                  info@littlestars.edu
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Little Stars Montessori School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
