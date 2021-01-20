import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Player from './components/player';
import Popup from './components/popup';
import map from './assets/images/map_n.png';
import Arrow from './components/arrow/'
import ArrowContainer from './components/arrowsContainer';
import { popupActions } from './actions/index';

function App() {
  const dispatch = useDispatch();

  const { popup, popupStyle } = useSelector(state => ({
    popup: state.popup.name,
    popupStyle: state.popup.popupStyle,
  }));

  const sendPopupAction = () => {
    dispatch(popupActions('popup_about_me'))
  };

  useEffect(() => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    window.scroll(700 - vw / 2, 350 - vh / 2);
  });

  const mapStyle = {
    display: 'inline-block',
    height: '1000px',
    width: '1500px',
    backgroundImage: `url(${map})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: `center 0%`,
    margin: 'auto',
  }

  const mapPosition = {
    height: '1000px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <div className="App" style={mapPosition}>
      <button onClick={sendPopupAction}>HERE</button>
      {popup === 'popup_close' ? <Popup /> : <Popup popupStyle={popupStyle}/>}
      <div className="zone-container" style={mapStyle}>
        <Player />
      </div>
      {/* <ArrowContainer /> */}
    </div>
  );
}

export default App;
