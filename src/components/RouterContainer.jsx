import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Portal from '../pages/Portal';

function RouterContainer() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portal" element={<Portal />} />
      </Routes>
    </>
  );
}

export default RouterContainer;
