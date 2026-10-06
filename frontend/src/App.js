import "@/App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { AuthProvider, RequireAdmin } from "@/context/AuthContext";

// Lazy load all major routes to drastically reduce initial JS payload and TBT
const Landing = lazy(() => import("@/pages/Landing"));
const AdminLogin = lazy(() => import("@/pages/AdminLogin"));
const AdminDashboard = lazy(() => import("@/pages/AdminDashboard"));
const CourseLanding = lazy(() => import("@/pages/CourseLanding"));
// Note: We need to export PerformanceMarketing as default or handle named exports
const PerformanceMarketing = lazy(() => import("@/pages/PerformanceMarketing").then(module => ({ default: module.PerformanceMarketing })));

function App() {
  const host = window.location.hostname;
  
  let DefaultComponent = <Landing />;
  if (host.includes("cohort")) {
    DefaultComponent = <CourseLanding />;
  } else if (host.includes("growth")) {
    DefaultComponent = <PerformanceMarketing />;
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center text-sm text-slate-400">Loading...</div>}>
          <Routes>
            <Route path="/" element={DefaultComponent} />
            <Route path="/course" element={<CourseLanding />} />
            <Route path="/pm" element={<PerformanceMarketing />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/*"
              element={
                <RequireAdmin>
                  <AdminDashboard />
                </RequireAdmin>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </AuthProvider>
      <Toaster position="bottom-right" richColors closeButton />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
