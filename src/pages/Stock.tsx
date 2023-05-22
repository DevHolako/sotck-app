import { useEffect } from "react";
import Table from "@compo/CustomTable/Table";
import { customStyles } from "@compo/CustomTable/styles";
import { useAppDispatch, useAppSelector } from "@/helpers/Hooks/redux-hooks";
import { columns } from "@compo/CustomTable/Cols/stock";
import { GetAllItems, search } from "@/app/features/stock/stockSlice";
function Stock() {
  const { filteredData } = useAppSelector((s) => s.stock);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetAllItems());
  }, []);
  const HandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(search(e.target.value));
  };

  return (
    <Table
      columns={columns}
      customStyles={customStyles}
      HandleSearch={HandleSearch}
      data={filteredData}
      type="Stock"
    />
  );
}
export default Stock;
