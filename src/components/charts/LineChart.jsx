import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function LineChart({ series, options, height = 300 }) {
  return (
    <ApexChart
      options={options}
      series={series}
      type="line"
      height={height}
    />
  );
}
