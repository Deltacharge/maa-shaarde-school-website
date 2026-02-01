import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Calendar, FileText, Clock, Phone, ChevronRight } from "lucide-react";

const admissionSteps = [
  {
    step: 1,
    title: "Submit Inquiry",
    description: "Fill out our online inquiry form or visit the school to express your interest.",
  },
  {
    step: 2,
    title: "Campus Visit",
    description: "Schedule a visit to tour our facilities and meet our teachers.",
  },
  {
    step: 3,
    title: "Application Form",
    description: "Complete the detailed application form with required documents.",
  },
  {
    step: 4,
    title: "Interaction Session",
    description: "A friendly interaction with the child and parents to understand learning needs.",
  },
  {
    step: 5,
    title: "Admission Confirmation",
    description: "Receive admission confirmation and complete the enrollment process.",
  },
];

const eligibility = [
  { program: "Playgroup", age: "2 years by June 1st" },
  { program: "Nursery", age: "3 years by June 1st" },
  { program: "Kindergarten (LKG)", age: "4 years by June 1st" },
  { program: "Kindergarten (UKG)", age: "5 years by June 1st" },
  { program: "1st Class", age: "6 years by June 1st" },
];

const documents = [
  "Birth Certificate (original and photocopy)",
  "Passport-size photographs (6 copies)",
  "Aadhar Card / Passport of child",
  "Parent/Guardian ID proof",
  "Address proof (utility bill / rental agreement)",
  "Previous school records (if applicable)",
  "Immunization record",
];

const Admissions = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-accent-foreground text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            Admissions Open for 2025-26
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Little Stars Family</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Begin your child's educational journey with us. Our simple admission process ensures a smooth start for every family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#inquiry-form">
              <Button variant="hero" size="xl">
                Apply Online
                <ChevronRight className="w-5 h-5" />
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl">
                <Phone className="w-5 h-5" />
                Call Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-container">
        <h2 className="section-title">Admission Process</h2>
        <p className="section-subtitle">
          Follow these simple steps to enroll your child at Little Stars Montessori School.
        </p>
        <div className="max-w-4xl mx-auto">
          {admissionSteps.map((item, index) => (
            <div key={index} className="flex gap-6 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {item.step}
                </div>
                {index < admissionSteps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border mt-2" />
                )}
              </div>
              <div className="flex-1 pb-8">
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility */}
      <section className="gradient-cool py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Age Eligibility Criteria</h2>
          <p className="section-subtitle">
            Children must meet the minimum age requirement as of June 1st of the admission year.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="card-pastel">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-semibold">Program</th>
                    <th className="text-left py-3 font-semibold">Age Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  {eligibility.map((item, index) => (
                    <tr key={index} className="border-b border-border last:border-0">
                      <td className="py-3">{item.program}</td>
                      <td className="py-3 text-muted-foreground">{item.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Required Documents</h2>
            <p className="text-muted-foreground mb-8">
              Please prepare the following documents for the admission process. All documents should be submitted as original copies along with photocopies.
            </p>
            <ul className="space-y-3">
              {documents.map((doc, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-pastel gradient-warm">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="font-bold text-xl">Academic Year Timeline</h3>
            </div>
            <div className="space-y-4">
              {[
                { period: "January - March", activity: "Admission Inquiry & Registrations" },
                { period: "March - April", activity: "Admission Confirmation" },
                { period: "April", activity: "Orientation Program for Parents" },
                { period: "June", activity: "Academic Year Begins" },
                { period: "October", activity: "Mid-Year Assessments" },
                { period: "March", activity: "Annual Day & Year End" },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-28 flex-shrink-0 font-medium text-primary">{item.period}</div>
                  <div className="text-muted-foreground">{item.activity}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="gradient-playful py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Admission Inquiry Form</h2>
          <p className="section-subtitle">
            Fill out this form and our admissions team will contact you within 24 hours.
          </p>
          <div className="max-w-2xl mx-auto">
            <form className="card-pastel space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Parent/Guardian Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter email address"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Child's Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter child's name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Child's Date of Birth *</label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Program Interested In *</label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a program</option>
                  <option value="playgroup">Playgroup (2-3 years)</option>
                  <option value="nursery">Nursery (3-4 years)</option>
                  <option value="kg">Kindergarten (4-5 years)</option>
                  <option value="1st">1st Class (5-6 years)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Additional Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Any specific questions or requirements?"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full" type="submit">
                <FileText className="w-5 h-5" />
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admissions;
