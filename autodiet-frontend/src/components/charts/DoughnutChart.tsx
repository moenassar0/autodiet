import { Doughnut, Line} from "react-chartjs-2"
import {Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title} from 'chart.js'
Chart.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title);

export const DoughnutChart: React.FC<{labels: Array<string>, dataFields: Array<number>}> = ({labels, dataFields}) => {
    console.log(dataFields);
    const data = {
        labels: labels,
        datasets: [{
          label: 'My First Dataset',
          data: dataFields,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      };
    return(
        <div>
            <Line data={data}/>
        </div>
    )
}