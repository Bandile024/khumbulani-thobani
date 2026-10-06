import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { PLANNER_PROFILE, PLANNING_SERVICES } from '../data/planningData';
import { Reveal } from './Reveal';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111613] text-white border-t border-[#1E2923]">
      <div className="max-w-[1240px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Practice Overview */}
          <Reveal delay={0}>
          <div className="lg:col-span-4 space-y-4">
            <Link
              to="/"
              className="font-display text-2xl font-bold tracking-tight text-white inline-block"
            >
              {PLANNER_PROFILE.name}
            </Link>
            <p className="text-sm text-white/75 leading-relaxed">
              Town Planning &amp; Land Use Management Services. Professional planning assistance for property owners, developers, and businesses across Pretoria, Secunda, eMbalenhle and surrounding areas.
            </p>
            <div className="pt-1 text-xs text-[#86EFAC] space-y-1">
              <div>{PLANNER_PROFILE.role}</div>
              <div className="text-white/80">
                SACPLAN Registered: {PLANNER_PROFILE.sacplanNumber} · {PLANNER_PROFILE.almaMater}
              </div>
            </div>
          </div>
          </Reveal>

          {/* Column 2: Quick Links */}
          <Reveal delay={1}>
          <div className="lg:col-span-2 space-y-3 text-sm">
            <h3 className="font-semibold text-white text-xs tracking-wider uppercase">
              Pages
            </h3>
            <ul className="space-y-2.5 text-white/75 text-xs">
              <li>
                <Link to="/" className="hover:text-[#86EFAC] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#86EFAC] transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#86EFAC] transition-colors"
                >
                  About the Planner
                </Link>
              </li>
              <li>
                <Link
                  to="/areas"
                  className="hover:text-[#86EFAC] transition-colors"
                >
                  Areas We Serve
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#86EFAC] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          </Reveal>

          {/* Column 3: Core Services Links */}
          <Reveal delay={2}>
          <div className="lg:col-span-3 space-y-3 text-sm">
            <h3 className="font-semibold text-white text-xs tracking-wider uppercase">
              Our Services
            </h3>
            <ul className="space-y-2 text-white/75 text-xs">
              {PLANNING_SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-[#86EFAC] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-[#86EFAC] hover:underline font-medium"
                >
                  View All 8 Services &rarr;
                </Link>
              </li>
            </ul>
          </div>
          </Reveal>

          {/* Column 4: Direct Contact Details */}
          <Reveal delay={3}>
          <div className="lg:col-span-3 space-y-3 text-sm">
            <h3 className="font-semibold text-white text-xs tracking-wider uppercase">
              Contact Details
            </h3>
            <div className="space-y-3 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#86EFAC] shrink-0 mt-0.5" />
                <span>
                  Pretoria (City of Tshwane) | Secunda | eMbalenhle &amp; Surrounding Areas
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#86EFAC] shrink-0" />
                <a
                  href={PLANNER_PROFILE.phoneHref}
                  className="hover:text-[#86EFAC] transition-colors font-medium text-white"
                >
                  {PLANNER_PROFILE.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#86EFAC] shrink-0" />
                <a
                  href={`mailto:${PLANNER_PROFILE.emailLower}`}
                  className="hover:text-[#86EFAC] transition-colors break-all"
                >
                  {PLANNER_PROFILE.email}
                </a>
              </div>
              <div className="pt-2 border-t border-white/10">
                <a
                  href={PLANNER_PROFILE.directoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#86EFAC] hover:underline inline-flex items-center gap-1"
                >
                  Planning Directory: {PLANNER_PROFILE.directoryLabel}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
          </Reveal>
        </div>

        <Reveal delay={4}>
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/55">
          <div>
            &copy; {new Date().getFullYear()} {PLANNER_PROFILE.name} — Town Planning &amp; Land Use Management Services.
          </div>
          <div>
            SACPLAN Registration: {PLANNER_PROFILE.sacplanNumber} ({PLANNER_PROFILE.role})
          </div>
        </div>
        </Reveal>
      </div>
    </footer>
  );
};
