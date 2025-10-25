import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import CodeReview from "./pages/CodeReview";
import Artifacts from "./pages/Artifacts";
import ArtifactDetail from "./pages/ArtifactDetail";
import Enhancements from "./pages/Enhancements";
import SoftwareDesignEnhancement from "./pages/SoftwareDesignEnhancement";
import AlgorithmsEnhancement from "./pages/AlgorithmsEnhancement";
import DatabasesEnhancement from "./pages/DatabasesEnhancement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/code-review" element={<CodeReview />} />
          <Route path="/artifacts" element={<Artifacts />} />
          <Route path="/artifact/inventory-system" element={<ArtifactDetail />} />
          <Route path="/enhancements" element={<Enhancements />} />
          <Route path="/enhancements/software-design" element={<SoftwareDesignEnhancement />} />
          <Route path="/enhancements/algorithms" element={<AlgorithmsEnhancement />} />
          <Route path="/enhancements/databases" element={<DatabasesEnhancement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
