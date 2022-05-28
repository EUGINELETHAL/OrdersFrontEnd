import axios from "axios";







//  const AuthToken = () => {
  
   
  const token =  localStorage.getItem("token");

//   if (token === null) {
   
//      window.location = "/Login";
//     console.log("No credentials found, redirecting...");
    
  
  

//   // return (
//   //   <div>http-common</div>
//   // )
// }
//  else {
  
//   window.location = "http://localhost:8081/orders";
//   return token
// }
// }








export default axios.create({
  baseURL: "http://localhost:8000/api/v1/",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer  ${token}`,
  },
});