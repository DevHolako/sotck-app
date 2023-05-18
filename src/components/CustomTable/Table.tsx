import DataTable from "react-data-table-component";
import "../../styles/table/index.css";
import HeaderTable from "./HeaderTable";
interface Props {
  columns: any[];
  customStyles?: any;
  HandleSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  data: any[];
  pending?: boolean;
  type: "Client" | "Stock";
}

function Table({
  columns,
  customStyles,
  HandleSearch,
  data,
  pending,
  type,
}: Props) {
  return (
    <div className="container card">
      {!pending && (
        <div className="input-container container">
          <input
            type="text"
            name="text"
            className="inputSearch"
            placeholder="search..."
            onChange={HandleSearch}
          />
          <span className="icon">
            <svg
              width="19px"
              height="19px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  opacity="1"
                  d="M14 5H20"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  opacity="1"
                  d="M14 8H17"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                  stroke="#000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  opacity="1"
                  d="M22 22L20 20"
                  stroke="#000"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </span>
        </div>
      )}
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        defaultSortAsc
        pagination
        fixedHeader
        responsive
        highlightOnHover
        title={<HeaderTable type={type} />}
        // onRowClicked={(row) => alert(row.key)}
        // progressComponent={<CustomLoader />}
        // onSelectedRowsChange={({ selectedRows }) =>
        //   console.log(selectedRows.map((row) => row.key))
        // }
        // progressPending={pending}
      />
    </div>
  );
}

export default Table;
