import React from 'react';
import imageCab from '../img/imgRams (2).png';

export const Cabecera = () => {
  return (
    <div className='row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg img-svg'>
      <div className='col-lg-7 p-3 p-lg-5 pt-lg-3'>
        <h1 className='display-5 fw-bold lh-1'>Gordon Ramsey</h1>
        <p className='lead'>
          “Los cocineros deben practicar, practicar, practicar. Cualquiera puede aprender, pero
          necesita concentración, comprensión adecuada y avanzar al ritmo correcto, no correr antes
          de poder caminar.”
        </p>
      </div>
      <div className='col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg'>
        <img src={imageCab} alt='img Ramsey' className='img-fluid img-cab' />
      </div>
    </div>
  );
};
