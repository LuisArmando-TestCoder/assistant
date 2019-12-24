import React, { useEffect, useState } from "react"
import preset from "canvas-preset"
import command from "../utils/command";

const IndexPage = () => {
  const [say, setSay] = useState(() => () => {});
  useEffect(() => {
    preset(props => {
      props.size({ width: () => 0, height: () => 0 });

      const synthesis = props.speech({});
      setSay(() => () => {
        synthesis.listen(result => command({result, synthesis, props}))
      });
    });
  }, []);
  return (
    <>
      <canvas/>
      <button onClick={say}>wow</button>
    </>
  )
}

export default IndexPage
