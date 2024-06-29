import React, { useState } from 'react';

function Ahome() {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [matricule, setMatricule] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [groupe, setgroupe] = useState('');
  const [users, setUsers] = useState([
    { prenom: 'Wajd', nom: 'rais', email: 'ehzehf@gmail.com', matricule: 'lkdjezlTN4454', password: 'elnglzngklzneg', role: 'Recepteur', groupe :'Ezzahra' },
    { prenom: 'Aziz', nom: 'ya', email: 'efffff@gmail.com', matricule: 'BMWTN455', password: 'elnglzngklzneg', role: 'Recepteur', groupe:'Ben arous'  }
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

  const handleMatriculeChange = (e) => {
    setMatricule(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleGroupeChange = (e) => {
    setgroupe(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { prenom, nom, email, matricule, password, role, groupe };
    setUsers([...users, newUser]);
    setPrenom('');
    setNom('');
    setEmail('');
    setMatricule('');
    setPassword('');
    setRole('');
    setgroupe('');
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', height: 'calc(100vh - 64px)', padding: '20px' }}>
        <form style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginRight: '20px' }} onSubmit={handleSubmit}>
          <h1 style={{ color: '#00a7ed', marginBottom: '20px' , textAlign:"center" }}>Creer un compte</h1>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="prenom">Prenom :</label>
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
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="matricule">Matricule :</label>
            <input type="text" id="matricule" value={matricule} onChange={handleMatriculeChange} style={{ width: '90%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password">Mot de passe:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} style={{ width: '90%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="role">Role:</label>
            <select id="role" value={role} onChange={handleRoleChange} style={{ width: '96%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
              <option value="">Choisit le Role</option>
              <option value="Expediteur">Expediteur</option>
              <option value="Recepteur">Recepteur</option>
              <option value="Expediteur & Recepteur">Expediteur & Recepteur</option>
            </select>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="groupe">Groupe:</label>
            <select id="groupe" value={groupe} onChange={handleGroupeChange} style={{ width: '96%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
              <option value="">Choisit le Groupe</option>
              <option value="Ezzahra">Ezzahra</option>
              <option value="Ben Arous">Ben Arous</option>
            </select>
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#00a7ed', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Créer le Compte</button>
        </form>
        <div style={{ flexGrow: 1 }}>
          <table style={{ width: '100%', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <thead>
              <tr>
                <th>Prenom</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Matricule</th>
                <th>Mot de passe</th>
                <th>Role</th>
                <th>Groupe</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td style={{ textAlign: 'center' }}>{user.prenom}</td>
                  <td style={{ textAlign: 'center' }}>{user.nom}</td>
                  <td style={{ textAlign: 'center' }}>{user.email}</td>
                  <td style={{ textAlign: 'center' }}>{user.matricule}</td>
                  <td style={{ textAlign: 'center' }}>{user.password}</td>
                  <td style={{ textAlign: 'center' }}>{user.role}</td>
                  <td style={{ textAlign: 'center' }}>{user.groupe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Ahome;
