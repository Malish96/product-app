import React, { useState, useEffect } from 'react';
import { getUiData } from '@/services/BaseService';
import ProductInfoCard from './ProductInfoCard';

const ProductInfo: React.FC = () => {
  const [productInfo, setProductInfo] = useState([]);
  const [installmentInfo, setInstallmentInfo] = useState([]);

  useEffect(() => {
    getUiData().then((data) => setProductInfo(data.ecommerce.product));
  }, []);
  useEffect(() => {
    getUiData().then((data) => setInstallmentInfo(data.ecommerce.product.installment));
  }, []);
  console.log(productInfo);
  console.log(installmentInfo);
  return (
    <div>
      <ProductInfoCard
        title={productInfo.name}
        description={productInfo.description}
        rate={productInfo.rating}
        rateNum={productInfo.ratedBy}
        installmentDescription={installmentInfo.description}
        price={productInfo.price}
        period={installmentInfo.period}
        installment={installmentInfo.amount}
        quantity={productInfo.stock}
      />
    </div>
  );
};

export default ProductInfo;
