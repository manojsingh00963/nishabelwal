// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { DNA } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [loading, setLoading] = useState(false); // State for loader

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Show loader

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formspree.io/f/mkgozloe", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast.success("Thanks for your message!");
        event.target.reset(); // Clear form after success
      } else {
        toast.error("Oops! Something went wrong.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }

    setTimeout(() => setLoading(false), 1500); // Hide loader after 1.5s
  };

  return (
    <div className="flex mt-10 pb-32 flex-col md:flex-row justify-center items-center gap-10 md:gap-20 h-full p-10 relative">
      <ToastContainer />
      
      {/* Loader */}
      {loading && (
        <div className="absolute flex justify-center items-center">
          <DNA
            visible={true}
            height="full"
            width="full"
            ariaLabel="dna-loading"
          />
        </div>
      )}

      {/* Contact Info */}
      <div className="flex flex-col justify-start items-start text-start">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="text-sm text-gray-600">Looking forward to hearing from you</p>

        <ul className="mt-4">
          <li className="text-lg font-bold">Phone</li>
          <li className="text-sm text-gray-600">98575545525</li>
        </ul>

        <ul className="mt-2">
          <li className="text-lg font-bold">Email</li>
          <li className="text-sm text-gray-600">info@gmail.com</li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-lg h-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* First & Last Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <label className="flex flex-col text-sm">
              First Name*
              <input type="text" name="firstName" className="border bg-transparent border-black p-2 rounded-md" required />
            </label>
            <label className="flex flex-col text-sm">
              Last Name*
              <input type="text" name="lastName" className="border bg-transparent border-black p-2 rounded-md" required />
            </label>
          </div>

          {/* Email & Subject */}
          <div className="flex flex-col md:flex-row gap-4">
            <label className="flex flex-col text-sm">
              Email*
              <input type="email" name="email" className="border bg-transparent border-black p-2 rounded-md" required />
            </label>
            <label className="flex flex-col text-sm">
              Subject
              <input type="text" name="subject" className="border bg-transparent border-black p-2 rounded-md" />
            </label>
          </div>

          {/* Message */}
          <label className="flex flex-col text-sm">
            Message
            <textarea name="message" className="border bg-transparent border-black p-2 rounded-md w-96 h-24 resize-none" required></textarea>
          </label>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-36 h-10 bg-purple-600 text-white rounded-xl font-bold text-lg border border-black disabled:bg-gray-500"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
