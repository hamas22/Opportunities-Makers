import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import sector from "@/assets/sector.jpg"
import unit from "@/assets/unit.jpg"

import {
  GraduationCap,
  Briefcase,
  Megaphone,
  Users,
  UserCheck,
  Share2,
  Camera,
  ChevronDown,
  ChevronRight,
  BookOpen,
  Award,
  TrendingUp,
} from "lucide-react";

const Units = () => {
  const [expandedUnit, setExpandedUnit] = useState<number | null>(null);

  const sectors = [
    {
      icon: GraduationCap,
      name: "Training Sector",
      description:
        "Responsible for preparing training programs to develop youth skills and qualify them for the labor market",
      color: "from-blue-500 to-blue-600",
      details: {
        mission:
          "Prepare training materials and implement workshops that equip youth with skills needed for local and international job markets.",
        programs: [
          "Specialized Technical Training",
          "Workshops for Youth Empowerment",
          "Leadership and Management Training",
          "Entrepreneurship Development",
        ],
        achievements: [
          "1000+ Trainees",
          "30+ Training Programs",
          "90% Satisfaction Rate",
        ],
      },
    },
    {
      icon: Briefcase,
      name: "Employment Sector",
      description:
        "Helping youth access suitable job opportunities through job fairs and cooperation protocols",
      color: "from-green-500 to-green-600",
      details: {
        mission:
          "Support youth in obtaining job opportunities amidst global labor market developments and challenges.",
        programs: [
          "Job Fairs and Career Days",
          "Partnership Protocols with Companies",
          "Career Guidance Programs",
          "Workplace Readiness Training",
        ],
        achievements: [
          "2000+ Job Opportunities",
          "100+ Company Partnerships",
          "50+ Employment Events",
        ],
      },
    },
    {
      icon: Megaphone,
      name: "Media Sector",
      description:
        "Equipping youth to leverage digital platforms for positive content creation and freelancing",
      color: "from-orange-500 to-orange-600",
      details: {
        mission:
          "Prepare youth intellectually and culturally to invest in social media and digital platforms for positive impact and freelancing.",
        programs: [
          "Digital Content Creation Workshops",
          "Social Media Awareness Campaigns",
          "Freelancing Training Programs",
          "Creative Media Initiatives",
        ],
        achievements: [
          "1M+ Digital Reach",
          "500+ Content Creators Trained",
          "100+ Media Campaigns",
        ],
      },
    },
  ];

  const units = [
    {
      icon: UserCheck,
      name: "Human Resources Unit",
      description:
        "Ensuring a safe environment and balancing mutual benefits between volunteers and the organization",
      color: "from-purple-500 to-purple-600",
      details: {
        mission:
          "Provide a safe and effective work environment while ensuring mutual benefits between volunteers and the organization.",
        programs: [
          "Volunteer Onboarding Programs",
          "Professional Development Workshops",
          "Employee & Volunteer Support",
          "Performance Management",
        ],
        achievements: [
          "100+ Active Volunteers",
          "95% Retention Rate",
          "4.8/5 Satisfaction",
        ],
      },
    },
    {
      icon: Share2,
      name: "Partnerships & Networking Unit",
      description:
        "Building bridges with institutions and managing external relations",
      color: "from-teal-500 to-teal-600",
      details: {
        mission:
          "Build strong partnerships with institutions and companies to maximize impact and strengthen the organization’s external image.",
        programs: [
          "Strategic Partnerships",
          "Networking Events",
          "External Communication Management",
          "CSR Collaborations",
        ],
        achievements: [
          "50+ Partnerships",
          "30+ Networking Events",
          "High External Visibility",
        ],
      },
    },
    {
      icon: Camera,
      name: "Media Unit",
      description:
        "Using digital platforms to build youth connections and promote activities",
      color: "from-red-500 to-red-600",
      details: {
        mission:
          "Use digital platforms as a tool to connect with youth and creatively promote events and initiatives.",
        programs: [
          "Event Media Coverage",
          "Creative Campaigns",
          "Digital Storytelling",
          "Social Media Management",
        ],
        achievements: [
          "500+ Media Outputs",
          "100K+ Engagements",
          "50+ Campaigns",
        ],
      },
    },
    {
      icon: Users,
      name: "Volunteers Unit",
      description:
        "Preparing new volunteers with interactive workshops and managing events",
      color: "from-indigo-500 to-indigo-600",
      details: {
        mission:
          "Prepare new volunteers through interactive training before joining other sectors, while managing ceremonies and events.",
        programs: [
          "Volunteer Orientation",
          "Interactive Skill Workshops",
          "Event & Ceremony Management",
          "Community Initiatives",
        ],
        achievements: [
          "300+ Volunteers",
          "20+ Events Managed",
          "10,000+ Volunteer Hours",
        ],
      },
    },
  ];

  const toggleUnit = (index: number) => {
    setExpandedUnit(expandedUnit === index ? null : index);
  };

  const renderCard = (title: string, image: string, data: any[], startIndex: number) => (
    <Card className="mb-12 overflow-hidden shadow-elegant">
      <div className="relative h-56 w-full overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-3xl font-bold text-white drop-shadow-lg">
            {title}
          </h2>
        </div>
      </div>

      <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((unit, index) => (
          <Card
            key={index}
            className={`overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-hover border-0 ${
              expandedUnit === startIndex + index
                ? "md:col-span-2 lg:col-span-3 shadow-glow"
                : "shadow-elegant hover-lift"
            }`}
            onClick={() => toggleUnit(startIndex + index)}
          >
            <div className={`p-6 bg-gradient-to-r ${unit.color} text-white`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <unit.icon className="w-8 h-8" />
                  <h3 className="text-xl font-bold">{unit.name}</h3>
                </div>
                {expandedUnit === startIndex + index ? (
                  <ChevronDown className="w-6 h-6" />
                ) : (
                  <ChevronRight className="w-6 h-6" />
                )}
              </div>
              <p className="mt-3 text-white/90">{unit.description}</p>
            </div>

            {expandedUnit === startIndex + index && (
              <div className="p-6 bg-white animate-fade-in">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center mb-3">
                      <BookOpen className="w-5 h-5 text-primary mr-2" />
                      <h4 className="font-bold text-primary">Mission</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {unit.details.mission}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <TrendingUp className="w-5 h-5 text-primary mr-2" />
                      <h4 className="font-bold text-primary">Programs</h4>
                    </div>
                    <ul className="space-y-2">
                      {unit.details.programs.map((program: string, idx: number) => (
                        <li
                          key={idx}
                          className="text-muted-foreground text-sm flex items-start"
                        >
                          <span className="w-2 h-2 gradient-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {program}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <Award className="w-5 h-5 text-primary mr-2" />
                      <h4 className="font-bold text-primary">Achievements</h4>
                    </div>
                    <div className="space-y-2">
                      {unit.details.achievements.map((achievement: string, idx: number) => (
                        <div
                          key={idx}
                          className="bg-accent/50 rounded-lg p-3"
                        >
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
    </Card>
  );

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {renderCard("Organizational Sectors", sector, sectors, 0)}
          {renderCard("Central Units", unit, units, sectors.length)}

          <div className="mt-16 bg-white rounded-2xl shadow-elegant p-8">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">
              Overview
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <p className="text-muted-foreground">Main Sectors</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4</div>
                <p className="text-muted-foreground">Central Units</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">Programs & Activities</p>
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
