import React, { useState } from 'react';
import { Mail, MessageSquare, Send, HelpCircle, Clock, CheckCircle } from 'lucide-react';
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);


  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSending) return; // ⛔ prevent duplicate send
    setIsSending(true);

    emailjs
      .send(
        "service_yad9aan",     // e.g. service_x8abcd
        "template_bft67u5",    // e.g. template_123xyz
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "8QaR5l0-0HCx0MB56"      // e.g. pu keylick
      )
      .then(() => {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const faqs = [
    {
      question: 'How do I create a PDF from images?',
      answer: 'Open the app, select "Create PDF", choose your images, arrange them in order, and tap "Create". Your PDF will be generated instantly.',
    },
    {
      question: 'What file formats are supported?',
      answer: 'PDFCraft supports JPEG, PNG, PDF, and most common image formats. For document conversion, we support various document types.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes! Your files are processed locally on your device. We do not upload or store your files on our servers unless you explicitly use cloud features.',
    },
    {
      question: 'Can I use PDFCraft offline?',
      answer: 'Absolutely! Most features work completely offline. Only cloud-based features require an internet connection.',
    },
    {
      question: 'How do I upgrade to Premium?',
      answer: 'Tap the "Upgrade to Premium" button in the app or on our website. Choose your subscription plan (monthly or annual) and complete the payment process.',
    },
    {
      question: 'Can I cancel my Premium subscription?',
      answer: 'Yes, you can cancel anytime through your account settings or by contacting support. You\'ll have access to Premium features until the end of your billing period.',
    },
    {
      question: 'What is the difference between Free and Premium?',
      answer: 'Free includes essential PDF tools like create, merge, split, compress, and reorder. Premium adds advanced features like enhanced quality, password protection, watermark removal, and batch processing.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 7-day money-back guarantee. If you\'re not satisfied with Premium, contact us within 7 days of purchase for a full refund.',
    },
    {
      question: 'How long does it take to process a PDF?',
      answer: 'Processing is typically instant for most operations. Large files or batch operations may take a few seconds to complete.',
    },
    {
      question: 'Can I batch process multiple PDFs?',
      answer: 'Batch processing is a Premium feature. With Premium, you can process multiple PDFs simultaneously, saving significant time.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex p-4 bg-blue-600 rounded-2xl mb-4">
            <MessageSquare className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-gray-700">
            Have questions or need help? We're here to assist you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="inline-flex p-3 bg-blue-600 rounded-full mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-2">mallickg918@gmail.com</p>
              <p className="text-sm text-gray-500">We respond within 24-48 hours</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="inline-flex p-3 bg-purple-600 rounded-full mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Response Time</h3>
              <p className="text-gray-600 mb-2">24-48 hours</p>
              <p className="text-sm text-gray-500">Average response time</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="inline-flex p-3 bg-green-600 rounded-full mb-4">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Help Center</h3>
              <p className="text-gray-600 mb-2">Check FAQs below</p>
              <p className="text-sm text-gray-500">Quick answers to common questions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
              <div className="inline-flex p-4 bg-green-500 rounded-full mb-4">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-700">
                Thank you for contacting us. We'll respond to your inquiry within 24-48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing & Subscriptions</option>
                  <option value="feature">Feature Request</option>
                  <option value="bug">Report a Bug</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Please describe your inquiry in detail..."
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg disabled:opacity-50"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>


              <p className="text-sm text-gray-500 text-center">
                * Required fields. We'll respond within 24-48 hours.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Quick answers to common questions about PDFCraft
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition-colors group"
              >
                <summary className="list-none flex items-start justify-between">
                  <h3 className="text-gray-900 flex-1 pr-4">{faq.question}</h3>
                  <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Help */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Still Need Help?</h2>
          <p className="mb-8 text-blue-100">
            Our support team is always ready to assist you with any questions or concerns
          </p>
          <a
            href="mailto:mallickg918@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email Support
          </a>
        </div>
      </section>
    </div>
  );
}
