import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Sparkles, BookOpen, Users, Star, ChevronRight, Bell, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";
import classroomImage from "@/assets/classroom.jpg";
import outdoorImage from "@/assets/outdoor-play.jpg";

// Hero Section
const HeroSection = () => (
  <section className="relative gradient-hero overflow-hidden">
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-accent-foreground text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Admissions Open for 2025-26
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Where Little{" "}
            <span className="text-gradient-warm">Dreams</span>{" "}
            Take Flight
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
            Nurturing curious minds through the Montessori method. A safe, loving space where your child discovers their unique potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/admissions">
              <Button variant="hero" size="xl">
                Apply for Admission
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl">
                Schedule a Visit
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={heroImage}
              alt="Happy children learning together"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-2xl animate-float flex items-center justify-center shadow-lg">
            <Star className="w-10 h-10 text-primary-foreground" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-2xl animate-float-delayed flex items-center justify-center shadow-lg">
            <Heart className="w-8 h-8 text-accent-foreground" />
          </div>
        </div>
      </div>
    </div>
    {/* Wave divider */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
      </svg>
    </div>
  </section>
);

// Announcements Section
const AnnouncementsSection = () => (
  <section className="py-8 bg-tertiary/30">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <div className="flex items-center gap-2 text-tertiary-foreground font-semibold">
          <Bell className="w-5 h-5" />
          <span>Announcements:</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="flex gap-8 animate-marquee">
            <span className="flex items-center gap-2 text-sm whitespace-nowrap">
              <Calendar className="w-4 h-4 text-primary" />
              Summer vacation: May 15 - June 30, 2025
            </span>
            <span className="flex items-center gap-2 text-sm whitespace-nowrap">
              <Star className="w-4 h-4 text-primary" />
              Annual Day celebration on April 20, 2025
            </span>
            <span className="flex items-center gap-2 text-sm whitespace-nowrap">
              <Sparkles className="w-4 h-4 text-primary" />
              New admissions now open for academic year 2025-26
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Highlights Section
const highlights = [
  {
    icon: Shield,
    title: "Safe Environment",
    description: "CCTV surveillance, trained staff, and secure campus ensure your child's safety at all times.",
    color: "bg-secondary",
  },
  {
    icon: Users,
    title: "Experienced Teachers",
    description: "Our certified Montessori educators bring passion and expertise to nurture every child.",
    color: "bg-accent",
  },
  {
    icon: BookOpen,
    title: "Activity-Based Learning",
    description: "Hands-on Montessori materials make learning engaging, fun, and meaningful.",
    color: "bg-tertiary",
  },
  {
    icon: Heart,
    title: "Loving Care",
    description: "Small class sizes mean personalized attention and strong emotional bonds.",
    color: "bg-lavender",
  },
];

const HighlightsSection = () => (
  <section className="section-container">
    <h2 className="section-title">Why Choose Little Stars?</h2>
    <p className="section-subtitle">
      We create a nurturing environment where children thrive through play, exploration, and guided discovery.
    </p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {highlights.map((item, index) => (
        <div
          key={index}
          className="card-pastel text-center group"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className={`w-16 h-16 mx-auto rounded-2xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <item.icon className="w-8 h-8 text-foreground" />
          </div>
          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

// Programs Section
const programs = [
  { name: "Playgroup", age: "2-3 years", description: "Introduction to social skills and sensory exploration" },
  { name: "Nursery", age: "3-4 years", description: "Building foundation through creative activities" },
  { name: "Kindergarten", age: "4-5 years", description: "Pre-reading, writing, and mathematical concepts" },
  { name: "1st Class", age: "5-6 years", description: "Transition to formal learning with Montessori approach" },
];

const ProgramsSection = () => (
  <section className="gradient-cool py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="section-title">Our Programs</h2>
      <p className="section-subtitle">
        Age-appropriate curriculum designed to meet developmental milestones while fostering independence.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((program, index) => (
          <div key={index} className="card-pastel">
            <div className="text-sm font-medium text-primary mb-2">{program.age}</div>
            <h3 className="font-bold text-xl mb-3">{program.name}</h3>
            <p className="text-sm text-muted-foreground">{program.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/about">
          <Button variant="outline" size="lg">
            Learn More About Our Approach
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

// Facilities Section
const FacilitiesSection = () => (
  <section className="section-container">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          World-Class Facilities for Young Learners
        </h2>
        <p className="text-muted-foreground mb-8">
          Our campus is designed with children in mind - bright, spacious classrooms, safe play areas, and modern amenities that support holistic development.
        </p>
        <ul className="space-y-4">
          {[
            "Montessori-equipped smart classrooms",
            "Safe outdoor play area with age-appropriate equipment",
            "Dedicated art and music rooms",
            "CCTV surveillance throughout campus",
            "Hygienic cafeteria with nutritious meals",
            "Air-conditioned transport facility",
          ].map((facility, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <ChevronRight className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="text-sm">{facility}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img
          src={classroomImage}
          alt="Montessori classroom"
          className="rounded-2xl shadow-lg h-48 w-full object-cover"
        />
        <img
          src={outdoorImage}
          alt="Outdoor play area"
          className="rounded-2xl shadow-lg h-48 w-full object-cover mt-8"
        />
      </div>
    </div>
  </section>
);

// Testimonials Section
const testimonials = [
  {
    quote: "Little Stars has been a blessing for our family. Our daughter has blossomed into a confident, curious learner.",
    author: "Priya Sharma",
    role: "Parent of Nursery Student",
  },
  {
    quote: "The teachers truly care about each child's development. The Montessori approach has made learning so natural for my son.",
    author: "Rajesh Kumar",
    role: "Parent of KG Student",
  },
  {
    quote: "We've seen remarkable growth in our child's independence and social skills. Highly recommend this school!",
    author: "Anita Patel",
    role: "Parent of Playgroup Student",
  },
];

const TestimonialsSection = () => (
  <section className="gradient-playful py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="section-title">What Parents Say</h2>
      <p className="section-subtitle">
        Hear from families who have experienced the Little Stars difference.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div key={index} className="card-pastel">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground mb-6 italic">"{item.quote}"</p>
            <div>
              <p className="font-semibold">{item.author}</p>
              <p className="text-sm text-muted-foreground">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// CTA Section
const CTASection = () => (
  <section className="section-container">
    <div className="gradient-warm rounded-3xl p-8 md:p-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Begin Your Child's Journey?
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Schedule a campus visit to experience our warm, nurturing environment firsthand. Admissions are now open for the 2025-26 academic year.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/admissions">
          <Button variant="hero" size="xl">
            Apply Now
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="heroOutline" size="xl">
            Schedule a Visit
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

// Main Home Page
const Home = () => {
  return (
    <>
      <HeroSection />
      <AnnouncementsSection />
      <HighlightsSection />
      <ProgramsSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Home;
