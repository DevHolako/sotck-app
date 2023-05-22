import { Items } from "@/helpers/types";
import { TableColumn } from "react-data-table-component";
import EditRow from "../RowActions/EditRow";
import DeleteRow from "../RowActions/DeleteRow";

export const columns: TableColumn<Items>[] = [
  // {
  //   name: "id",
  //   allowOverflow: false,
  //   selector: (row) => row._id,
  //   reorder: true,
  // },
  {
    name: "designation",
    selector: (row) => row.name,
    sortable: true,
    reorder: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <div className="actions">
        <EditRow row={row} />
        <DeleteRow whome="Items" row={row} />
      </div>
    ),
    sortable: false,
    reorder: true,
  },
];
