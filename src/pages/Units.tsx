import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Users,
  UserCheck,
  Megaphone,
  Camera,
  Brain,
  ChevronDown,
  ChevronRight,
  BookOpen,
  Award,
  TrendingUp,
} from "lucide-react";

const Units = () => {
  const [expandedUnit, setExpandedUnit] = useState<number | null>(null);

  const units = [
    {
      icon: GraduationCap,
      name: "Training Unit",
      description: "Developing and implementing specialized training programs",
      color: "from-blue-500 to-blue-600",
      details: {
        mission: "Design and implement advanced training programs that meet job market needs",
        programs: [
          "Specialized Technical Training Programs",
          "Personal Skills Development Workshops",
          "Leadership and Management Courses",
          "Entrepreneurship Programs"
        ],
        achievements: ["500+ Trainees Annually", "25 Training Programs", "95% Satisfaction Rate"]
      }
    },
    {
      icon: Users,
      name: "Volunteers Unit",
      description: "Managing and coordinating volunteer activities and community initiatives",
      color: "from-green-500 to-green-600",
      details: {
        mission: "Build an effective volunteer network that contributes to achieving team goals",
        programs: [
          "Volunteer Training Programs",
          "Community Service Initiatives",
          "Environmental Volunteering Events",
          "Community Awareness Programs"
        ],
        achievements: ["200+ Active Volunteers", "50+ Initiatives", "10,000+ Volunteer Hours"]
      }
    },
    {
      icon: UserCheck,
      name: "Human Resources Unit",
      description: "Managing human resources and developing institutional performance",
      color: "from-purple-500 to-purple-600",
      details: {
        mission: "Ensure recruitment and development of the best talents to achieve strategic goals",
        programs: [
          "Talent Recruitment Programs",
          "Professional Development Programs",
          "Performance Management Systems",
          "Employee Wellness Programs"
        ],
        achievements: ["50+ Employees", "90% Retention Rate", "4.8/5 Employee Satisfaction"]
      }
    },
    {
      icon: Megaphone,
      name: "Public Relations Unit",
      description: "Managing external communication and partner relationships",
      color: "from-orange-500 to-orange-600",
      details: {
        mission: "Build a positive image for the team and strengthen relationships with partners",
        programs: [
          "Public Awareness Campaigns",
          "Media Relations Management",
          "Strategic Partnership Events",
          "Corporate Social Responsibility Programs"
        ],
        achievements: ["100+ Media Coverage", "25+ Partnerships", "5M+ Media Reach"]
      }
    },
    {
      icon: Camera,
      name: "Media Unit",
      description: "Producing media content and digital marketing",
      color: "from-red-500 to-red-600",
      details: {
        mission: "Produce impactful media content that reflects team activities and achievements",
        programs: [
          "Visual and Audio Content Production",
          "Social Media Platform Management",
          "Promotional Materials Design",
          "Event and Activity Documentation"
        ],
        achievements: ["1M+ Followers", "500+ Content Pieces", "50+ Videos"]
      }
    },
    {
      icon: Brain,
      name: "Research & Development Unit",
      description: "Research and innovation in youth development",
      color: "from-indigo-500 to-indigo-600",
      details: {
        mission: "Develop innovative solutions and study modern trends in youth development",
        programs: [
          "Job Market Needs Studies",
          "Training Curriculum Development Research",
          "Technical Innovation Projects",
          "Impact Measurement Studies"
        ],
        achievements: ["15+ Studies", "10+ Innovations", "5+ Patents"]
      }
    }
  ];

  const toggleUnit = (index: number) => {
    setExpandedUnit(expandedUnit === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
              Organizational Units
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              An integrated organizational structure comprising specialized units working in harmony to achieve our strategic objectives
            </p>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {units.map((unit, index) => (
              <Card
                key={index}
                className={`overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-hover border-0 ${
                  expandedUnit === index 
                    ? "md:col-span-2 lg:col-span-3 shadow-glow" 
                    : "shadow-elegant hover-lift"
                }`}
                onClick={() => toggleUnit(index)}
              >
                {/* Unit Header */}
                <div className={`p-6 bg-gradient-to-r ${unit.color} text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <unit.icon className="w-8 h-8" />
                      <div>
                        <h3 className="text-xl font-bold">{unit.name}</h3>
                      </div>
                    </div>
                    {expandedUnit === index ? (
                      <ChevronDown className="w-6 h-6" />
                    ) : (
                      <ChevronRight className="w-6 h-6" />
                    )}
                  </div>
                  <p className="mt-3 text-white/90">{unit.description}</p>
                </div>

                {/* Expanded Content */}
                {expandedUnit === index && (
                  <div className="p-6 bg-white animate-fade-in">
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Mission */}
                      <div>
                        <div className="flex items-center mb-3">
                          <BookOpen className="w-5 h-5 text-primary mr-2" />
                          <h4 className="font-bold text-primary">Mission</h4>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {unit.details.mission}
                        </p>
                      </div>

                      {/* Programs */}
                      <div>
                        <div className="flex items-center mb-3">
                          <TrendingUp className="w-5 h-5 text-primary mr-2" />
                          <h4 className="font-bold text-primary">Programs</h4>
                        </div>
                        <ul className="space-y-2">
                          {unit.details.programs.map((program, idx) => (
                            <li key={idx} className="text-muted-foreground text-sm flex items-start">
                              <span className="w-2 h-2 gradient-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {program}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div>
                        <div className="flex items-center mb-3">
                          <Award className="w-5 h-5 text-primary mr-2" />
                          <h4 className="font-bold text-primary">Achievements</h4>
                        </div>
                        <div className="space-y-2">
                          {unit.details.achievements.map((achievement, idx) => (
                            <div key={idx} className="bg-accent/50 rounded-lg p-3">
                              <span className="font-semibold text-primary">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <Button className="gradient-primary text-white">
                        Learn More
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Units Overview Stats */}
          <div className="mt-16 bg-white rounded-2xl shadow-elegant p-8">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">Units Overview</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <p className="text-muted-foreground">Specialized Units</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Team Members</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">Active Programs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">Efficiency Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Units;