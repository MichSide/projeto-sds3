import BarChart from 'assets/components/BarChart';
import DataTable from 'assets/components/DataTable';
import DonutChart from 'assets/components/DonutChart';
import Footer from 'assets/components/Footer';
import NavBar from 'assets/components/NavBar';
import React from 'react';

function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <h1 className="text py-3">Dashboard de Vendas</h1>

      <div className="row px-3">
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
          <BarChart/>
        </div>
        <div className="col-sm-6">
          <h5>Todas Vendas</h5>
          <DonutChart/>
        </div>
      </div>
      
      <div className="py-3">
        <h2 className="text">Todas Vendas</h2>
      </div>

      <DataTable/>
    </div>
    <Footer/>
    
    </>
  );
}

export default App;
