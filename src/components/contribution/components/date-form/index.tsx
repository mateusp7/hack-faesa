import { ControllerContainer } from "@/components/controller"
import { DateContributionSchema } from "@/configs/schemas"
import { DateData } from "@/configs/validations"
import { useContribution } from "@/hooks/useContribution"
import { zodResolver } from "@hookform/resolvers/zod"
import { Plus } from "lucide-react"
import { Dispatch, SetStateAction } from "react"
import { useForm } from "react-hook-form"

interface DateFormProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const DateForm = ({ setIsOpen }: DateFormProps) => {
  const { setDate, setCurrentForm } = useContribution()

  const { control, handleSubmit } = useForm<DateData>({
    resolver: zodResolver(DateContributionSchema),
    defaultValues: {
      date: "",
    },
  })

  const handleInserDate = (date: DateData) => {
    setDate(date.date)
    setCurrentForm("default_form")
    setIsOpen(false)
  }

  return (
    <div className="bg-black/60 fixed inset-0 z-20">
      <form
        onSubmit={handleSubmit(handleInserDate)}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-fit p-4  bg-white items-center rounded-lg shadow-box"
      >
        <h1 className="text-sm mb-4">Insira a data que a foto foi tirada</h1>
        <div className=" flex gap-4">
          <ControllerContainer
            control={control}
            name="date"
            render={({ field }) => {
              return (
                <input
                  className="px-4 py-1 rounded-lg shadow-box outline-none focus:outline-none border hover:border-[#8AC926]"
                  type="text"
                  placeholder="MM/DD/YYYY"
                  {...field}
                />
              )
            }}
          />
        </div>
        <button
          type="submit"
          className="flex w-full font-medium text-white rounded-lg mt-4 text-center justify-center flex-row gap-1 items-center bg-linear p-2"
        >
          Confirmar
          <Plus className="w-6 h-6 text-white " />
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="flex w-full font-medium text-white rounded-lg mt-4 text-center justify-center flex-row gap-1 items-center bg-[#CC5F5F] p-2"
        >
          Cancelar
        </button>
      </form>
    </div>
  )
}
