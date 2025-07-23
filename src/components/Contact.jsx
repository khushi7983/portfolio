import React, { useState } from 'react';
import { Mail, Send, MessageCircle, User, MapPin, Phone, Github, Linkedin, Calendar, CheckCircle } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "khushipanwargzb@gmail.com",
      link: "mailto:khushipanwargzb@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Ghaziabad, India",
      link: null
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Availability",
      value: "Open to opportunities",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      link: "https://github.com/khushi7983"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/yourprofile"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-100 to-cyan-200 mb-3">
            Let's Connect
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xl font-semibold text-teal-100 mb-4">Contact Information</h3>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-teal-400/50 transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium">{info.label}</p>
                    {info.link ? (
                      <a href={info.link} className="text-teal-200 hover:text-teal-100 transition-colors text-sm">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-lg font-medium text-teal-100 mb-3">Connect With Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-teal-400/50 flex items-center justify-center text-gray-400 hover:text-teal-300 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/20"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700/50 shadow-2xl relative overflow-hidden">
              {/* Form Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2314b8a6' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-emerald-600/90 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-white mx-auto mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-teal-100">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                </div>
              )}

              <form className="space-y-6 relative" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                    <User className={`w-5 h-5 transition-colors duration-300 ${focusedField === 'name' || formData.name ? 'text-teal-400' : 'text-gray-500'}`} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your Name"
                    className="w-full pl-12 pr-4 py-4 bg-gray-700/80 rounded-lg border border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none text-gray-200 placeholder-gray-400 transition-all duration-300 hover:bg-gray-700"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                    <Mail className={`w-5 h-5 transition-colors duration-300 ${focusedField === 'email' || formData.email ? 'text-teal-400' : 'text-gray-500'}`} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your Email"
                    className="w-full pl-12 pr-4 py-4 bg-gray-700/80 rounded-lg border border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none text-gray-200 placeholder-gray-400 transition-all duration-300 hover:bg-gray-700"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <div className="absolute left-4 top-6 z-10">
                    <MessageCircle className={`w-5 h-5 transition-colors duration-300 ${focusedField === 'message' || formData.message ? 'text-teal-400' : 'text-gray-500'}`} />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your Message"
                    rows="5"
                    className="w-full pl-12 pr-4 py-4 bg-gray-700/80 rounded-lg border border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none text-gray-200 placeholder-gray-400 resize-none transition-all duration-300 hover:bg-gray-700"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg hover:from-teal-500 hover:to-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 font-medium"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;