import React, { useState, useEffect } from 'react';
import { getUiData } from '@/services/BaseService';
import ProductInfoCard from './ProductInfoCard';

const ProductInfo: React.FC = () => {
  const [productInfo, setProductInfo] = useState([]);
  const [installmentInfo, setInstallmentInfo] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    getUiData().then((data) => setProductInfo(data.ecommerce.product));
  }, []);
  useEffect(() => {
    getUiData().then((data) => setInstallmentInfo(data.ecommerce.product.installment));
  }, []);
  useEffect(() => {
    getUiData().then((data) => setImages(data.ecommerce.product.images[0]));
  }, []);
  console.log(productInfo);
  console.log(installmentInfo);
  return (
    <div>
      <ProductInfoCard
        image={images.image}
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
