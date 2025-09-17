import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Heart, Users, HeartHandshake as Handshake, Building, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleDonate = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const involvementOptions = [
    {
      title: "Make a Donation",
      icon: Heart,
      description: "Your financial contribution directly supports our programs and helps us reach more beneficiaries.",
      benefits: [
        "Direct impact on program beneficiaries",
        "Tax deduction benefits",
        "Regular impact reports",
        "Recognition in annual reports",
      ],
      action: "Donate Now",
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Volunteer Your Time",
      icon: Users,
      description: "Join our team of dedicated volunteers and contribute your skills and time to make a difference.",
      benefits: [
        "Hands-on community service experience",
        "Skill development opportunities",
        "Networking with like-minded individuals",
        "Volunteer certificates and recognition",
      ],
      action: "Apply to Volunteer",
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Corporate Partnership",
      icon: Handshake,
      description: "Partner with us through CSR initiatives and employee engagement programs.",
      benefits: [
        "CSR compliance and reporting",
        "Employee engagement opportunities",
        "Brand visibility and recognition",
        "Customized partnership programs",
      ],
      action: "Explore Partnership",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Institutional Support",
      icon: Building,
      description: "Educational institutions and organizations can collaborate with us on various initiatives.",
      benefits: [
        "Student internship opportunities",
        "Research collaboration possibilities",
        "Community service projects",
        "Educational program development",
      ],
      action: "Contact Us",
      color: "from-orange-500 to-yellow-500",
    },
  ];

  const volunteerOpportunities = [
    {
      title: "Meal Service Volunteer",
      commitment: "4-6 hours/week",
      description: "Help serve meals at schools and assist with food preparation and distribution.",
      requirements: ["Physical fitness", "Commitment to regular schedule", "Basic hygiene training"],
    },
    {
      title: "Elderly Care Companion",
      commitment: "3-4 hours/week",
      description: "Spend time with elderly residents, engage in activities, and provide emotional support.",
      requirements: ["Patience and empathy", "Good communication skills", "Background verification"],
    },
    {
      title: "Education Support Tutor",
      commitment: "5-8 hours/week",
      description: "Assist students with homework, reading, and basic educational activities.",
      requirements: ["Educational background", "Teaching or tutoring experience", "Child safety training"],
    },
    {
      title: "Administrative Support",
      commitment: "6-10 hours/week",
      description: "Help with office work, data entry, documentation, and program coordination.",
      requirements: ["Computer skills", "Organizational abilities", "Professional communication"],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Get Involved - Bal Vikas Sewa Sansthan</title>
        <meta
          name="description"
          content="Join Bal Vikas Sewa Sansthan through donations, volunteering, partnerships, or institutional support. Make a difference in communities across Delhi and Bihar."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 hero-gradient">
        <div className="absolute inset-0 opacity-20">
          <img
            className="w-full h-full object-cover"
            alt="Diverse group of volunteers working together"
            src="https://images.unsplash.com/photo-1560220604-509907ca9266"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow"
          >
            Get Involved
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white text-shadow leading-relaxed"
          >
            Join our mission to transform lives. Whether through donations, volunteering, or partnerships, there are
            many ways to make a meaningful impact.
          </motion.p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Ways to Make a Difference</h2>
            <p className="text-xl text-gray-600">Choose how you'd like to contribute to our mission</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {involvementOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg card-hover"
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center mb-6`}
                >
                  <option.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{option.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={handleDonate}
                  className={`w-full bg-gradient-to-r ${option.color} hover:opacity-90 text-white font-semibold py-3 rounded-full transition-all duration-300`}
                >
                  {option.action}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600">Find the perfect way to contribute your time and skills</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{opportunity.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {opportunity.commitment}
                  </span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{opportunity.description}</p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {opportunity.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to get involved? Fill out the form below and we'll contact you
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                    Area of Interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select your interest</option>
                    <option value="donation">Making a Donation</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="corporate">Corporate Partnership</option>
                    <option value="institutional">Institutional Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell us more about how you'd like to get involved..."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600">Reach out to us directly</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover text-center"
            >
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Address</h3>
              <p className="text-gray-600">
                Main Office: Delhi
                <br />
                Regional Office: Bihar
                <br />
                India
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover text-center"
            >
              <Phone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Phone</h3>
              <p className="text-gray-600">
                Main: +91 XXXXX XXXXX
                <br />
                Volunteer Coordinator: +91 XXXXX XXXXX
                <br />
                Emergency: +91 XXXXX XXXXX
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover text-center"
            >
              <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
              <p className="text-gray-600">
                General: info@balvikassewasansthan.com
                <br />
                Volunteer: volunteer@balvikassewasansthan.com
                <br />
                Partnerships: partners@balvikassewasansthan.com
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInvolved;
