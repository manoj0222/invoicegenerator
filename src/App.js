import logo from './logo.svg';
import './App.css';
import HomePage from './page/HomePage';
import InvoicePdf from './components/pdf/InvoicePdf';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {

  return (
    <div className="App p-4" style={{height:"100vh", scrollBehavior:"smooth"}}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/pdfgenerator" element={<InvoicePdf/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
