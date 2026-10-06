import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import {
  ASSETS,
  REGIONAL_JURISDICTIONS,
  PLANNER_PROFILE,
} from '../data/planningData';
import { PageBanner } from '../components/PageBanner';
import { ResilientImage } from '../components/ResilientImage';
import { Reveal } from '../components/Reveal';

export const AreasPage: React.FC = () => {
  return (
    <div>
      <PageBanner
        title="Areas We Serve"
        subtitle="Pretoria (City of Tshwane) | Secunda (Govan Mbeki Municipality) | eMbalenhle & Surrounding Areas"
        breadcrumb="Areas We Serve"
        image={ASSETS.mpumalangaCorridor}
      />

      <section className="py-20 bg-white border-b border-[#E2E7E3]">
        <div className="max-w-[1240px] mx-auto px-6">
          <Reveal>
          <div className="max-w-3xl space-y-3 mb-16">
            <div className="text-xs font-bold tracking-wider uppercase text-[#14532D]">
              Where We Work
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111613]">
              Local Town Planning &amp; Municipal Land Use Assistance
            </h2>
            <p className="text-base text-[#37423B] leading-relaxed">
              Every municipality operates under its own Land Use Scheme, Spatial Development Framework, and SPLUMA Planning By-Law. We assist property owners, developers, and business operators across the following primary jurisdictions and their surrounding areas.
            </p>
          </div>
          </Reveal>

          <div className="space-y-16">
            {REGIONAL_JURISDICTIONS.map((region, index) => {
              const isReversed = index % 2 === 1;
              return (
                <Reveal
                  key={region.id}
                  variant={isReversed ? 'reveal-right' : 'reveal-left'}
                >
                <article
                  className="rounded-lg border border-[#DCE3DE] bg-[#F5F7F5] overflow-hidden hover-lift"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div
                      className={`lg:col-span-5 min-h-[280px] lg:min-h-full relative hover-zoom ${
                        isReversed ? 'lg:order-2' : ''
                      }`}
                    >
                      <ResilientImage
                        src={region.image}
                        alt={`${region.name} — ${region.subtitle}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div
                      className={`lg:col-span-7 p-7 sm:p-10 space-y-6 ${
                        isReversed ? 'lg:order-1' : ''
                      }`}
                    >
                      <div className="space-y-2 border-b border-[#DCE3DE] pb-5">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#14532D]">
                          <MapPin className="w-4 h-4" />
                          <span>
                            {region.province} · {region.municipality}
                          </span>
                        </div>
                        <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#111613]">
                          {region.name}
                        </h3>
                        <p className="text-base font-semibold text-[#1F2722]">
                          {region.subtitle}
                        </p>
                      </div>

                      <div className="space-y-3 text-sm text-[#37423B] leading-relaxed">
                        <p>{region.overview}</p>
                        <p>{region.planningContext}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                        <div className="space-y-2.5">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#111613]">
                            Planning Assistance in {region.name}
                          </h4>
                          <ul className="space-y-2 text-xs text-[#2F3A33]">
                            {region.servicesProvided.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 leading-relaxed"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#14532D] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2.5">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#111613]">
                            Suburbs, Townships &amp; Surrounds
                          </h4>
                          <ul className="space-y-2 text-xs text-[#2F3A33]">
                            {region.areasAndSuburbs.map((suburb, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 leading-relaxed"
                              >
                                <span className="text-[#14532D] font-bold">·</span>
                                <span>{suburb}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-5 border-t border-[#DCE3DE] flex flex-wrap items-center justify-between gap-4">
                        <span className="text-xs text-[#46524B]">
                          Have a property in {region.name} or surrounding areas?
                        </span>
                        <Link
                          to={`/contact?area=${encodeURIComponent(region.name)}`}
                          className="px-5 py-2.5 text-xs font-semibold text-white bg-[#14532D] hover:bg-[#0E3B20] rounded inline-flex items-center gap-2 transition-colors whitespace-nowrap pressable arrow-nudge"
                        >
                          Enquire About {region.name}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Call-to-Action */}
      <section className="py-16 bg-[#14532D] text-white">
        <div className="max-w-[1240px] mx-auto px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <Reveal>
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-white">
              Need Planning Assistance in a Surrounding Area?
            </h2>
            <p className="text-sm sm:text-base text-white/90">
              Get in touch with {PLANNER_PROFILE.name} to confirm municipal requirements and how we can assist with your property.
            </p>
          </div>
          </Reveal>
          <Reveal delay={1}>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3 text-sm font-semibold text-[#111613] bg-white hover:bg-[#F3F6F4] rounded transition-colors pressable"
            >
              Contact Us
            </Link>
            <a
              href={PLANNER_PROFILE.phoneHref}
              className="px-6 py-3 text-sm font-semibold text-white border border-white/35 hover:bg-white/10 rounded transition-colors inline-flex items-center gap-2 pressable"
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
