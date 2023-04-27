import { Card, Col, Dropdown, Rate, Row } from 'antd';
import React from 'react';
import './ProductInfo.css';

interface ProductInfoType {
  title: string;
  description: string;
  rateNum: number;
  rate: number;
  installmentDescription: string;
  price: number;
  installment: number;
  period: string;
  quantity: number;
}

const ProductInfoCard: React.FC<ProductInfoType> = (props) => {
  const handleAddToCart = () => {
    console.log('ssssssssssss');
  };
  return (
    <Card>
      <Row>
        <Col span={12}></Col>
        <Col span={12}>
          <Row>
            <h1>{props.title}</h1>
          </Row>
          <Row>
            <h5>{props.description}</h5>
          </Row>
          <Row>
            <Rate disabled defaultValue={props.rate} />
            <p style={{ fontSize: '20px' }}>{`(${props.rateNum})`}</p>
          </Row>
          <div>
            <h2>{`$${props.price} or ${props.installment}/${props.period}`}</h2>
            <p>{props.installmentDescription}</p>
          </div>
          <Row>
            <h3>Choose a Color</h3>
          </Row>
          <Row>
            <Col span={10}></Col>
            <Col span={12}>
              <Row>{`Only ${props.quantity} left!`}</Row>
              <Row>{`Don't miss it!`}</Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row></Row>
    </Card>
  );
};

export default ProductInfoCard;
