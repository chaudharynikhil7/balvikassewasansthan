import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Gift, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const DonationSuccess = () => {
  const [searchParams] = useSearchParams();
  const [donationDetails, setDonationDetails] = useState(null);

  useEffect(() => {
    const paymentId = searchParams.get("payment_id");
    const amount = searchParams.get("amount");

    if (paymentId && amount) {
      // In a real app, you'd fetch details from your backend/Supabase
      // For now, we'll just display the info from the URL
      setDonationDetails({
        paymentId,
        amount: Number(amount),
      });
    }
  }, [searchParams]);

  return (
    <>
      <Helmet>
        <title>Thank You for Your Donation! - Bal Vikas Sewa Sansthan</title>
        <meta name="description" content="Thank you for supporting our cause. Your donation makes a real difference." />
      </Helmet>

      <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full bg-white p-10 rounded-2xl shadow-2xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
          >
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
          </motion.div>

          <h1 className="text-4xl font-bold gradient-text mb-4">Thank You!</h1>
          <p className="text-xl text-gray-700 mb-8">
            Your generous donation has been successfully processed. We are incredibly grateful for your support.
          </p>

          {donationDetails && (
            <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200 text-left">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Donation Summary</h2>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span className="font-bold text-gray-800">₹{donationDetails.amount.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment ID:</span>
                  <span className="font-mono text-sm bg-gray-200 px-2 py-1 rounded">{donationDetails.paymentId}</span>
                </div>
              </div>
            </div>
          )}

          <p className="text-gray-600 mb-8">
            A confirmation receipt will be sent to your email shortly. Your contribution helps us continue our mission
            to transform lives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
            <Link to="/programs">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Gift className="mr-2 h-5 w-5" />
                See Our Impact
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default DonationSuccess;
