import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import('react-apexcharts'), {ssr : false});

export default function BarChart({options, series, height=300}){
    return(
        <ApexChart
            options={options}
            series={series}
            type="bar"
            height={height}
        />
    );
}