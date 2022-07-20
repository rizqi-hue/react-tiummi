import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

interface ArrayApi {
  soal: number;
  nilai1: number;
  nilai2: number;
  nilai3: number;
  nilai4: number;
}

interface ApiTypes {
  api: Array<ArrayApi>;
}

export default function SurveyBarVertical(props: ApiTypes) {
  const { api } = props;

  const labels: any = [];
  const puas: any = [];
  const cukup: any = [];
  const biasa: any = [];
  const jelek: any = [];

  api &&
    api.map((value: any) => {
      labels.push(value.soal);
      puas.push(value.nilai1);
      cukup.push(value.nilai2);
      biasa.push(value.nilai3);
      jelek.push(value.nilai4);
    });
    
  const data = {
    labels,
    datasets: [
      {
        label: "Puas",
        data: puas,
        backgroundColor: "#1A5F7A",
      },
      {
        label: "Cukup",
        data: cukup,
        backgroundColor: "#086E7D",
      },
      {
        label: "Biasa",
        data: biasa,
        backgroundColor: "#FFC900",
      },
      {
        label: "Jelek",
        data: jelek,
        backgroundColor: "#FFF89A",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
