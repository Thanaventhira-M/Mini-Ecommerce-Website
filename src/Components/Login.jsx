import React from 'react';
import './Login.css';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDVg_t30nAH7i0sd8vVHL1bxbAvRgFs7nU",
  authDomain: "auth-f4960.firebaseapp.com",
  projectId: "auth-f4960",
  storageBucket: "auth-f4960.appspot.com",
  messagingSenderId: "449018589167",
  appId: "1:449018589167:web:e6fd11de8dae21f392901a",
  measurementId: "G-7ZGBQWEBYQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const Login = ({ setUser, setProfile }) => {
  const AddUser = (event) => {
    event.preventDefault();
    let name = event.target.uName.value;
    let file = event.target.uProfile.files[0];

    setUser(name);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ src: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user.displayName);
        setProfile({ src: user.photoURL });
      })
      .catch((error) => {
        console.error("Google Sign-in Error:", error);
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={AddUser}>
        <h1>Login</h1>
        <table>
          <tbody>
            <tr>
              <td>Profile Photo:</td>
              <td><input type="file" name="uProfile" accept="image/*" /></td>
            </tr>
            <tr>
              <td>Name:</td>
              <td><input type="text" name="uName" placeholder="Enter Your Name" required /></td>
            </tr>
            <tr>
              <td>Mobile:</td>
              <td><input type="number" name="uNumber" placeholder="Enter your Mobile No" required /></td>
            </tr>
            <tr>
              <td>Email:</td>
              <td><input type="email" name="uEmail" placeholder="Enter your email" required /></td>
            </tr>
            <tr>
              <td>Address:</td>
              <td><textarea name="address" placeholder="Enter your address"></textarea></td>
            </tr>
            <button type="submit" className='sub-btn'>Submit</button>
        <button type="button" className="google-btn" onClick={handleGoogleLogin}> <img src="https://miro.medium.com/v2/resize:fit:1400/1*u0bwdudgoyKjSLntsRcqiw.png" alt="" />
        </button>
          </tbody>
        </table>
       
      </form>
    </div>
  );
};

export default Login;
