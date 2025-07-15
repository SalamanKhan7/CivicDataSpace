import DataCard from "../../components/DataCard";

export default function GridView({ datasets }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {datasets.map((dataset) => (
        <DataCard key={dataset.id} data={dataset} />
      ))}
    </div>
  );
}
