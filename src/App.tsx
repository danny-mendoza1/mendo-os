import { lazy, Suspense } from "react";
import { MainLayout } from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import { useScrollToTop } from "./hooks/useScrollToTop";

const Home = lazy(() => import("./pages/Home/Home").then((module) => ({ default: module.Home })));
const FinancialTool = lazy(() =>
  import("./pages/Projects/FinancialTool/FinancialTool").then((module) => ({
    default: module.FinancialTool,
  }))
);
const GameArchitecture = lazy(() =>
  import("./pages/Projects/2dGaming/GameArchitecture").then((module) => ({
    default: module.GameArchitecture,
  }))
);

// Loading fallback component
function PageLoader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
        color: "hsl(var(--color-muted-foreground))",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            animation: "pulse 2s ease-in-out infinite",
          }}
        >
          Loading...
        </div>
      </div>
    </div>
  );
}

function App() {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/projects/financial-tool"
          element={
            <Suspense fallback={<PageLoader />}>
              <FinancialTool />
            </Suspense>
          }
        />
        <Route
          path="/projects/2d-game"
          element={
            <Suspense fallback={<PageLoader />}>
              <GameArchitecture />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
