import React from 'react';
import FooterContent from '../molecules/FooterContent';

const Footer: React.FC = () => (
  <footer className="w-full py-8 bg-foreground">
    <div className="container py-10 px-5">
      <FooterContent />
    </div>
  </footer>
);

export default Footer;
