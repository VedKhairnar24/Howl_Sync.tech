
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import LearningPaths from "./pages/LearningPaths";
import ProblemSolving from "./pages/ProblemSolving";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import Tools from "./pages/Tools";
import Blog from "./pages/Blog";
import About from "./pages/About"; // Added About import
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Handle viewport settings for mobile devices
  useEffect(() => {
    // This ensures proper scaling on mobile devices
    const metaViewport = document.querySelector('meta[name=viewport]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }

    // Optional: Detect device type for conditional rendering
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
    
    if (isMobile) {
      document.body.classList.add('is-mobile-device');
    } else {
      document.body.classList.add('is-desktop-device');
    }
    
    return () => {
      document.body.classList.remove('is-mobile-device', 'is-desktop-device');
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/learning-paths" element={<LearningPaths />} />
                <Route path="/problem-solving" element={<ProblemSolving />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} /> {/* Added About route */}
                <Route path="/community" element={<Community />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
