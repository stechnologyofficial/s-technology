import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Games from "./pages/Games";
import ToolDetail from "./pages/ToolDetail";
import Tutorial from "./pages/Tutorial";
import Header from "./components/Header";
import Footer from "./components/Footer";

function AppRouter() {
  // GitHub Pages base path'i al - trailing slash olmadan
  const basePath = import.meta.env.BASE_URL?.replace(/\/$/, '') || '';
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-16">
        <WouterRouter base={basePath}>
          <Switch>
          <Route path="/" component={Home} />
          <Route path="/tools" component={Tools} />
          <Route path="/games" component={Games} />
          <Route path="/tool/:id/tutorial/:tutorialId" component={Tutorial} />
          <Route path="/tool/:id" component={ToolDetail} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
          </Switch>
        </WouterRouter>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
