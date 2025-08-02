import { useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Upload, 
  Settings, 
  Menu, 
  X,
  LogOut,
  User,
  TrendingUp
} from 'lucide-react';

const sidebarItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    description: 'Overview and analytics'
  },
  {
    title: 'Upload',
    href: '/upload',
    icon: Upload,
    description: 'Upload new resumes'
  },
  {
    title: 'Analytics',
    href: '/analytics',
    icon: TrendingUp,
    description: 'Performance metrics'
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
    description: 'Account settings'
  }
];

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const currentItem = sidebarItems.find(item => item.href === location.pathname);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-card shadow-elegant transform transition-transform duration-300 lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-poppins font-bold">
                R
              </div>
              <h1 className="text-xl font-poppins font-bold text-foreground">
                ResuMatch
              </h1>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {sidebarItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium font-inter transition-all duration-200",
                    "hover:bg-primary/10 hover:text-primary group",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-card"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className={cn(
                    "w-5 h-5 transition-colors",
                    isActive ? "text-primary-foreground" : "group-hover:text-primary"
                  )} />
                  <div className="flex-1">
                    <div className={cn(
                      isActive ? "text-primary-foreground" : "group-hover:text-primary"
                    )}>
                      {item.title}
                    </div>
                    <div className={cn(
                      "text-xs mt-0.5",
                      isActive ? "text-primary-foreground/80" : "text-muted-foreground group-hover:text-primary/70"
                    )}>
                      {item.description}
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium font-inter truncate">
                  John Recruiter
                </div>
                <div className="text-xs text-muted-foreground">
                  recruiter@company.com
                </div>
              </div>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
          <div className="flex items-center gap-4 px-4 py-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </Button>

            <div className="flex-1">
              {currentItem && (
                <div className="space-y-1">
                  <h2 className="text-lg font-poppins font-semibold text-foreground">
                    {currentItem.title}
                  </h2>
                  <p className="text-sm text-muted-foreground font-inter">
                    {currentItem.description}
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}