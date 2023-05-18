import { Items } from "@/helpers/types";
import { TableColumn } from "react-data-table-component";
import EditRow from "../RowActions/EditRow";
import DeleteRow from "../RowActions/DeleteRow";

export const columns: TableColumn<Items>[] = [
  {
    name: "id",
    selector: (row) => row._id,
    sortable: true,
    reorder: true,
  },
  {
    name: "nom",
    selector: (row) => row.nom,
    sortable: true,
    reorder: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <div className="actions">
        <EditRow row={row} />
        <DeleteRow row={row} />
      </div>
    ),
    sortable: false,
    reorder: true,
  },
];
