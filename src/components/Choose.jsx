import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Choose() {
  return (
    <div style={{ display: "flex", gap: "30px", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <Link to="/Expedition" style={{ textDecoration: 'none', color: '#fff' }}>
        <Button
          variant="contained"
          style={{ 
            width: "300px", 
            height: "300px", 
            borderRadius: "30px", 
            fontSize: "24px", 
            backgroundColor: "#2596be", 
            color: "#fff", 
            boxShadow: "0 8px 16px rgba(0,0,0,0.3)" 
          }}
        >
          Aller à l'expédition
        </Button>
      </Link>
      <Link to="/Reception" style={{ textDecoration: 'none', color: '#fff' }}>
        <Button
          variant="contained"
          style={{ 
            width: "300px", 
            height: "300px", 
            borderRadius: "30px", 
            fontSize: "24px", 
            backgroundColor: "#2596be", 
            color: "#fff", 
            boxShadow: "0 8px 16px rgba(0,0,0,0.3)" 
          }}
        >
          Aller à la réception
        </Button>
      </Link>
    </div>
  );
}

export default Choose;
