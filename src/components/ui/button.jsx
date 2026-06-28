import { cn } from "@/lib/utils"

export default function Button({
  children,
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-2xl",
        "bg-linear-to-r from-yellow-400 to-amber-500",
        "text-black font-semibold",
        "transition-all duration-300",
        "hover:scale-105",
        "hover:shadow-[0_0_40px_rgba(250,204,21,0.45)]",
        "active:scale-95",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}