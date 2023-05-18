// import { useAppDispatch } from "../../helpers/hookes";
import { DeleteClient } from "@/app/features/clients/clientSlice";
import { useAppDispatch } from "@/helpers/Hooks/redux-hooks";
import { Client, Items } from "@/helpers/types";
import { Trash } from "@phosphor-icons/react";

type Props = {
  row: Client | Items;
};
function DeleteRow({ row }: Props) {
  const dispatch = useAppDispatch();
  return (
    <Trash
      key={row._id}
      onClick={() => {
        dispatch(DeleteClient(row._id));
      }}
      size={24}
      color="#ff726f"
    />
  );
}

export default DeleteRow;
