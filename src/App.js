import React,{useState} from 'react'
import Alert from './components/Alert'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

import {
  BrowserRouter as Router,
  Switch ,
  Route
} from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const toggleMode=()=>{
   if(mode==='light')
   {
     setMode('dark');
     document.body.style.backgroundColor="black";
     showAlert("Dark Mode has been Enabled! ","success")
    //  change title 
     document.title="TextUtils - DarkMode"
   }
   else
   {
    setMode('light');
     document.body.style.backgroundColor="white";
     showAlert("Light Mode has been Enabled! ","success")
     document.title="TextUtils - LightMode"
   }
  }
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      // automatic remove the alert after 2 second 
      setTimeout(()=>{
         setAlert(null);
      },2000)
  }

  return (
    <div>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch >
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter the Text to Analyze Below " mode={mode} showAlert={showAlert} />
          </Route>
          <Route exact path="/contact">
            <Contact mode={mode}/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  )
}
