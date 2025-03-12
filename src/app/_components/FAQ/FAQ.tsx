'use client';

import ArrowDownIcon from '@/app/public/icons/arrowDownIcon';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { useState } from 'react';

const faqQuestion = [
  {
    question: 'آیا سیستم مدیریت پیک منوباز به نقشه فارسی و مسیریابی مجهز است؟',
    answer: 'آیا سیستم مدیریت پیک منوباز به نقشه فارسی و مسیریابی مجهز است؟',
  },
  {
    question: 'نرم‌افزار کافی‌شاپ چیست؟',
    answer: 'نرم‌افزار کافی‌شاپ چیست؟',
  },
  {
    question: 'چگونه می‌توانیم نرم افزار کافی‌شاپی منوباز را دریافت کنیم؟',
    answer: 'چگونه می‌توانیم نرم افزار کافی‌شاپی منوباز را دریافت کنیم؟',
  },
  {
    question: 'آموزش منوباز به چه صورت است؟',
    answer: 'آموزش منوباز به چه صورت است؟',
  },
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleChange = (panelIndex: number) => {
    setExpandedIndex(panelIndex);
  };

  return (
    <div className="flex flex-col gap-5 items-center">
      <p className="text-title text-3xl font-bold text-center">سوالات متداول</p>
      <p className="text-xl text-subtitle-400 text-center">پاسخ به سوالات متداول در مورد اپلیکیشن ما را بخوانید</p>
      <div dir="rtl" className="flex flex-col gap-0 xl:w-[960px]">
        {faqQuestion?.map(({ answer, question }, index) => (
          <Accordion
            onChange={() => {
              handleChange(index);
            }}
            expanded={expandedIndex === index}
            // className={({ open }) => {
            //   return `${open ? 'bg-white-300 rounded-xl p-2' : ''}`;
            // }}
            classes={{ expanded: 'bg-white-200 !rounded-xl', root: '!m-0 !border-0 !shadow-none !outline-0 after:!hidden before:!hidden' }}
            key={`FAQ ${index}`}
          >
            <AccordionSummary
              classes={{ content: '!m-0' }}
              expandIcon={
                <span
                  className={`h-8 w-8 rounded-full transition-all flex items-center justify-center ${
                    expandedIndex === index ? 'text-white-100 bg-white-800' : 'text-white-900 bg-transparent'
                  }`}
                >
                  <ArrowDownIcon primaryColor="currentColor" width={15} height={15} />
                </span>
              }
            >
              <p className="py-2 px-3 text-xs lg:text-xl text-start font-semibold text-title">{question}</p>
              <div className={`transition-all w-6 h-6 rounded-full shrink-0 flex items-center justify-center`}>
                <ArrowDownIcon width={12} height={12} primaryColor="white" />
              </div>
            </AccordionSummary>
            <AccordionDetails classes={{ root: '!m-0 !py-0' }}>
              <p className="pb-2 px-3 text-xs lg:text-lg text-start font-medium text-subtitle">{answer}</p>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
