import { Doughnut, Line} from "react-chartjs-2"
import {Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title} from 'chart.js'
import { useEffect, useState } from "react";
import { Button } from "../utility/Button";
import type { ChartData, ChartOptions } from 'chart.js';
import { useTheme } from "../../context/ThemeContext";
Chart.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title);

export const LineChart: React.FC<{labels: Array<string>, dataFields: Array<number>}> = ({labels, dataFields}) => {
    const [color, setColor] = useState('rgb(75, 192, 192)')
    const darkColors = '#FDAD00';
    const lightColors = 'rgb(75, 192, 192)';
    const {themeType} = useTheme();

    useEffect(() => {
      if(themeType === 'dark') setColor(darkColors);
      else setColor(lightColors);
    }, [themeType])
    
    const data = {
        labels: [23, 35, 21, 45, 50, 90],
        datasets: [{
          label: 'My First Dataset',
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
                y:{
                    ticks:{
                        color:color
                    }
                }
            }
       
    };

    return(
        <div>
            <Button title="Dark" onclickMethod={() => { setColor('#'); } } styling={""}/>
            <Line color="#FDAD00" data={data} options={lineChartOptions} />
        </div>
    )
}