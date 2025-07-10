import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Home from './components/Home'
// import Temp from './components/temp'
import Register from './components/Register'
function App() {
  

 return(
  <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#f0f2f5',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <h1 style={{ color: '#333', marginBottom: '30px' }}>HUS Cafe</h1>

      <Register />

      <h3
        style={{
          marginTop: '40px',
          color: '#888',
          fontWeight: 'normal',
          fontSize: '14px',
        }}
      >
        This is Footer
      </h3>
    </div>
  );
}

export default App;
