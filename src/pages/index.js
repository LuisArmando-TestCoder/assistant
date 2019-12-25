import React, { useEffect, useState } from "react"
import preset from "canvas-preset"
import commander from "../commands/commander";
import commandsObject from "../commands/controller";
import "../styles/index.scss";

const IndexPage = () => {
  const undoCommand = 'nevermind';
  const [say, setSay] = useState(() => () => {});
  const [recognitionResult, setRecognitionResult] = useState('');
  const [availableCommands, setAvailableCommands] = useState(Object.keys(commandsObject));
  useEffect(() => { // enhance: use promises instead of callbacks
    preset(props => {
      props.size({ width: () => 0, height: () => 0 });
      const synthesis = props.speech({});
      setSay(() => () => {
        synthesis.listen(result => {
          setRecognitionResult(result);
          commander({result, synthesis, props, callback: commands => {
            setAvailableCommands(Object.keys(commands));
          }});
        });
      });
    });
  }, []);
  return (
    <section className='main-content'>
      <p className='result-text'>{availableCommands.join(' / ')}</p>
      <h1 className='main-title'>Alfred</h1>
      <canvas className='hide'/>
      <p className='result-text'>{recognitionResult}</p>
      <button className='btn start-btn' onClick={say}>Start</button>
      <p className='disclaimer-text'>The undo command is return</p>
    </section>
  )
}

export default IndexPage
