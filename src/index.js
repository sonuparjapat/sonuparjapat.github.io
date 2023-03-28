import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  
 
    <ChakraProvider>
      <BrowserRouter>
      <ColorModeScript initialColorMode="light" bg="white"></ColorModeScript>
      <App />
      </BrowserRouter>
    </ChakraProvider>,

  
  document.getElementById('root')
);
