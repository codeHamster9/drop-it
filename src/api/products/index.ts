export const fetchProducts = async () => {
  try {
    const response = await fetch(
      'https://mocki.io/v1/9f345655-d334-4ac6-adc8-e44e53272e1f'
    );
    return response.json();
  } catch (e) {
    console.log(e);
    return { msg: 'something happend', code: '666' };
  }
};
