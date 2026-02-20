import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/Dashboard";
import Learn from "@/pages/Learn";
import LessonView from "@/pages/LessonView";
import Labs from "@/pages/Labs";
import LabView from "@/pages/LabView";
import Games from "@/pages/Games";
import MobileLayout from "@/components/layout/MobileLayout"; // Fallback for simple pages

// Placeholder pages for Planner and Profile
const PlaceholderPage = ({ title }: { title: string }) => (
  <MobileLayout>
    <div className="flex items-center justify-center h-full min-h-[60vh]">
      <h1 className="text-2xl font-bold text-muted-foreground">{title} Coming Soon</h1>
    </div>
  </MobileLayout>
);

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard}/>
      <Route path="/learn" component={Learn}/>
      <Route path="/lesson/:id" component={LessonView}/>
      <Route path="/labs" component={Labs}/>
      <Route path="/labs/:id" component={LabView}/>
      <Route path="/games" component={Games}/>
      <Route path="/planner">
        <PlaceholderPage title="Planner" />
      </Route>
      <Route path="/profile">
        <PlaceholderPage title="Profile" />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
