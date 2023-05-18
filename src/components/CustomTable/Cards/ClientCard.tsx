import { useState, FormEvent, useMemo } from "react";
import {
  CreateClients,
  UpdateClient,
} from "@/app/features/clients/clientSlice";
import { useAppDispatch, useAppSelector } from "@/helpers/Hooks/redux-hooks";
import { Client } from "@/helpers/types";

type Props = {
  method: "Ajouter" | "Modifier";
  id?: string;
};

const ClientCard = ({ method, id }: Props) => {
  const dispatch = useAppDispatch();
  const { clients } = useAppSelector((s) => s.client);
  const cols = ["nom", "prenom", "email", "address"];

  const t_client = useMemo(() => {
    return clients.find((obj) => obj._id === id) as Client;
  }, [clients, id]);

  const [client, setClient] = useState<Partial<Client>>(t_client);
  console.log(client);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /** dispatch the action to update or create client **/
    switch (method) {
      case "Ajouter":
        dispatch(CreateClients(client as Client));
        break;
      case "Modifier":
        dispatch(UpdateClient(client as Client));
        break;
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {cols.map((col, idx) => {
        if (col === "_id") {
          return null;
        }

        return (
          <label className="Label" key={idx}>
            <input
              className="input"
              type="text"
              name={col}
              placeholder=""
              required
              value={client ? client[col as keyof Client] : ""}
              onChange={(e) => {
                setClient((prevClient) => ({
                  ...prevClient,
                  [col as keyof Client]: e.target.value,
                }));
              }}
            />
            <span className="sapn-input">{col}</span>
          </label>
        );
      })}

      <button className="fancy">
        <span className="top-key"></span>
        <span className="text">{`${method}`}</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </button>
    </form>
  );
};

export default ClientCard;
