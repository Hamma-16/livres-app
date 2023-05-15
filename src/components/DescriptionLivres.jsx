import React, { useState } from 'react';

const DescriptionLivres = () => {
  const [livres, setLivres] = useState([]);
  const [nouveauLivre, setNouveauLivre] = useState({
    id: '',
    titre: '',
    description: '',
    image: '',
  });

  const ajouterLivre = (event) => {
    event.preventDefault();

    const { id, titre, description, image } = nouveauLivre;

    const livre = {
      id: livres.length + 1,
      titre,
      description,
      image,
    };

    setLivres((livres) => [...livres, livre]);
    setNouveauLivre({
      id: '',
      titre: '',
      description: '',
      image: '',
    });
  };

  const supprimerLivre = (id) => {
    const nouveauxLivres = livres.filter((livre) => livre.id !== id);
    setLivres(nouveauxLivres);
  };

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNouveauLivre((livre) => ({
          ...livre,
          [name]: e.target.result,
        }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setNouveauLivre((livre) => ({
        ...livre,
        [name]: value,
      }));
    }
  };

  return (
    <div className="livres-container">
      <h2 className="livres-title">Description des livres</h2>

      <form className="livre-form" onSubmit={ajouterLivre}>
        <input
          type="text"
          name="id"
          placeholder="ID du livre"
          value={nouveauLivre.id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="titre"
          placeholder="Titre du livre"
          value={nouveauLivre.titre}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description du livre"
          value={nouveauLivre.description}
          onChange={handleInputChange}
        />
        <input type="file" name="image" onChange={handleInputChange} />
        <button type="submit" className="livre-btn livre-btn-ajouter">
          Ajouter un livre
        </button>
      </form>

      <ul className="livres-list">
        {livres.map((livre) => (
          <li key={livre.id} className="livre-card">
            <h3>{livre.titre}</h3>
            <p>{livre.description}</p>
            {livre.image && (
              <img
                src={livre.image}
                alt="Page de garde du livre"
                className="livre-image"
              />
            )}
            <button
              onClick={() => supprimerLivre(livre.id)}
              className="livre-btn livre-btn-supprimer"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DescriptionLivres;
