import { Pencil } from "@phosphor-icons/react";
import { ClientDataType } from "../columns_client";
type Props = {
  row: ClientDataType;
};

function EditRow({ row }: Props) {
  return (
    <Pencil
      key={row.key}
      onClick={() => {
        alert(row.key);
        // dispatch(fetchData());
      }}
      size={24}
      color="#2d96ff"
    />
  );
}

export default EditRow;
