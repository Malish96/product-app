export const getMetaData = () =>
  fetch('https://my-json-server.typicode.com/kodplex/pr-re-ec-products/db').then((res) =>
    res.json().then((data) => data),
  );

export const getUiData = () =>
  fetch('https://my-json-server.typicode.com/kodplex/pr-re-ec-product/db').then((res) =>
    res.json().then((data) => data),
  );
