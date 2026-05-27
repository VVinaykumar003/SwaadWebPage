

import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const SwaadsetuLanding = lazy(
  () => import("./pages/swaadsetu-landing"),
);
const About = lazy(() => import("./pages/About"));
const Features = lazy(() => import("./pages/Features"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PrivatePolicy = lazy(() => import("./pages/PrivatePolicy"));


// Loader
const LoadingScreen = () => (
<div className="w-full h-screen flex items-center justify-center text-lg font-semibold text-gray-600">
  Loading...
</div>
);
function App() {


  return (
    <>
    <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {/* -------------------------------------------------- */}
          {/* PUBLIC ROUTES */}
          {/* -------------------------------------------------- */}
          <Route path="/" element={<SwaadsetuLanding />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* <Route path="/select-restaurant" element={<RestaurantSelector />} /> */}
          <Route
            path="/register-restaurant"
            // element={<RestaurantRegistration />}
          />
          <Route path="/legal" element={<PrivatePolicy />} />

         

          
          {/* -------------------------------------------------- */}
          {/* GLOBAL FALLBACK */}
          {/* -------------------------------------------------- */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <ToastContainer />
     
    </>
  )
}

export default App
