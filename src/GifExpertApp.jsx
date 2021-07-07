import React,{ useState } from 'react';

import { AddCategory } from './components/AddCategories';
import { GifGrid } from './components/GifGrid';

const GifsExpertApp = () => {

  // const categories = ['One Punch', 'Pokemon', 'Dragon Ball Z']
  const [categories, setCategories] = useState(['Dragon Ball Z']);

  /* const handleAdd = () => {
    const nuevo = 'Ranma 1/2';
    setCategories([...categories, nuevo]);
    // setCategories puede recibir un callback
    // Primero sera el callback => [el estado anterior, el nuevo estado];
    // setCategories( cats => [...cats, 'Ranma 1/2']);
  } */

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />
      {/* <button onClick={handleAdd}>Agregar Nuevo</button> */}

      <ol>
        {
          categories.map( category => (
            <GifGrid
              key = { category }
              category = {category}
            />
          ))
        }
      </ol>
    </>
  )
}

export default GifsExpertApp;