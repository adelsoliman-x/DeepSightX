
import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Zap, Settings, MessageSquare, BarChart3, Shield, Cloud } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Custom CRM Systems',
      description: 'Tailored customer relationship management solutions designed to fit your unique business processes and scale with your growth.',
      features: [
        'Lead and opportunity management',
        'Customer communication tracking',
        'Sales pipeline automation',
        'Custom reporting and analytics',
        'Integration with existing tools',
        'Mobile-responsive design'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS']
    },
    {
      icon: TrendingUp,
      title: 'ERP Solutions',
      description: 'Comprehensive enterprise resource planning systems that streamline operations and provide real-time business insights.',
      features: [
        'Financial management and accounting',
        'Inventory and supply chain management',
        'Human resources and payroll',
        'Project management and tracking',
        'Business intelligence and reporting',
        'Multi-location support'
      ],
      technologies: ['Odoo', 'Custom Development', 'Cloud Infrastructure']
    },
    {
      icon: Settings,
      title: 'Internal Business Tools',
      description: 'Custom internal applications and tools designed to automate workflows and improve team productivity.',
      features: [
        'Workflow automation',
        'Document management systems',
        'Employee portals and dashboards',
        'Task and project management',
        'Time tracking and reporting',
        'API integrations'
      ],
      technologies: ['React', 'Python', 'MongoDB', 'Docker']
    },
    {
      icon: Zap,
      title: 'SaaS Product Development',
      description: 'End-to-end development of software-as-a-service platforms with scalable architecture and modern user experiences.',
      features: [
        'Multi-tenant architecture',
        'Subscription and billing management',
        'User authentication and authorization',
        'API development and documentation',
        'Performance optimization',
        'Security and compliance'
      ],
      technologies: ['React', 'Node.js', 'Microservices', 'Kubernetes']
    },
    {
      icon: MessageSquare,
      title: 'Business Consulting',
      description: 'Strategic technology consulting to help you make informed decisions about your software investments and digital transformation.',
      features: [
        'Technology stack assessment',
        'Digital transformation planning',
        'Process optimization',
        'Software architecture design',
        'Vendor selection and evaluation',
        'Implementation roadmaps'
      ],
      technologies: ['Strategic Planning', 'Architecture Design', 'Best Practices', 'Industry Standards']
    }
  ];

  const additionalServices = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration of your existing systems to modern cloud infrastructure.'
    },
    {
      icon: Shield,
      title: 'Security Audits',
      description: 'Comprehensive security assessments and implementation of best practices.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & BI',
      description: 'Custom business intelligence solutions and data visualization dashboards.'
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Comprehensive software solutions designed to transform your business operations 
              and drive sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in building custom software solutions that address your specific 
              business challenges and opportunities.
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complementary services to support your complete digital transformation journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
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
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business needs and requirements' },
              { step: '02', title: 'Planning', description: 'Creating detailed project roadmap and architecture' },
              { step: '03', title: 'Development', description: 'Agile development with regular client feedback' },
              { step: '04', title: 'Deployment', description: 'Testing, deployment, and ongoing support' }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your project requirements and how we can help transform your business 
              with custom software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg" className="border-white text-purple-600 hover:border-white hover:text-white-600 hover:bg-transparent">
                             <Link to="/contact">Get Free Consultation</Link>
              </Button>
             <Button asChild variant="outline" size="lg" className="border-white text-purple-600 hover:border-white hover:text-white-600 hover:bg-transparent">
                             <Link to="/portfolio">View Our Work</Link>
                           </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
