'use client';

import Button from '@/app/commonComponents/button';
import Input from '@/app/commonComponents/input/input';
import Select from '@/app/commonComponents/select';
import { useForm } from 'react-hook-form';

const RequestDemoForm = () => {
  const { control } = useForm({
    defaultValues: {
      ownerName: '',
      phoneNumber: '',
      businessName: '',
      callDate: '',
    },
  });
  return (
    <div className="bg-white-200 rounded-lg px-3 py-16 lg:px-12">
      <div className="flex flex-col gap-4">
        <h3 className="text-title font-semibold text-xl">درخواست دمو</h3>
        <p className="text-subtitle text-sm">فرم زیر را کامل کنید تا تیم فروش ما در زمان انتخابی با شما تماس بگیرند.</p>
        <div className="flex flex-col gap-5">
          <Input label="نام و نام خانوادگی مدیریت" required control={control} name="ownerName" />
          <Input label="شماره تماس" required control={control} name="phoneNumber" direction="ltr" />

          <Select
            control={control}
            label="کسب و کار"
            options={[{ label: 'کافی شاپ', value: 'coffeeshop' }]}
            name="businessName"
            required
            getOption={({ label }) => label}
            getValue={({ value }) => value}
          />
          <Select
            control={control}
            label="زمان انتخابی جهت تماس کارشناسان ما با شما"
            options={[{ label: 'شب 10', value: 'night-10pm' }]}
            name="callDate"
            required
            getOption={({ label }) => label}
            getValue={({ value }) => value}
          />

          <Button variant="contained" color="secondary" size="medium" className="self-start">
            ارسال درخواست
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RequestDemoForm;
