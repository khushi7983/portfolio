function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-200 text-center mb-12 animate-fade-in-down">
          Let's Connect
        </h2>
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl shadow-2xl">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-gray-700 rounded-lg border border-teal-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 outline-none text-gray-200 placeholder-gray-400 transition-all"
              aria-label="Your Name"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-gray-700 rounded-lg border border-teal-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 outline-none text-gray-200 placeholder-gray-400 transition-all"
              aria-label="Your Email"
            />
           
            <textarea
              placeholder="Your Message"
              className="w-full p-4 bg-gray-700 rounded-lg border border-teal-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 outline-none text-gray-200 placeholder-gray-400 h-32 resize-none transition-all"
              aria-label="Your Message"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all transform hover:-translate-y-1 shadow-md"
            >
              Send Message
            </button>
          </form>
          {/* <div className="mt-10 text-center text-gray-300">
            <p>
              Email: <a href="mailto:khushipanwargzb@gmail.com" className="text-teal-300 hover:text-teal-200 transition">khushipanwargzb@gmail.com</a>
            </p>
            <p className="mt-2">
              <a href="https://calendly.com" className="text-teal-300 hover:text-teal-200 transition">Schedule a Chat</a>
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;