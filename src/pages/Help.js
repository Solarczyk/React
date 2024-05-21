import React from 'react';
import { SplitScreen } from '../components/AutoKomp/SplitScreen';
const LeftSideComp = ()=>{
	return <h1>FAQ</h1>;
}
const RightSideComp = ()=>{
	return <h1>FORM</h1>;
}	
const Help = ()=>{
  return (
    <>
	  <h1>Help</h1>
	  <SplitScreen left={LeftSideComp}
                      right={RightSideComp} />
    </>
  );
}
export default Help;