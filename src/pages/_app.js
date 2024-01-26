import React from 'react';
import dynamic from 'next/dynamic';
import '@/styles/globals.css';
import '@/styles/estilos.css';
//import '@/styles/Home.module.css';
//import '@/componentes/css/estilos.css'
import '@/componentes/materialize/css/materialize.min.css';

// Usamos dynamic para cargar el componente solo en el lado del cliente
const DynamicApp = dynamic(() => import('../componentes/App'), { ssr: false });

export default function App({ Component, pageProps }) {
  // Verificar si estamos en el lado del cliente antes de usar document
  if (typeof document !== 'undefined') {
    // Tu código que utiliza document
    // ...
  }

  return (
    <div>
      <DynamicApp/>
    </div>
  );
}
