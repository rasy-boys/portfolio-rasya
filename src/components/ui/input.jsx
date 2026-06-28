import { cn } from "@/lib/utils"

export default function Input({
  className,
  ...props
}) {
  return (
    <input
      className={cn(
        "w-full rounded-2xl",
        "border border-white/10",
        "bg-white/3",
        "px-5 py-4",
        "text-white",
        "outline-none",
        "backdrop-blur-xl",
        "placeholder:text-white/30",
        "focus:border-yellow-400/40",
        "focus:ring-2",
        "focus:ring-yellow-400/20",
        className
      )}
      {...props}
    />
  )
}