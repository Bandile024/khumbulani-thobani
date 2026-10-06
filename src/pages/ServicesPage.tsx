import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import {
  ASSETS,
  PLANNING_SERVICES,
  PLANNER_PROFILE,
} from '../data/planningData';
import { PageBanner } from '../components/PageBanner';
import { Reveal } from '../components/Reveal';

export const ServicesPage: React.FC = () => {
  return (
    <div>
      <PageBanner
        title="Our Services"
        subtitle="We assist clients with land use management, town planning applications and municipal planning requirements across Pretoria, Secunda, eMbalenhle and surrounding areas."
        breadcrumb="Our Services"
        image={ASSETS.cadastralPlans}
      />

      {/* Main Services Listing */}
      <section className="py-20 bg-white border-b border-[#E2E7E3]">
        <div className="max-w-[1240px] mx-auto px-6">
          <Reveal>
          <div className="max-w-3xl space-y-3 mb-14">
            <div className="text-xs font-bold tracking-wider uppercase text-[#14532D]">
              Town Planning &amp; Land Use Management
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111613]">
              Comprehensive Assistance for Property Owners, Developers &amp; Businesses
            </h2>
            <p className="text-base text-[#37423B] leading-relaxed">
              Whether you need to change the zoning of a stand, apply for a special consent use, subdivide land, or verify development rights before buying a property, we provide practical town planning guidance tailored to municipal requirements.
            </p>
          </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PLANNING_SERVICES.map((service, index) => (
              <Reveal key={service.slug} delay={index}>
              <article
                className="bg-[#F5F7F5] border border-[#DCE3DE] rounded-lg p-7 sm:p-8 flex flex-col justify-between hover:border-[#14532D] transition-colors hover-lift"
              >
                <div className="space-y-4">
                  <div className="w-12 h-1 bg-[#14532D]" />
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#111613]">
                    <Link
                      to={`/services/${service.slug}`}
                      className="hover:text-[#14532D] transition-colors"
                    >
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-base font-medium text-[#1F2722] leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <p className="text-sm text-[#46524B] leading-relaxed">
                    {service.overviewParagraphs[0]}
                  </p>

                  <div className="pt-3 border-t border-[#DCE3DE] space-y-2">
                    <div className="text-xs font-semibold text-[#111613]">
                      Typical Applications &amp; Scenarios:
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#37423B]">
                      {service.whenRequired.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#14532D] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#DCE3DE] flex flex-wrap items-center justify-between gap-4">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm font-semibold text-[#14532D] hover:text-[#0E3B20] inline-flex items-center gap-1.5 transition-colors arrow-nudge"
                  >
                    Read Full Service Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#14532D] hover:bg-[#0E3B20] rounded transition-colors whitespace-nowrap pressable"
                  >
                    Enquire Now
                  </Link>
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Corporate Band */}
      <section className="py-20 surface-stone border-b border-[#E2E7E3]">
        <div className="max-w-[1240px] mx-auto px-6">
          <Reveal>
          <div className="max-w-2xl space-y-2 mb-12">
            <div className="text-xs font-bold tracking-wider uppercase text-[#14532D]">
              Our Approach
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111613]">
              How We Assist With Your Planning Application
            </h2>
            <p className="text-base text-[#37423B]">
              A structured, transparent process from initial property enquiry through to municipal submission.
            </p>
          </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Reveal delay={0}>
            <div className="bg-white p-6 rounded-lg border border-[#DCE3DE] space-y-2.5 hover-lift">
              <div className="text-xs font-bold uppercase tracking-wider text-[#14532D]">
                Step 1
              </div>
              <h3 className="font-display text-xl font-bold text-[#111613]">
                Property &amp; Title Deed Review
              </h3>
              <p className="text-xs text-[#46524B] leading-relaxed">
                We examine your property's current zoning, Title Deed conditions, and municipal spatial policies to confirm feasibility.
              </p>
            </div>
            </Reveal>

            <Reveal delay={1}>
            <div className="bg-white p-6 rounded-lg border border-[#DCE3DE] space-y-2.5 hover-lift">
              <div className="text-xs font-bold uppercase tracking-wider text-[#14532D]">
                Step 2
              </div>
              <h3 className="font-display text-xl font-bold text-[#111613]">
                Application Preparation
              </h3>
              <p className="text-xs text-[#46524B] leading-relaxed">
                We compile the motivational memorandum, statutory forms, locality plans, and supporting annexures required by the municipality.
              </p>
            </div>
            </Reveal>

            <Reveal delay={2}>
            <div className="bg-white p-6 rounded-lg border border-[#DCE3DE] space-y-2.5 hover-lift">
              <div className="text-xs font-bold uppercase tracking-wider text-[#14532D]">
                Step 3
              </div>
              <h3 className="font-display text-xl font-bold text-[#111613]">
                Submission &amp; Notices
              </h3>
              <p className="text-xs text-[#46524B] leading-relaxed">
                We lodge the application with the local authority and manage required public participation notices and neighbour notifications.
              </p>
            </div>
            </Reveal>

            <Reveal delay={3}>
            <div className="bg-white p-6 rounded-lg border border-[#DCE3DE] space-y-2.5 hover-lift">
              <div className="text-xs font-bold uppercase tracking-wider text-[#14532D]">
                Step 4
              </div>
              <h3 className="font-display text-xl font-bold text-[#111613]">
                Municipal Follow-Up
              </h3>
              <p className="text-xs text-[#46524B] leading-relaxed">
                We track departmental comments, respond to municipal queries, and guide you through to the final planning decision.
              </p>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#14532D] text-white">
        <div className="max-w-[1240px] mx-auto px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <Reveal>
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-white">
              Unsure Which Planning Service Applies to Your Stand?
            </h2>
            <p className="text-sm sm:text-base text-white/90">
              Contact {PLANNER_PROFILE.name} ({PLANNER_PROFILE.role}) to discuss your property in Pretoria, Secunda, or eMbalenhle.
            </p>
          </div>
          </Reveal>
          <Reveal delay={1}>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3 text-sm font-semibold text-[#111613] bg-white hover:bg-[#F3F6F4] rounded transition-colors pressable"
            >
              Request Planning Advice
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
