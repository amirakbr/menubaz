'use client';

import Input from '@/app/commonComponents/input/input';
import TextArea from '@/app/commonComponents/textArea';
import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { IContactForm } from '../interface';
import Button from '@/app/commonComponents/button';

const ContactForm = () => {
  const recaptcha = useRef(null);
  let siteKey = process.env.NEXT_PUBLIC_VITE_WEBSITE_KEY;
  const { control } = useForm<IContactForm>({ defaultValues: { message: '', name: '', phoneNumber: '' } });
  return (
    <div className="py-12 px-10 rounded-lg bg-white-200">
      <form className="flex flex-col gap-7">
        <Input control={control} name="name" label="نام و نام خانوادگی" required />
        <Input control={control} name="phoneNumber" type="number" direction="ltr" label="شماره تماس" required />
        <TextArea control={control} name="message" label="متن پیام" />
        <div className="flex flex-col gap-1">
          <span className={`flex gap-1 text-title-400 after:block after:content-["*"]`}>کد امنیتی</span>
          {siteKey && <ReCAPTCHA sitekey={siteKey} ref={recaptcha} hl="fa" />}
        </div>
        <Button variant="secondary" className="w-max m-auto">
          ارسال پیام
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
