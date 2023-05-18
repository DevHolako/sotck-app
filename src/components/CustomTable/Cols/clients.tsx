import { Client } from "@/helpers/types";
import { TableColumn } from "react-data-table-component";
import EditRow from "../RowActions/EditRow";
import DeleteRow from "../RowActions/DeleteRow";

export const columns: TableColumn<Client>[] = [
  {
    name: "Nom Complete",
    selector: (row) => row.nom + " " + row.prenom,
    sortable: true,
    reorder: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
    reorder: true,
  },
  {
    name: "Address",
    selector: (row) => row.address,
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
