import { Doughnut, Line} from "react-chartjs-2"
import {Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title} from 'chart.js'
Chart.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title);

export const DoughnutChart = () => {

    

    const data2 = {
        labels: [
            "20/11/2015", "21/11/2015", "22/11/2015"
        ],
        datasets: [
            {
                data: [83, 82, 81]
            }
        ]
    }
    const labels =  ["20/11/2015", "21/11/2015", "22/11/2015"]
    const data = {

        labels: labels,
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80],
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