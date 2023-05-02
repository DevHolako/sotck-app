type Props = {
  type?: "button" | "reset" | "submit";
  label?: string;
};

function LoginButton({ type, label }: Props) {
  return (
    <button className="btn" type={type || "button"}>
      <strong>{label}</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
  );
}

export default LoginButton;
