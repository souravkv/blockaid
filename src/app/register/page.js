"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react"; // Corrected import
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"; // Import InputOtp components
import TextAnimation from "@/components/ui/textAnimation";

function RegisterForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    aadhar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAadharChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      aadhar: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    onSubmit();
  };

  return (
    <motion.div
      layout // Ensures smooth transition
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="relative flex items-center justify-center p-12"
    >
      <div className="w-full p-12 bg-white rounded-3xl shadow-2xl border border-gray-300">
        <h1 className="text-4xl font-bold mb-10 tracking-wider text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">
          Register
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-base font-medium">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-pink-500 focus:ring-pink-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="aadhar" className="block text-base font-medium">
              Aadhar Number
            </label>
            <div className="flex items-center justify-start p-3">
              <InputOTP
                maxLength={12}
                value={formData.aadhar}
                onChange={handleAadharChange}
                className="flex justify-center"
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                  <InputOTPSlot index={6} />
                  <InputOTPSlot index={7} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={8} />
                  <InputOTPSlot index={9} />
                  <InputOTPSlot index={10} />
                  <InputOTPSlot index={11} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-semibold py-6 rounded-xl transition-all duration-200 shadow-lg text-xl shadow-pink-500/20"
          >
            Create Account
          </Button>
        </form>
      </div>
    </motion.div>
  );
}

function SuccessMessage() {
  return (
    <motion.div
      layout // Ensures smooth transition
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="relative flex items-center justify-center p-12"
    >
      <div className="w-full p-12 bg-white rounded-3xl shadow-2xl border border-gray-300">
        <h1 className="text-4xl font-bold mb-10 tracking-wider text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">
          Registration Successful!
        </h1>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label
            htmlFor="picture"
            className="text-xl text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text"
          >
            Select the image of your aadhar
          </Label>
          <Input
            id="picture"
            type="file"
            accept="image/*"
            className="w-full bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-pink-500 focus:ring-pink-500"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Register() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <motion.div
      layout
      className="min-h-screen w-full grid lg:grid-cols-2 bg-white text-gray-900"
    >
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <SuccessMessage key="success" />
        ) : (
          <RegisterForm key="register" onSubmit={handleFormSubmit} />
        )}
      </AnimatePresence>

      {/* Branding / Animation Section */}
      <div className="hidden lg:flex items-center justify-center bg-white">
        <TextAnimation />
      </div>
    </motion.div>
  );
}
