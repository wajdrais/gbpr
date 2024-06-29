import React, { useState } from 'react';

function Fournisseur() {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [fournisseurs, setFournisseurs] = useState([
    { prenom: 'hamdi', nom: 'bougerra', email: 'ehzehf@gmail.com'},
    { prenom: 'nouri', nom: 'bamba', email: 'efffff@gmail.com' }
  ]);

  const handlePrenomChange = (e) => {
    setPrenom(e.target.value);
  };

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFournisseur = { prenom, nom, email };
    setFournisseurs([...fournisseurs, newFournisseur]);
    setPrenom('');
    setNom('');
    setEmail('');
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', height: 'calc(100vh - 64px)', padding: '20px' }}>
        <form style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginRight: '20px' }} onSubmit={handleSubmit}>
          <h1 style={{ color: '#00a7ed', marginBottom: '20px' , textAlign:"center" }}>Inserer Un Fournisseur</h1>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="prenom">Prenom:</label>
            <input type="text" id="prenom" value={prenom} onChange={handlePrenomChange} style={{ width: '90%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="nom">Nom :</label>
            <input type="text" id="nom" value={nom} onChange={handleNomChange} style={{ width: '90%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} style={{ width: '90%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#00a7ed', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Inserer</button>
        </form>
        <div style={{ flexGrow: 1 }}>
          <table style={{ width: '100%', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <thead>
              <tr>
                <th>Prenom</th>
                <th>Nom</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {fournisseurs.map((user, index) => (
                <tr key={index}>
                  <td style={{ textAlign: 'center' }}>{user.prenom}</td>
                  <td style={{ textAlign: 'center' }}>{user.nom}</td>
                  <td style={{ textAlign: 'center' }}>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Fournisseur;
