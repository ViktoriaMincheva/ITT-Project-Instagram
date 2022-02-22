import { useState } from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function LoadingComponent() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#9c9ae6");

  return (
    <div className="sweet-loading">
      <HashLoader color={color} loading={loading} css={override} size={50} />
    </div>
  );
}
