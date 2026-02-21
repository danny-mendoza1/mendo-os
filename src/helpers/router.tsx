import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { PageLoader } from "../components/PageLoader/PageLoader";

const Home = lazy(() => import("../pages/Home/Home").then((module) => ({ default: module.Home })));
const FinancialTool = lazy(() =>
  import("../pages/Projects/FinancialTool/FinancialTool").then((module) => ({
    default: module.FinancialTool,
  }))
);
const GameArchitecture = lazy(() =>
  import("../pages/Projects/2dGaming/GameArchitecture").then((module) => ({
    default: module.GameArchitecture,
  }))
);

export const router = createBrowserRouter([
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
