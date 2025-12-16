import React from 'react';
import { FileText, Scale, AlertCircle, Shield } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex p-4 bg-blue-600 rounded-2xl mb-4">
              <Scale className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-gray-700">
              Last Updated: December 14, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            
            {/* Introduction */}
            <div>
              <h2 className="text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                Welcome to PDFCraft. These Terms and Conditions ("Terms," "Terms and Conditions") govern 
                your access to and use of the PDFCraft mobile application and associated services 
                (collectively, the "Service"), operated by PDFCraft ("we," "us," or "our").
              </p>
              <p className="text-gray-700 mb-4">
                By downloading, installing, accessing, or using our Service, you agree to be bound by 
                these Terms. If you do not agree to these Terms, you may not use the Service. We reserve 
                the right to modify these Terms at any time, and your continued use of the Service 
                constitutes acceptance of any changes.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Important:</strong> Please read these Terms carefully before using PDFCraft. 
                    These Terms contain important information about your legal rights, remedies, and 
                    obligations.
                  </p>
                </div>
              </div>
            </div>

            {/* License and Usage Rights */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-gray-900">2. License and Usage Rights</h2>
              </div>

              <h3 className="text-gray-900 mb-3 mt-6">2.1 License Grant</h3>
              <p className="text-gray-700 mb-3">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, 
                non-transferable, revocable license to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Download and install the PDFCraft application on your personal devices</li>
                <li>Use the Service for your personal or internal business purposes</li>
                <li>Access features included in your subscription tier (Free or Premium)</li>
              </ul>

              <h3 className="text-gray-900 mb-3 mt-6">2.2 License Restrictions</h3>
              <p className="text-gray-700 mb-3">
                You agree NOT to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Copy, modify, distribute, sell, or lease any part of the Service</li>
                <li>Reverse engineer, decompile, or attempt to extract source code from the application</li>
                <li>Remove, alter, or obscure any copyright, trademark, or proprietary notices</li>
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Circumvent or disable any security features or usage limits</li>
                <li>Use automated systems or software to extract data from the Service</li>
                <li>Transmit viruses, malware, or any other malicious code</li>
                <li>Attempt to gain unauthorized access to any systems or networks</li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div>
              <h2 className="text-gray-900 mb-4">3. User Responsibilities</h2>

              <h3 className="text-gray-900 mb-3">3.1 Account and Security</h3>
              <p className="text-gray-700 mb-3">
                If you create an account with us, you are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use of your account</li>
                <li>Providing accurate and complete information</li>
              </ul>

              <h3 className="text-gray-900 mb-3 mt-6">3.2 Acceptable Use</h3>
              <p className="text-gray-700 mb-3">
                You agree to use the Service only for lawful purposes and in accordance with these Terms. 
                You will not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Process files that infringe on intellectual property rights of others</li>
                <li>Upload or process files containing illegal, harmful, or offensive content</li>
                <li>Use the Service to harass, abuse, or harm another person or entity</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Impersonate any person or entity</li>
              </ul>

              <h3 className="text-gray-900 mb-3 mt-6">3.3 File Responsibility</h3>
              <p className="text-gray-700">
                You are solely responsible for the files you process using PDFCraft. You represent and 
                warrant that you have all necessary rights, licenses, and permissions to process any files 
                through our Service and that such processing does not violate any third-party rights or 
                applicable laws.
              </p>
            </div>

            {/* Subscriptions and Payments */}
            <div>
              <h2 className="text-gray-900 mb-4">4. Subscriptions and Payments</h2>

              <h3 className="text-gray-900 mb-3">4.1 Free and Premium Plans</h3>
              <p className="text-gray-700 mb-4">
                PDFCraft offers both free and premium subscription plans. The features available in each 
                plan are described on our website and within the application. We reserve the right to 
                modify features, pricing, and subscription terms at any time with notice to users.
              </p>

              <h3 className="text-gray-900 mb-3 mt-6">4.2 Payment Terms</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Premium subscriptions are billed in advance on a monthly or annual basis</li>
                <li>All fees are non-refundable except as required by law or our refund policy</li>
                <li>You authorize us to charge your chosen payment method automatically</li>
                <li>Prices are subject to change with 30 days' notice</li>
                <li>Failed payments may result in suspension or termination of service</li>
              </ul>

              <h3 className="text-gray-900 mb-3 mt-6">4.3 Cancellation and Refunds</h3>
              <p className="text-gray-700 mb-3">
                You may cancel your Premium subscription at any time through the application or by 
                contacting support. Upon cancellation:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>You will retain access to Premium features until the end of your billing period</li>
                <li>Your account will revert to the Free plan after the billing period expires</li>
                <li>No refunds will be provided for partial subscription periods unless required by law</li>
                <li>Refunds within 7 days of purchase may be provided at our discretion</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-gray-900">5. Intellectual Property Rights</h2>
              </div>

              <h3 className="text-gray-900 mb-3">5.1 Our Property</h3>
              <p className="text-gray-700 mb-3">
                The Service, including its software, design, text, graphics, logos, and other content 
                (excluding your files), is owned by PDFCraft and is protected by copyright, trademark, 
                and other intellectual property laws. All rights not expressly granted to you are reserved 
                by PDFCraft.
              </p>

              <h3 className="text-gray-900 mb-3 mt-6">5.2 Your Content</h3>
              <p className="text-gray-700 mb-3">
                You retain all rights to the files and content you process through PDFCraft. By using the 
                Service, you grant us a limited license to process your files solely for the purpose of 
                providing the Service to you. We do not claim ownership of your files or content.
              </p>

              <h3 className="text-gray-900 mb-3 mt-6">5.3 Trademarks</h3>
              <p className="text-gray-700">
                "PDFCraft" and related logos are trademarks of PDFCraft. You may not use these trademarks 
                without our prior written permission.
              </p>
            </div>

            {/* Feature Availability */}
            <div>
              <h2 className="text-gray-900 mb-4">6. Feature Availability and Modifications</h2>
              <p className="text-gray-700 mb-3">
                We reserve the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Modify, suspend, or discontinue any feature of the Service at any time</li>
                <li>Impose usage limits on certain features</li>
                <li>Update the application with new features, bug fixes, and improvements</li>
                <li>Change the availability of features across Free and Premium plans</li>
              </ul>
              <p className="text-gray-700">
                We will make reasonable efforts to notify users of material changes to the Service. 
                However, we are not liable for any modifications, suspensions, or discontinuations of 
                features.
              </p>
            </div>

            {/* Disclaimer of Warranties */}
            <div>
              <h2 className="text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
              <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  <strong>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY 
                  KIND, EITHER EXPRESS OR IMPLIED.</strong>
                </p>
                <p className="text-gray-700 mb-3">
                  To the fullest extent permitted by law, we disclaim all warranties, including but not 
                  limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                  <li>Implied warranties of merchantability and fitness for a particular purpose</li>
                  <li>Warranties that the Service will be uninterrupted, error-free, or secure</li>
                  <li>Warranties regarding the accuracy, reliability, or completeness of content</li>
                  <li>Warranties that defects will be corrected</li>
                </ul>
                <p className="text-gray-700">
                  You use the Service at your own risk. We do not guarantee that the Service will meet 
                  your specific requirements or expectations.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-gray-900 mb-4">8. Limitation of Liability</h2>
              <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  <strong>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, PDFCRAFT AND ITS AFFILIATES, 
                  OFFICERS, EMPLOYEES, AGENTS, AND LICENSORS WILL NOT BE LIABLE FOR ANY INDIRECT, 
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</strong>
                </p>
                <p className="text-gray-700 mb-3">
                  This includes damages for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                  <li>Loss of profits, revenue, data, or business opportunities</li>
                  <li>Service interruptions or errors</li>
                  <li>Loss or corruption of files or content</li>
                  <li>Unauthorized access to your data</li>
                  <li>Third-party actions or content</li>
                </ul>
                <p className="text-gray-700">
                  Our total liability for any claims arising from your use of the Service will not exceed 
                  the amount you paid us in the twelve (12) months preceding the claim, or $100, whichever 
                  is greater.
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-gray-900 mb-4">9. Indemnification</h2>
              <p className="text-gray-700">
                You agree to indemnify, defend, and hold harmless PDFCraft and its affiliates, officers, 
                employees, agents, and licensors from any claims, liabilities, damages, losses, costs, or 
                expenses (including reasonable attorneys' fees) arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-3">
                <li>Your use or misuse of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of third parties</li>
                <li>Your files or content processed through the Service</li>
                <li>Your breach of any representation or warranty in these Terms</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-gray-900 mb-4">10. Governing Law and Dispute Resolution</h2>

              <h3 className="text-gray-900 mb-3">10.1 Governing Law</h3>
              <p className="text-gray-700 mb-4">
                These Terms will be governed by and construed in accordance with the laws of the 
                jurisdiction in which PDFCraft operates, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-gray-900 mb-3 mt-6">10.2 Dispute Resolution</h3>
              <p className="text-gray-700 mb-3">
                In the event of any dispute arising from these Terms or the Service, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>First attempt to resolve the dispute informally by contacting us</li>
                <li>If informal resolution fails, submit to binding arbitration or mediation</li>
                <li>Waive the right to participate in class-action lawsuits</li>
                <li>Resolve disputes on an individual basis only</li>
              </ul>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-gray-900 mb-4">11. Termination</h2>

              <h3 className="text-gray-900 mb-3">11.1 Termination by You</h3>
              <p className="text-gray-700 mb-4">
                You may terminate your use of the Service at any time by uninstalling the application and 
                ceasing to use our services. You may also request account deletion by contacting support.
              </p>

              <h3 className="text-gray-900 mb-3 mt-6">11.2 Termination by Us</h3>
              <p className="text-gray-700 mb-3">
                We reserve the right to suspend or terminate your access to the Service at any time, 
                without notice, for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Violation of these Terms</li>
                <li>Fraudulent, abusive, or illegal activity</li>
                <li>Non-payment of fees</li>
                <li>Any reason we deem necessary to protect our interests or other users</li>
              </ul>

              <h3 className="text-gray-900 mb-3 mt-6">11.3 Effect of Termination</h3>
              <p className="text-gray-700">
                Upon termination, your right to use the Service will immediately cease. We are not 
                obligated to store or provide access to your files after termination. Provisions of these 
                Terms that by their nature should survive termination will remain in effect.
              </p>
            </div>

            {/* General Provisions */}
            <div>
              <h2 className="text-gray-900 mb-4">12. General Provisions</h2>

              <h3 className="text-gray-900 mb-3">12.1 Entire Agreement</h3>
              <p className="text-gray-700 mb-4">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you 
                and PDFCraft regarding the Service and supersede all prior agreements.
              </p>

              <h3 className="text-gray-900 mb-3 mt-6">12.2 Severability</h3>
              <p className="text-gray-700 mb-4">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will 
                remain in full force and effect.
              </p>

              <h3 className="text-gray-900 mb-3 mt-6">12.3 Waiver</h3>
              <p className="text-gray-700 mb-4">
                Our failure to enforce any right or provision of these Terms will not constitute a waiver 
                of that right or provision.
              </p>

              <h3 className="text-gray-900 mb-3 mt-6">12.4 Assignment</h3>
              <p className="text-gray-700 mb-4">
                You may not assign or transfer these Terms without our prior written consent. We may assign 
                these Terms without restriction.
              </p>

              <h3 className="text-gray-900 mb-3 mt-6">12.5 Force Majeure</h3>
              <p className="text-gray-700">
                We will not be liable for any failure to perform our obligations due to circumstances 
                beyond our reasonable control, including natural disasters, war, terrorism, riots, strikes, 
                or government actions.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-gray-900 mb-4">13. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@pdfcraft.com</p>
                <p className="text-gray-700 mb-2"><strong>Support:</strong> support@pdfcraft.com</p>
                <p className="text-gray-700"><strong>Response Time:</strong> We aim to respond within 48 hours</p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Acknowledgment:</strong> By using PDFCraft, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms and Conditions. If you do not agree to 
                these Terms, you must not use the Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
