import React, { Component } from "react";
import { Grid, Button, Input, Divider, Image } from "semantic-ui-react";
import bed from "../image/bed.png";
import ModalView from "./ModalView";

const inputStyle = {
  textAlign: "left",
  lineHeight: 3,
  width: "80%",
  marginLeft: "40px",
};

class ProductDetailView extends Component {
  state = {
    count: this.props.count,
  };
  render() {
    const { product, onAddProductInCart } = this.props;

    return (
      <Grid textAlign="center">
        <Divider hidden />
        <Grid.Row>
          <Grid.Column width={7}>
            <img alt="상품이미지" src={product.imgUrl} />
            <Image avatar src={bed} size="tiny" />
            <Image avatar src={bed} size="tiny" />
            <Image avatar src={bed} size="tiny" />
            <Image avatar src={bed} size="tiny" />
          </Grid.Column>
          <br />
          <Grid.Column width={7}>
            <div>
              <br />
              <br />
              <br />
              <h1>
                <strong>{product.name}</strong>
              </h1>
              <h2>{product.price}</h2>
              <br />
              <p>{product.description}</p>
              <br />
            </div>
            <Divider hidden />
            <div>
              <Input
                label="수량"
                type="number"
                min="1"
                placeholder="1"
                value={this.state.count}
                onChange={(e) => this.setState({ count: e.target.value })}
              />
            </div>
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <div>
              <ModalView selectedProduct={product} />
              {/* <Button primary>구매하기</Button> */}
              <Button
                secondary
                onClick={() => onAddProductInCart(product, this.state.count)}
              >
                장바구니
              </Button>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Divider hidden />
        <Grid.Row>
          <Grid.Column width={12}>
            <div>
              <p style={inputStyle}>
                <strong>{product.detail}</strong>
              </p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ProductDetailView;
