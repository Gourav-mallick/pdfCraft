import React from 'react';
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
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Features() {
  const freeFeatures = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Create PDF',
      description: 'Convert your images and documents into professional PDF files with just a few taps. Supports JPEG, PNG, and other common image formats.',
      details: [
        'Convert multiple images at once',
        'Maintain original quality',
        'Auto-organize pages',
        'Customize page orientation',
      ],
    },
    {
      icon: <Merge className="w-10 h-10" />,
      title: 'Merge PDFs',
      description: 'Combine multiple PDF documents into a single file. Perfect for consolidating reports, invoices, or project documents.',
      details: [
        'Merge unlimited PDFs',
        'Drag and drop ordering',
        'Preview before merging',
        'Fast processing',
      ],
    },
    {
      icon: <Split className="w-10 h-10" />,
      title: 'Split PDF',
      description: 'Extract specific pages or split large PDFs into smaller documents. Choose custom page ranges or split by intervals.',
      details: [
        'Split by page ranges',
        'Extract specific pages',
        'Split into equal parts',
        'Batch splitting options',
      ],
    },
    {
      icon: <Minimize2 className="w-10 h-10" />,
      title: 'Compress PDF',
      description: 'Reduce PDF file size without losing quality. Make files easier to share and email while maintaining readability.',
      details: [
        'Smart compression algorithm',
        'Maintain visual quality',
        'Reduce file size by up to 70%',
        'Quick processing',
      ],
    },
    {
      icon: <ArrowUpDown className="w-10 h-10" />,
      title: 'Reorder Pages',
      description: 'Rearrange PDF pages in any order you want. Simple drag-and-drop interface makes reorganization effortless.',
      details: [
        'Visual page thumbnails',
        'Drag and drop reordering',
        'Delete unwanted pages',
        'Duplicate pages',
      ],
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'Basic Quality Enhancement',
      description: 'Improve the overall appearance of your PDFs with basic quality enhancements like brightness and contrast adjustments.',
      details: [
        'Auto-enhance documents',
        'Adjust brightness',
        'Improve contrast',
        'Sharpen text',
      ],
    },
  ];

  const premiumFeatures = [
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'Advanced Quality Enhancement',
      description: 'Take your PDF quality to the next level with AI-powered enhancements that improve clarity, resolution, and readability dramatically.',
      details: [
        'AI-powered enhancement',
        'Upscale resolution',
        'Advanced noise reduction',
        'Professional-grade output',
        'Preserve text sharpness',
      ],
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: 'Password Protection',
      description: 'Secure your sensitive documents with password encryption. Control who can open, edit, or print your PDFs.',
      details: [
        'Set open password',
        'Restrict editing permissions',
        'Control printing access',
        'AES-256 encryption',
        'Remove passwords easily',
      ],
    },
    {
      icon: <Droplet className="w-10 h-10" />,
      title: 'Remove Watermark',
      description: 'Clean up your PDFs by removing unwanted watermarks and stamps. Get professional-looking documents ready for any purpose.',
      details: [
        'Automatic watermark detection',
        'Selective removal',
        'Preserve document integrity',
        'Batch watermark removal',
      ],
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: 'Batch Processing',
      description: 'Process multiple PDF files simultaneously. Apply the same operations to dozens of files at once, saving you hours of work.',
      details: [
        'Process multiple files together',
        'Apply same settings to all',
        'Queue management',
        'Background processing',
        'Time-saving automation',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-gray-900 mb-6">Powerful PDF Features</h1>
          <p className="text-gray-700">
            Comprehensive PDF tools designed for both casual users and professionals
          </p>
        </div>
      </section>

      {/* Free Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
              FREE FEATURES
            </span>
            <h2 className="text-gray-900 mb-4">Essential Tools at No Cost</h2>
            <p className="text-gray-600">
              Get started with our comprehensive free features - no credit card required
            </p>
          </div>
          <div className="space-y-12">
            {freeFeatures.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="inline-flex p-4 bg-blue-100 text-blue-600 rounded-2xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                  <div className="aspect-video bg-white rounded-lg shadow-inner flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      {feature.icon}
                      <p className="mt-2">Feature Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full mb-4">
              PREMIUM FEATURES
            </span>
            <h2 className="text-gray-900 mb-4">Advanced Tools for Professionals</h2>
            <p className="text-gray-600">
              Unlock powerful features designed for demanding workflows
            </p>
          </div>
          <div className="space-y-12">
            {premiumFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="inline-flex p-4 bg-gradient-to-br from-purple-100 to-blue-100 text-purple-600 rounded-2xl">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-700 mb-4">{feature.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Ready to Experience All Features?</h2>
          <p className="mb-8 text-blue-100">
            Start with our free features today, upgrade to premium when you're ready
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Pricing Plans
            </Link>
            <Link
              to="/contact"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors border-2 border-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
