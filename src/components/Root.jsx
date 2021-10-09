import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import queryString from 'query-string';
import { Cabecera } from './Cabecera';
import ModalRecipe from './ModalRecipe';

export const Root = () => {
  const [recipes, setRecipes] = useState([
    {
      ok: true,
      idMeal: '',
      strMeal: '',
    },
  ]);
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    const { q = '' } = queryString.parse(location.search);
    if (q === '') {
      return setRecipes([
        {
          ok: true,
          idMeal: '',
          strMeal: '',
        },
      ]);
    } else {
      getRecipes(q);
    }
  }, [location.search]);
  const getRecipes = async (q) => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + q);
    const { meals } = await response.json();
    setRecipes(meals);
  };
  // Funcion para la busqueda seguna las palabras ingresadas
  const handleSearch = ({ target: { value } }) => {
    history.push('?q=' + value);

    getRecipes(value);
  };
  return (
    <div>
      <Cabecera />
      {/* Componentes de busqueda */}
      <div className='row '>
        <div className='col-10 col-md-9 col-lg-6 mx-auto d-flex'>
          <input
            type='text'
            placeholder='Escriba el nombre de la receta'
            className='form-control mt-2'
            onChange={handleSearch}
          />
          <button className='btn btn-primary mt-2 ms-1 fs-4'>
            <i className='bi-search'></i>{' '}
          </button>
        </div>
      </div>
      <div className='container'>
        <h1 className='text-center px-3 pt-2 '>Results</h1>
        <div className='row mt-1'>
          {recipes?.map((recipe) => (
            <ModalRecipe key={recipe.idMeal} className='col-md-6 col-lg-4'>
              <div className='card m-1 shadow'>
                <img
                  src={recipe.strMealThumb}
                  className='card-img-top efecto'
                  alt='imagen receta'
                />
                <div className='card-body'>
                  <h3 className='card-title'>{recipe.strMeal} </h3>
                  <p className='ms-3 card-text lead'>
                    <span classname='fw-bold'>Category:</span> {recipe.strCategory}
                  </p>
                </div>
              </div>
            </ModalRecipe>
          ))}
        </div>
      </div>
    </div>
  );
};
