import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import BlogIndex from "@/pages/BlogIndex";
import BlogPost from "@/pages/BlogPost";
import { useState } from "react";
import { Language } from "@/types";

function Router() {
  const [lang, setLang] = useState<Language>('pt');

  return (
    <Switch>
      <Route path="/">
        <Home lang={lang} setLang={setLang} />
      </Route>
      <Route path="/blog">
        <BlogIndex lang={lang} setLang={setLang} />
      </Route>
      <Route path="/blog/:slug">
        <BlogPost lang={lang} setLang={setLang} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
