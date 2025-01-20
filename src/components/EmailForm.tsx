import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowRight } from "lucide-react";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [isConfirmState, setIsConfirmState] = useState(false);
  const [getTheFrom, setGetTheFrom] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Dynamically load the script
    const script = document.createElement("script");

    if (isConfirmState) {
      script.src = "https://creatorverse.kit.com/496bc743d8/index.js";
      script.async = true;
      script.setAttribute("data-uid", "496bc743d8");
      document.body.appendChild(script);

      setTimeout(() => {
        setGetTheFrom(true);
      }, 300);

      const interval = setInterval(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const emailInput: any = document.querySelector(
          'input[name="email_address"]'
        );
        if (emailInput) {
          emailInput.value = email; // Set the email address
          clearInterval(interval); // Stop the interval
        }
      }, 100); // Check every 100ms
    }

    const interval2 = setInterval(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const divSuccess: any = document.getElementById("496bc743d8");
      console.log("hello");
      if (divSuccess) {
        console.log("true");
        document.querySelector('script[data-uid="496bc743d8"]')?.remove();
        document.getElementsByClassName("seva-form")[0].remove();
        navigate("/thank-you", { state: { email } })

        setTimeout(() => {
          window.location.reload();
        },200)
        clearInterval(interval2); // Stop the interval
      }

    }, 100);

    // Cleanup script on component unmount
    return () => {
      if (isConfirmState) {
        document.body.removeChild(script);
      }
    };
  }, [isConfirmState]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmState(true);
  };

  return (
    <>
      {!getTheFrom && !isConfirmState && (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-center mb-8">
              <Mail className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
              Stay Updated
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Join our newsletter and get the latest updates straight to your
              inbox.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 group"
              >
                { isConfirmState && !getTheFrom && <span>Loading...</span>}
                {
                  !isConfirmState && !getTheFrom && <span>Continue</span>
                }
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default EmailForm;
