import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Heart, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Home = () => {
  const handleDonate = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleGetInvolved = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const stats = [
    { icon: Users, number: "5,000+", label: "Children Fed Daily" },
    { icon: Heart, number: "10", label: "Old-Age Homes Supported" },
    { icon: Award, number: "50+", label: "Schools Reached" },
    { icon: Calendar, number: "15+", label: "Years of Service" },
  ];

  const programs = [
    {
      title: "Mid-Day Meal Program",
      description: "Providing nutritious meals to over 5,000 children daily across schools in Delhi and Bihar.",
      image: "Children eating nutritious meals in school cafeteria",
    },
    {
      title: "Elderly Care Initiative",
      description: "Supporting 10 old-age homes with healthcare, nutrition, and companionship services.",
      image: "Elderly people receiving care and support from volunteers",
    },
    {
      title: "Education Support",
      description: "Enhancing educational infrastructure and providing learning materials to underprivileged students.",
      image: "Students studying with books and educational materials",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "School Principal, Delhi",
      quote:
        "The mid-day meal program has transformed our school. Children are more focused and attendance has increased by 40%.",
      image: "Professional woman smiling warmly",
    },
    {
      name: "Rajesh Kumar",
      role: "Community Leader, Bihar",
      quote:
        "Bal Vikas Sewa Sansthan has brought hope to our community. Their dedication to serving others is truly inspiring.",
      image: "Middle-aged man with kind expression",
    },
    {
      name: "Sunita Devi",
      role: "Beneficiary Mother",
      quote:
        "My children now get proper nutrition at school. This organization has given them a chance for a better future.",
      image: "Smiling mother with children in background",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Bal Vikas Sewa Sansthan - Transforming Lives Through Service</title>
        <meta
          name="description"
          content="Join Bal Vikas Sewa Sansthan in our mission to provide nutrition, education, and care to communities across Delhi and Bihar. Making a difference, one life at a time."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            alt="Brown Indian kids from school having mid day meal lunches"
            // src="https://images.unsplash.com/photo-1523594754950-8078d0da4664"
            // src="images/school.png"
            src={`${import.meta.env.BASE_URL}images/school.png`}
          />
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-shadow"
          >
            Transforming Lives Through
            <span className="block text-yellow-300">Love & Service</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-shadow leading-relaxed"
          >
            Providing nutrition, education, and care to communities across Delhi and Bihar. Join us in making a
            difference, one life at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={handleDonate}
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              Donate Now
              <Heart className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={handleGetInvolved}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-full text-lg shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">Who We Are</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Bal Vikas Sewa Sansthan is a dedicated non-profit organization committed to transforming lives through
              comprehensive community service. We focus on providing essential nutrition through our mid-day meal
              programs, supporting elderly care initiatives, and fostering educational development across Delhi and
              Bihar. Our mission is to create lasting positive change by addressing fundamental needs and empowering
              communities to thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Making a difference across communities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 card-hover"
              >
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Programs */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600">Comprehensive initiatives for community development</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt={`${program.title} in action`}
                    src="https://images.unsplash.com/photo-1591206246224-04b4624adef4"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
                  <Link to="/programs">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-full transition-all duration-300">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Stories of Impact</h2>
            <p className="text-xl text-gray-600">Hear from those whose lives we've touched</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg card-hover"
              >
                <div className="flex items-center mb-6">
                  <img
                    className="w-16 h-16 rounded-full object-cover mr-4"
                    alt={`Portrait of ${testimonial.name}`}
                    src="https://images.unsplash.com/photo-1595872018818-97555653a011"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Latest Updates</h2>
            <p className="text-xl text-gray-600">Stay informed about our recent activities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              <img
                className="w-full h-48 object-cover"
                alt="New school meal program launch"
                src="https://images.unsplash.com/photo-1560220604-509907ca9266"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">December 2024</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">New Meal Program Launched in 5 Bihar Schools</h3>
                <p className="text-gray-600">
                  Expanding our reach to serve 1,200 additional children with nutritious daily meals.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              <img
                className="w-full h-48 object-cover"
                alt="Elderly care facility improvement"
                src="https://images.unsplash.com/photo-1700989675229-1d5f28489dab"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">November 2024</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Old-Age Home Renovation Completed</h3>
                <p className="text-gray-600">
                  Successfully upgraded facilities at 3 elderly care centers with modern amenities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              <img
                className="w-full h-48 object-cover"
                alt="Community volunteer training session"
                src="https://images.unsplash.com/photo-1560220604-509907ca9266"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">October 2024</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Volunteer Training Program Success</h3>
                <p className="text-gray-600">
                  Trained 50 new volunteers to expand our community outreach capabilities.
                </p>
              </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow">Join Our Mission Today</h2>
            <p className="text-xl text-white mb-8 text-shadow leading-relaxed">
              Every contribution makes a difference. Whether through donations, volunteering, or spreading awareness,
              you can help us transform more lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleDonate}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                Make a Donation
                <Heart className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/get-involved">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-full text-lg shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Volunteer With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
