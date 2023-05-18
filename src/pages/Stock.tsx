import Table from "@compo/CustomTable/Table";
import { customStyles } from "@compo/CustomTable/styles";
import { useAppSelector } from "@/helpers/Hooks/redux-hooks";
import { columns } from "@compo/CustomTable/Cols/stock";
function Stock() {
  const { items } = useAppSelector((s) => s.stock);
  return (
    <>
      <Table
        columns={columns}
        customStyles={customStyles}
        data={items}
        type="Stock"
      />
    </>
  );
}

export default Stock;
