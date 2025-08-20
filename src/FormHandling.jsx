// import React, { useState } from "react";

// function FormHandling() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simple validation
//     if (!email.includes("@")) {
//       setError("Invalid email");
//       return;
//     }
//     if (password.length < 6) {
//       setError("Password must be at least 6 characters");
//       return;
//     }
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     // If all good
//     setError("");
//     alert("Form submitted successfully!");
//     console.log({ email, password });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div>
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <div>
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//       </div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default FormHandling;
import React, { useState } from 'react'

const FormHandling = () => {
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const[confirmPassword,setconfirmPassword]=useState("");
  const[error,seterror]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!email.includes("@")){
      seterror("Invalid email");
      return;
    }
    const passwordpattern=/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@$!%*?&]).{6,}$/;
    if(!passwordpattern.test(password)){
      seterror("Password must be at least 6 characters long and include letters, numbers, and special characters");
      return;
    }
    if(password !== confirmPassword){
      seterror("Passwords do not match");
      return;
    }
    seterror("");
    alert("Form submitted successfully!");
    console.log({email, password});
  }
  return (
    <form onSubmit={handleSubmit}>
   
    <div>
      <input type='email' placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)}/><br></br>
      <input type='password' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/><br/>
      <input type='password' placeholder='ConfirmPassword' value={confirmPassword} onChange={(e)=>setconfirmPassword(e.target.value)}/><br/>
      {error && <p style={{color:"red"}}>{error}</p>}
      <button type='submit'>Submit</button>
    </div>
     </form>
  )
}

export default FormHandling
