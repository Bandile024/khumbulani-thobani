import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
} from 'lucide-react';
import {
  ASSETS,
  PLANNING_SERVICES,
  PLANNER_PROFILE,
} from '../data/planningData';
import { PageBanner } from '../components/PageBanner';
import { Reveal } from '../components/Reveal';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('Pretoria (City of Tshwane)');
  const [service, setService] = useState(PLANNING_SERVICES[0].title);
  const [propertyAddress, setPropertyAddress] = useState('');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [website, setWebsite] = useState('');

  useEffect(() => {
    const queryService = searchParams.get('service');
    if (queryService) {
      const matched = PLANNING_SERVICES.find(
        (s) => s.title.toLowerCase() === queryService.toLowerCase()
      );
      if (matched) {
        setService(matched.title);
      }
    }

    const queryArea = searchParams.get('area');
    if (queryArea) {
      if (queryArea.toLowerCase().includes('pretoria')) {
        setArea('Pretoria (City of Tshwane)');
      } else if (queryArea.toLowerCase().includes('secunda')) {
        setArea('Secunda (Govan Mbeki Municipality)');
      } else if (queryArea.toLowerCase().includes('embalenhle')) {
        setArea('eMbalenhle & Surrounding Areas');
      }
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSubmitError(null);

    if (!fullName.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }

    const cleanedPhone = phone.replace(/\s+/g, '');
    if (cleanedPhone.length < 9 || !/^[+0-9()-]+$/.test(cleanedPhone)) {
      setErrorMsg('Please enter a valid contact telephone number.');
      return;
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!message.trim() && !propertyAddress.trim()) {
      setErrorMsg(
        'Please include your property details or a short message describing how we can assist.'
      );
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          area,
          service,
          propertyAddress,
          message,
          website,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.ok) {
        setSubmitError(
          data?.error ||
            'We could not send your enquiry. Please try again or contact us directly.'
        );
        setStatus('idle');
        return;
      }

      setStatus('sent');
    } catch {
      setSubmitError(
        'We could not reach the server. Please check your connection and try again.'
      );
      setStatus('idle');
    }
  };

  const getWhatsAppUrl = () => {
    const lines = [
      `Hello Khumbulani, I would like to enquire about town planning services:`,
      `Name: ${fullName}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : '',
      `Area: ${area}`,
      `Service: ${service}`,
      propertyAddress ? `Property / Erf: ${propertyAddress}` : '',
      message ? `Enquiry: ${message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    return `https://wa.me/27722516358?text=${encodeURIComponent(lines)}`;
  };

  const getMailtoUrl = () => {
    const subject = `Town Planning Enquiry: ${service} (${area})`;
    const body = [
      `Dear Khumbulani Thobani,`,
      ``,
      `I would like to enquire about town planning assistance for my property:`,
      ``,
      `Name: ${fullName}`,
      `Phone: ${phone}`,
      `Email: ${email || 'Not provided'}`,
      `Area / Municipality: ${area}`,
      `Service Needed: ${service}`,
      `Property Erf / Address: ${propertyAddress || 'To be confirmed'}`,
      ``,
      `Message:`,
      `${message}`,
    ].join('\n');

    return `mailto:${PLANNER_PROFILE.emailLower}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div>
      <PageBanner
        title="Contact Us"
        subtitle="Whether you are looking to change the use of your property, develop, subdivide, or understand your zoning, get in touch to discuss your planning requirements."
        breadcrumb="Contact Us"
        image={ASSETS.tshwanePrecinct}
      />

      <section className="py-20 bg-white border-b border-[#E2E7E3]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact Details */}
            <Reveal variant="reveal-left">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="text-xs font-bold tracking-wider uppercase text-[#14532D]">
                  Need Help With Your Property?
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111613]">
                  Get in Touch to Discuss Your Planning Requirements
                </h2>
                <p className="text-base text-[#37423B] leading-relaxed">
                  Whether you are looking to{' '}
                  <strong className="font-semibold text-[#111613]">
                    change the use of your property, develop, subdivide, or understand your zoning
                  </strong>
                  , get in touch to discuss your planning requirements.
                </p>
              </div>

              <div className="bg-[#F5F7F5] border border-[#DCE3DE] rounded-lg p-7 space-y-6">
                <div className="border-b border-[#DCE3DE] pb-5">
                  <h3 className="font-display text-2xl font-bold text-[#111613]">
                    {PLANNER_PROFILE.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#14532D] mt-0.5">
                    {PLANNER_PROFILE.role}
                  </p>
                  <p className="text-xs text-[#46524B] mt-1">
                    SACPLAN Registered: {PLANNER_PROFILE.sacplanNumber} · {PLANNER_PROFILE.almaMater}
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-[#14532D] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-[#46524B]">
                        Telephone &amp; WhatsApp
                      </div>
                      <a
                        href={PLANNER_PROFILE.phoneHref}
                        className="font-semibold text-[#111613] hover:text-[#14532D] text-base transition-colors"
                      >
                        {PLANNER_PROFILE.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-[#14532D] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-[#46524B]">Email Address</div>
                      <a
                        href={`mailto:${PLANNER_PROFILE.emailLower}`}
                        className="font-semibold text-[#111613] hover:text-[#14532D] break-all transition-colors"
                      >
                        {PLANNER_PROFILE.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-[#14532D] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-[#46524B]">Areas We Serve</div>
                      <div className="font-medium text-[#111613]">
                        Pretoria (City of Tshwane) | Secunda | eMbalenhle &amp; Surrounding Areas
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#DCE3DE] grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={PLANNER_PROFILE.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 text-xs font-semibold text-white bg-[#14532D] hover:bg-[#0E3B20] rounded inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                  <a
                    href={PLANNER_PROFILE.phoneHref}
                    className="px-4 py-2.5 text-xs font-semibold text-[#111613] bg-white hover:bg-[#EBF0EC] border border-[#DCE3DE] rounded inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#14532D]" />
                    Call {PLANNER_PROFILE.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
            </Reveal>

            {/* Right Column: Contact & Property Enquiry Form */}
            <Reveal variant="reveal-right" delay={1}>
            <div className="lg:col-span-7">
              <div className="bg-[#F5F7F5] border border-[#DCE3DE] rounded-lg p-7 sm:p-10">
                {status !== 'sent' ? (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="border-b border-[#DCE3DE] pb-4">
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#111613]">
                        Send Us an Enquiry
                      </h3>
                      <p className="text-xs text-[#46524B] mt-1">
                        Complete the form below with your contact details and property requirements, and we will get back to you promptly.
                      </p>
                    </div>

                    {errorMsg && (
                      <div
                        role="alert"
                        className="p-3.5 rounded bg-red-50 border border-red-200 text-xs font-medium text-red-800"
                      >
                        {errorMsg}
                      </div>
                    )}

                    {submitError && (
                      <div
                        role="alert"
                        className="p-3.5 rounded bg-red-50 border border-red-200 text-xs font-medium text-red-800"
                      >
                        {submitError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-semibold text-[#111613]"
                        >
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your full name"
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CED7D1] rounded focus:outline-none focus:border-[#14532D]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs font-semibold text-[#111613]"
                        >
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="072 251 6358"
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CED7D1] rounded focus:outline-none focus:border-[#14532D]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-semibold text-[#111613]"
                        >
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CED7D1] rounded focus:outline-none focus:border-[#14532D]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-area"
                          className="block text-xs font-semibold text-[#111613]"
                        >
                          Area / Municipality *
                        </label>
                        <select
                          id="contact-area"
                          value={area}
                          onChange={(e) => setArea(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CED7D1] rounded focus:outline-none focus:border-[#14532D]"
                        >
                          <option value="Pretoria (City of Tshwane)">
                            Pretoria (City of Tshwane &amp; Surrounds)
                          </option>
                          <option value="Secunda (Govan Mbeki Municipality)">
                            Secunda (Govan Mbeki Municipality)
                          </option>
                          <option value="eMbalenhle & Surrounding Areas">
                            eMbalenhle &amp; Surrounding Areas
                          </option>
                          <option value="Surrounding Area / Other">
                            Other / Surrounding Area
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-service"
                          className="block text-xs font-semibold text-[#111613]"
                        >
                          Service Needed *
                        </label>
                        <select
                          id="contact-service"
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CED7D1] rounded focus:outline-none focus:border-[#14532D]"
                        >
                          {PLANNING_SERVICES.map((item) => (
                            <option key={item.slug} value={item.title}>
                              {item.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-erf"
                          className="block text-xs font-semibold text-[#111613]"
                        >
                          Erf / Stand Number or Suburb
                        </label>
                        <input
                          id="contact-erf"
                          type="text"
                          value={propertyAddress}
                          onChange={(e) => setPropertyAddress(e.target.value)}
                          placeholder="e.g. Erf 204, Secunda / Pretoria"
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CED7D1] rounded focus:outline-none focus:border-[#14532D]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold text-[#111613]"
                      >
                        Your Planning Requirements *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please tell us briefly about your property and what you would like to achieve..."
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CED7D1] rounded focus:outline-none focus:border-[#14532D]"
                      />
                    </div>

                    {/* Honeypot: hidden from people, catches naive bots. */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="contact-website">Website</label>
                      <input
                        id="contact-website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="px-6 py-3.5 text-sm font-semibold text-white bg-[#14532D] hover:bg-[#0E3B20] rounded inline-flex items-center gap-2 transition-colors cursor-pointer pressable disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'sending' ? 'Sending…' : 'Submit Enquiry'}
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-6 py-4">
                    <div className="flex items-center gap-2.5 text-[#14532D]">
                      <CheckCircle2 className="w-6 h-6" />
                      <h3 className="font-display text-2xl font-bold text-[#111613]">
                        Enquiry Sent
                      </h3>
                    </div>

                    <p className="text-sm text-[#37423B] leading-relaxed">
                      Thank you, <strong className="text-[#111613]">{fullName}</strong>. Your enquiry regarding{' '}
                      <strong className="text-[#111613]">{service}</strong> in{' '}
                      <strong className="text-[#111613]">{area}</strong> has been emailed to{' '}
                      {PLANNER_PROFILE.name} and we will be in touch shortly. For anything urgent, reach us directly using the options below.
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 text-xs font-semibold text-white bg-[#14532D] hover:bg-[#0E3B20] rounded inline-flex items-center gap-2 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Send via WhatsApp ({PLANNER_PROFILE.phoneDisplay})
                      </a>
                      <a
                        href={getMailtoUrl()}
                        className="px-5 py-3 text-xs font-semibold text-[#111613] bg-white hover:bg-[#EBF0EC] border border-[#DCE3DE] rounded inline-flex items-center gap-2 transition-colors"
                      >
                        <Mail className="w-4 h-4 text-[#14532D]" />
                        Send via Email ({PLANNER_PROFILE.email})
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};
