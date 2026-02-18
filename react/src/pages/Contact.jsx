import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-6 rounded-lg shadow max-w-md w-full">

        <h1 className="text-2xl font-bold mb-4">
          Contact Us
        </h1>

        <form className="flex flex-col gap-3">

          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 rounded"
          />

          <textarea
            placeholder="Your Message"
            className="border p-2 rounded"
          ></textarea>

          <button className="bg-blue-500 text-white p-2 rounded">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
};

export default Contact;
