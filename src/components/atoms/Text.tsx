import React from 'react';

type TextProps = {
  content: string;
  className?: string;
};

const Text: React.FC<TextProps> = ({ content, className }) => (
  <p className={`text-[13px] font-black text-normalText ${className}`}>{content}</p>
);

export default Text;
