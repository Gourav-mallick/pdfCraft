import React from 'react';
import { Target, Eye, Shield, Lock, Users, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'User Privacy',
      description: 'Your privacy is our top priority. We never store or misuse your personal data.',
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: 'File Security',
      description: 'All files are processed securely with industry-standard encryption protocols.',
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: 'Transparency',
      description: 'We believe in clear communication about how our app works and what we do with your data.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-gray-900 mb-6">About PDFCraft</h1>
          <p className="text-gray-700">
            Your trusted partner for professional PDF document management
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="inline-flex p-4 bg-blue-100 rounded-2xl">
                <Target className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <div>
              <h2 className="text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At PDFCraft, our mission is to empower individuals and businesses with simple, 
                powerful, and secure PDF tools that anyone can use. We believe that managing 
                documents shouldn't be complicated, expensive, or compromise your privacy.
              </p>
              <p className="text-gray-700">
                We're committed to building software that respects your data, protects your privacy, 
                and delivers exceptional performance whether you're on mobile or desktop. Our goal 
                is to become the most trusted PDF utility app by consistently delivering value and 
                maintaining the highest standards of security and transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-start gap-8">
            <div className="flex-shrink-0">
              <div className="inline-flex p-4 bg-purple-100 rounded-2xl">
                <Eye className="w-12 h-12 text-purple-600" />
              </div>
            </div>
            <div>
              <h2 className="text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                We envision a world where everyone has access to professional-grade PDF tools 
                without complexity or hidden costs. Our long-term vision is to build a comprehensive 
                document management ecosystem that adapts to your needs, whether you're a student, 
                professional, or business owner.
              </p>
              <p className="text-gray-700">
                We're constantly innovating and adding new features based on user feedback, ensuring 
                that PDFCraft grows with you and continues to solve real problems in document 
                management and productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem We Solve */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">The Problem We Solve</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
            <p className="text-gray-700 mb-4">
              Many PDF tools are either too expensive, require unnecessary internet connections, 
              compromise user privacy by uploading files to unknown servers, or are cluttered 
              with confusing features that make simple tasks complicated.
            </p>
            <p className="text-gray-700">
              <strong>PDFCraft solves these problems by providing:</strong>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-gray-900 mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">
                Essential features available for free, with premium options at fair prices
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-gray-900 mb-2">Offline Capability</h3>
              <p className="text-gray-600">
                Process your documents locally without requiring constant internet access
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-gray-900 mb-2">Privacy First</h3>
              <p className="text-gray-600">
                Your files stay on your device - no unnecessary uploads to external servers
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-gray-900 mb-2">Simple Interface</h3>
              <p className="text-gray-600">
                Clean, intuitive design that makes PDF operations quick and easy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-12 text-center">Our Commitments to You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="inline-flex p-3 bg-blue-50 rounded-lg mb-4">
                  {value.icon}
                </div>
                <h3 className="text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex p-4 bg-blue-100 rounded-2xl mb-6">
            <Users className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-gray-900 mb-4">Built by a Dedicated Team</h2>
          <p className="text-gray-700 mb-6">
            PDFCraft is developed by a passionate team of engineers and designers who care deeply 
            about creating software that respects users and solves real problems. We're constantly 
            listening to feedback and working hard to make PDFCraft better every day.
          </p>
          <p className="text-gray-700">
            Have questions or suggestions? We'd love to hear from you. Reach out through our 
            contact page - we read every message.
          </p>
        </div>
      </section>

      {/* Compliance Note */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700">
            PDFCraft complies with Google Play Store policies and industry best practices for 
            data protection. We are committed to maintaining the highest standards of app quality, 
            security, and user privacy.
          </p>
        </div>
      </section>
    </div>
  );
}
