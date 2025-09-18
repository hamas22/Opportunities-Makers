import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Award, Users, Target, Lightbulb } from "lucide-react";

import sara from "@/assets/Sara.png";
import Nader from "@/assets/Nader.png";
import Abdelrahman from "@/assets/Abdelrahman.png";
import fr3on from "@/assets/fr3on.png";
import sokkar from "@/assets/sokkar.png"

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Sara Eid",
      position: "Vice President",
      description:
        "Leads organizational strategy and oversees youth empowerment initiatives",
      achievements: [
        "15+ Years Leadership",
        "Supervised 200+ Projects",
        "International Youth Expert",
      ],
      image: sara,
    },
    {
      name: "Ahmed Nader",
      position: "Technical Office Head & Board Member",
      description:
        "Provides strategic guidance and manages technical office operations",
      achievements: [
        "Board Member Experience",
        "Directed 50+ Youth Programs",
        "Policy & Strategy Expert",
      ],
      image: Nader
      
    },
    {
      name: "Abderahman Omar",
      position: "Greater Cairo Project Coordinator",
      description:
        "Coordinates projects and ensures effective execution across Greater Cairo",
      achievements: [
        "Coordinated 100+ Initiatives",
        "Community Development Specialist",
        "Certified Project Manager",
      ],
      image: Abdelrahman
      
    },
    {
      name: "Mohamed Abdelhady",
      position: "Deputy, Partnerships & Networking Unit",
      description:
        "Supports partnership building and enhances organizational networking",
      achievements: [
        "Expanded Strategic Partnerships",
        "Strengthened Youth Networks",
        "Expert in Collaboration",
      ],
      image: fr3on
      
    },
    {
  name: "Ahmed Sokkar",
  position: "Head of Central Training Sector",
  description: "Leads the central training sector and develops national youth training strategies",
  achievements: ["Designed 100+ Training Programs", "Expert in Capacity Building", "National Training Leader"],

      image: sokkar
      
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in everything we deliver through our development programs and services",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and building strategic partnerships",
    },
    {
      icon: Target,
      title: "Purpose",
      description:
        "We focus on achieving specific goals that serve youth capacity development",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We use the latest methods and technologies in our development programs",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              A specialized team from the Ministry of Youth and Sports aimed at
              empowering youth and preparing them for the global job market
            </p>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="p-8 hover-lift shadow-elegant border-0 bg-white">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be the leading organization in empowering youth and preparing
                them to face future job market challenges through innovative
                development programs and strategic partnerships
              </p>
            </Card>
            <Card className="p-8 hover-lift shadow-elegant border-0 bg-white">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To provide advanced training programs and quality development
                opportunities that help youth acquire the necessary skills to
                succeed in the global job market and contribute to building a
                bright future
              </p>
            </Card>
          </div>

          {/* Team Members */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-primary text-center mb-12">
              Leadership Team
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className={`p-6 hover-lift shadow-elegant border-0 bg-white cursor-pointer transition-all duration-500 ${
                    hoveredCard === index ? "scale-105 shadow-glow" : ""
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full shadow-md"
                      />
                    </div>

                    <h4 className="text-xl font-bold text-primary mb-1">
                      {member.name}
                    </h4>
                    <Badge className="gradient-primary text-white mb-3">
                      {member.position}
                    </Badge>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {member.description}
                    </p>
                    <div className="space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <Badge key={idx} variant="secondary" className="mr-1">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-center space-x-3 mt-4">
                      <button className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-3xl font-bold text-primary text-center mb-12">
              Our Values
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover-lift shadow-elegant border-0 bg-white group"
                >
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-primary-light transition-colors" />
                  <h4 className="text-xl font-bold text-primary mb-2">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-white rounded-2xl shadow-elegant p-8">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">
              Our Impact
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <p className="text-muted-foreground">Youth Empowered</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Training Programs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <p className="text-muted-foreground">Strategic Partners</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
