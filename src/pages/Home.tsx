import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Merge, 
  Split, 
  Minimize2, 
  ArrowUpDown, 
  Sparkles,
  Lock,
  Droplet,
  Layers,
  Shield,
  Zap,
  Wifi,
  Check,
  Crown
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Create PDF',
      description: 'Convert images and documents to PDF instantly',
      free: true,
    },
    {
      icon: <Merge className="w-8 h-8" />,
      title: 'Merge PDFs',
      description: 'Combine multiple PDF files into one document',
      free: true,
    },
    {
      icon: <Split className="w-8 h-8" />,
      title: 'Split PDF',
      description: 'Extract specific pages or split by ranges',
      free: true,
    },
    {
      icon: <Minimize2 className="w-8 h-8" />,
      title: 'Compress PDF',
      description: 'Reduce file size without losing quality',
      free: true,
    },
    {
      icon: <ArrowUpDown className="w-8 h-8" />,
      title: 'Reorder Pages',
      description: 'Arrange PDF pages in any order',
      free: true,
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Quality Enhancement',
      description: 'Basic PDF quality improvements',
      free: true,
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: 'Fast Processing',
      description: 'Lightning-fast PDF operations optimized for speed',
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: 'Secure Files',
      description: 'Your documents are processed securely and privately',
    },
    {
      icon: <Wifi className="w-12 h-12 text-blue-600" />,
      title: 'Offline Support',
      description: 'Work with PDFs even without internet connection',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-gray-900 mb-6">
              Professional PDF Tools at Your Fingertips
            </h1>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Create, merge, split, and manage your PDF documents with ease. 
              Fast, secure, and powerful tools designed for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/features"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Create PDF
              </Link>
              <Link
                to="/features"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors border-2 border-blue-600"
              >
                Merge PDF
              </Link>
              <Link
                to="/pricing"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors"
              >
                Upgrade to Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Powerful PDF Features</h2>
            <p className="text-gray-600">
              Everything you need to manage your PDF documents
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex p-3 bg-blue-100 text-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-gray-900 mb-2 flex items-center gap-2">
                  {feature.title}
                  {feature.free && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      FREE
                    </span>
                  )}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free vs Premium Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Free vs Premium</h2>
            <p className="text-gray-600">
              Choose the plan that works best for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-gray-900 mb-2">Free Plan</h3>
                <div className="text-gray-900 mb-4">
                  <span className="text-4xl">$0</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Create PDF from images</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Merge PDFs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Split PDF pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Compress PDF</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Reorder pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Basic quality enhancement</span>
                </li>
              </ul>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-xl shadow-lg text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full flex items-center gap-1">
                <Crown className="w-4 h-4" />
                <span className="text-sm">Popular</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="mb-2">Premium Plan</h3>
                <div className="mb-4">
                  <span className="text-4xl">$9.99</span>
                  <span className="text-blue-100">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                  <span>Advanced quality enhancement</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                  <span>Password protect PDFs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Droplet className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                  <span>Remove watermarks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Layers className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                  <span>Batch PDF processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
              </ul>
              <Link
                to="/pricing"
                className="block w-full bg-white text-blue-600 text-center px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Why Choose PDFCraft?</h2>
            <p className="text-gray-600">
              Built with performance, security, and ease of use in mind
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-blue-50 rounded-2xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="mb-8 text-blue-100">
            Join thousands of users who trust PDFCraft for their document management needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/features"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore Features
            </Link>
            <Link
              to="/pricing"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors border-2 border-white"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
