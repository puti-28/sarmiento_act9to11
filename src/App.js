import React, { useState } from 'react';
import { styles } from './styles';
import image from './image/computer.jpg';

const LoginBox = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div style={styles.boxStyle}>
      <h2 // Inline Styling
        style={{ textAlign: 'center', color: 'white', fontSize: '30px' }}>Login</h2> 

      <input
        placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ ...styles.inputStyle, color: 'black' }}
        />

      <input
        placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ ...styles.inputStyle, color: 'black' }}
        />
  

      <a href='' style={{ textAlign: 'center', display: 'black', marginTop: '30px', marginLeft: '170px',color: 'white' }}>Forgot Password</a>

      <button onClick={handleLogin} style={{ ...styles.buttonStyle, color: 'white' }}>
        Login
      </button>
      <p style={{color: 'white', marginLeft: '120px'}}>Don't have an account?<a href='' style={{ textAlign: 'center', display: 'black', marginTop: '30px', marginLeft: '10px',color: 'white' }}>Signup</a></p>
    </div>
  );
};

const App = () => {
  return (
    <div style={bodyStyle}>
      <div style={boxStyle}>
        <LoginBox />
      </div>
    </div>
  );
};

const bodyStyle = { // Style Object Variable
  backgroundImage: `url(${image})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const boxStyle = {
  margin: 'auto',
  width: '500px',
  height: '500px',
  padding: '20px',
  border: '5px solid #ccc',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  marginTop: '80px',
  boxSizing: 'border-box',
  borderRadius: '50px',
};

export default App;

