"use client"

import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js"
import { Maximize } from "lucide-react"
import { Line } from "react-chartjs-2"

export const EnvironmentalEducation = () => {
  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
  )

  const options = {
    responsive: true,
  }

  const label = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
  ]

  const data = {
    labels: label,
    datasets: [
      {
        label: "Quantidade de aulas",
        data: [50, 100, 150, 60, 80, 680, 900],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  }

  return (
    <div className="px-5 mt-4 py-6 w-full rounded-3xl flex  bg-white justify-between shadow-box border border-[#BEC0CA] flex-col">
      <header className="flex flex-row items-center justify-between mb-4">
        <h1 className="text-[#45464E] font-semibold text-lg tracking-wide">
          Educação ambiental
        </h1>

        <button className="rounded-full hover:scale-105 transition-transform duration-200 ease-linear p-1 bg-linear shadow-buttons w-12 h-12 flex items-center justify-center">
          <Maximize className="text-white w-7 h-7" />
        </button>
      </header>
      <Line options={options} data={data} />
    </div>
  )
}
