export const saveLocal = value => {
  console.log('🚀 ~ value:', value);
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem('following', serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};
export const loadLocal = () => {
  try {
    const serializedState = localStorage.getItem('following');
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
