import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import { ASSETS, CUSTOM_MEDIA, PLANNER_PROFILE } from '../data/planningData';
import { PageBanner } from '../components/PageBanner';
import { Reveal } from '../components/Reveal';

export const AboutPage: React.FC = () => {
  return (
    <div>
      <PageBanner
        title="About the Planner"
        subtitle="Providing practical town planning and land use management assistance to clients navigating municipal planning processes."
        breadcrumb="About the Planner"
        image={ASSETS.tshwanePrecinct}
      />

      {/* Main Planner Profile Section */}
      <section className="py-20 bg-white border-b border-[#E2E7E3]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* =================================================================
                LEFT COLUMN: PLANNER IMAGE SLOT
                How to insert your own image in VS Code:
                1. Drop your photo into the `public/` folder as `public/planner-photo.png`
                   OR replace `src={CUSTOM_MEDIA.plannerPhotoSrc}` below with your path.
               ================================================================= */}
            <Reveal variant="reveal-left">
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-lg overflow-hidden border border-[#DCE3DE] bg-[#111613] hover-lift">
                <img
                  src={CUSTOM_MEDIA.plannerPhotoSrc}
                  alt={`${PLANNER_PROFILE.name} — ${PLANNER_PROFILE.role}`}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== CUSTOM_MEDIA.plannerPhotoFallback) {
                      target.src = CUSTOM_MEDIA.plannerPhotoFallback;
                    }
                  }}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="bg-[#F5F7F5] border border-[#DCE3DE] rounded-lg p-6 space-y-4">
                <div className="w-10 h-1 bg-[#14532D]" />
                <div>
                  <h2 className="font-display text-2xl font-bold text-[#111613]">
                    {PLANNER_PROFILE.name}
                  </h2>
                  <p className="text-sm font-semibold text-[#14532D] mt-0.5">
                    {PLANNER_PROFILE.role}
                  </p>
                </div>

                <dl className="pt-3 border-t border-[#DCE3DE] space-y-2.5 text-xs">
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#46524B]">SACPLAN Registration:</dt>
                    <dd className="font-semibold text-[#111613]">
                      {PLANNER_PROFILE.sacplanNumber}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#46524B]">Academic Institution:</dt>
                    <dd className="font-semibold text-[#111613]">
                      {PLANNER_PROFILE.almaMater}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#46524B]">Primary Areas:</dt>
                    <dd className="font-semibold text-[#111613] text-right">
                      Pretoria | Secunda | eMbalenhle
                    </dd>
                  </div>
                </dl>

                <div className="pt-4 border-t border-[#DCE3DE] space-y-2 text-xs">
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
            </div>
            </Reveal>

            {/* Right Column: Biography, Qualifications & Professional Approach */}
            <Reveal variant="reveal-right" delay={1}>
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="text-xs font-bold tracking-wider uppercase text-[#14532D]">
                  Professional Profile
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111613] leading-tight">
                  {PLANNER_PROFILE.name} — {PLANNER_PROFILE.role}
                </h2>
                <p className="text-base text-[#2F3A33] font-medium leading-relaxed">
                  {PLANNER_PROFILE.statement}
                </p>
                <p className="text-base text-[#37423B] leading-relaxed">
                  Trained at the{' '}
                  <strong className="font-semibold text-[#111613]">
                    {PLANNER_PROFILE.almaMater}
                  </strong>{' '}
                  and registered with the South African Council for Planners (
                  <strong className="font-semibold text-[#111613]">
                    SACPLAN Registration No. {PLANNER_PROFILE.sacplanNumber}
                  </strong>
                  ), {PLANNER_PROFILE.name} assists individual property owners, emerging and established property developers, and local businesses in unlocking development rights and ensuring full compliance with municipal Land Use Schemes.
                </p>
                <p className="text-base text-[#37423B] leading-relaxed">
                  Navigating town planning applications—whether applying for a rezoning in Pretoria (City of Tshwane), securing a consent use in Secunda, or regularising a business or rental property in eMbalenhle—requires clear interpretation of municipal by-laws, Title Deed conditions, and spatial development frameworks. Our focus is on providing clear, honest, and practical guidance from your first enquiry through to municipal approval.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E2E7E3]">
                <div className="p-6 rounded-lg bg-[#F5F7F5] border border-[#DCE3DE] space-y-2 hover-lift">
                  <h3 className="font-display text-xl font-bold text-[#111613]">
                    For Property Owners
                  </h3>
                  <p className="text-xs text-[#46524B] leading-relaxed">
                    Clear advice on what you can do with your stand, including second dwellings, home businesses, subdivisions, and resolving municipal contravention notices.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-[#F5F7F5] border border-[#DCE3DE] space-y-2 hover-lift">
                  <h3 className="font-display text-xl font-bold text-[#111613]">
                    For Developers &amp; Investors
                  </h3>
                  <p className="text-xs text-[#46524B] leading-relaxed">
                    Pre-purchase zoning due diligence, density and yield assessments, rezonings, consolidations, and coordination with surveyors, architects, and engineers.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-[#F5F7F5] border border-[#DCE3DE] space-y-2 hover-lift">
                  <h3 className="font-display text-xl font-bold text-[#111613]">
                    For Business Operators
                  </h3>
                  <p className="text-xs text-[#46524B] leading-relaxed">
                    Consent use applications, commercial rezonings, zoning certificates, and by-law compliance required for business and trading licences.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-[#F5F7F5] border border-[#DCE3DE] space-y-2 hover-lift">
                  <h3 className="font-display text-xl font-bold text-[#111613]">
                    Statutory Integrity
                  </h3>
                  <p className="text-xs text-[#46524B] leading-relaxed">
                    All applications are compiled in strict alignment with the Spatial Planning and Land Use Management Act (SPLUMA) and applicable local municipal by-laws.
                  </p>
                </div>
              </div>

              {/* Why Work With Us Checklist */}
              <div className="space-y-3 pt-2">
                <h3 className="font-display text-2xl font-bold text-[#111613]">
                  What You Can Expect When Working With Us
                </h3>
                <ul className="space-y-2.5 text-sm text-[#2F3A33]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#14532D] shrink-0 mt-1" />
                    <span>
                      Upfront verification of Title Deed restrictions and zoning parameters before you commit to costly architectural drawings
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#14532D] shrink-0 mt-1" />
                    <span>
                      Well-reasoned Town Planning Motivational Memorandums tailored to the local municipal Spatial Development Framework
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#14532D] shrink-0 mt-1" />
                    <span>
                      Complete management of public participation notices, site advertisements, and municipal departmental circulation
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#14532D] shrink-0 mt-1" />
                    <span>
                      Direct communication and regular progress updates throughout the lifecycle of your application
                    </span>
                  </li>
                </ul>
              </div>

              {/* Sister Directory Reference */}
              <div className="p-6 rounded-lg bg-[#111613] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-1.5">
                  <div className="text-xs font-semibold text-[#86EFAC]">
                    Mzansi Planners Connect Directory
                  </div>
                  <h4 className="font-display text-2xl font-bold text-white">
                    Looking for Our National Planning Contact Directory?
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed max-w-lg">
                    Alongside providing dedicated town planning services in Pretoria, Secunda, and eMbalenhle, we also maintain{' '}
                    <strong className="text-white">mzansiplannersconnect.com</strong>—a free online directory for finding municipal planning contacts across South Africa.
                  </p>
                </div>
                <a
                  href={PLANNER_PROFILE.directoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs font-semibold text-[#111613] bg-white hover:bg-[#F3F6F4] rounded inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
                >
                  Visit Directory
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-[#14532D] hover:bg-[#0E3B20] rounded inline-flex items-center gap-2 transition-colors pressable arrow-nudge"
                >
                  Discuss Your Property With {PLANNER_PROFILE.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="px-6 py-3.5 text-sm font-semibold text-[#111613] bg-[#F5F7F5] hover:bg-[#E6ECE8] border border-[#DCE3DE] rounded transition-colors pressable"
                >
                  View Our Services
                </Link>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};
