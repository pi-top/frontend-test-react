import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Routes from '../routes';
import Boot from '../redux/boot';

const RootApp = ({
  store
}) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Routes />
      </div>
    </BrowserRouter>
  </Provider>
);

Boot()
.then(() => RootApp())
.catch((err) => console.log(err));

export default RootApp;