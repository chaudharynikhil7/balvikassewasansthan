import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Users, Target, Eye, Award, FileText, Building } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Rajesh Sharma",
      role: "Founder & Chairman",
      bio: "With over 20 years of experience in social work, Dr. Sharma founded the organization with a vision to eliminate hunger and provide quality education.",
      image: "Professional portrait of middle-aged man with kind eyes and warm smile",
    },
    {
      name: "Priya Gupta",
      role: "Executive Director",
      bio: "Former corporate executive who left her career to dedicate her life to social service. She oversees all operational activities.",
      image: "Professional woman in business attire with confident expression",
    },
    {
      name: "Amit Kumar",
      role: "Program Manager",
      bio: "Specializes in community outreach and program implementation. Has been instrumental in expanding our reach across Bihar.",
      image: "Young professional man with enthusiastic expression",
    },
    {
      name: "Sunita Devi",
      role: "Field Coordinator",
      bio: "Local community leader who ensures our programs reach the most vulnerable populations in rural areas.",
      image: "Middle-aged woman with traditional attire and caring expression",
    },
  ];

  const partners = [
    "Government of Delhi",
    "Bihar State Education Board",
    "Local Municipal Corporations",
    "Community Health Centers",
    "Educational Institutions",
    "Corporate Social Responsibility Partners",
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Bal Vikas Sewa Sansthan</title>
        <meta
          name="description"
          content="Learn about Bal Vikas Sewa Sansthan's journey, mission, vision, and the dedicated team working to transform lives across Delhi and Bihar."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 hero-gradient">
        <div className="absolute inset-0 opacity-20">
          <img
            className="w-full h-full object-cover"
            alt="Team of volunteers working together in community service"
            src="https://images.unsplash.com/photo-1630642097290-58a753cb9555"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow"
          >
            About Our Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white text-shadow leading-relaxed"
          >
            Discover the story behind Bal Vikas Sewa Sansthan and our unwavering commitment to transforming lives
            through compassionate service.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold gradient-text mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Bal Vikas Sewa Sansthan was founded in 2009 with a simple yet powerful vision: to ensure that no child
                  goes hungry and every elderly person receives the care and dignity they deserve. What started as a
                  small initiative to provide meals to underprivileged children has grown into a comprehensive
                  organization serving thousands across Delhi and Bihar.
                </p>
                <p>
                  Our journey began when our founder, Dr. Rajesh Sharma, witnessed the stark reality of malnutrition in
                  government schools. Moved by the sight of children struggling to concentrate on their studies due to
                  hunger, he decided to take action. Starting with just one school and 50 children, we have now expanded
                  to serve over 5,000 children daily.
                </p>
                <p>
                  Over the years, we have diversified our services to include elderly care, recognizing that our
                  society's most vulnerable members deserve comprehensive support. Today, we proudly support 10 old-age
                  homes and continue to expand our reach to touch more lives.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                className="w-full rounded-2xl shadow-2xl"
                alt="Historical photo of organization's early days"
                src="https://images.unsplash.com/photo-1697186217400-4ed1eab022c5"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Vision & Mission</h2>
            <p className="text-xl text-gray-600">Guiding principles that drive our work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover"
            >
              <Eye className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To create a society where every child has access to proper nutrition and education, and every elderly
                person lives with dignity and care. We envision communities where no one is left behind, and everyone
                has the opportunity to thrive regardless of their socio-economic background.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover"
            >
              <Target className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide comprehensive support through nutrition programs, educational initiatives, and elderly care
                services. We are committed to working directly with communities to identify needs, implement sustainable
                solutions, and create lasting positive change through collaborative partnerships and dedicated service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the dedicated individuals driving our mission</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg card-hover text-center"
              >
                <img
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  alt={`Portrait of ${member.name}`}
                  src="https://images.unsplash.com/photo-1595872018818-97555653a011"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Supporters */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Partners & Supporters</h2>
            <p className="text-xl text-gray-600">Collaborating for greater impact</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg card-hover text-center"
              >
                <Building className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">{partner}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal & Transparency */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Transparency & Accountability</h2>
            <p className="text-xl text-gray-600">Building trust through openness</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg card-hover text-center"
            >
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Registration</h3>
              <p className="text-gray-600">
                Registered under the Societies Registration Act with all necessary legal documentation and compliance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg card-hover text-center"
            >
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Annual Reports</h3>
              <p className="text-gray-600">
                Comprehensive annual reports detailing our activities, impact, and financial statements are available
                for public review.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg card-hover text-center"
            >
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Audited Financials</h3>
              <p className="text-gray-600">
                Independent audited financial statements ensure transparency and accountability in all our financial
                operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
