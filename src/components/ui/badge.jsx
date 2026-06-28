export default function Badge({ children }) {
  return (
    <span className="
      inline-flex items-center
      rounded-full
      border border-yellow-400/20
      bg-yellow-400/10
      px-4 py-1
      text-sm
      font-medium
      text-yellow-300
      backdrop-blur-xl
    ">
      {children}
    </span>
  )
}