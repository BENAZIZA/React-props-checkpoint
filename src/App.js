import React from 'react';
import './App.css';
import Profile from './profile/Profile'

function App() {
  const presentation={
    fullName:"BENAZIZA Hassen",
    bio: "  Challenged with increasing product quality, improving process flow, and reducing costs while maintaining or improving safety for large plastics manufacturer",
    profession:"industrial engineer",
  }
  const handleName=(e)=>{
    e.preventDefault()
    alert(`My name is ${presentation.fullName}`)
  }
  return (
    <div className="App" style ={{backgroundColor:"grey",height:"100vh"}}>
    <Profile fullName={presentation.fullName} bio={presentation.bio} profession={presentation.profession} handleName={handleName}><img src="/Hassen.PNG"   /></Profile>
      
    </div>
  );
}

export default App;
