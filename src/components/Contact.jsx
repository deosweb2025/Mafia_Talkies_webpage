import React, { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import SectionHeading from './SectionHeading';
import { siteData } from '../data/siteData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'Table Reservation',
    guests: '2',
    date: '',
    time: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct prefilled WhatsApp booking message
    const message = `Hello Mafia Talkies! I would like to make a reservation:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Experience: ${formData.type}
• Guests: ${formData.guests}
• Date: ${formData.date || 'Today / Next Available'}
• Time: ${formData.time || 'Preferred time'}
• Notes: ${formData.notes || 'None'}`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/91${siteData.contact.whatsapp}?text=${encoded}`;
    
    setSubmitted(true);
    
    // Open WhatsApp after brief feedback
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative bg-[#090A0E] border-t border-[#E5A93C]/10 overflow-hidden"
      aria-label="Reserve a Table or Lounge"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="Reservations & Gatherings"
          title="Book Your Experience"
          subtitle="Reserve a cozy table, lounge by the big screen for music videos, or host your group hangout at Mafia Talkies."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Quick Connect Channels */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="p-6 sm:p-8 rounded-3xl cinema-border bg-[#11131B] space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E5A93C] block mb-1">
                  DIRECT LINE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-['Cinzel',serif]">
                  Speak to Our Host
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 font-light">
                  Have a specific film you want to screen, or celebrating an anniversary? Call us directly.
                </p>
              </div>

              {/* Call Card */}
              <a
                href={siteData.contact.phoneTel}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#171A24] border border-[#E5A93C]/20 hover:border-[#E5A93C] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E5A93C]/15 border border-[#E5A93C]/40 flex items-center justify-center text-[#E5A93C] group-hover:bg-[#E5A93C] group-hover:text-black transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-medium">Telephone</span>
                  <span className="text-white text-base sm:text-lg font-bold font-['Cinzel',serif] group-hover:text-[#E5A93C] transition-colors">
                    {siteData.contact.displayPhone}
                  </span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={siteData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/25 hover:border-emerald-500 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:bg-[#25D366] group-hover:text-black transition-colors shrink-0">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-emerald-400 block font-medium">Instant WhatsApp</span>
                  <span className="text-white text-base sm:text-lg font-bold font-['Cinzel',serif] group-hover:text-emerald-400 transition-colors">
                    Chat on WhatsApp
                  </span>
                </div>
              </a>

              {/* Address Reminder */}
              <div className="pt-4 border-t border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>Arabindapally Vidyasagar Road, Barasat</span>
                </div>
                <div className="text-xs text-[#E5A93C] font-medium pl-5">
                  Opposite Anandabazar Office Gate 3
                </div>
              </div>
            </div>

            {/* Screening Perks Card */}
            <div className="p-5 rounded-2xl bg-[#0D0F15] border border-white/5 space-y-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider block font-['Cinzel',serif]">
                Big Screen Entertainment
              </span>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Enjoy your favorite music videos and visuals on our big projection screen during birthday celebrations or casual hangouts with friends. Advance booking recommended.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Reservation Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl cinema-border bg-[#10121A] text-left">
            
            <div className="mb-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#E5A93C] block mb-1">
                ONLINE RESERVATION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Cinzel',serif]">
                Reserve Table or Lounge
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm font-light mt-1">
                Fill out your details below — this will instantly open WhatsApp to confirm your slot with our desk.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white font-['Cinzel',serif]">
                  Reservation Request Ready!
                </h4>
                <p className="text-sm text-gray-300 max-w-md mx-auto font-light">
                  Opening WhatsApp to finalize your booking with Mafia Talkies. If it doesn't open automatically, click below:
                </p>
                <a
                  href={siteData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider shadow-lg transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Open WhatsApp Now</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="res-name" className="text-xs font-medium text-gray-300 block">
                      Full Name *
                    </label>
                    <input
                      id="res-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181B26] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E5A93C] transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="res-phone" className="text-xs font-medium text-gray-300 block">
                      Phone Number *
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181B26] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E5A93C] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Experience Type */}
                  <div className="space-y-1.5">
                    <label htmlFor="res-type" className="text-xs font-medium text-gray-300 block">
                      Experience Space
                    </label>
                    <select
                      id="res-type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181B26] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E5A93C] transition-colors"
                    >
                      <option value="Table Reservation">Bistro Table (Crystal Salon)</option>
                      <option value="Big Screen Lounge">Big Screen Music Video Lounge</option>
                      <option value="VIP Booth Lounge">VIP Booth Lounge & Hangout</option>
                      <option value="Birthday / Party">Birthday / Celebration Gathering</option>
                    </select>
                  </div>

                  {/* Number of Guests */}
                  <div className="space-y-1.5">
                    <label htmlFor="res-guests" className="text-xs font-medium text-gray-300 block">
                      Number of Guests
                    </label>
                    <select
                      id="res-guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181B26] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E5A93C] transition-colors"
                    >
                      <option value="1-2">1 – 2 People</option>
                      <option value="3-4">3 – 4 People</option>
                      <option value="5-8">5 – 8 People (VIP Booth)</option>
                      <option value="8+ Group">8+ Group (Lounge Area)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label htmlFor="res-date" className="text-xs font-medium text-gray-300 block">
                      Preferred Date
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181B26] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E5A93C] transition-colors"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div className="space-y-1.5">
                    <label htmlFor="res-time" className="text-xs font-medium text-gray-300 block">
                      Preferred Time Slot
                    </label>
                    <select
                      id="res-time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181B26] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E5A93C] transition-colors"
                    >
                      <option value="11:00 AM - 1:00 PM">Morning (11:00 AM – 1:00 PM)</option>
                      <option value="1:00 PM - 4:00 PM">Afternoon (1:00 PM – 4:00 PM)</option>
                      <option value="4:00 PM - 7:00 PM">Evening Prime (4:00 PM – 7:00 PM)</option>
                      <option value="7:00 PM - 10:30 PM">Evening / Night (7:00 PM – 10:30 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-1.5">
                  <label htmlFor="res-notes" className="text-xs font-medium text-gray-300 block">
                    Special Requests / Music Choice (Optional)
                  </label>
                  <textarea
                    id="res-notes"
                    rows={3}
                    placeholder="E.g., favorite music videos or songs to play, anniversary/birthday decoration, table preferences, etc."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#181B26] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E5A93C] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FDE68A] via-[#E5A93C] to-[#B47313] hover:from-[#FFF1A8] hover:to-[#CE8E25] shadow-xl shadow-[#E5A93C]/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Booking Request via WhatsApp</span>
                </button>

                <p className="text-[11px] text-gray-400 text-center font-light">
                  Instant confirmation &bull; No upfront prepayment required &bull; Direct host contact
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
