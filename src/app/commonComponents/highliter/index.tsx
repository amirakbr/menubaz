import React from 'react';

interface HighlightTextProps {
  text: string;
  keyword: string;
  color?: string;
}

// Function to escape special characters for use in a regular expression
const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, '\\$&');
};

const HighlightText: React.FC<HighlightTextProps> = ({ text, keyword, color = 'text-complementary' }) => {
  if (!text || !keyword) return text;

  const escapedKeyword = escapeRegExp(keyword); // Escape special characters
  const regex = new RegExp(`(${escapedKeyword})`, 'gi'); // Use the escaped keyword in the regex

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === keyword.toLowerCase() ? (
          <span key={index} className={color}>
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
