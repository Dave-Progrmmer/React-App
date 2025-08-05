import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Import the access key from environment variables
    import.meta.env && formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(
        <span className="text-green-500 font-semibold">
          Form Submitted Successfully
        </span>
      );
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(
        <span className="text-red-500 font-semibold">
          {data.message}
        </span>
      );
    }
  };
  return (
    <div className="h-screen w-full text-center pt-40">
      <div className="flex flex-col items-center justify-center pb-20">
        <h2 className="text-3xl font-bold mb-6 text-amber-50">Contact Me</h2>
        <form
          onSubmit={onSubmit}
          className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-8 w-full max-w-md flex flex-col gap-4"
        >
          <div className="flex flex-col text-left">
            <label htmlFor="name" className="mb-1 text-amber-50 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="rounded-md px-3 py-2 bg-white/20 text-white placeholder-amber-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="email" className="mb-1 text-amber-50 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="rounded-md px-3 py-2 bg-white/20 text-white placeholder-amber-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="flex flex-col text-left">
            <label
              htmlFor="message"
              className="mb-1 text-amber-50 font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="rounded-md px-3 py-2 bg-white/20 text-white placeholder-amber-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-2 rounded-md shadow-md hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
