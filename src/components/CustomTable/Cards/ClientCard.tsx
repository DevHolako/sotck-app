import { Client, data } from "../../data/client_data";
import { useState, FormEvent } from "react";

type Props = {
  method: "Ajouter" | "Modifier";
  id?: number;
};

export default function ClientCard({ method, id }: Props) {
  const cols = Object.keys(data[0]);
  const target = data.find((obj) => obj.key === id);
  const [client, setClient] = useState<Partial<Client> | undefined>(target);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(client);
    /** dispatch the action to update the clien  **/
    /** depending on the method */
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      {cols.map((col, idx) => {
        if (col === "key") {
          return null;
        }
        return (
          <label className="Label" key={idx}>
            <input
              className="input"
              type={col === "key" ? "number" : "text"}
              name={col}
              placeholder=""
              required
              value={client ? client[col as keyof Client] : ""}
              onChange={(e) => {
                setClient({
                  ...client,
                  [col as keyof Client]: e.target.value,
                });
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
}
