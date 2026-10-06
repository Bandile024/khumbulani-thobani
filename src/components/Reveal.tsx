import React, { cloneElement, isValidElement } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type RevealVariant =
  | 'reveal'
  | 'reveal-left'
  | 'reveal-right'
  | 'reveal-scale';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  step?: number;
  threshold?: number;
}

/**
 * Animates its single element child in place.
 *
 * The child is cloned rather than wrapped, so no extra DOM node is added and
 * the surrounding layout is completely unaffected. Classes are merged onto the
 * existing element, and `transitionDelay` is only applied while the element is
 * still hidden so that later hover transitions respond immediately.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  variant = 'reveal',
  delay = 0,
  step = 0.08,
  threshold,
}) => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold });

  if (!isValidElement(children)) {
    return <>{children}</>;
  }

  const element = children as React.ReactElement<{
    className?: string;
    style?: React.CSSProperties;
    ref?: React.Ref<HTMLElement>;
  }>;

  const mergedClassName = [
    variant,
    isVisible ? 'is-visible' : '',
    className,
    element.props.className,
  ]
    .filter(Boolean)
    .join(' ');

  const mergedStyle: React.CSSProperties = {
    ...element.props.style,
    transitionDelay: !isVisible && delay > 0 ? `${Math.min(delay, 6) * step}s` : undefined,
  };

  return cloneElement(element, {
    ref,
    className: mergedClassName,
    style: mergedStyle,
  });
};
