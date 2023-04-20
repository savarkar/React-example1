import { createGlobalState } from 'react-hooks-global-state';

const initialState = {name:{}, profile:{id:''}, courseobject:{id:''}};
const { useGlobalState } = createGlobalState(initialState);

export default useGlobalState;
