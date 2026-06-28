export default function Meteors() {
  return (
    <>
      {Array.from({ length: 15 }).map((_, idx) => (
        <span
          key={idx}
          className="absolute top-0 left-0 h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `meteor 5s linear infinite`,
            animationDelay: `${idx * 0.4}s`,
          }}
        />
      ))}
    </>
  )
}