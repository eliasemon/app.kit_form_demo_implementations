import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';

function ThankYou() {
  const location = useLocation();
  const email = location.state?.email || 'your email';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
        <p className="text-gray-600 mb-6">
          We've received your email address. We'll keep you updated with our latest news and updates.
        </p>
        <div className="text-sm text-gray-500 mb-8">
          {email}
        </div>
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to form
        </Link>
      </div>
    </div>
  );
}

export default ThankYou;