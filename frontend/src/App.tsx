import DataTable from 'assets/components/DataTable';
import Footer from 'assets/components/Footer';
import NavBar from 'assets/components/NavBar';
import React from 'react';

function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <h1 className="text">Olá Mundo!</h1>

      <DataTable/>
    </div>
    <Footer/>
    
    </>
  );
}

export default App;
