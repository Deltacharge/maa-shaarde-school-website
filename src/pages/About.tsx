import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, BookOpen, Users, Target, Eye, Award, Shield, Sparkles, GraduationCap } from "lucide-react";
import classroomImage from "@/assets/classroom.jpg";
import activitiesImage from "@/assets/activities.jpg";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Little Stars</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A nurturing Montessori environment where every child is encouraged to explore, learn, and grow at their own pace.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-pastel gradient-warm">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              To be a leading Montessori institution that nurtures happy, confident, and independent learners who are prepared to embrace the world with curiosity and compassion.
            </p>
          </div>
          <div className="card-pastel gradient-cool">
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-secondary-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To provide a child-centered educational experience that respects each child's unique potential, fosters a love for learning, and builds strong foundations for lifelong success.
            </p>
          </div>
        </div>
      </section>

      {/* Montessori Approach */}
      <section className="gradient-cool py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Montessori Approach</h2>
              <p className="text-muted-foreground mb-6">
                Developed by Dr. Maria Montessori, our teaching philosophy centers on the belief that children learn best through hands-on experience and self-directed activity.
              </p>
              <div className="space-y-4">
                {[
                  { icon: BookOpen, text: "Self-paced learning with Montessori materials" },
                  { icon: Users, text: "Mixed-age classrooms that foster peer learning" },
                  { icon: Heart, text: "Emphasis on social and emotional development" },
                  { icon: Sparkles, text: "Freedom within limits to explore interests" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={classroomImage}
                alt="Montessori classroom environment"
                className="rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="section-container">
        <h2 className="section-title">Age Groups & Classes</h2>
        <p className="section-subtitle">
          We offer programs tailored to each developmental stage, from Playgroup to 1st Class.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Playgroup", age: "2-3 years", description: "Gentle introduction to structured play, sensory activities, and social interaction in a nurturing environment.", color: "bg-tertiary" },
            { name: "Nursery", age: "3-4 years", description: "Foundation building through creative arts, language development, and practical life skills.", color: "bg-secondary" },
            { name: "Kindergarten", age: "4-5 years", description: "Pre-academic skills including phonics, number concepts, and environmental awareness.", color: "bg-accent" },
            { name: "1st Class", age: "5-6 years", description: "Transition to formal learning while maintaining the Montessori philosophy of hands-on exploration.", color: "bg-lavender" },
          ].map((program, index) => (
            <div key={index} className="card-pastel relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-20 h-20 ${program.color} rounded-bl-3xl opacity-30`} />
              <div className="text-sm font-semibold text-primary mb-2">{program.age}</div>
              <h3 className="text-xl font-bold mb-3">{program.name}</h3>
              <p className="text-sm text-muted-foreground">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Teachers */}
      <section className="gradient-playful py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={activitiesImage}
                alt="Teachers with students"
                className="rounded-3xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Dedicated Teachers</h2>
              <p className="text-muted-foreground mb-6">
                Our faculty comprises certified Montessori educators who are passionate about early childhood development. Each teacher brings warmth, patience, and expertise to create meaningful learning experiences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: GraduationCap, label: "Montessori Certified" },
                  { icon: Award, label: "Trained in Child Psychology" },
                  { icon: Shield, label: "Background Verified" },
                  { icon: Heart, label: "First Aid Trained" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-card rounded-xl p-3">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Child Safety */}
      <section className="section-container">
        <div className="gradient-warm rounded-3xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-primary mx-auto flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Child Safety is Our Priority</h2>
            <p className="text-muted-foreground mb-8">
              We maintain the highest safety standards with CCTV surveillance, secure entry/exit protocols, trained staff, and regular safety audits. Your child's wellbeing is our responsibility.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Schedule a Campus Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
