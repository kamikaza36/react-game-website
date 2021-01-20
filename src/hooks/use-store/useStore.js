import { useState, useEffect, useContext } from 'react'
import { ReactReduxContext } from 'react-redux'

export default function useStore() {
    const { store } = useContext(ReactReduxContext);
    const { getState, dispatch, subscribe } = store;
    const [storeState, setStoreState] = useState(getState());

    // subscribe only once
    useEffect(() => subscribe(
        () => setStoreState(getState())
        , []))

    return [storeState, dispatch];
}