import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/HomePage/Home";
import Contact from "./pages/ContactPage/Contact";
import Portfolio from "./pages/PortfolioPage/Portfolio";
import Error from "./pages/ErrorPage";
import Root from "./pages/RootPage";
import PortfolioDetail from "./pages/PortfolioDetailPage/PortfolioDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" errorElement={<Error />} element={<Home />} />
      <Route path="/contact" errorElement={<Error />} element={<Contact />} />
      <Route
        path="/portfolio"
        errorElement={<Error />}
        element={<Portfolio />}
      />
      <Route
        path="/portfolio/:id"
        element={<PortfolioDetail />}
        errorElement={<Error />}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
