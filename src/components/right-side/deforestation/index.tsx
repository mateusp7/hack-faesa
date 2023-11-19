"use client"

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js"
import { Maximize } from "lucide-react"
import { Bar } from "react-chartjs-2"

export const Deforestation = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
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
        label: "Dataset 1",
        data: [100, 200, 50, 10, 60, 250, 10],
        backgroundColor: "#5E51B1",
      },
    ],
  }

  return (
    <div className="px-5 mt-4 py-6 w-full rounded-3xl flex  bg-white justify-between shadow-box border border-[#BEC0CA] flex-col">
      <header className="flex flex-row items-center justify-between mb-4">
        <h1 className="text-[#45464E] font-semibold text-lg tracking-wide">
          Desmatamento
        </h1>

        <button className="rounded-full hover:scale-105 transition-transform duration-200 ease-linear p-1 bg-linear shadow-buttons w-12 h-12 flex items-center justify-center">
          <Maximize className="text-white w-7 h-7" />
        </button>
      </header>
      <Bar options={options} data={data} />
    </div>
  )
}
