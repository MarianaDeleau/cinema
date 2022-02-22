import { useState } from "react";
import RingLoader from "react-spinners/RingLoader";

const Loading = () => {
  const [loading] = useState();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "grey",
      }}
    >
      loading...
      <RingLoader color="red" loading={loading} size={60} />
    </div>
  );
};

export { Loading };
