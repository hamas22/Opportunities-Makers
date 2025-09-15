import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Youth Leaders Forum 2024",
      date: "March 15-17, 2024",
      location: "Riyadh International Convention Center",
      participants: "500+ participants",
      duration: "3 days",
      description: "Comprehensive forum bringing together young leaders to discuss challenges and opportunities in the job market",
      category: "Conference",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop"
    },
    {
      id: 2, 
      title: "Tech Entrepreneurship Program",
      date: "April 1-30, 2024",
      location: "Technology Business Incubator",
      participants: "100 entrepreneurs",
      duration: "Full month",
      description: "Comprehensive program to develop entrepreneurship skills in the technology sector",
      category: "Training",
      status: "Ongoing",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Youth Innovation Hackathon",
      date: "May 20-22, 2024",
      location: "King Saud University",
      participants: "200 developers",
      duration: "48 hours",
      description: "Intensive programming competition to develop innovative solutions for community challenges",
      category: "Competition",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Advanced Digital Skills Workshop",
      date: "June 10-12, 2024",
      location: "Digital Technology Institute",
      participants: "150 trainees",
      duration: "3 days",
      description: "Specialized workshop in developing digital skills required in the job market",
      category: "Workshop",
      status: "Upcoming", 
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop"
    },
    {
      id: 5,
      title: "Career Opportunities Expo",
      date: "July 5-7, 2024",
      location: "Riyadh International Exhibition",
      participants: "1000+ job seekers",
      duration: "3 days",
      description: "Comprehensive expo bringing together major companies with job seekers and fresh graduates",
      category: "Exhibition",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=200&fit=crop"
    },
    {
      id: 6,
      title: "Leadership & Impact Program",
      date: "August 1-15, 2024", 
      location: "Leadership Development Center",
      participants: "50 young leaders",
      duration: "Two weeks",
      description: "Intensive program to develop leadership skills and enhance positive impact capabilities",
      category: "Program",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=200&fit=crop"
    }
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
            {events.map((event, index) => (
              <Card 
                key={event.id}
                className={`overflow-hidden hover-lift shadow-elegant border-0 bg-white group animate-fade-up`}
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
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary-light transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      {event.participants}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      {event.duration}
                    </div>
                  </div>

                  <Button className="w-full gradient-primary text-white hover:shadow-glow transition-all group">
                    Learn More
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              View All Events
            </Button>
          </div>

          {/* Event Statistics */}
          <div className="mt-16 bg-white rounded-2xl shadow-elegant p-8">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">Event Statistics</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Events Organized</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                <p className="text-muted-foreground">Total Participants</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <p className="text-muted-foreground">Partner Organizations</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;