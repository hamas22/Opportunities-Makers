import { Card } from "@/components/ui/card";

const Partners = () => {
  // Partner logos - using placeholder images for demonstration
  const partners = [
    {
      name: "Ministry of Youth and Sports",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=80&fit=crop",
      category: "Government"
    },
    {
      name: "Saudi Aramco", 
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop",
      category: "Energy"
    },
    {
      name: "Al Rajhi Bank",
      logo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=150&h=80&fit=crop", 
      category: "Banking"
    },
    {
      name: "Saudi Telecom Company",
      logo: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=150&h=80&fit=crop",
      category: "Technology"
    },
    {
      name: "King Saud University",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=150&h=80&fit=crop",
      category: "Education"
    },
    {
      name: "SABIC",
      logo: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=150&h=80&fit=crop",
      category: "Industrial"
    },
    {
      name: "King Abdulaziz City for Science and Technology",
      logo: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=150&h=80&fit=crop",
      category: "Research"
    },
    {
      name: "ACWA Power",
      logo: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=150&h=80&fit=crop",
      category: "Renewable Energy"
    },
    {
      name: "Institute of Public Administration",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=80&fit=crop",
      category: "Training"
    },
    {
      name: "Saudi Industrial Development Fund",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=150&h=80&fit=crop",
      category: "Finance"
    },
    {
      name: "Mohammed bin Rashid Innovation Center",
      logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=150&h=80&fit=crop",
      category: "Innovation"
    },
    {
      name: "NEOM",
      logo: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=150&h=80&fit=crop",
      category: "Future Project"
    }
  ];

  // Create two rows for infinite scroll effect
  const firstRow = partners.slice(0, 6);
  const secondRow = partners.slice(6, 12);

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
              Strategic Partners
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              We are proud of our strategic partnerships with leading institutions that contribute to achieving our vision of youth empowerment
            </p>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Partnership Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center hover-lift shadow-elegant border-0 bg-white">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Strategic Partnerships</p>
            </Card>
            <Card className="p-6 text-center hover-lift shadow-elegant border-0 bg-white">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Job Opportunities</p>
            </Card>
            <Card className="p-6 text-center hover-lift shadow-elegant border-0 bg-white">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Joint Training Programs</p>
            </Card>
            <Card className="p-6 text-center hover-lift shadow-elegant border-0 bg-white">
              <div className="text-3xl font-bold text-primary mb-2">$10M+</div>
              <p className="text-muted-foreground">Investment Value</p>
            </Card>
          </div>

          {/* Animated Partners Carousel */}
          <div className="relative">
            {/* First Row - Left to Right */}
            <div className="flex animate-scroll space-x-8 mb-8">
              {[...firstRow, ...firstRow].map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-48 h-24 bg-white rounded-xl shadow-elegant hover:shadow-hover transition-shadow duration-300 p-4 flex items-center justify-center group border border-gray-100"
                >
                  <div className="text-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-16 h-8 object-contain mx-auto mb-2 grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      {partner.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - Right to Left */}
            <div className="flex animate-scroll space-x-8" style={{ animationDirection: 'reverse' }}>
              {[...secondRow, ...secondRow].map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-48 h-24 bg-white rounded-xl shadow-elegant hover:shadow-hover transition-shadow duration-300 p-4 flex items-center justify-center group border border-gray-100"
                >
                  <div className="text-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-16 h-8 object-contain mx-auto mb-2 grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      {partner.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Partnership Benefits */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-primary mb-8">Partnership Benefits</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Access to Talent</h4>
                <p className="text-muted-foreground">
                  Ability to access the best trained and qualified young talents
                </p>
              </div>
              <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Customized Programs</h4>
                <p className="text-muted-foreground">
                  Develop customized training programs that meet our partners' needs
                </p>
              </div>
              <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Community Impact</h4>
                <p className="text-muted-foreground">
                  Contributing to building a community capable of facing future challenges
                </p>
              </div>
            </div>
          </div>

          {/* Partner Categories */}
          <div className="mt-16 bg-white rounded-2xl shadow-elegant p-8">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">Partner Categories</h3>
            <div className="grid md:grid-cols-6 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">4</div>
                <p className="text-sm text-blue-800">Government</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">3</div>
                <p className="text-sm text-green-800">Education</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">2</div>
                <p className="text-sm text-purple-800">Technology</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-2">2</div>
                <p className="text-sm text-orange-800">Energy</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-2">2</div>
                <p className="text-sm text-red-800">Finance</p>
              </div>
              <div className="text-center p-4 bg-indigo-50 rounded-lg">
                <div className="text-2xl font-bold text-indigo-600 mb-2">12</div>
                <p className="text-sm text-indigo-800">Others</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;