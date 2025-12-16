import React from 'react';
import { Shield, Lock, Eye, Database, FileText, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex p-4 bg-blue-600 rounded-2xl mb-4">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-gray-900 mb-4">Privacy Policy</h1>
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
              <h2 className="text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                Welcome to PDFCraft ("we," "our," or "us"). We are committed to protecting your privacy 
                and ensuring the security of your personal information. This Privacy Policy explains how 
                we collect, use, disclose, and safeguard your information when you use our mobile 
                application and associated services (collectively, the "Service").
              </p>
              <p className="text-gray-700">
                By using PDFCraft, you agree to the collection and use of information in accordance with 
                this policy. If you do not agree with our policies and practices, please do not use our 
                Service.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-600" />
                <h2 className="text-gray-900">Information We Collect</h2>
              </div>
              
              <h3 className="text-gray-900 mb-3 mt-6">1.1 Information You Provide</h3>
              <p className="text-gray-700 mb-3">
                We collect information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Email address (if you contact us for support)</li>
                <li>Name and contact information (if provided voluntarily)</li>
                <li>Feedback, correspondence, and communications with us</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
              </ul>

              <h3 className="text-gray-900 mb-3 mt-6">1.2 Automatically Collected Information</h3>
              <p className="text-gray-700 mb-3">
                When you use our Service, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Device information (device type, operating system, unique device identifiers)</li>
                <li>Usage data (features used, time spent, app performance metrics)</li>
                <li>Log data (IP address, access times, app crashes, and errors)</li>
                <li>Analytics data to improve app functionality and user experience</li>
              </ul>

              <h3 className="text-gray-900 mb-3 mt-6">1.3 File Information</h3>
              <p className="text-gray-700">
                PDFCraft processes PDF files and images locally on your device. We do not upload, store, 
                or transmit your files to our servers unless you explicitly use a cloud-based feature 
                (such as cloud backup, if available). Files processed within the app remain on your device.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-gray-900">How We Use Your Information</h2>
              </div>
              <p className="text-gray-700 mb-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>To provide and maintain our Service:</strong> Processing your PDF operations, 
                ensuring app functionality, and delivering features you request</li>
                <li><strong>To improve our Service:</strong> Analyzing usage patterns to enhance user 
                experience, fix bugs, and develop new features</li>
                <li><strong>To communicate with you:</strong> Responding to your inquiries, providing 
                customer support, and sending important updates about the Service</li>
                <li><strong>To process transactions:</strong> Managing subscriptions, processing payments, 
                and providing receipts</li>
                <li><strong>To ensure security:</strong> Detecting and preventing fraud, abuse, and 
                security incidents</li>
                <li><strong>To comply with legal obligations:</strong> Meeting legal and regulatory 
                requirements</li>
              </ul>
            </div>

            {/* File Processing and Storage */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-blue-600" />
                <h2 className="text-gray-900">File Processing and Storage</h2>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
                <p className="text-gray-700">
                  <strong>Important:</strong> PDFCraft is designed with privacy in mind. Your files are 
                  processed locally on your device whenever possible.
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Local Processing:</strong> PDF operations (merge, split, compress, etc.) are 
                performed directly on your device without uploading files to our servers</li>
                <li><strong>Temporary Storage:</strong> Files are temporarily stored in your device's 
                memory during processing and are automatically deleted when the operation is complete</li>
                <li><strong>No Unauthorized Access:</strong> We do not access, view, or store your file 
                contents unless required for a specific feature you explicitly activate</li>
                <li><strong>Secure Deletion:</strong> Temporary files are securely deleted and not 
                recoverable after processing</li>
              </ul>
            </div>

            {/* Data Sharing and Disclosure */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
                <h2 className="text-gray-900">Data Sharing and Disclosure</h2>
              </div>
              <p className="text-gray-700 mb-3">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who 
                assist us in operating our Service (e.g., payment processors, analytics providers), under 
                strict confidentiality agreements</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government 
                regulation</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale 
                of company assets, with notice provided to users</li>
                <li><strong>Protection of Rights:</strong> To protect the rights, property, or safety of 
                PDFCraft, our users, or the public</li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-3">
                We implement appropriate technical and organizational security measures to protect your 
                personal information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure development practices</li>
              </ul>
              <p className="text-gray-700">
                However, no method of transmission over the internet or electronic storage is 100% secure. 
                While we strive to use commercially acceptable means to protect your information, we cannot 
                guarantee absolute security.
              </p>
            </div>

            {/* Your Rights and Choices */}
            <div>
              <h2 className="text-gray-900 mb-4">Your Rights and Choices</h2>
              <p className="text-gray-700 mb-3">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information, subject to 
                legal obligations</li>
                <li><strong>Opt-Out:</strong> Opt out of marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a structured format</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please contact us at <a href="mailto:privacy@pdfcraft.com" 
                className="text-blue-600 hover:underline">privacy@pdfcraft.com</a>
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700">
                PDFCraft is not intended for use by children under the age of 13. We do not knowingly 
                collect personal information from children under 13. If we become aware that we have 
                collected personal information from a child under 13, we will take steps to delete such 
                information. If you believe we have collected information from a child under 13, please 
                contact us immediately.
              </p>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-3">
                Our Service may contain links to third-party websites or integrate with third-party services. 
                We are not responsible for the privacy practices of these third parties. We encourage you to 
                review the privacy policies of any third-party services you access through our app.
              </p>
              <p className="text-gray-700">
                Third-party services we may use include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                <li>Google Analytics (for usage analytics)</li>
                <li>Payment processors (for subscription management)</li>
                <li>Cloud storage providers (if you enable cloud features)</li>
              </ul>
            </div>

            {/* Google Play Store Compliance */}
            <div>
              <h2 className="text-gray-900 mb-4">Google Play Store Compliance</h2>
              <p className="text-gray-700">
                PDFCraft complies with Google Play Store policies regarding user data and privacy. We adhere 
                to the Google Play Developer Distribution Agreement and provide transparent information about 
                data collection and usage. Our app's data safety section in the Google Play Store accurately 
                reflects our privacy practices.
              </p>
            </div>

            {/* International Data Transfers */}
            <div>
              <h2 className="text-gray-900 mb-4">International Data Transfers</h2>
              <p className="text-gray-700">
                Your information may be transferred to and processed in countries other than your country of 
                residence. These countries may have data protection laws different from your jurisdiction. 
                By using our Service, you consent to the transfer of your information to these countries. 
                We ensure appropriate safeguards are in place to protect your information in accordance with 
                this Privacy Policy.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div>
              <h2 className="text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time to reflect changes in our practices or 
                legal requirements. We will notify you of material changes by posting the updated policy on 
                this page and updating the "Last Updated" date. We encourage you to review this Privacy 
                Policy periodically. Your continued use of the Service after changes are posted constitutes 
                your acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <h2 className="text-gray-900">Contact Us</h2>
              </div>
              <p className="text-gray-700 mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data 
                practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@pdfcraft.com</p>
                <p className="text-gray-700 mb-2"><strong>Support:</strong> support@pdfcraft.com</p>
                <p className="text-gray-700"><strong>Response Time:</strong> We aim to respond to all 
                inquiries within 48 hours</p>
              </div>
            </div>

            {/* Final Note */}
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Your Privacy Matters:</strong> At PDFCraft, we believe in transparency and user 
                control. We are committed to protecting your privacy and handling your data responsibly. 
                We will never sell your personal information or use your files for any purpose other than 
                providing you with the best PDF tools possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
