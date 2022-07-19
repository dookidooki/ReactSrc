import React from "react";


function SList(props){
  const {sports} = props

  return <ul>
    {sports.map((aSport,index) => 
    <li key={index}> {aSport}</li> )}
  </ul>
}

function Golf(props){

  const sports = ["축구", "수영", "달리기"]

return <>
  <SList sports ={sports} />
  </>
}

export default Golf;


