import { TableStyles } from "react-data-table-component";

const Thead = {
  borderReduicer: "0.375rem",
  fontSize: "0.75rem",
  backgroundColor: "rgb(255, 255, 255)",
  borderSpacing: "0px",
  borderCollapse: "separate",
  lineHeight: "calc(20 / var(--table-font-size))",
  width: "100%",
  overflowX: "auto",
};

export const customStyles: TableStyles = {
  rows: {
    style: {},
  },
  headCells: {
    style: {},
  },
  cells: {
    style: {},
  },

  header: {
    style: {
      textAlign: "center",
      marginTop: "2em",
    },
  },

  headRow: {
    style: { color: "green" },
  },

  pagination: {
    style: { borderBottomLeftRadius: "1em", borderEndEndRadius: "1em" },
  },
};
