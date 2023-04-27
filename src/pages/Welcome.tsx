import ProductCard from '@/components/ProductCard/ProductCard';
import { getMetaData } from '@/services/BaseService';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Col, Row } from 'antd';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { ReactComponent as Cart } from '../../src/assets/cart-lines-1-svgrepo-com.svg';
import './Welcome.less';
import { connect } from 'umi';

interface WelcomeProps {
  cart: any;
}

const Welcome: React.FC<WelcomeProps> = (props) => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getMetaData().then((data) => setProducts(data.ecommerce.products));
  }, []);
  console.log(products);
  console.log(props.cart.cart.length);

  return (
    <PageContainer
      extra={[
        // eslint-disable-next-line react/jsx-key
        <Button className="button-style">
          <Row>
            <p>{_.isEmpty(props.cart) ? '' : props.cart.cart.length}</p>
            <Cart />
          </Row>
        </Button>,
      ]}
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {products.map((product) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Col className="gutter-row" span={6}>
              <div>
                <ProductCard
                  id={product.id}
                  key={product.id}
                  image={product.image}
                  title={product.name}
                  description={product.description}
                  price={product.price}
                  rate={product.rating}
                  rateNum={product.rateNum}
                />
              </div>
            </Col>
          );
        })}
      </Row>
    </PageContainer>
  );
};

export default connect(({ cart }: any) => ({
  cart,
}))(Welcome);
