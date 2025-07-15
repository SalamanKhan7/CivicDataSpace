export default function IconWithText({ icon, label }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-700">
      <span className="text-base">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
