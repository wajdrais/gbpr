import React from "react";
import logo from '../assests/logo1.png'

function Login() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      <div style={{ 
        width: "500px", 
        height: "400px", 
        border: "solid 1px #808080", 
        borderRadius:'30px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <img src={logo} alt="src" style={{ width:'100px' }} />
        <h1 style={{ textAlign:'center', color:'#01c3df' }}>Connexion</h1>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <input 
            type="text" 
            placeholder="Matricule" 
            style={{ margin: '10px 0', padding: '10px', width: '80%', borderRadius: '5px', border: '1px solid #808080' }} 
          />
          <input 
            type="password" 
            placeholder="Mot de passe" 
            style={{ margin: '10px 0', padding: '10px', width: '80%', borderRadius: '5px', border: '1px solid #808080' }} 
          />
          <button 
            type="submit" 
            style={{ margin: '20px 0', padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#01c3df', color: 'white', cursor: 'pointer' }}
          >
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
