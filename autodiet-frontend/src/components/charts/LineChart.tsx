import { Doughnut, Line} from "react-chartjs-2"
import {Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title} from 'chart.js'
import { useEffect, useState } from "react";
import { Button } from "../utility/Button";
import type { ChartData, ChartOptions } from 'chart.js';
Chart.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title);

export const LineChart: React.FC<{labels: Array<string>, dataFields: Array<number>}> = ({labels, dataFields}) => {
    console.log(dataFields);
    const [color, setColor] = useState('rgb(75, 192, 192)')

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
            <Button title="Dark" onclickMethod={() => {setColor('#FDAD00')}}/>
            <Line color="#FDAD00" data={data} options={lineChartOptions} />
        </div>
    )
}