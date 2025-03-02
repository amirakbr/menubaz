import DataAnalysisIcon from '@/app/public/icons/dataAnalysisGraphIcon';

const DataAnalysis = () => {
  return (
    <div className="relative overflow-hidden py-2 px-3 rounded-lg flex items-center justify-center min-h-[228px] lg:min-h-[302px]">
      <div className="z-[5]">
        <DataAnalysisIcon />
      </div>
      <div className="bg-cover bg-no-repeat bg-[url(/requestDemo/hand.png)] blur-[10px] absolute w-full h-full left-0 top-0"></div>
    </div>
  );
};

export default DataAnalysis;
