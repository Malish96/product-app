import React from 'react';
import { Button, Card, Col, Image, Rate, Row } from 'antd';
import './ProductCard.css';
import { ReactComponent as HeartIcon } from '../../assets/heart-svgrepo-com.svg';
import { connect, Dispatch, Link } from 'umi';
import ButtonComponent from '../ButtomComponent/ButtonComponent';

interface ProductCardType {
  image: any;
  title: string;
  description: string;
  price: string;
  rate: number;
  rateNum: string;
  dispatch: Dispatch;
  cart?: any;
  id: number;
}

const ProductCard: React.FC<ProductCardType> = (props) => {
  const handleAdd = () => {
    props.dispatch({
      type: 'cart/addItems',
      payload: {
        id: props.id,
        image: props.image,
        title: props.title,
        description: props.description,
        price: props.price,
      },
    });
  };
  const handleRemove = () => {
    props.dispatch({
      type: 'cart/removeItems',
      payload: {
        id: props.id, // add the id of the item to be removed
      },
    });
  };
  return (
    <Card className="card-style">
      <div style={{ float: 'right' }}>
        <Button className="icon-style">
          <HeartIcon />
        </Button>
      </div>
      <Image width={150} height={150} src={props.image} />
      <Row>
        <Col span={21}>
          <Link to={`/product/${props.id}`}> {props.title}</Link>
        </Col>
        <Col span={3}>{`$${props.price}`}</Col>
      </Row>
      <Row>
        <Rate disabled defaultValue={props.rate} />
        <p>{props.rateNum}</p>
      </Row>
      <h5>{props.description}</h5>
      <Row>
        <ButtonComponent handleOnclick={handleAdd} title={'Add'} />

        <ButtonComponent handleOnclick={handleRemove} title={'remove'} />
      </Row>
    </Card>
  );
};

export default connect(({ cart }: any) => ({
  cart,
}))(ProductCard);
