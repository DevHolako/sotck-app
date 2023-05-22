// import { useAppDispatch } from "../../helpers/hookes";
import { DeleteClient } from "@/app/features/clients/clientSlice";
import { DeleteItem } from "@/app/features/stock/stockSlice";
import { useAppDispatch } from "@/helpers/Hooks/redux-hooks";
import { Client, Items } from "@/helpers/types";
import { Trash } from "@phosphor-icons/react";

type Props = {
  row: Client | Items;
  whome: "Client" | "Items";
};
function DeleteRow({ row, whome }: Props) {
  const dispatch = useAppDispatch();
  return (
    <Trash
      key={row._id}
      onClick={() => {
        switch (whome) {
          case "Client":
            dispatch(DeleteClient(row._id));
            break;
          case "Items":
            dispatch(DeleteItem(row._id));
            break;
          default:
            break;
        }
      }}
      size={24}
      color="#ff726f"
    />
  );
}

export default DeleteRow;
