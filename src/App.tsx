import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AccessibilityProvider } from "./components/accessibility/AccessibilityProvider";
import { LanguageAnnouncer } from "./components/accessibility/LanguageAnnouncer";
import { SkipLink } from "./components/accessibility/SkipLink";
import Index from "./pages/Index";
import Team from "./pages/Team";
import Jobs from "./pages/Jobs";
import JobApplication from "./pages/JobApplication";
import Newsroom from "./pages/Newsroom";
import OurStory from "./pages/OurStory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <AccessibilityProvider>
        <TooltipProvider>
          <SkipLink href="#main-content" />
          <LanguageAnnouncer />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/team" element={<Team />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/jobs/apply/:jobId" element={<JobApplication />} />
              <Route path="/newsroom" element={<Newsroom />} />
              <Route path="/our-story" element={<OurStory />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AccessibilityProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
