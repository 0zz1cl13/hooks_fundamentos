import React, { useState, useEffect } from 'react';


export default function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionReceived)
  }, []);

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords;
    
    setLocation({ latitude, longitude});
  }

  return (
    <>
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude} 
    </>
  )

  // const [repositories, setRepositories] = useState([]);

  // useEffect( () => {
  //   async function getRepositories() {
  //     const response = await fetch('https://api.github.com/users/diego3g/repos');
  //     const data = await response.json();
  //     console.log(data);
  //     setRepositories(data);
  //   }
  //   getRepositories();
  // }, []);

  // useEffect(() => {
  //   const filtered = repositories.filter(repo => repo.favorite);

  //   document.title = `${filtered.length} favoritos`;
  // }, [repositories])

  // function handleFavorite(id) {
  //   const newRepositories = repositories.map(repo => {
  //     return id === repo.id ? { ...repo, favorite: !repo.favorite } : repo;
  //   });

  //   setRepositories(newRepositories);
  // }

  // const [repositories, setRepositories] = useState([
  //   {id: 1, name: 'repo-1'},
  //   {id: 2, name: 'repo-2'},
  //   {id: 3, name: 'repo-3'},
  // ]);
  
  // function handleAddRepository() {
  //   setRepositories([...repositories, { id: Math.random(), name: 'Novo repo'}]);   
  // } 

  // return (
  //   <>
  //     <ul>
  //       {repositories.map(repo => (
  //         <li key={repo.id}>
  //           {repo.name}
  //           {repo.favorite && <span>(Favorito)</span>}
  //           <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
  //         </li> 
  //       ))}
  //     </ul>
  //     {/* <button onClick={handleAddRepository}>
  //       Adicionar repositório
  //     </button> */}
  //   </>
  // );

}