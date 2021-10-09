import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import queryString from 'query-string';
import { Cabecera } from './Cabecera';
import ModalRecipe from './ModalRecipe';
import { ShowLoading } from './ShowLoading';

export const Root = () => {
  const [isLoading, setIsLoading] = useState(false);
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
      return setRecipes([]);
    } else {
      getRecipes(q);
    }
  }, [location.search]);
  const getRecipes = async (q) => {
    try {
      setIsLoading(true);
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + q);
      const { meals } = await response.json();
      setRecipes(meals);
      setIsLoading(false);
    } catch (error) {
      console.log('Error en Get Movies' + error.message);
    }
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
      {isLoading ? (
        <ShowLoading />
      ) : (
        <div className='container'>
          {!isLoading && <h1 className='text-center px-3 pt-2 '>Results</h1>}
          <div className='row mt-1'>
            {recipes?.map((recipe) => (
              <ModalRecipe
                key={recipe.idMeal}
                className='col-md-6 col-lg-4 col-xxl-3 '
                recipe={recipe}
              >
                <div className='card m-1 shadow-lg p-2'>
                  <img
                    src={recipe.strMealThumb}
                    className='card-img-top efecto p-2 border-5'
                    alt='imagen receta'
                    style={{
                      maxWidth: 700,
                      maxHeight: 450,
                      margin: '0 auto',
                      borderRadius: '15px',
                    }}
                  />
                  <div className='card-body'>
                    <h4 className='card-title tit-card'>{recipe.strMeal} </h4>
                    <p className='ms-3 card-text lead text-secondary'>
                      <span classname='fw-bold'>Category:</span> {recipe.strCategory}
                    </p>
                  </div>
                </div>
              </ModalRecipe>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
