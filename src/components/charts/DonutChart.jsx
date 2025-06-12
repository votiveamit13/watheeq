import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function DonutChart({ series, options, height = 250 }) {
  return (
    <ApexChart
      options={options}
      series={series}
      type="donut"
      height={height}
    />
  );
}
