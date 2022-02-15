export default function NameCard({ name, position }) {
  return (
    <div className="border rounded-lg px-4 py-4 shadow text-center">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-600 italic">{position}</p>
    </div>
  );
}
