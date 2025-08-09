/**
 * IntersectionObserver helper to add animation classes when elements enter viewport.
 */
export function observeReveal(selector, options = {}) {
  const elements = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;
  if (!elements || (elements.length !== undefined && elements.length === 0)) return () => {};

  const rootMargin = options.rootMargin || '0px 0px -10% 0px';
  const threshold = options.threshold || 0.1;
  const activeClass = options.activeClass || 'is-visible';

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(activeClass);
        if (options.once !== false) {
          obs.unobserve(entry.target);
        }
      }
    });
  }, { rootMargin, threshold });

  const els = elements.length !== undefined ? elements : [elements];
  els.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}

/**
 * Utility to apply staggered delays to children for animations.
 */
export function applyStagger(container, childSelector, delayStepMs = 60) {
  const containerEl = typeof container === 'string' ? document.querySelector(container) : container;
  if (!containerEl) return;
  const children = containerEl.querySelectorAll(childSelector);
  children.forEach((child, index) => {
    child.style.transitionDelay = `${index * delayStepMs}ms`;
  });
}

/**
 * Number count-up animation for statistics.
 */
export function animateCountUp(element, endValue, durationMs = 1500) {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  const start = 0;
  const startTime = performance.now();

  function frame(now) {
    const progress = Math.min((now - startTime) / durationMs, 1);
    const value = Math.floor(start + (endValue - start) * progress);
    el.textContent = `${value}`;
    if (progress < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}


