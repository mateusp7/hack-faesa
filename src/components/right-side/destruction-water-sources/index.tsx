"use client"

import { ArcElement, Chart as ChartJS, Tooltip } from "chart.js"
import { Maximize } from "lucide-react"
import { Pie } from "react-chartjs-2"

export const DestructionWaterSourcer = () => {
  ChartJS.register(ArcElement, Tooltip)

  const options = {
    responsive: true,
  }

  const dataPieOne = {
    datasets: [
      {
        data: [12, 19],
        backgroundColor: ["#21392C", "#37CD7B"],
        borderColor: ["#21392C", "#37CD7B"],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="px-5 mt-4 py-6 w-full rounded-3xl flex  bg-white justify-between shadow-box border border-[#BEC0CA] flex-col">
      <header className="flex flex-row items-center justify-between mb-4">
        <h1 className="text-[#45464E] font-semibold text-lg tracking-wide">
          Destruição de mananciais
        </h1>

        <button className="rounded-full hover:scale-105 transition-transform duration-200 ease-linear p-1 bg-linear shadow-buttons w-12 h-12 flex items-center justify-center">
          <Maximize className="text-white w-7 h-7" />
        </button>
      </header>
      <div className="flex flex-row gap-4 justify-between">
        <div>
          <Pie options={options} data={dataPieOne} />
        </div>
      </div>
    </div>
  )
}
