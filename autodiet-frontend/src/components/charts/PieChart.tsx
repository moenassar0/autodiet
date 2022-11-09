import { Doughnut, Line, Pie} from "react-chartjs-2"
import {Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title} from 'chart.js'
import { useEffect, useState } from "react";
import { Button } from "../utility/Button";
import type { ChartData, ChartOptions } from 'chart.js';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

export const PieChart: React.FC<{nutritionData: any, labels: Array<string>, dataFields: Array<number>}> = ({nutritionData, labels, dataFields}) => {
    console.log(nutritionData);
    const [color, setColor] = useState('rgb(75, 192, 192)')

      const data = {
        labels: ['Carbs', 'Fat', 'Protein'],
        datasets: [
          {
            label: '# of Votes',
            data: [nutritionData.carbs, nutritionData.protein, nutritionData.fats],
            backgroundColor: [
              '#FDAD00',
              '#E7CA56',
              '#ffffff',
            ],
            borderColor: [
              '#000000',
              '#000000',
              '#000000',
            ],
            borderWidth: 1,
          },
        ],
      };
    return(
        <div>
            <Pie data={data} />
        </div>
    )
}