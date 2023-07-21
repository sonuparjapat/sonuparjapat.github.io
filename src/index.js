import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  
 
    <ChakraProvider>
      <BrowserRouter>
      <ColorModeScript initialColorMode="teal.600" bg="teal.600"></ColorModeScript>
      <App />
      </BrowserRouter>
    </ChakraProvider>,

  
  document.getElementById('root')
);
