import { MainLayout } from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { FinancialTool } from "./pages/Projects/FinancialTool/FinancialTool";
import { useScrollToTop } from "./hooks/useScrollToTop";

function App() {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/projects/financial-tool" element={<FinancialTool />} />

        {/* Future routes */}

      </Route>

      {/* TODO: OS simulation outside mainlayout as full screen is needed */}

    </Routes>
  );
}

export default App;
