import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef();
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",    // get it from emailjs.com
        "YOUR_TEMPLATE_ID",   // get it from emailjs.com
        form.current,
        "YOUR_PUBLIC_KEY"     // get it from emailjs.com
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess("Failed to send message. Try again.");
        }
      );
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-5">Contact Us</h1>
      <div className="max-w-3xl mx-auto p-5">
        <form ref={form} onSubmit={sendEmail} className="p-5 bg-gray-100 space-y-5">
          <input 
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-white p-4 text-2xl rounded-md w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-white p-4 text-2xl rounded-md w-full"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="bg-white p-4 text-2xl rounded-md w-full"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="bg-white p-4 text-2xl rounded-md w-full h-40"
          />
          <button type="submit" className="bg-orange-400 px-4 py-2 text-xl rounded-md">
            Send Message
          </button>
        </form>
        {success && <p className="text-green-600 mt-4">{success}</p>}
      </div>
    </>
  );
}