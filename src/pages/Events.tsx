import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import mishwary from "@/assets/mishwary.jpg"
import graphic from "@/assets/graphic.jpg"
import camp from "@/assets/camp.jpg"
import field from "@/assets/field.jpg"
import Roundtable from "@/assets/Roundtable.jpg"
import youth from "@/assets/youth.jpg"

const Events = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const events = [
{
  id: 1,
  title: "Mishwary Training Program",
  date: "Next Week (4 consecutive days)",
  location: "Mansoura Sports Stadium",
  participants: "Youth aged 10–24",
  duration: "4 days",
  description: "In collaboration with the Ministry of Youth and Sports and UNICEF, this program empowers youth with essential life and career skills, covering self-awareness, growth mindset, emotional intelligence, problem solving, communication, leadership, creativity, and innovation.",
  category: "Training Program",
  status: "Upcoming",
  image: mishwary,
  registration: "https://forms.office.com/r/7pdW5zW5fz"
},

{
  id: 2, 
  title: "Central Media Unit Training – Graphic Design & Photoshop",
  date: "First Session",
  location: "Central Media Unit",
  participants: "Media Unit Members",
  duration: "Introductory Course",
  description: "The first training course in Graphic Design and Adobe Photoshop was delivered by Eng. Karim El-Noueihi, Head of the Central Media Unit. The training covered design fundamentals and professional workflows, preparing a creative media team capable of innovation and performance development within the organization.",
  category: "Training",
  status: "Completed",
  image: graphic
},

{
  id: 3,
  title: "Second Camp of the Egyptian Union of Youth Entities",
  date: "August 2025",
  location: "Youth City, Abu Qir – Alexandria",
  participants: "Representative: Eng. Ahmed Medhat",
  duration: "Several days",
  description: "As part of our commitment to enhancing the role of youth in institutional and community development, Opportunities Makers participated in the second camp of the Egyptian Union of Youth Entities, organized by the Ministry of Youth and Sports and the Central Administration for Youth Development. The camp included dialogue sessions and workshops aimed at strengthening the Union’s role and developing its institutional mechanisms to raise the efficiency of youth cadres.",
  category: "Camp",
  status: "Completed",
  image: camp
},

{
  id: 4,
  title: "Field Visit to the Air Defense Forces Command",
  date: "August 19, 2025",
  location: "Air Defense Forces Command – New Administrative Capital",
  participants: "Representative: Mahmoud Zein El-Qadi (Assiut Project Coordinator – Opportunities Makers)",
  duration: "One-day visit",
  description: "In line with efforts to strengthen national identity and pride, Opportunities Makers participated in organizing a field visit for members of the Egyptian Union of Youth Entities to the Air Defense Forces Command at the Strategic Command in the New Administrative Capital. The visit, organized by the Ministry of Youth and the Central Administration for Youth Development, aimed to enhance the sense of belonging among Egyptian youth by highlighting the heroic role of the Armed Forces in safeguarding the nation’s security and stability.",
  category: "Visit",
  status: "Completed", 
  image: field
},

{
  id: 5,
  title: "Roundtable Dialogue on Volunteering and Employment",
  date: "July 15, 2025",
  location: "Opportunities Makers Roundtable",
  participants: "Led by Mr. Mohamed Gamal – Chairman, with experts and youth participants",
  duration: "One-day session",
  description: "Opportunities Makers launched its first roundtable dialogue under the theme 'The Relationship between Volunteering and the Job Market.' The session, chaired by Mr. Mohamed Gamal – Chairman of the Board, provided a platform for sharing insights on how volunteering can enhance personal and professional skills to improve employability. The discussion also covered two initiatives: 1) the Volunteer Performance Index, and 2) the Preparatory Program for the Egyptian Volunteer’s Mindset, which will be presented as recommendations to the Ministry of Youth and Sports to expand volunteer engagement. Dr. Mohamed Hassan – Assistant to the Minister of Youth and Sports – joined via video conference, praising the organization’s role in youth development.",
  category: "Dialogue",
  status: "Completed",
      image: Roundtable 
    },
{
  id: 6,
  title: "National Awareness Youth Conference",
  date: "June 30, 2025", 
  location: "Arab Court of Arbitration – League of Arab States",
  participants: "Youth delegations, public figures, legal experts, and cybersecurity specialists",
  duration: "One-day conference",
  description: "Opportunities Makers participated in the 'National Awareness for Youth in Facing Current Challenges' conference, organized by the Arab Court of Arbitration in cooperation with the Ministry of Youth and Sports and the Egyptian Union of Youth Entities, coinciding with the anniversary of the June 30 Revolution. The conference featured three main sessions addressing the role of arbitration in supporting the state, the importance of cybersecurity in protecting information, and the role of youth in strengthening national awareness. The event was attended by H.E. Dr. Ashraf Sobhy – Minister of Youth and Sports, Counselor Farouk Sultan – Former President of the Constitutional Court and Chairman of the Arab Court of Arbitration, along with prominent officials, legal experts, and youth leaders from across Egypt.",
  category: "Conference",
  status: "Completed",
  image: youth
},

  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800 hover:bg-green-200";
      case "Ongoing": return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "Upcoming": return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      default: return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Conference": return "bg-orange-100 text-orange-800";
      case "Training": return "bg-blue-100 text-blue-800";
      case "Competition": return "bg-red-100 text-red-800";
      case "Workshop": return "bg-green-100 text-green-800";
      case "Exhibition": return "bg-purple-100 text-purple-800";
      case "Program": return "bg-indigo-100 text-indigo-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
              Events & Activities
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              A diverse range of programs and events designed to develop youth capabilities and prepare them for the job market
            </p>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => {
              const isExpanded = expanded === event.id;
              const shortText = event.description.slice(0, 150) + (event.description.length > 150 ? "..." : "");
              return (
                <Card 
                  key={event.id}
                  className="overflow-hidden hover-lift shadow-elegant border-0 bg-white group flex flex-col h-full animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Event Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(event.category)}>
                        {event.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={getStatusColor(event.status)}>
                        {event.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="flex flex-col justify-between flex-grow p-6">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary-light transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {isExpanded ? event.description : shortText}
                      </p>

                      {/* Event Details */}
                      <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-primary" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-primary" />
                          {event.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2 text-primary" />
                          {event.participants}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-primary" />
                          {event.duration}
                        </div>
                      </div>
                    </div>

                    <Button 
                      className="w-full gradient-primary text-white hover:shadow-glow transition-all group mt-auto"
                      onClick={() => setExpanded(isExpanded ? null : event.id)}
                    >
                      {isExpanded ? "Show Less" : "Learn More"}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;