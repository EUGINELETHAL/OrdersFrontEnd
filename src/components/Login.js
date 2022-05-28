import React from "react";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
// import { notifyError } from "./notify";
const Login = () => {
  
  // const history = useHistory();
  // const { setUser } = useContext(UserContext);
  // useEffect(() => {
  //   const queryParams = new URLSearchParams(history.location.search);

  //   const error = queryParams.get("error");

  //   if (error) {
  //     notifyError(error);
  //     history.replace({ search: null });
  //   }
  // }, [history]);

 

  const handleLogin = async () => {
    const response = await axios.get(
      `http://localhost:8000/oidc/authenticate/`
    );

    console.log(response);
  };
  const responseGoogle = (response) => {
   
   localStorage.setItem("token",response.accessToken );
    const data = {
      email: response.profileObj.email,
      first_name: response.profileObj.givenName,
      last_name: response.profileObj.familyName,
    };
    
     console.log(data);
   // eslint-disable-next-line no-unused-expressions
   window.location = "http://localhost:8081/orders";  
   
   
  };

  return (
    <GoogleLogin
      clientId="1084835314828-s8npea9jce01udttaf8td5627p9k06fg.apps.googleusercontent.com"
      buttonText="Sign in with Google"
      onClick={handleLogin}
      onSuccess={responseGoogle} // perform your user logic here
      // onFailure = { onGoogleLoginFailure } // handle errors here
      
      // onFailure={({ details }) => notifyError(details)}
    />
    
  );
};
export default Login;
