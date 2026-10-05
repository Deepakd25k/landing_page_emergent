import React from "react";
import ReactDOM from "react-dom/client";

const host = window.location.hostname;
if (host === 'cohort.incrementalvalue.in') {
  window.location.replace('https://incrementalvalue.in/course' + window.location.search);
} else if (host === 'growth.incrementalvalue.in') {
  window.location.replace('https://incrementalvalue.in/pm' + window.location.search);
}

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/index.css";
import App from "@/App";

import { hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      refetchOnWindowFocus: false,
    },
  },
});

const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  const root = ReactDOM.createRoot(container);
  root.render(app);
}
