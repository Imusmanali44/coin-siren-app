import React from 'react';

type HeaderLinkProps = {
  href: string;
  label: string;
};

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, label }) => (
  <a href={href} className="text-gray-700 hover:text-gray-900">
    {label}
  </a>
);

export default HeaderLink;
