import React, { useState } from 'react';

function Mouvement() {
  const [orders, setOrders] = useState([
    { id: 1, type: 'palette', material: 'plastique', dimension: '120*120', quantity: 10, numBL: '12345', camion: 'ABC123', validated: false },
    { id: 2, type: 'bac', material: '', dimension: '', quantity: 5, numBL: '67890', camion: 'DEF456', validated: false }
  ]);

  const handleValidate = (id) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, validated: !order.validated } : order
    ));
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <table style={{ width: '90%', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginTop:"100px" }}>
          <thead>
            <tr>
              <th>ID du commande</th>
              <th>Type du commande</th>
              <th>Material</th>
              <th>Dimension</th>
              <th>Quantité du produit</th>
              <th>Numéro BL</th>
              <th>M. camion</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} style={{ backgroundColor: order.validated ? 'green' : 'red', color: 'white', textAlign: 'center' }}>
                <td>{order.id}</td>
                <td>{order.type}</td>
                <td>{order.material}</td>
                <td>{order.dimension}</td>
                <td>{order.quantity}</td>
                <td>{order.numBL}</td>
                <td>{order.camion}</td>
                <td>
                  <button onClick={() => handleValidate(order.id)} style={{ padding: '5px 10px', cursor: 'pointer', borderRadius: '4px', border: 'none'  }}>
                    {order.validated ? 'Annuler' : 'Valider'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Mouvement;
