import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Utensils, Heart, BookOpen, Users, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Programs = () => {
  const handleDonate = (program) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const programs = [
    {
      id: "midday-meals",
      title: "Mid-Day Meal Program",
      icon: Utensils,
      description: "Providing nutritious meals to over 5,000 children daily across 50+ schools in Delhi and Bihar.",
      longDescription:
        "Our flagship Mid-Day Meal Program is designed to combat malnutrition and improve school attendance among children from underprivileged backgrounds. We serve freshly prepared, nutritious meals that meet dietary guidelines and cultural preferences.",
      impact: {
        beneficiaries: "5,000+ children daily",
        locations: "50+ schools",
        regions: "Delhi & Bihar",
        duration: "15+ years",
      },
      features: [
        "Freshly prepared nutritious meals",
        "Culturally appropriate menu",
        "Regular health monitoring",
        "Improved school attendance",
        "Enhanced learning capacity",
        "Community involvement",
      ],
      image: "Children happily eating nutritious meals in a bright school cafeteria",
      gallery: [
        "Volunteers serving meals to excited children",
        "Kitchen staff preparing fresh food with care",
        "Children washing hands before meals",
        "Happy children showing their empty plates",
      ],
    },
    {
      id: "elderly-care",
      title: "Elderly Care Initiative",
      icon: Heart,
      description: "Supporting 10 old-age homes with comprehensive healthcare, nutrition, and companionship services.",
      longDescription:
        "Our Elderly Care Initiative focuses on providing dignity, care, and companionship to senior citizens in old-age homes. We believe that our elders deserve respect, proper healthcare, and emotional support in their golden years.",
      impact: {
        beneficiaries: "500+ elderly residents",
        locations: "10 old-age homes",
        regions: "Delhi & Bihar",
        duration: "8+ years",
      },
      features: [
        "Regular health check-ups",
        "Nutritious meal provision",
        "Recreational activities",
        "Emotional support and counseling",
        "Medical assistance",
        "Facility improvements",
      ],
      image: "Elderly people receiving care and enjoying activities with volunteers",
      gallery: [
        "Doctor conducting health check-up for elderly residents",
        "Volunteers engaging in recreational activities with seniors",
        "Elderly residents enjoying nutritious meals together",
        "Comfortable and clean living facilities",
      ],
    },
    {
      id: "education-support",
      title: "Education Support Program",
      icon: BookOpen,
      description: "Enhancing educational infrastructure and providing learning materials to underprivileged students.",
      longDescription:
        "Our Education Support Program aims to bridge the educational gap by providing essential learning materials, improving school infrastructure, and supporting teachers to create better learning environments for children.",
      impact: {
        beneficiaries: "3,000+ students",
        locations: "30+ schools",
        regions: "Delhi & Bihar",
        duration: "10+ years",
      },
      features: [
        "Learning materials distribution",
        "Infrastructure improvements",
        "Teacher training programs",
        "Digital learning initiatives",
        "Scholarship programs",
        "Parent engagement activities",
      ],
      image: "Students studying with new books and educational materials in improved classrooms",
      gallery: [
        "Students receiving new textbooks and supplies",
        "Renovated classroom with modern facilities",
        "Teachers participating in training workshop",
        "Children using computers in digital learning center",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Programs - Bal Vikas Sewa Sansthan</title>
        <meta
          name="description"
          content="Explore our comprehensive programs including Mid-Day Meals, Elderly Care, and Education Support initiatives serving communities across Delhi and Bihar."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 hero-gradient">
        <div className="absolute inset-0 opacity-20">
          <img
            className="w-full h-full object-cover"
            alt="Various program activities showing meals, education, and elderly care"
            src="https://images.unsplash.com/photo-1699614849178-4c69ce4428f0"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow"
          >
            Our Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white text-shadow leading-relaxed"
          >
            Comprehensive initiatives designed to address fundamental needs and create lasting positive change in
            communities across Delhi and Bihar.
          </motion.p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Making a Difference</h2>
            <p className="text-xl text-gray-600">Three core programs addressing critical community needs</p>
          </motion.div>

          <div className="space-y-20">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-6">
                    <program.icon className="h-12 w-12 text-blue-600 mr-4" />
                    <h3 className="text-3xl font-bold gradient-text">{program.title}</h3>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed mb-6">{program.longDescription}</p>

                  {/* Impact Statistics */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg">
                      <Users className="h-6 w-6 text-blue-600 mb-2" />
                      <div className="text-sm text-gray-600">Beneficiaries</div>
                      <div className="font-bold text-gray-900">{program.impact.beneficiaries}</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg">
                      <MapPin className="h-6 w-6 text-purple-600 mb-2" />
                      <div className="text-sm text-gray-600">Locations</div>
                      <div className="font-bold text-gray-900">{program.impact.locations}</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg">
                      <MapPin className="h-6 w-6 text-green-600 mb-2" />
                      <div className="text-sm text-gray-600">Regions</div>
                      <div className="font-bold text-gray-900">{program.impact.regions}</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg">
                      <Calendar className="h-6 w-6 text-orange-600 mb-2" />
                      <div className="text-sm text-gray-600">Experience</div>
                      <div className="font-bold text-gray-900">{program.impact.duration}</div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={() => handleDonate(program.title)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Support This Program
                    <Heart className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="relative">
                    <img
                      className="w-full rounded-2xl shadow-2xl"
                      alt={`${program.title} in action`}
                      src="https://images.unsplash.com/photo-1591206246224-04b4624adef4"
                    />

                    {/* Program Gallery */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      {program.gallery.map((galleryImage, galleryIndex) => (
                        <img
                          key={galleryIndex}
                          className="w-full h-32 object-cover rounded-lg shadow-lg"
                          alt={`${program.title} activity ${galleryIndex + 1}`}
                          src="https://images.unsplash.com/photo-1674605983880-ec6f834de8de"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Impact Summary */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Combined Impact</h2>
            <p className="text-xl text-gray-600">
              Together, our programs create comprehensive community transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">8,500+</div>
              <div className="text-gray-600 font-medium">Total Beneficiaries</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">90+</div>
              <div className="text-gray-600 font-medium">Active Locations</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">2</div>
              <div className="text-gray-600 font-medium">States Served</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years of Service</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow">Support Our Programs</h2>
            <p className="text-xl text-white mb-8 text-shadow leading-relaxed">
              Your contribution can help us expand these vital programs and reach even more communities in need. Every
              donation makes a direct impact on someone's life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleDonate("All Programs")}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                Donate to All Programs
                <Heart className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => handleDonate("Specific Program")}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-full text-lg shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Choose Specific Program
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Programs;
