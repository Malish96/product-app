import type { Reducer, Effect } from 'umi';

export type CartState = {
  cart: [];
};

export type CartModelType = {
  namespace: string;
  state: CartState;
  effects: {
    addItems: Effect;
    removeItems: Effect;
  };
  reducers: {
    addToCart: Reducer<CartState>;
    removeFromCart: Reducer<CartState>;
  };
};

const Model: CartModelType = {
  namespace: 'cart',
  state: {
    cart: [],
  },
  effects: {
    *addItems({ payload }, { put }) {
      yield put({
        type: 'addToCart',
        payload: payload,
      });
    },
    *removeItems({ payload }, { put }) {
      yield put({
        type: 'removeFromCart',
        payload: payload,
      });
    },
  },
  reducers: {
    addToCart(state, { payload }): any {
      state.cart.push({ ...payload });
      return { ...state };
    },
    removeFromCart(state, { payload }): any {
      const { id } = payload;
      console.log(state.cart);
      const newCart = state.cart.filter((item) => item.id !== id);
      return { ...state, cart: newCart };
    },
  },
};

export default Model;
