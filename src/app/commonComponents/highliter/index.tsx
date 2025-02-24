import React from 'react';

interface HighlightTextProps {
  text: string;
  keyword: string;
  color?: string;
}

const HighlightText: React.FC<HighlightTextProps> = ({ text, keyword, color = 'red' }) => {
  if (!text || !keyword) return text;

  const regex = new RegExp(`(${keyword})`, 'g');

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part) =>
        part === keyword ? (
          <span key={Math.random()} className="text-complementary">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

export default HighlightText;
