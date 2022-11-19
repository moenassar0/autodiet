import { Doughnut, Line} from "react-chartjs-2"
import {Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title} from 'chart.js'
import { useEffect, useState } from "react";
import { Button } from "../utility/Button";
import type { ChartData, ChartOptions } from 'chart.js';
import { useTheme } from "../../context/ThemeContext";
Chart.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title);

export const LineChart: React.FC<{styling?: string, labels: Array<string>, dataFields: Array<number>}> = ({styling, labels, dataFields}) => {
    const [color, setColor] = useState('rgb(75, 192, 192)')
    const darkColors = '#FDAD00';
    const lightColors = 'rgb(75, 192, 192)';
    const {themeType} = useTheme();

    useEffect(() => {
      if(themeType === 'dark') setColor(darkColors);
      else setColor(lightColors);
    }, [themeType])
    
    const data = {
        labels: labels,
        datasets: [{
          label: 'Dataset',
          data: dataFields,
          borderColor: color,
          tension: 0.1
        }]
    };
    const lineChartOptions:any = {
        scales: {
            x: {
                ticks: {
                    color: color
                }
            },
            y: {
                beginAtZero: true,
                ticks:{
                    color:color,
                }
            }
        }
    };

    return(
        <div className={styling}>
            <Line data={data} options={lineChartOptions} />
        </div>
    )
}