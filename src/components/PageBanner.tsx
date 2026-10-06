import React from 'react';
import { Link } from 'react-router-dom';
import { ResilientImage } from './ResilientImage';

interface PageBannerProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
  parentBreadcrumb?: { label: string; to: string };
  image: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  breadcrumb,
  parentBreadcrumb,
  image,
}) => {
  return (
    <section className="relative bg-[#111613] text-white overflow-hidden border-b border-[#1E2923]">
      <div className="absolute inset-0 opacity-35">
        <ResilientImage
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B120E]/95 via-[#0B120E]/85 to-[#14532D]/65" />

      <div className="relative max-w-[1240px] mx-auto px-6 py-16 md:py-22">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-xs text-[#A7F3D0] mb-4 animate-fade-in-up"
        >
          <Link to="/" className="hover:underline text-white/80 hover:text-white">
            Home
          </Link>
          <span aria-hidden="true" className="text-white/40">
            /
          </span>
          {parentBreadcrumb && (
            <>
              <Link
                to={parentBreadcrumb.to}
                className="hover:underline text-white/80 hover:text-white"
              >
                {parentBreadcrumb.label}
              </Link>
              <span aria-hidden="true" className="text-white/40">
                /
              </span>
            </>
          )}
          <span className="text-[#86EFAC] font-medium">{breadcrumb}</span>
        </nav>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl animate-fade-in-up delay-1">
          {title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed animate-fade-in-up delay-2">
          {subtitle}
        </p>
      </div>
    </section>
  );
};
