import Table from "../components/CustomTable/Table";
import {
  ClientDataType,
  columns,
} from "../components/CustomTable/columns_client";
import { data } from "../components/data/client_data";
import { useState } from "react";

//** styles
import { customStyles } from "../components/CustomTable/styles";
import { userToken } from "../helpers/utiltys";
import axios from "axios";
function Client() {
  const token = userToken();
  console.log(token);

  async function sendget() {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/refresh`, {
      withCredentials: true,
    });

    console.log(res.data);
  }
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
    <>
      <button onClick={sendget}>send</button>
      <Table
        columns={columns}
        customStyles={customStyles}
        HandleSearch={HandleSearch}
        data={recoreds}
        pending={false}
        type="Client"
      />
    </>
  );
}

export default Client;
