import Popup from '@/Utilities';
import { Illustrations } from '@/sections/Illustrations';
import { About } from '@/sections/About';
import { Projects } from '@/sections/Projects';
import { useState } from 'react';

const navLinks = [
  { id: 1, key: 'about', label: 'About', Component: About },
  { id: 2, key: 'illustrations', label: 'Illustrations', Component: Illustrations },
  { id: 3, key: 'projects', label: 'Projects', Component: Projects },
];

export const Navbar = () => {
  const [activePopup, setActivePopup] = useState(null);

  const handlePopupToggle = (key) => {
    setActivePopup((current) => (current === key ? null : key));
  };

  return (
    <header className="fixed top-0 left-0 bg-transparent py-10">
      <nav className="container mx-auto px-10 justify-between">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
          LOGO
        </a>
        <div className="flex">
          <div className="px-2 py-1 gap-1">
            {navLinks.map(({ id, key, label, Component }) => (
              <div key={id} className="py-10 text-sm text-muted-foreground hover:text-foreground hover:bg-surface">
                <button onClick={() => handlePopupToggle(key)}>{label}</button>
                <Popup trigger={activePopup === key} setTrigger={(isOpen) => setActivePopup(isOpen ? key : null)}>
                  <Component />
                </Popup>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};