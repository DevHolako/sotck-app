import { GetAllClients, search } from "@features/clients/clientSlice";
import Table from "@compo/CustomTable/Table";
import { columns } from "@compo/CustomTable/Cols/clients";
import { customStyles } from "@compo/CustomTable/styles";
import { useAppDispatch, useAppSelector } from "@/helpers/Hooks/redux-hooks";
import type { Client } from "@/helpers/types";
import { useEffect } from "react";

//** styles
function Client() {
  const { filteredData } = useAppSelector((s) => s.client);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetAllClients());
  }, []);
  const HandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(search(e.target.value));
  };

  return (
    <>
      <Table
        columns={columns}
        customStyles={customStyles}
        HandleSearch={HandleSearch}
        data={filteredData}
        type="Client"
      />
    </>
  );
}

export default Client;
