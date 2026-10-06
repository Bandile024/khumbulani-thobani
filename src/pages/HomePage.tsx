import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import {
  ASSETS,
  CUSTOM_MEDIA,
  PLANNING_SERVICES,
  REGIONAL_JURISDICTIONS,
  PLANNER_PROFILE,
} from '../data/planningData';
import { ResilientImage } from '../components/ResilientImage';
import { Reveal } from '../components/Reveal';

export const HomePage: React.FC = () => {
  return (
    <div>
        {/* Hero Banner — Corporate Town Planning Look & Feel + Dedicated Right-Side Portrait/Image Space */}
      <section className="relative bg-[#111613] text-white overflow-hidden border-b border-[#1E2923]">
        <div className="absolute inset-0 opacity-25">
          <ResilientImage
            src={ASSETS.tshwanePrecinct}
            alt="Pretoria and Mpumalanga Town Planning"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B110E]/95 via-[#0B110E]/90 to-[#14532D]/75" />

        <div className="relative max-w-[1240px] mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs sm:text-sm font-semibold tracking-wide text-[#86EFAC] uppercase animate-fade-in-up">
                Town Planning &amp; Land Use Management Services
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.08] tracking-tight text-white animate-fade-in-up delay-1">
                Professional Planning Assistance for Property Owners, Developers &amp; Businesses
              </h1>

              <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl animate-fade-in-up delay-2">
                We assist clients with land use management, town planning applications and municipal planning requirements across{' '}
                <strong className="text-white font-semibold">
                  Pretoria, Secunda, eMbalenhle and surrounding areas
                </strong>
                .
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 animate-fade-in-up delay-3">
                <Link
                  to="/services"
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-[#14532D] hover:bg-[#166534] border border-[#22C55E]/30 rounded transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0 pressable arrow-nudge"
                >
                  Explore Our Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3.5 text-sm font-semibold text-[#111613] bg-white hover:bg-[#F3F6F4] rounded transition-colors whitespace-nowrap shrink-0 pressable"
                >
                  Contact Us Today
                </Link>
              </div>

              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/90 animate-fade-in-up delay-4">
                <a
                  href={PLANNER_PROFILE.phoneHref}
                  className="inline-flex items-center gap-2 hover:text-[#86EFAC] transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 text-[#86EFAC]" />
                  {PLANNER_PROFILE.phoneDisplay}
                </a>
                <a
                  href={`mailto:${PLANNER_PROFILE.emailLower}`}
                  className="inline-flex items-center gap-2 hover:text-[#86EFAC] transition-colors font-medium"
                >
                  <Mail className="w-4 h-4 text-[#86EFAC]" />
                  {PLANNER_PROFILE.email}
                </a>
              </div>
            </div>

            {/* =================================================================
                RIGHT COLUMN: HERO VIDEO SLOT
                How to insert your video in VS Code:
                1. Drop your video into the `public/` folder as `public/hero-video.mp4`
                   OR change `src="/hero-video.mp4"` below to your video path.
               ================================================================= */}
            <div className="lg:col-span-5 animate-scale-in delay-2">
              <div className="rounded-lg overflow-hidden border-2 border-white/15 bg-[#161F1A] shadow-2xl hover-lift">
                <div className="aspect-[4/5] w-full relative">
                  <video
                    src={CUSTOM_MEDIA.heroVideoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover object-center"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Introduction Section (TownPlanner.co.za style two-column overview) */}
      <section className="py-20 bg-white border-b border-[#E2E7E3]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal variant="reveal-left">
            <div className="lg:col-span-6 space-y-5">
              <div className="text-xs font-bold tracking-wider uppercase text-[#14532D]">
                Practical Town Planning &amp; Land Use Management
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111613] leading-tight">
                Helping You Unlock &amp; Regularise the Potential of Your Property
              </h2>
              <p className="text-base text-[#37423B] leading-relaxed">
                Every property in South Africa is subject to municipal Land Use Schemes, by-laws, and Title Deed conditions that regulate how land and buildings may be used or developed. Whether you are looking to rezone a property, apply for a special consent use, subdivide a stand, or verify zoning rights prior to purchase, professional town planning input ensures your application meets statutory standards.
              </p>
              <p className="text-base text-[#37423B] leading-relaxed">
                Led by{' '}
                <strong className="font-semibold text-[#111613]">
                  {PLANNER_PROFILE.name}
                </strong>{' '}
                ({PLANNER_PROFILE.role}, SACPLAN Reg: {PLANNER_PROFILE.sacplanNumber}), we provide straightforward, reliable assistance to property owners, developers, and businesses navigating municipal planning processes.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#1F2722]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#14532D] shrink-0" />
                  <span>SACPLAN Registered ({PLANNER_PROFILE.sacplanNumber})</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#14532D] shrink-0" />
                  <span>University of Pretoria Trained</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#14532D] shrink-0" />
                  <span>Tshwane &amp; Govan Mbeki Specialists</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#14532D] shrink-0" />
                  <span>End-to-End Application Management</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#14532D] hover:text-[#0E3B20] transition-colors"
                >
                  Read More About the Planner
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            </Reveal>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Reveal delay={0} variant="reveal-scale">
                <div className="rounded-lg overflow-hidden border border-[#DCE3DE] hover-lift hover-zoom">
                  <ResilientImage
                    src={ASSETS.cadastralPlans}
                    alt="Town planning zoning maps and subdivision plans"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-5 bg-[#F5F7F5]">
                    <h3 className="font-display text-xl font-bold text-[#111613]">
                      Statutory Applications
                    </h3>
                    <p className="text-xs text-[#46524B] mt-1.5 leading-relaxed">
                      Rezoning, consent uses, subdivisions, consolidations, and removal of restrictive conditions.
                    </p>
                  </div>
                </div>
                </Reveal>

                <Reveal delay={1} variant="reveal-scale">
                <div className="rounded-lg overflow-hidden border border-[#DCE3DE] hover-lift hover-zoom">
                  <ResilientImage
                    src={ASSETS.mpumalangaCorridor}
                    alt="Property development planning and compliance"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-5 bg-[#F5F7F5]">
                    <h3 className="font-display text-xl font-bold text-[#111613]">
                      Advisory &amp; Compliance
                    </h3>
                    <p className="text-xs text-[#46524B] mt-1.5 leading-relaxed">
                      Land use enquiries, municipal by-law compliance, and pre-development planning assessments.
                    </p>
                  </div>
                </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Summary Grid — Links to Designated Service Pages */}
      <section className="py-20 surface-stone border-b border-[#E2E7E3]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <Reveal>
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-bold tracking-wider uppercase text-[#14532D]">
                What We Offer
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111613]">
                Our Town Planning Services
              </h2>
              <p className="text-base text-[#37423B]">
                Select any service below to view detailed information on how we assist property owners, developers, and businesses.
              </p>
            </div>
            </Reveal>
            <Reveal delay={1}>
            <Link
              to="/services"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#14532D] hover:bg-[#0E3B20] rounded transition-colors inline-flex items-center gap-2 self-start md:self-auto whitespace-nowrap shrink-0 pressable arrow-nudge"
            >
              View Full Services Page
              <ArrowRight className="w-4 h-4" />
            </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLANNING_SERVICES.map((service, index) => (
              <Reveal key={service.slug} delay={index}>
              <div
                className="bg-white border border-[#DCE3DE] rounded-lg p-6 flex flex-col justify-between hover:border-[#14532D] transition-colors hover-lift"
              >
                <div className="space-y-3">
                  <div className="w-10 h-1 bg-[#14532D]" />
                  <h3 className="font-display text-2xl font-bold text-[#111613] leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#46524B] leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EBF0EC]">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-semibold text-[#14532D] hover:text-[#0E3B20] inline-flex items-center gap-1.5 transition-colors arrow-nudge"
                  >
                    Read More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve Overview — Links to Designated Areas Page */}
      <section className="py-20 bg-white border-b border-[#E2E7E3]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <Reveal>
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-bold tracking-wider uppercase text-[#14532D]">
                Regional Footprint
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111613]">
                Areas We Serve
              </h2>
              <p className="text-base text-[#37423B]">
                We provide local town planning and land use assistance across Gauteng and Mpumalanga, focusing on the following municipalities and surrounding communities.
              </p>
            </div>
            </Reveal>
            <Reveal delay={1}>
            <Link
              to="/areas"
              className="px-5 py-2.5 text-sm font-semibold text-[#111613] bg-[#F5F7F5] hover:bg-[#E6ECE8] border border-[#D5DDD7] rounded transition-colors inline-flex items-center gap-2 self-start md:self-auto whitespace-nowrap shrink-0 pressable arrow-nudge"
            >
              Explore Areas We Serve
              <ArrowRight className="w-4 h-4" />
            </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REGIONAL_JURISDICTIONS.map((region, index) => (
              <Reveal key={region.id} delay={index}>
              <div
                className="rounded-lg overflow-hidden border border-[#DCE3DE] bg-[#F5F7F5] flex flex-col justify-between hover-lift"
              >
                <div>
                  <div className="h-48 overflow-hidden relative hover-zoom">
                    <ResilientImage
                      src={region.image}
                      alt={`${region.name} — ${region.subtitle}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#14532D]">
                      <MapPin className="w-4 h-4" />
                      <span>{region.province}</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#111613]">
                      {region.name}
                    </h3>
                    <p className="text-sm font-medium text-[#2F3A33]">
                      {region.subtitle}
                    </p>
                    <p className="text-xs text-[#46524B] leading-relaxed pt-1">
                      {region.overview}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-white border-t border-[#DCE3DE]">
                  <Link
                    to="/areas"
                    className="text-xs font-semibold text-[#14532D] hover:text-[#0E3B20] inline-flex items-center gap-1.5 arrow-nudge"
                  >
                    View {region.name} Planning Coverage
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Need Help With Your Property? Corporate Call-to-Action Strip */}
      <section className="py-16 bg-[#14532D] text-white">
        <div className="max-w-[1240px] mx-auto px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <Reveal>
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Need Help With Your Property?
            </h2>
            <p className="text-base text-white/90 leading-relaxed">
              Whether you are looking to{' '}
              <strong className="font-semibold text-white">
                change the use of your property, develop, subdivide, or understand your zoning
              </strong>
              , get in touch to discuss your planning requirements.
            </p>
          </div>
          </Reveal>

          <Reveal delay={1}>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3.5 text-sm font-semibold text-[#111613] bg-white hover:bg-[#F3F6F4] rounded transition-colors inline-flex items-center gap-2 whitespace-nowrap pressable arrow-nudge"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={PLANNER_PROFILE.phoneHref}
              className="px-6 py-3.5 text-sm font-semibold text-white border border-white/35 hover:bg-white/10 rounded transition-colors inline-flex items-center gap-2 whitespace-nowrap pressable"
            >
              <Phone className="w-4 h-4" />
              {PLANNER_PROFILE.phoneDisplay}
            </a>
          </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
