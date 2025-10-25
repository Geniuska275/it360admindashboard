import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { Button } from "./button"
import { Calendar } from "./calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover"

function DatePicker({ className, value, onChange, placeholder = "Pick a date" }) {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState(value ? new Date(value) : undefined)

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate)
    if (selectedDate) {
      onChange(selectedDate.toISOString().split('T')[0])
    }
    setOpen(false)
  }

  return (
    <div className={className}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal"
          >
            {date ? date.toLocaleDateString() : <span>{placeholder}</span>}
            <ChevronDownIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { DatePicker }
