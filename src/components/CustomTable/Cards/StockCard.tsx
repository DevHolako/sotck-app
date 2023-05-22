import { useState, FormEvent, useMemo } from "react";
import { CreateItems, UpdateItem } from "@/app/features/stock/stockSlice";
import { useAppDispatch, useAppSelector } from "@/helpers/Hooks/redux-hooks";
import { Items } from "@/helpers/types";

type Props = {
  method: "Ajouter" | "Modifier";
  id?: string;
};

const StockCard = ({ method, id }: Props) => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((s) => s.stock);

  const t_item = useMemo(() => {
    return items.find((obj) => obj._id === id) as Items;
  }, [items, id]);

  const [item, setItem] = useState<Items>(t_item || { name: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /** dispatch the action to update or create client **/
    switch (method) {
      case "Ajouter":
        dispatch(CreateItems(item));
        break;
      case "Modifier":
        dispatch(UpdateItem(item));
        break;
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="Label">
        <input
          className="input"
          type="text"
          name="designation"
          placeholder=""
          required
          value={item.name}
          onChange={(e) =>
            setItem((prevItem) => ({
              ...prevItem,
              name: e.target.value,
            }))
          }
        />
        <span className="sapn-input">designation</span>
      </label>

      <button className="fancy">
        <span className="top-key"></span>
        <span className="text">{`${method}`}</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </button>
    </form>
  );
};

export default StockCard;
