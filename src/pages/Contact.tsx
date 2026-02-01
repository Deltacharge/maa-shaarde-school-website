import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you! Reach out for admissions inquiries, campus visits, or any questions.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">
                    123 Education Lane, Learning District<br />
                    City - 560001, State
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Near Central Park, Opposite City Mall
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 234 567 890
                  </a>
                  <br />
                  <a href="tel:+1234567891" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 234 567 891
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-tertiary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-tertiary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <a href="mailto:info@littlestars.edu" className="text-muted-foreground hover:text-primary transition-colors">
                    info@littlestars.edu
                  </a>
                  <br />
                  <a href="mailto:admissions@littlestars.edu" className="text-muted-foreground hover:text-primary transition-colors">
                    admissions@littlestars.edu
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-lavender flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-lavender-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">School Timings</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:30 AM - 3:30 PM<br />
                    Saturday: 9:00 AM - 12:00 PM (Office only)
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784368459253!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="card-pastel">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <CheckCircle className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="gradient-cool py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Quick answers to common questions from parents.
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What is the admission process?",
                a: "The admission process includes submitting an inquiry, scheduling a campus visit, completing the application form, and attending an interaction session. Visit our Admissions page for details.",
              },
              {
                q: "What are the school timings?",
                a: "School operates Monday to Friday from 8:30 AM to 3:30 PM. Extended daycare is available until 5:00 PM on request.",
              },
              {
                q: "Do you provide transportation?",
                a: "Yes, we offer air-conditioned bus transportation covering major areas of the city. Routes are designed for safety and convenience.",
              },
              {
                q: "What is your teacher-to-student ratio?",
                a: "We maintain a low ratio of 1:10 to ensure personalized attention for every child.",
              },
              {
                q: "Are meals provided at school?",
                a: "We have a hygienic cafeteria serving nutritious vegetarian meals. Parents can also send packed lunch if preferred.",
              },
            ].map((faq, index) => (
              <details key={index} className="card-pastel group">
                <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
