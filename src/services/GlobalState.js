import { createGlobalState } from 'react-hooks-global-state';

const initialState = {name:{}, profile:{_id:''}, courseobject:{_id:''}};
const { useGlobalState } = createGlobalState(initialState);

export default useGlobalState;
