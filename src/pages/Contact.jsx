import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

import ContactHero from '@/components/contact/ContactHero';
import ContactInfoCard from '@/components/contact/ContactInfoCard';
import ContactForm from '@/components/contact/ContactForm';
import FaqItem from '@/components/contact/FaqItem';

const contactInfoData = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'info@DeepSightX.com',
    description: 'Send us an email anytime'
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+1 (555) 555-555',
    description: 'Mon-Fri from 8am to 6pm PST'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'Cairo, Egypt',
    description: 'Schedule an in-person meeting'
  },
  {
    icon: Clock,
    title: 'Response Time',
    content: '24 hours',
    description: 'We respond to all inquiries quickly'
  }
];

const faqData = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. Simple internal tools may take 2-4 months, while comprehensive ERP systems can take 8-12 months. We provide detailed timelines during our initial consultation."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, security updates, feature enhancements, and technical support to ensure your system continues to perform optimally."
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Absolutely. We specialize in creating solutions that integrate seamlessly with your existing tools and systems. We'll assess your current tech stack and design integrations that enhance rather than disrupt your workflows."
  },
  {
    question: "What's included in your free consultation?",
    answer: "Our free consultation includes a thorough analysis of your requirements, discussion of potential solutions, preliminary project scope, estimated timeline and budget, and a clear roadmap for moving forward."
  }
];

const Contact = () => {
  return (
    <div className="pt-16">
      <ContactHero 
        title="Get In Touch"
        subtitle="Ready to transform your business with custom software? Let's discuss your project and explore how we can help you achieve your goals."
      />

      {/* Contact Info Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfoData.map((info, index) => (
              <ContactInfoCard
                key={index}
                icon={info.icon}
                title={info.title}
                content={info.content}
                description={info.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start Your Project
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours with a 
              detailed proposal and next steps.
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;