import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";

const App = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};

export default App;
