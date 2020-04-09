// src/access.ts

export default (initialState: { userId: any; role: any; }) => {
  const { role } = initialState;
  console.log(initialState);
  return {
    admin: role === '100000',
  };
}
