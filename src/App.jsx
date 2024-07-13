import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollTop from "./components/ScrollTop/ScrollTop.jsx";
import Layout from "./components/layout/Layout.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import AboutPage from "./pages/About/AboutPage.jsx";
import Nopage from "./pages/Nopage/Nopage.jsx";
import ServicePage from "./pages/Service/ServicePage.jsx";
import PortfolioPage from "./pages/portfolio/PortfolioPage.jsx";
import BlogPage from "./pages/blog/BlogPage.jsx";
import { useState } from "react";
import { useEffect } from "react";
import LoadingImage from "./components/loadingimage/LoadingImage.jsx";
const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <>
        <ScrollTop />
        <Layout />
      </>
    ),
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "*",
        element: <Nopage />,
      },
      {
        path: "services",
        element: <ServicePage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
    ],
  },
]);

function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <LoadingImage />;
  }
  return <RouterProvider router={router} />;
}

export default App;
