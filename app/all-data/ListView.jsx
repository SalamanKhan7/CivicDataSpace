import DataListItem from "../../components/DataListItem";

export default function ListView({ datasets }) {
  return (
    <div>
      {datasets.map((dataset) => (
        <DataListItem key={dataset.id} data={dataset} />
      ))}
    </div>
  );
}
