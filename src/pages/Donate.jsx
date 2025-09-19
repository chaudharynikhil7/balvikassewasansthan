import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Heart, CreditCard, Landmark, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Donate = () => {
  const [amount, setAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [copied, setCopied] = useState(null);
  const navigate = useNavigate();

  const presetAmounts = [500, 1000, 2500, 5000];

  const handleAmountClick = (value) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCustomAmount(value);
      setAmount(Number(value) || 0);
    }
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleRazorpayPayment = () => {
    if (!name || !email || !phone) {
      toast({
        title: "Please fill in your details",
        description: "Name, email, and phone number are required to proceed.",
        variant: "destructive",
      });
      return;
    }

    if (amount < 1) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // IMPORTANT: Replace with your actual Razorpay Key ID
      amount: amount * 100, // Amount in paise
      currency: "INR",
      name: "Bal Vikas Sewa Sansthan",
      description: "Donation for a noble cause",
      image: "/logo.png", // Add your logo here
      handler: function (response) {
        const paymentData = {
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
          signature: response.razorpay_signature,
          amount: amount,
          name: name,
          email: email,
          phone: phone,
          date: new Date().toISOString(),
        };

        // For now, we store in localStorage. Later, we'll send this to Supabase.
        const donations = JSON.parse(localStorage.getItem("donations") || "[]");
        donations.push(paymentData);
        localStorage.setItem("donations", JSON.stringify(donations));

        navigate(`/donation-success?payment_id=${response.razorpay_payment_id}&amount=${amount}`);
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      notes: {
        address: "Bal Vikas Sewa Sansthan Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    // This is a placeholder since we can't use external scripts directly.
    // In a real app, the Razorpay script would be loaded in index.html.
    if (window.Razorpay) {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      toast({
        title: "🚧 Razorpay Not Integrated",
        description: "This is a demo. Please add Razorpay script to your index.html to enable payments.",
      });
      console.log("Razorpay options:", options);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayPalPayment = () => {
    toast({
      title: "🚧 PayPal Not Implemented",
      description: "This feature is for demonstration. Real integration is needed.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Donate Now - Bal Vikas Sewa Sansthan</title>
        <meta
          name="description"
          content="Support our cause by making a donation. Choose from various payment methods including online payment, bank transfer, or UPI."
        />
      </Helmet>

      <section className="relative py-20 hero-gradient">
        <div className="absolute inset-0 opacity-20">
          <img
            className="w-full h-full object-cover"
            alt="Hands holding a heart symbol"
            src="https://images.unsplash.com/photo-1579208575657-c595a05383b7"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow"
          >
            Your Contribution Matters
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white text-shadow leading-relaxed"
          >
            Every donation, no matter how small, helps us transform lives. Join us in our mission to bring hope and
            opportunity to those in need.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center">
            {/* Hide the online payment section for now */}
            {false && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
              >
                <h2 className="text-3xl font-bold gradient-text mb-6">Donate Securely Online</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Choose an Amount (INR)</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {presetAmounts.map((val) => (
                        <Button
                          key={val}
                          variant={amount === val && !customAmount ? "default" : "outline"}
                          onClick={() => handleAmountClick(val)}
                          className={`w-full ${
                            amount === val && !customAmount ? "bg-blue-600 text-white" : "bg-white"
                          }`}
                        >
                          ₹{val.toLocaleString("en-IN")}
                        </Button>
                      ))}
                    </div>
                    <input
                      type="text"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder="Or enter custom amount"
                      className="w-full mt-4 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>

                  {/* 
                  <Button
                    onClick={handleRazorpayPayment}
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg py-4 rounded-full shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                  >
                    <CreditCard className="mr-2 h-5 w-5" />
                    Donate ₹{amount.toLocaleString("en-IN")} via Razorpay
                  </Button>
                 
                  <Button
                    onClick={handlePayPalPayment}
                    size="lg"
                    variant="outline"
                    className="w-full bg-white text-blue-800 font-bold text-lg py-4 rounded-full shadow-lg hover:shadow-xl transition-all border-blue-800 border-2"
                  >
                    <img
                      className="mr-2 h-6 w-6"
                      alt="PayPal logo"
                      src="https://images.unsplash.com/photo-1586880244543-0528a802be97"
                    />
                    Donate via PayPal
                  </Button>
                   */}
                </div>
              </motion.div>
            )}

            {/* Only show Other Payment Methods */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 col-span-2"
            >
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-6"> Ways to Donate</h2>
                <p className="text-gray-600 mb-6">
                  You can also donate directly to our bank account or via UPI. Your support is invaluable.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg card-hover">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Landmark className="mr-3 text-purple-600" />
                  Bank Transfer (NEFT/IMPS)
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Account Name:</strong> Bal Vikas Sewa Sansthan
                  </p>
                  <p>
                    <strong>Account Number:</strong> 123456789012
                  </p>
                  <p>
                    <strong>Bank Name:</strong> State Bank of India
                  </p>
                  <p>
                    <strong>IFSC Code:</strong> SBIN0001234
                  </p>
                  <p>
                    <strong>Branch:</strong> New Delhi Main Branch
                  </p>
                  <p>
                    <strong>Account Type:</strong> Savings
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg card-hover">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <img
                    className="mr-3 h-6 w-6"
                    alt="UPI logo"
                    src="https://images.unsplash.com/photo-1524235966340-7b532c32fb01"
                  />
                  UPI Payment
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>Scan the QR code with any UPI app or use the UPI ID below.</p>
                  <div className="flex justify-center my-4">
                    <img
                      className="w-40 h-40"
                      alt="UPI QR Code"
                      src="https://images.unsplash.com/photo-1595079676339-1534801ad6cf"
                    />
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                    <span className="font-mono text-blue-600">balvikas@upi</span>
                    <Button
                      size="sm"
                      onClick={() => copyToClipboard("balvikas@upi", "upi")}
                      className="bg-blue-100 text-blue-700 hover:bg-blue-200"
                    >
                      {copied === "upi" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      <span className="ml-2">{copied === "upi" ? "Copied!" : "Copy"}</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="text-center text-gray-600 text-sm p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                After making a direct transfer, please email us at{" "}
                <strong className="text-gray-800">peaceac77@gmail.com</strong> with your transaction details so we can
                send you a receipt.
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
