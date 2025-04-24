'use client';

import React, { useEffect, useState } from 'react';
import { SideNavbarInterface } from './SideNavbarInterface';

const SideNavbar = (props: SideNavbarInterface) => {
  const { sections, activeSection } = props;
  const [activeMainId, setActiveMainId] = useState<string | null>(null);

  useEffect(() => {
    if (activeSection) {
      const sectionElement = document.querySelector(`[data-main-id="${activeSection}"]`);
      if (sectionElement) {
        setActiveMainId(activeSection);
      }
    } else {
      const initialElement = document.querySelector('[data-initial-id]');
      if (initialElement) {
        const initialId = initialElement.getAttribute('data-initial-id');
        if (initialId) {
          setActiveMainId(initialElement.id);
        }
      }
    }
  }, [activeSection, sections]);

  const handleClick = (id: string) => {
    const section = document.querySelector(`[data-main-id="${id}"]`);
    const container = document.querySelector('div[data-scroll-content]');
    if (section && container) {
      container.scrollTo({
        top: (section as HTMLElement).offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="relative flex border rounded-2xl shadow-md bg-white overflow-hidden w-full">
      <ul className="space-y-4 leading-snug text-sm font-bold p-8">
        {sections.map((section) => (
          <li key={section.id} className="">
            <button
              onClick={() => handleClick(section.id)}
              className={`text-left transition-colors duration-300 ${activeMainId === section.id ? 'text-green-primary1 font-bold' : 'hover:text-green-primary1'
                }`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavbar;
