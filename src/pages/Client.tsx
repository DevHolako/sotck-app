import Table from "../components/CustomTable/Table";
import {
  ClientDataType,
  columns,
} from "../components/CustomTable/columns_client";
import { data } from "../components/data/client_data";
import { useState } from "react";

//** styles
import { customStyles } from "../components/CustomTable/styles";

function Client() {
  // const { status, user, error } = useAppSelector((s) => s.UserSlice);

  const [recoreds, setRecoreds] = useState(data);
  const HandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const newData = data.filter((row: ClientDataType) => {
      return (
        row.nom.toLocaleLowerCase().includes(value) ||
        row.prenom.toLocaleLowerCase().includes(value) ||
        row.email.toLocaleLowerCase().includes(value) ||
        row.address.toLocaleLowerCase().includes(value)
      );
    });
    setRecoreds(newData);
  };
  return (
    <Table
      columns={columns}
      customStyles={customStyles}
      HandleSearch={HandleSearch}
      data={recoreds}
      pending={false}
      title="Client Table"
    />
  );
}

export default Client;
