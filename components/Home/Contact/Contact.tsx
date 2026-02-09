import React, { useRef, useState } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || isLoading) return;

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_e18gfzo",
        "template_c2inppn",
        form.current,
        "NuF1pVkaKV1p3atJ4",
      )
      .then(
        () => {
          form.current?.reset();
          setIsSent(true);

          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error(error);

          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact">
      <div className="pt-16 pb-16">
        <ToastContainer />

        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
              Shoot me an email!
            </h1>

            <p className="text-gray-400 mt-6 text-base sm:text-lg">
              I'd love to hear from you — reach out for any opportunities or
              questions!
            </p>

            {/* Contact Info */}
            <div className="mt-7">
              <div className="flex items-center space-x-3 mb-4">
                <BiPhone className="w-9 h-9 text-cyan-300" />
                <p className="text-xl font-bold text-gray-400">
                  +91 7701972975
                </p>
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <BiEnvelope className="w-9 h-9 text-cyan-300" />
                <p className="text-xl font-bold text-gray-400">
                  vinodlatwal03@gmail.com
                </p>
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <BiMap className="w-9 h-9 text-cyan-300" />
                <p className="text-xl font-bold text-gray-400">
                  Almora, Uttarakhand, India
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center mt-8 space-x-3">
              <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-blue-800 transition-all duration-300 cursor-pointer">
                <FaFacebookF className="text-white w-6 h-6" />
              </div>

              <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-blue-800 transition-all duration-300 cursor-pointer">
                <FaLinkedin className="text-white w-6 h-6" />
              </div>

              <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-blue-800 transition-all duration-300 cursor-pointer">
                <FaGithub className="text-white w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="zoom-in"
            className="md:p-10 p-5 bg-[#131332] rounded-lg"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]"
            />

            <button
              type="submit"
              disabled={isLoading || isSent}
              className={`mt-8 px-12 py-4 rounded-full transition-all duration-300 text-white
              ${
                isSent
                  ? "bg-green-700 cursor-not-allowed"
                  : "bg-blue-950 hover:bg-blue-900"
              }
            `}
            >
              {isSent
                ? "Message Sent ✅"
                : isLoading
                  ? "Sending..."
                  : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
