import { cn } from "@/lib/utils"

export default function Card({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "rounded-[2rem]",
        "border border-white/10",
        "bg-white/3",
        "backdrop-blur-2xl",
        "shadow-2xl",
        "transition-all duration-500",
        "hover:border-yellow-400/30",
        "hover:bg-white/5",
        "hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  )
}