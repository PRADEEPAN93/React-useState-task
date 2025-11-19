import './App.css';
import { QrCode } from './Component/QrCode';
import { Counter } from './FormSample/Counter';
import { NormalUserDetails } from './FormSample/NormalUserDetails';
import RegForm from './FormSample/RegForm';
import { AdviceApp } from './AdviceAppApi/AdviceApp';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">QrCode</Link> |{" "}
        <Link to="/Counter">Counter</Link> |{" "}
        <Link to="/NormalUser">Normal User</Link> |{" "}
        <Link to="/RegForm">Registration Form</Link> |{" "}
        <Link to="/AdviceApp">Advice App</Link>
      </nav>

      <Routes>
        <Route path="/" element={<QrCode />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/NormalUser" element={<NormalUserDetails />} />
        <Route path="/RegForm" element={<RegForm />} />
        <Route path="/AdviceApp" element={<AdviceApp />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
