import { useState } from "react"
import {imgs} from "../utils/answers"
import { wording } from "../utils/wording"
import { Dropdown } from "./Dropdown"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import confusionMatrix from "../assets/images/Heatmaps.png"
import { Table } from "./Table"

export function MainComponent() {
  const [FFNNvalue, setFFNNvalue] = useState("undefined")
  const [dropoutValue, setDropoutValue] = useState("undefined")
  const [BNNvalue, setBNNvalue] = useState("undefined")
  const [imgsIndex, setImgsIndex] = useState(0)
  const [isAnswerGiven, setIsAnswerGiven] = useState(false)

  const updateFFNNvalue = (event) => {
    setFFNNvalue(event.target.value)
  }
  
  const updateDropoutValue = (event) => {
    setDropoutValue(event.target.value)
  }
  
  const updateBNNvalue = (event) => {
    setBNNvalue(event.target.value)
  }

  const updateImgsIndex = () => {
    const newIndex = imgsIndex + 1 === imgs.length ? 0 : imgsIndex + 1;
    setImgsIndex(newIndex)
  }

  const updateIsAnswerGiven = () => {
    setIsAnswerGiven(!isAnswerGiven)
  }

  return (
    <div className="grid-container">
      <div className="header" style={{fontSize: 40}}>
        {wording.pageTitle}
      </div>
      <div className="info">
        {wording.overallInfo}
      </div>
      <Tabs>
        <TabList>
          <Tab>Make your guess!</Tab>
          <Tab>More information</Tab>
        </TabList>
  
        <TabPanel>
          <div className="main tab1">
            <div className="image">
              <img src={imgs[imgsIndex].img} alt={"Handwritten number"} className="number-image" />
            </div>
            <div className="right">
              {isAnswerGiven ? 
              <>
                <div>
                  <b>Your answers:</b> <br/>
                  Classification given by FFNN: {FFNNvalue === "undefined" ? "No class selected" : FFNNvalue[3]} <br/>
                  Classification given by FFNN with dropout: {dropoutValue === "undefined" ? "No class selected" : dropoutValue[3]}  <br/>
                  Classification given by BNN: {BNNvalue === "undefined" ? "No class selected" : BNNvalue[3]} <br/>
                  <br/>
                  <b>Actual answers:</b> <br/>
                  Classification given by FFNN: {imgs[imgsIndex].FFNNans} <br/>
                  Classification given by FFNN with dropout: {imgs[imgsIndex].dropoutAns} <br/>
                  Classification given by BNN: {imgs[imgsIndex].BNNans} <br/>
                  <br/>
                  <Table/>
                </div>
                <button 
                  className="button" 
                  onClick={() => {
                    updateIsAnswerGiven()
                    updateImgsIndex()
                  }}
                >
                  Try again
                </button>
              </>
              :
              <>
                <div className="question">
                  {wording.question}
                </div>
                <div className="selects-container">
                  <br/>
                  Feed forward neural network: <Dropdown value={FFNNvalue} onChange={updateFFNNvalue} /> <br/><br/>
                  Feed forward neural network with dropout: <Dropdown value={dropoutValue} onChange={updateDropoutValue} /> <br/><br/>
                  Bayesian neural network: <Dropdown value={BNNvalue} onChange={updateBNNvalue} /> <br/><br/>
                </div>
                <button className="button" onClick={updateIsAnswerGiven}>Submit</button>
              </>
              }
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="main tab2">
            <div className="image">
              <img src={confusionMatrix} alt={"Confusion matrices for the networks"} className="cf-image" />
            </div>
            <div className="under">
              <b>FFNN</b>
              {wording.moreInfoFFNN}
              <br/><br/>
              <b>FFNN with dropout</b>
              {wording.moreInfoDropout}
              <br/><br/>
              <b>BNN</b>
              {wording.moreInfoBNN}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
