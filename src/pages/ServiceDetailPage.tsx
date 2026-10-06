import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, Phone, Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import { PLANNING_SERVICES, PLANNER_PROFILE } from '../data/planningData';
import { PageBanner } from '../components/PageBanner';
import { ResilientImage } from '../components/ResilientImage';
import { Reveal } from '../components/Reveal';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = PLANNING_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div>
      <PageBanner
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumb={service.title}
        parentBreadcrumb={{ label: 'Our Services', to: '/services' }}
        image={service.image}
      />

      <section className="py-16 md:py-22 bg-white border-b border-[#E2E7E3]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Content Column (TownPlanner.co.za style detailed service breakdown) */}
            <Reveal>
            <div className="lg:col-span-8 space-y-8">
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14532D] hover:underline"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to All Town Planning Services
              </Link>

              <div className="space-y-4">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111613]">
                  Overview: {service.title}
                </h2>
                {service.overviewParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base text-[#37423B] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="rounded-lg overflow-hidden border border-[#DCE3DE]">
                <ResilientImage
                  src={service.image}
                  alt={service.title}
                  className="w-full h-72 object-cover"
                />
              </div>

              {/* When Required */}
              <div className="bg-[#F5F7F5] border border-[#DCE3DE] rounded-lg p-7 space-y-4">
                <h3 className="font-display text-2xl font-bold text-[#111613]">
                  When Do You Need {service.title}?
                </h3>
                <ul className="space-y-3 text-sm text-[#2F3A33]">
                  {service.whenRequired.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#14532D] shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How We Assist */}
              <div className="space-y-4 pt-2">
                <h3 className="font-display text-2xl font-bold text-[#111613]">
                  How We Assist You
                </h3>
                <p className="text-sm text-[#46524B]">
                  We provide practical, step-by-step assistance across Pretoria (City of Tshwane), Secunda, eMbalenhle (Govan Mbeki Municipality) and surrounding areas:
                </p>
                <ul className="space-y-3 text-sm text-[#2F3A33]">
                  {service.howWeAssist.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#14532D] shrink-0 mt-1" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom In-Article Call to Action */}
              <div className="p-7 rounded-lg bg-[#111613] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-1.5">
                  <h4 className="font-display text-2xl font-bold text-white">
                    Need Assistance With {service.title}?
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80">
                    Speak directly with {PLANNER_PROFILE.name} to discuss your property and municipal requirements.
                  </p>
                </div>
                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="px-5 py-3 text-xs font-semibold text-white bg-[#14532D] hover:bg-[#166534] rounded inline-flex items-center gap-2 whitespace-nowrap shrink-0 pressable arrow-nudge"
                >
                  Enquire About This Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            </Reveal>

            {/* Sidebar Column (Service Navigation + Direct Planner Card) */}
            <Reveal delay={1}>
            <aside className="lg:col-span-4 space-y-8">
              {/* All Services Sidebar Directory */}
              <div className="bg-[#F5F7F5] border border-[#DCE3DE] rounded-lg p-6">
                <h3 className="font-display text-xl font-bold text-[#111613] pb-3 mb-3 border-b border-[#DCE3DE]">
                  Our Town Planning Services
                </h3>
                <nav aria-label="Services Menu" className="space-y-1.5">
                  {PLANNING_SERVICES.map((item) => {
                    const isActive = item.slug === service.slug;
                    return (
                      <Link
                        key={item.slug}
                        to={`/services/${item.slug}`}
                        className={`block px-3.5 py-2.5 text-xs font-medium rounded transition-colors ${
                          isActive
                            ? 'bg-[#14532D] text-white font-semibold'
                            : 'text-[#2F3A33] hover:bg-[#E6ECE8] hover:text-[#111613]'
                        }`}
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Direct Contact Sidebar Box */}
              <div className="bg-white border border-[#DCE3DE] rounded-lg p-6 space-y-4">
                <div className="w-10 h-1 bg-[#14532D]" />
                <h3 className="font-display text-2xl font-bold text-[#111613]">
                  Speak to a Planner
                </h3>
                <p className="text-xs text-[#46524B] leading-relaxed">
                  Have your Erf number, street address, or property question ready? Contact us directly for preliminary guidance.
                </p>

                <div className="pt-2 space-y-2.5 text-xs">
                  <div className="font-semibold text-[#111613]">
                    {PLANNER_PROFILE.name}
                  </div>
                  <div className="text-[#14532D] font-medium">
                    {PLANNER_PROFILE.role}
                  </div>
                  <div className="text-[#46524B]">
                    SACPLAN Reg: {PLANNER_PROFILE.sacplanNumber}
                  </div>

                  <div className="pt-3 border-t border-[#E2E7E3] space-y-2">
                    <a
                      href={PLANNER_PROFILE.phoneHref}
                      className="flex items-center gap-2 font-semibold text-[#111613] hover:text-[#14532D]"
                    >
                      <Phone className="w-4 h-4 text-[#14532D]" />
                      {PLANNER_PROFILE.phoneDisplay}
                    </a>
                    <a
                      href={`mailto:${PLANNER_PROFILE.emailLower}`}
                      className="flex items-center gap-2 font-medium text-[#111613] hover:text-[#14532D] break-all"
                    >
                      <Mail className="w-4 h-4 text-[#14532D] shrink-0" />
                      {PLANNER_PROFILE.email}
                    </a>
                  </div>
                </div>

                <div className="pt-3">
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-center text-white bg-[#14532D] hover:bg-[#0E3B20] rounded block transition-colors pressable"
                  >
                    Send an Online Enquiry
                  </Link>
                </div>
              </div>
            </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};
