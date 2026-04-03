import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form submitted to crowshine01@gmail.com:', formData);
    
    // Clear form and show success
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6"
          >
            Get in Touch
          </motion.h1>
          <p className="text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            Have questions about our products or interested in a partnership? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-neutral-light rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-teal w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-2">Our Location</h3>
                  <p className="text-neutral-dark/70 leading-relaxed">
                    {COMPANY_INFO.address.street}<br />
                    {COMPANY_INFO.address.estate}<br />
                    {COMPANY_INFO.address.poBox}<br />
                    {COMPANY_INFO.address.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-neutral-light rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="text-brand-teal w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-2">Phone Numbers</h3>
                  <div className="space-y-1">
                    {COMPANY_INFO.phones.map((phone) => (
                      <p key={phone} className="text-neutral-dark/70">{phone}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-neutral-light rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="text-brand-teal w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-2">Email Address</h3>
                  <p className="text-neutral-dark/70">{COMPANY_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-neutral-light rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="text-brand-teal w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-2">Business Hours</h3>
                  <p className="text-neutral-dark/70">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-neutral-dark/70">Saturday: 8:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-neutral-light rounded-3xl overflow-hidden relative border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-dark/30 flex-col space-y-2">
                <MapPin size={40} />
                <span className="font-medium">Industrial Area, Nairobi</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-neutral-light p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                >
                  <div className="w-20 h-20 bg-brand-mint/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-brand-accent w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-dark mb-2">Message Sent!</h3>
                    <p className="text-neutral-dark/70">
                      Thank you for your inquiry. Your message has been sent to <strong>{COMPANY_INFO.email}</strong>. We will get back to you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-brand-teal font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-2xl font-bold text-neutral-dark mb-8">Send us a Message</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-neutral-dark/70">Full Name *</label>
                        <input
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all bg-white"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-neutral-dark/70">Email Address *</label>
                        <input
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          type="email"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all bg-white"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-neutral-dark/70">Phone Number (Optional)</label>
                        <input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          type="tel"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all bg-white"
                          placeholder="+254 700 000000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-neutral-dark/70">Subject</label>
                        <input
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all bg-white"
                          placeholder="Product Inquiry"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-neutral-dark/70">Message *</label>
                      <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all bg-white resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-brand-teal text-white py-4 rounded-xl font-bold hover:bg-brand-dark transition-all flex items-center justify-center space-x-2 shadow-lg shadow-brand-teal/20"
                    >
                      <span>Send Message</span>
                      <Send size={18} />
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
