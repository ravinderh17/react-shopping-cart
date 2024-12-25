export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = (orderDetails) => ({
  type: SHOW_MODAL,
  payload: orderDetails,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});