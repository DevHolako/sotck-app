// import { useAppDispatch } from "../../helpers/hookes";
import { Trash } from "@phosphor-icons/react";
import { ClientDataType } from "../columns_client";

type Props = {
  row: ClientDataType;
};
function DeleteRow({ row }: Props) {
  //   const dispatch = useAppDispatch();
  return (
    <Trash
      key={row.key}
      onClick={() => {
        alert(row.key);
        // dispatch(fetchData());
      }}
      size={24}
      color="#ff726f"
    />
  );
}

export default DeleteRow;
