export default function Tag({ label }) {
  return (
    <span className="inline-block text-xs font-semibold bg-secondary text-black px-3 py-1 rounded">
      {label}
    </span>
  );
}
