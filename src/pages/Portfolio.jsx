import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Users, TrendingUp, Settings, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'RetailFlow CRM',
      category: 'Custom CRM System',
      icon: Users,
      description: 'A comprehensive customer relationship management system built for a growing retail chain with 50+ locations.',
      challenge: 'The client needed a unified system to manage customer interactions across multiple channels and locations, with real-time inventory integration.',
      solution: 'We developed a cloud-based CRM with advanced customer segmentation, automated marketing campaigns, and seamless POS integration.',
      results: [
        '40% increase in customer retention',
        '60% reduction in response time',
        '25% boost in sales conversion',
        'Unified customer view across all channels'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Redis'],
      timeline: '6 months',
      teamSize: '5 developers'
    },
    {
      id: 2,
      title: 'ManufactureMax ERP',
      category: 'ERP Solution',
      icon: TrendingUp,
      description: 'Complete enterprise resource planning system for a mid-size manufacturing company with complex supply chain requirements.',
      challenge: 'Legacy systems were causing data silos, inefficient workflows, and lack of real-time visibility into operations.',
      solution: 'Custom ERP solution with integrated modules for inventory, production planning, quality control, and financial management.',
      results: [
        '50% reduction in inventory costs',
        '30% improvement in production efficiency',
        'Real-time visibility across all operations',
        '90% reduction in manual data entry'
      ],
      technologies: ['React', 'Python', 'PostgreSQL', 'Docker', 'Kubernetes'],
      timeline: '12 months',
      teamSize: '8 developers'
    },
    {
      id: 3,
      title: 'TeamSync Pro',
      category: 'Internal Business Tool',
      icon: Settings,
      description: 'Internal project management and collaboration platform for a fast-growing tech startup with remote teams.',
      challenge: 'The company was using multiple disconnected tools, leading to communication gaps and project delays.',
      solution: 'Unified platform combining project management, team communication, time tracking, and document collaboration.',
      results: [
        '35% increase in project delivery speed',
        '80% reduction in communication overhead',
        'Improved team collaboration and transparency',
        'Streamlined workflow automation'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
      timeline: '4 months',
      teamSize: '4 developers'
    },
    {
      id: 4,
      title: 'CloudAnalytics SaaS',
      category: 'SaaS Platform',
      icon: Zap,
      description: 'Multi-tenant analytics platform providing business intelligence solutions for small to medium businesses.',
      challenge: 'Creating a scalable, secure platform that could handle multiple clients with varying data requirements and usage patterns.',
      solution: 'Microservices architecture with automated scaling, advanced security, and customizable dashboard builder.',
      results: [
        '1000+ active users within 6 months',
        '99.9% uptime achievement',
        'Scalable to handle 10x growth',
        'Positive ROI within first year'
      ],
      technologies: ['React', 'Node.js', 'Microservices', 'Kubernetes', 'MongoDB'],
      timeline: '10 months',
      teamSize: '6 developers'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, RetailFlow Inc.',
      content: 'Visionary Software Solutions transformed our customer management completely. The CRM they built has become the backbone of our operations.',
      project: 'RetailFlow CRM'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Operations Director, ManufactureMax',
      content: 'The ERP system exceeded our expectations. We now have complete visibility into our operations and have significantly improved our efficiency.',
      project: 'ManufactureMax ERP'
    },
    {
      name: 'Emily Chen',
      role: 'CTO, TechStart Solutions',
      content: 'TeamSync Pro has revolutionized how our remote teams collaborate. The platform is intuitive, powerful, and exactly what we needed.',
      project: 'TeamSync Pro'
    }
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
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Explore our successful projects and see how we've helped businesses 
              transform their operations with custom software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each project represents a unique challenge solved with innovative technology 
              and strategic thinking.
            </p>
          </motion.div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Project Image */}
                    <div className="relative">
                      <img  
                        className="w-full h-64 lg:h-full object-cover"
                        alt={`${project.title} dashboard interface`}
                       src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                          <project.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      </div>

                      <p className="text-gray-600 mb-6">{project.description}</p>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                          <p className="text-gray-600 text-sm">{project.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                          <p className="text-gray-600 text-sm">{project.solution}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                              <span className="text-gray-700 text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Timeline:</h4>
                          <p className="text-gray-600 text-sm">{project.timeline}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Team Size:</h4>
                          <p className="text-gray-600 text-sm">{project.teamSize}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about 
              working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <img  
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                        alt={`${testimonial.name} profile photo`}
                       src="https://images.unsplash.com/photo-1590769620285-6926a01c2a58" />
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription className="text-purple-600">
                          {testimonial.role}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
                    <p className="text-sm text-gray-500">Project: {testimonial.project}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help you achieve similar results with a custom 
              software solution tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:border-white hover:text-white hover:bg-transparent">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;