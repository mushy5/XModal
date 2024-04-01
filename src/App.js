// import './App.css';
// import {useState, useEffect, useRef} from 'react';

// function App() {
//   let mainDiv = useRef();
//   const [formOpened, setFormOpened] = useState(false);
//   const [details, setDetails] = useState({
//     username:'',
//     email:'',
//     phone:'',
//     dob:''
//   });

//   const handleOpen = ()=>{
//     setFormOpened(true);
//   }
  
//   const handleClose =(e)=>{
//     if(e.target.classList.contains('openButton')){
    
     
//     }
//     setFormOpened(false);
//   }

//   const updatedetails = (e)=>{
//     setDetails( {...details,[e.target.id]:e.target.value} )
//   }



//   return (
//     <div className={`mainDiv ${formOpened?'makeDim':''}`} onClick={(e) => {
//       console.log(e.target.className);
//       if (e.target.className === "mainDiv") {
//         setFormOpened(!formOpened);
//         // setModalView(!modalView);
//         //mainDiv.current.style.backgroundColor = "white";
//       }
//     }}>
     
            
//       <div  className="modal" ref={mainDiv}>
//           <div className="modal-content">
//             <div >
//               <h1>User Details Modal</h1>
//               <button type='button' onClick={handleOpen} className='openButton'>Open Form</button>
//             </div>

//              {formOpened &&  
//              <form >
//                   <h1>Fill Details</h1>
//                   <label htmlFor='username'>Username:</label>
//                   <input type='text' id='username' value={details.username} onChange={updatedetails}/>

//                   <label htmlFor='email'>Email Address:</label>
//                   <input type='email' id='email' value={details.email} onChange={updatedetails}/>

//                   <label htmlFor='phone'>Phone Number:</label>
//                   <input type='number' id='phone' value={details.phone} onChange={updatedetails}/>

//                   <label htmlFor='dob'>Date of Birth:</label>
//                   <input type='date' id='dob' value={details.dob} onChange={updatedetails}/>

//                   <button type='submit'>Submit</button>
//               </form>}
//           </div>

//       </div>
     
//     </div>
//   );
// }
import "./App.css";
import { useRef, useState, useEffect } from "react";
function App() {
  let mainDiv = useRef();
  // let [phoneNo, setPhoneNo] = useState(0);
  let [formView, setFormView] = useState(false);
  let [modalView, setModalView] = useState(true);
  let [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNo: "",
    dob: "",
  });

  let phone;

  let onCleckHandler = (e) => {
    mainDiv.current.style.backgroundColor = "rgba(0,0,0, 0.4)";
    mainDiv.current.style.zIndex = "0";
    setFormView(!formView);
    
  };
 

  let phoneNo = useRef();
  let uname = useRef();
  let dob = useRef();
  let email = useRef();
  let onSubmitHandler = (e) => {
    e.preventDefault();
    let no = phoneNo.current.value;
    let enterDate = dob.current.value;
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.current.value)
    ) {
      alert("Invalid email. Please check your email address.");
      return false;
    }

    if (no.toString().length < 10) {
      alert("Invalid phone number. please enter 10-digit phone number.");
      return;
    }

    if (new Date() < new Date(enterDate)) {
      alert("Invalid date of birth. Date of birth cannot be future.");
      return false;
    }

  };
  return (
    <div
      className="mainDiv"
      onClick={(e) => {
        console.log(e.target.className);
        if (e.target.className === "mainDiv") {
          setFormView(!formView);
          setModalView(!modalView);
          mainDiv.current.style.backgroundColor = "white";
        }
      }}
    >
      {modalView && (
        <div className="modal" ref={mainDiv}>
          <div className="modal-content">
            <h1 className="header">User Details Modal</h1>
            <button type="button" onClick={onCleckHandler} className="btn">
              Open Form
            </button>
            <div
              className="formDiv"
            >
              {formView && (
                <form className="userForm" onSubmit={onSubmitHandler}>
                  <h1 className="header">Fill Details</h1>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" ref={uname} required />
                  <label htmlFor="email">Email Address:</label>
                  <input type="email" id="email" ref={email} required />
                  <label htmlFor="phone">Phone Number:</label>
                  <input type="text" id="phone" ref={phoneNo} required />
                  <label htmlFor="dob">Date of Birth:</label>
                  <input type="date" id="dob" ref={dob} required />
                  <button
                    type="submit"
                    className="submit-button"
                    onClick={onSubmitHandler}
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
