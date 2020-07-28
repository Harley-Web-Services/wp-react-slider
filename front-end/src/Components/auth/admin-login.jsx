// import React from 'react';
// import { useForm } from 'react-hook-form';
// import {baseUrl} from './baseUrl'
// import axios from 'axios'
// export default function Login() {
//   const { register, handleSubmit, errors } = useForm();
//   const onSubmit = data =>{
//        axios.get(`${baseUrl}/adminLogin`)
//         .then((res) =>{
//             if(res.data.email === data.email && res.data.password === data.password){
//                 localStorage.setItem("token",1);
//                 window.location.replace('/')
//             }
//         else{alert("Email or password incorrect")
//         }
//         })
//         .catch((error) =>{alert(error.message)})


//   }
//   console.log(errors);
  
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="email" placeholder="email" name="email" ref={register} />
//       <input type="password" placeholder="password" name="password" suggested="current-password" ref={register} />

//       <input type="submit" />
//     </form>
//   );
// }