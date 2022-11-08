import { Doughnut } from "react-chartjs-2"
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

export const DoughnutChart = () => {
    const data = {
        labels: [
            "20/11/2015", "21/11/2015", "22/11/2015"
        ],
        datasets: [
            {
                data: [83, 82, 81]
            }
        ]
    }
    return(
        <div>
            <Doughnut data={data}/>
        </div>
    )
}