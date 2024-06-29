import React, { useState } from 'react';

function Article() {
  const [articles, setArticles] = useState([
    { article: 'palette', type: 'bois', dimension:'120*100', code: 'fjzenflze44' },
    { article: 'bac', type: '',  dimension:'',code: 'kfnkzefkze44' }
  ]);
  const [article, setArticle] = useState('');
  const [type, setType] = useState('');
  const [code, setCode] = useState('');
  const [dimension, setDimension] = useState('');

  const handleArticleChange = (e) => {
    setArticle(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };
  const handleDimensionChange = (e) => {
    setDimension(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = { article, type,dimension, code };
    setArticles([...articles, newArticle]);
    setArticle('');
    setType('');
    setCode('');
    setDimension('');
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', height: 'calc(100vh - 64px)', padding: '20px' }}>
        <form style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginRight: '20px' }} onSubmit={handleSubmit}>
          <h1 style={{ color: '#00a7ed', marginBottom: '20px', textAlign: "center" }}>Inserer Un Article</h1>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="article">Article:</label>
            <select id="groupe" value={article} onChange={handleArticleChange} style={{ width: '96%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
              <option value="">Choisit l'article</option>
              <option value="Palette">Palette</option>
              <option value="bac"> Bac</option>
            </select>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="type">Type:</label>
            <select id="type" value={type} onChange={handleTypeChange} style={{ width: '96%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
              <option value="">Choisit le type</option>
              <option value="bois">Bois</option>
              <option value="plastique"> plastique</option>
            </select>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="dimension">Dimension:</label>
            <select id="dimension" value={dimension} onChange={handleDimensionChange} style={{ width: '96%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
              <option value="">Choisit la dimension</option>
              <option value="120*100">120*100</option>
              <option value="120*80"> 120*80</option>
            </select>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="code">Code du produit :</label>
            <input type="text" id="code" value={code} onChange={handleCodeChange} style={{ width: '90%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#00a7ed', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Inserer</button>
        </form>
        <div style={{ flexGrow: 1 }}>
          <table style={{ width: '100%', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <thead>
              <tr>
                <th>Article</th>
                <th>Type</th>
                <th>Dimension</th>
                <th>Code</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article, index) => (
                <tr key={index}>
                  <td style={{ textAlign: 'center' }}>{article.article}</td>
                  <td style={{ textAlign: 'center' }}>{article.type}</td>
                  <td style={{ textAlign: 'center' }}>{article.dimension}</td>
                  <td style={{ textAlign: 'center' }}>{article.code}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Article;
