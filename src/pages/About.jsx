
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to delivering software solutions that create real business value and drive measurable results.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions that give our clients a competitive advantage.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We build long-term partnerships based on trust, transparency, and exceptional service.',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in code quality, security, and performance across all our projects.',
    },
  ];

  const team = [
    {
      name: 'Adel Soliman',
      role: 'CEO & Founder',
      description: 'Tech-savvy founder & CEO leading innovative software ventures, including the Edupath learning platform.',
    },
    {
      name: 'Malak Ahmed',
      role: 'Lead Developer',
      description: 'Full-stack expert specializing in CRM and ERP systems with extensive experience in scalable architectures.',
    },
    {
      name: 'Ali Faed',
      role: 'Business Analyst',
      description: 'Strategic consultant helping businesses optimize their processes through technology solutions.',
    },
    {
      name: 'Raol Thomi',
      role: 'UX/UI Designer',
      description: 'Award-winning designer focused on creating intuitive and engaging user experiences.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About DeepSightX
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              We are a team of passionate developers, designers, and business strategists 
              dedicated to transforming businesses through innovative software solutions.
            </p>
          </motion.div>
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
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2019, DeepSightX emerged from a simple observation: 
                  businesses were struggling with outdated, inflexible software that couldn't keep 
                  pace with their growth and evolving needs.
                </p>
                <p>
                  Our founders, having worked in enterprise environments for over a decade, 
                  recognized the gap between what businesses needed and what traditional software 
                  vendors were offering. We set out to bridge that gap with custom, scalable 
                  solutions built specifically for each client's unique requirements.
                </p>
                <p>
                  Today, we've helped over 50 companies transform their operations through 
                  custom CRM systems, ERP solutions, and innovative SaaS platforms. Our approach 
                  combines deep technical expertise with genuine business understanding to deliver 
                  solutions that drive real results.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img  
                className="rounded-lg shadow-xl w-full h-96 object-cover"
                alt="Team collaboration in modern office"
               src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we approach 
              every project and client relationship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team brings together expertise in software development, 
              business strategy, and user experience design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <img  
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      alt={`${member.name} - ${member.role}`}
                     src="https://images.unsplash.com/photo-1652841190565-b96e0acbae17" />
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-purple-600 font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              To empower businesses with innovative, scalable software solutions that drive growth, 
              improve efficiency, and create lasting competitive advantages in an ever-evolving digital landscape.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <p className="text-lg text-white italic">
                "We believe that great software should be an enabler, not a constraint. 
                Our goal is to build solutions that grow with your business and adapt to your changing needs."
              </p>
              <p className="text-blue-200 mt-4">- Adel Soliman, CEO & Founder</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
