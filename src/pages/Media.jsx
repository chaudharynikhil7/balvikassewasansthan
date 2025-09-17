import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Play, Image, Calendar, MapPin, Users, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Media = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleViewMedia = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const categories = [
    { id: "all", name: "All Media" },
    { id: "meals", name: "Mid-Day Meals" },
    { id: "elderly", name: "Elderly Care" },
    { id: "education", name: "Education" },
    { id: "events", name: "Events" },
  ];

  const mediaItems = [
    {
      id: 1,
      type: "image",
      category: "meals",
      title: "Daily Meal Service at Government School",
      description: "Children enjoying nutritious meals at a government school in Delhi",
      date: "2024-01-15",
      location: "Delhi",
      image: "Children happily eating nutritious meals in a bright school cafeteria with volunteers serving",
      stats: { views: 1250, likes: 89 },
    },
    {
      id: 2,
      type: "video",
      category: "elderly",
      title: "Elderly Care Program Documentary",
      description: "A heartwarming documentary showcasing our elderly care initiatives",
      date: "2024-01-10",
      location: "Bihar",
      image: "Elderly residents participating in recreational activities with caring volunteers",
      stats: { views: 2100, likes: 156 },
    },
    {
      id: 3,
      type: "image",
      category: "education",
      title: "New Learning Materials Distribution",
      description: "Students receiving new books and educational supplies",
      date: "2024-01-08",
      location: "Delhi",
      image: "Excited students holding new textbooks and educational materials in a classroom",
      stats: { views: 890, likes: 67 },
    },
    {
      id: 4,
      type: "image",
      category: "events",
      title: "Annual Volunteer Appreciation Event",
      description: "Celebrating our dedicated volunteers and their contributions",
      date: "2024-01-05",
      location: "Delhi",
      image: "Group photo of volunteers receiving appreciation certificates at a celebration event",
      stats: { views: 1450, likes: 112 },
    },
    {
      id: 5,
      type: "video",
      category: "meals",
      title: "Kitchen Operations Behind the Scenes",
      description: "See how we prepare thousands of meals daily with care and hygiene",
      date: "2024-01-03",
      location: "Bihar",
      image: "Clean kitchen with staff preparing large quantities of nutritious food",
      stats: { views: 1780, likes: 134 },
    },
    {
      id: 6,
      type: "image",
      category: "elderly",
      title: "Health Check-up Camp",
      description: "Free health screening for elderly residents",
      date: "2024-01-01",
      location: "Delhi",
      image: "Doctor conducting health check-up for elderly residents in a caring environment",
      stats: { views: 1120, likes: 78 },
    },
    {
      id: 7,
      type: "image",
      category: "education",
      title: "Digital Learning Center Launch",
      description: "Opening of new computer lab for underprivileged students",
      date: "2023-12-28",
      location: "Bihar",
      image: "Students using computers in a modern digital learning center",
      stats: { views: 2200, likes: 189 },
    },
    {
      id: 8,
      type: "video",
      category: "events",
      title: "Community Outreach Program",
      description: "Volunteers engaging with local communities",
      date: "2023-12-25",
      location: "Delhi",
      image: "Volunteers interacting with community members in a village setting",
      stats: { views: 1650, likes: 123 },
    },
    {
      id: 9,
      type: "image",
      category: "meals",
      title: "Nutrition Education Workshop",
      description: "Teaching children about healthy eating habits",
      date: "2023-12-20",
      location: "Bihar",
      image: "Children learning about nutrition with colorful food charts and healthy meals",
      stats: { views: 980, likes: 71 },
    },
  ];

  const filteredMedia =
    activeCategory === "all" ? mediaItems : mediaItems.filter((item) => item.category === activeCategory);

  const featuredVideo = {
    title: "Bal Vikas Sewa Sansthan - Our Impact Story",
    description:
      "Watch our comprehensive documentary showcasing 15 years of transforming lives through dedicated service across Delhi and Bihar.",
    thumbnail: "Montage of all program activities with happy beneficiaries and dedicated volunteers",
    duration: "12:45",
    views: "15.2K",
  };

  return (
    <>
      <Helmet>
        <title>Media Gallery - Bal Vikas Sewa Sansthan</title>
        <meta
          name="description"
          content="Explore our media gallery featuring photos and videos of our programs, events, and impact stories from Delhi and Bihar communities."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 hero-gradient">
        <div className="absolute inset-0 opacity-20">
          <img
            className="w-full h-full object-cover"
            alt="Collage of various program activities and community moments"
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
            Media Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white text-shadow leading-relaxed"
          >
            Witness the impact of our work through powerful images and videos that capture the essence of our mission
            and the lives we've touched.
          </motion.p>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Video</h2>
            <p className="text-xl text-gray-600">Our story of impact and transformation</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-video">
                <img
                  className="w-full h-full object-cover"
                  alt="Featured video thumbnail"
                  src="https://images.unsplash.com/photo-1567443024551-f3e3cc2be870"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button
                    onClick={handleViewMedia}
                    className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transition-all duration-300 transform hover:scale-110 shadow-2xl"
                  >
                    <Play className="h-12 w-12 text-blue-600 ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                  {featuredVideo.duration}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{featuredVideo.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{featuredVideo.description}</p>
                <div className="flex items-center text-gray-600">
                  <Eye className="h-4 w-4 mr-2" />
                  <span>{featuredVideo.views} views</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media Categories */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Photo & Video Gallery</h2>
            <p className="text-xl text-gray-600">Browse our collection by category</p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMedia.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative aspect-video">
                  <img
                    className="w-full h-full object-cover"
                    alt={item.title}
                    src="https://images.unsplash.com/photo-1595872018818-97555653a011"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`p-2 rounded-full ${item.type === "video" ? "bg-red-500" : "bg-blue-500"}`}>
                      {item.type === "video" ? (
                        <Play className="h-4 w-4 text-white" />
                      ) : (
                        <Image className="h-4 w-4 text-white" />
                      )}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={handleViewMedia}
                      className="opacity-0 hover:opacity-100 bg-white bg-opacity-90 rounded-full p-3 transition-all duration-300 transform scale-75 hover:scale-100"
                    >
                      <Eye className="h-6 w-6 text-gray-900" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {item.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Eye className="h-4 w-4 mr-1" />
                      {item.stats.views} views
                    </div>
                    <Button
                      onClick={handleViewMedia}
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      View
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Media Impact</h2>
            <p className="text-xl text-gray-600">Our visual storytelling reaches thousands</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl card-hover"
            >
              <Image className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-gray-600 font-medium">Photos Captured</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl card-hover"
            >
              <Play className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-600 font-medium">Videos Produced</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl card-hover"
            >
              <Eye className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold gradient-text mb-2">100K+</div>
              <div className="text-gray-600 font-medium">Total Views</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl card-hover"
            >
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <div className="text-4xl font-bold gradient-text mb-2">25K+</div>
              <div className="text-gray-600 font-medium">People Reached</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow">Share Our Story</h2>
            <p className="text-xl text-white mb-8 text-shadow leading-relaxed">
              Help us spread awareness about our mission by sharing our photos and videos with your network. Every share
              helps us reach more people who can make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleViewMedia}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                Download Media Kit
              </Button>
              <Button
                onClick={handleViewMedia}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-full text-lg shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Subscribe to Updates
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Media;
