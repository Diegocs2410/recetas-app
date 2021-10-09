import { useState } from 'react';
import { Modal } from 'reactstrap';

const ModalRecipe = (props) => {
  const { className, recipe } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <div onClick={toggle} className={className}>
        {props.children}
      </div>
      <Modal isOpen={modal} toggle={toggle} style={{ minWidth: 900 }}>
        <h2 className='text-center titulo-recipe'> {recipe.strMeal} </h2>
        {props.children}
        <div className='p2 m-2'>
          <p className='card-text p-3 lead'>Instructions:</p>
          <p className=' p-2'>{recipe.strInstructions} </p>
          <p className='h3 p-2'>
            Area: <span className='fw-bold h4'> {recipe.strArea}</span>{' '}
          </p>

          <a
            className='nav-link fs-5 btn btn-primary text-white d-inline-block'
            href={recipe.strYoutube}
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            <i className='bi-bi-watch'></i>
            Video cook
          </a>
        </div>
      </Modal>
    </>
  );
};

export default ModalRecipe;
