import React from 'react';
import { Check, Crown, Zap, Star } from 'lucide-react';

export default function Pricing() {
  const freeFeatures = [
    'Create PDF from images',
    'Merge multiple PDFs',
    'Split PDF by pages',
    'Compress PDF files',
    'Reorder PDF pages',
    'Basic quality enhancement',
    'Unlimited file processing',
    'No watermarks on output',
  ];

  const premiumFeatures = [
    'All Free features included',
    'Advanced quality enhancement',
    'AI-powered upscaling',
    'Password protect PDFs',
    'Remove watermarks',
    'Batch processing',
    'Priority support',
    'Early access to new features',
    'Ad-free experience',
    'Export in premium formats',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-gray-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-gray-700">
            Choose the plan that fits your needs. Start free, upgrade anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <h2 className="text-gray-900 mb-2">Free Plan</h2>
                <div className="mb-4">
                  <span className="text-5xl text-gray-900">$0</span>
                  <span className="text-gray-600">/forever</span>
                </div>
                <p className="text-gray-600">
                  Perfect for occasional PDF tasks
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-gray-900">What's included:</h3>
                <ul className="space-y-3">
                  {freeFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                Get Started Free
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                No credit card required
              </p>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <Crown className="w-5 h-5" />
                <span>Most Popular</span>
              </div>

              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Star className="w-8 h-8" />
                </div>
                <h2 className="mb-2">Premium Plan</h2>
                <div className="mb-4">
                  <span className="text-5xl">RS 69</span>
                  <span className="text-blue-100">/month</span>
                </div>
                <p className="text-blue-100">
                  For professionals who need advanced tools
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h3>Everything in Premium:</h3>
                <ul className="space-y-3">
                  {premiumFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Upgrade to Premium
              </button>

              <p className="text-center text-sm text-blue-100 mt-4">
                7-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">Flexible Payment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-blue-200">
              <h3 className="text-gray-900 mb-2">Monthly Subscription</h3>
              <p className="text-3xl text-blue-600 mb-2">Rs 69/month</p>
              <p className="text-gray-600 mb-4">
                Billed monthly. Cancel anytime, no questions asked.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <Check className="w-4 h-4 text-green-600" />
                  Flexible cancellation
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Check className="w-4 h-4 text-green-600" />
                  Perfect for short-term projects
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-purple-200 relative">
              <div className="absolute -top-3 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                Save 40%
              </div>
              <h3 className="text-gray-900 mb-2">Annual Subscription</h3>
              <p className="text-3xl text-purple-600 mb-2">Rs 499/year</p>
              <p className="text-gray-600 mb-4">
                Just $5/month when billed annually. Best value!
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <Check className="w-4 h-4 text-green-600" />
                  40% savings vs monthly
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Check className="w-4 h-4 text-green-600" />
                  Best for regular users
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8 text-center">Pricing FAQs</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-gray-900 mb-2">Can I try Premium before purchasing?</h3>
              <p className="text-gray-600">
                Yes! All new users get a 7-day free trial of Premium features. No credit card required. 
                You can explore all premium features risk-free.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-gray-900 mb-2">What happens if I cancel my subscription?</h3>
              <p className="text-gray-600">
                You can cancel anytime. You'll continue to have access to Premium features until the end 
                of your billing period, then your account will revert to the Free plan. All your files 
                remain safe and accessible.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-gray-900 mb-2">Is there a refund policy?</h3>
              <p className="text-gray-600">
                Yes! We offer a 7-day money-back guarantee. If you're not satisfied with Premium for any 
                reason, contact us within 7 days of purchase for a full refund.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-gray-900 mb-2">Can I switch between monthly and annual plans?</h3>
              <p className="text-gray-600">
                Absolutely! You can upgrade from monthly to annual at any time to start saving. The 
                remaining value from your monthly plan will be credited toward your annual subscription.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-gray-900 mb-2">Are there any hidden fees?</h3>
              <p className="text-gray-600">
                No hidden fees, ever. The price you see is the price you pay. No setup fees, no 
                cancellation fees, and no surprise charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="mb-8 text-blue-100">
            Join thousands of satisfied users who trust PDFCraft for their document needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors border-2 border-white">
              View Features
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
