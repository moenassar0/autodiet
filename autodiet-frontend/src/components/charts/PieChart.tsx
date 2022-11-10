import { Doughnut, Line, Pie} from "react-chartjs-2"
import {Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title} from 'chart.js'
import { useEffect, useState } from "react";
import { Button } from "../utility/Button";
import type { ChartData, ChartOptions } from 'chart.js';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js';
import { useTheme } from "../../context/ThemeContext";

ChartJS.register(ArcElement, Tooltip);

export const PieChart: React.FC<{nutritionData: any, labels: Array<string>, dataFields: Array<number>}> = ({nutritionData, labels, dataFields}) => {
    const darkColors = ['#FDAD00','#E7CA56','#ffffff'];
    const lightColors = ['#00BAC7', '#0E2238', '#ffffff'];
    const [colors, setColors] = useState<Array<string>>(lightColors);

    const {themeType} = useTheme();

    useEffect(() => {
      if(themeType === 'dark') setColors(darkColors);
      else setColors(lightColors);
    }, [themeType])
    
      const data = {
        labels: ['Carbs', 'Fat', 'Protein'],
        datasets: [
          {
            label: '# of Votes',
            data: [nutritionData.carbs, nutritionData.fats, nutritionData.protein],
            backgroundColor: colors,
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