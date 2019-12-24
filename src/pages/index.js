import React, { useEffect, useState } from "react"
import preset from "canvas-preset"
import commander from "../commands/commander";
import "../styles/index.scss";

const IndexPage = () => {
  const [say, setSay] = useState(() => () => {});
  const [recognitionResult, setRecognitionResult] = useState('');
  useEffect(() => {
    preset(props => {
      props.size({ width: () => 0, height: () => 0 });
      const synthesis = props.speech({});
      setSay(() => () => {
        synthesis.listen(result => {
          setRecognitionResult(result);
          commander({result, synthesis, props});
        });
      });
    });
  }, []);
  return (
    <section className='main-content'>
      <h1 className='main-title'>Alfred</h1>
      <canvas/>
      <p className='result-text'>{recognitionResult}</p>
      <button className='btn start-btn' onClick={say}>Start</button>
    </section>
  )
}

export default IndexPage
