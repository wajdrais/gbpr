import React, { useState } from 'react';

function Groupefou() {
  const [nom, setNom] = useState('');
  const [groupefou, setGroupefou] = useState([
    { nom: 'Nutrition' },
    { nom: 'Sport' }
  ]);

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGroupeFou = { nom };
    setGroupefou([...groupefou, newGroupeFou]);
    setNom('');
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', height: 'calc(100vh - 64px)', padding: '20px' }}>
        <form style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginRight: '20px' }} onSubmit={handleSubmit}>
          <h1 style={{ color: '#00a7ed', marginBottom: '20px', textAlign: 'center' }}>Inserer Un Groupe Fournisseur</h1>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="nom">Nom :</label>
            <input type="text" id="nom" value={nom} onChange={handleNomChange} style={{ width: '90%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#00a7ed', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Inserer</button>
        </form>
        <div style={{ flexGrow: 1 }}>
          <table style={{ width: '100%', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <thead>
              <tr>
                <th>Nom</th>
              </tr>
            </thead>
            <tbody>
              {groupefou.map((user, index) => (
                <tr key={index}>
                  <td style={{ textAlign: 'center' }}>{user.nom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Groupefou;
