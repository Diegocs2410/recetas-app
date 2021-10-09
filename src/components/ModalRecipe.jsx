import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalRecipe = (props) => {
  const { className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <div onClick={toggle} className={className}>
        {props.children}
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        {props.children}
      </Modal>
    </>
  );
};

export default ModalRecipe;
