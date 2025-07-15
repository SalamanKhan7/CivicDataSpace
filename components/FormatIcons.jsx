import {
  BsFiletypeCsv,
  BsFiletypeJson,
  BsFiletypeXls,
  BsFiletypeXlsx,
  BsFiletypeXml,
} from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa6";

import { TbFileTypeZip } from "react-icons/tb";
const formatIconMap = {
  CSV: { icon: <BsFiletypeCsv />, bg: "text-forth", label: "CSV" },
  JSON: { icon: <BsFiletypeJson />, bg: "text-primary", label: "JSON" },
  XLS: { icon: <BsFiletypeXls />, bg: "text-green-500", label: "XLS" },
  XLSX: { icon: <BsFiletypeXlsx />, bg: "text-teal-600", label: "XLSX" },
  PDF: { icon: <FaRegFilePdf />, bg: "text-red-500", label: "PDF" },
  XML: { icon: <BsFiletypeXml />, bg: "text-green-400", label: "XML" },
  ZIP: { icon: <TbFileTypeZip />, bg: "text-gray-600", label: "ZIP" },
};

export default function FormatIcons({ format }) {
  const key = format.toUpperCase();
  const { icon, bg, label } = formatIconMap[key];

  return (
    <div title={label}>
      <span className={`text-xl ${bg}`}>{icon}</span>
    </div>
  );
}
