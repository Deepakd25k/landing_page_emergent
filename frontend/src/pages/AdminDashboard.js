import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { Activity, LayoutDashboard, CalendarCheck, Radio, Target, Route as RouteIcon, LogOut, ExternalLink } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Overview } from "@/components/admin/Overview";
import { BookingsTable } from "@/components/admin/BookingsTable";
import { EventsFeed } from "@/components/admin/EventsFeed";
import { UtmTable } from "@/components/admin/UtmTable";
import { JourneyViewer } from "@/components/admin/JourneyViewer";

const NAV = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/admin/bookings", label: "Bookings", icon: CalendarCheck },
  { to: "/admin/events", label: "Live Events", icon: Radio },
  { to: "/admin/attribution", label: "Attribution", icon: Target },
  { to: "/admin/journeys", label: "Journeys", icon: RouteIcon },
];

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-alt text-ink flex" data-testid="admin-dashboard">
      <aside className="hidden md:flex flex-col w-64 shrink-0 bg-night text-white/70 p-5 sticky top-0 h-screen">
        <Link to="/" className="flex items-center gap-2.5 text-white px-2" data-testid="admin-logo-link">
          <span className="w-9 h-9 rounded-xl bg-blue grid place-items-center"><Activity className="w-5 h-5" /></span>
          <span className="font-extrabold tracking-tight">Diagnostic Ops</span>
        </Link>
        <nav className="mt-10 space-y-1">
          {NAV.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              data-testid={`admin-nav-${label.toLowerCase().replace(" ", "-")}`}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive ? "bg-blue text-white" : "hover:bg-white/5 hover:text-white"}`
              }
            >
              <Icon className="w-4 h-4" /> {label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto space-y-3">
          <a href="/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs px-3 hover:text-white transition-colors">
            <ExternalLink className="w-3.5 h-3.5" /> View landing page
          </a>
          <div className="rounded-xl bg-white/5 p-3">
            <p className="text-xs text-white/50">Signed in as</p>
            <p className="text-sm font-semibold text-white truncate" data-testid="admin-user-email">{user?.email}</p>
            <button onClick={async () => { await logout(); navigate("/admin/login"); }} className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-danger transition-colors" data-testid="admin-logout-button">
              <LogOut className="w-3.5 h-3.5" /> Sign out
            </button>
          </div>
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        <div className="md:hidden flex items-center gap-2 overflow-x-auto bg-night p-3 text-white/70 text-xs">
          {NAV.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => `px-3 py-1.5 rounded-full whitespace-nowrap ${isActive ? "bg-blue text-white" : "bg-white/5"}`}>{label}</NavLink>
          ))}
          <button onClick={async () => { await logout(); navigate("/admin/login"); }} className="ml-auto px-3 py-1.5 rounded-full bg-white/5">Out</button>
        </div>
        <main className="p-4 sm:p-8 max-w-7xl mx-auto">
          <Routes>
            <Route index element={<Overview />} />
            <Route path="bookings" element={<BookingsTable />} />
            <Route path="events" element={<EventsFeed />} />
            <Route path="attribution" element={<UtmTable />} />
            <Route path="journeys" element={<JourneyViewer />} />
            <Route path="journeys/:sessionId" element={<JourneyViewer />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
