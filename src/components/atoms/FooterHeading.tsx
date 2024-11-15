import React from 'react';

type FooterHeadingProps = {
  content: string;
  className?: string;
};

const FooterHeading: React.FC<FooterHeadingProps> = ({ content, className }) => (
  <h3 className={`text-sm font-black text-highlightText ${className}`}>{content}</h3>
);

export default FooterHeading;
