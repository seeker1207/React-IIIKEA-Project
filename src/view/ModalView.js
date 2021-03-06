import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";
//import { render } from '@testing-library/react'

const ModalView = (props) => {
  const [open, setOpen] = React.useState(false);
  // const selectedProduct = props.selectedProduct;
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button primary> 구매하기 </Button>}
    >
      <Modal.Header>구매확인</Modal.Header>
      <Modal.Content image>
        <img
          alt="상품이미지"
          size="small"
          src={props.selectedProduct.imgUrl}
          wrapped
        />
        <Modal.Description>
          <Header>{props.selectedProduct.name}</Header>
          <p>해당 상품을 구매하시겠습니다?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          아니요
        </Button>
        <Button
          content="구매하기"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ModalView;
