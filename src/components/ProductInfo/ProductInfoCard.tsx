import { Card, Col, Dropdown, Image, Rate, Row } from 'antd';
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
  image: any;
}

const ProductInfoCard: React.FC<ProductInfoType> = (props) => {
  return (
    <Card>
      <Row>
        <Col span={12}>
          <Image width={300} height={300} src={props.image} />
        </Col>
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
