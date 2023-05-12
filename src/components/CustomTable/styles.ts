import { TableStyles } from "react-data-table-component";

// export const customStyles: TableStyles = {
//   rows: {
//     style: {},
//   },
//   headCells: {
//     style: {},
//   },
//   cells: {
//     style: {},
//   },

//   header: {
//     style: {
//       textAlign: "center",
//       marginTop: "2em",
//     },
//   },

//   headRow: {
//     style: { color: "green" },
//   },

//   pagination: {
//     style: { borderBottomLeftRadius: "1em", borderEndEndRadius: "1em" },
//   },
// };

export const customStyles: TableStyles = {
  headRow: {
    style: {
      border: "none",
    },
  },
  headCells: {
    style: {
      color: "#202124",
      fontSize: "14px",
    },
  },
  rows: {
    highlightOnHoverStyle: {
      backgroundColor: "rgb(230, 244, 244)",
      borderBottomColor: "#FFFFFF",
      borderRadius: "25px",
      outline: "1px solid #FFFFFF",
    },
  },
  pagination: {
    style: {
      border: "none",
    },
  },
};
