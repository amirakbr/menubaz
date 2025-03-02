'use client';

import Input from '@/app/commonComponents/input/input';
import Select from '@/app/commonComponents/select';
import { useForm } from 'react-hook-form';

const RequestDemoForm = () => {
  const { control } = useForm();
  return (
    <div className="bg-white-200 rounded-lg px-3 py-16">
      <div>
        <h3 className="text-title font-semibold text-xl">درخواست دمو</h3>
        <p className="text-subtitle text-sm">فرم زیر را کامل کنید تا تیم فروش ما در زمان انتخابی با شما تماس بگیرند.</p>
        <div className="flex flex-col gap-5">
          <Input label="نام و نام خانوادگی مدیریت" required control={control} name="n" />
          <Input label="نام و نام خانوادگی مدیریت" required control={control} name="n" />
          <Select
            label="تست"
            control={control}
            options={[{ id: 4 }]}
            getOption={({ id }) => `${id}`}
            getValue={({ id }) => `${id}`}
            required
            name="test"
          />
          <Select
            label="تست"
            control={control}
            options={[{ id: 4 }]}
            getOption={({ id }) => `${id}`}
            getValue={({ id }) => `${id}`}
            required
            name="test"
          />
        </div>
      </div>
    </div>
  );
};

export default RequestDemoForm;
