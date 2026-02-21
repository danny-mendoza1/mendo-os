import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";

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

// Create router with modern data router API
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "projects/financial-tool",
        element: (
          <Suspense fallback={<PageLoader />}>
            <FinancialTool />
          </Suspense>
        ),
      },
      {
        path: "projects/2d-game",
        element: (
          <Suspense fallback={<PageLoader />}>
            <GameArchitecture />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
