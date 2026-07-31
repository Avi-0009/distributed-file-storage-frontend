import { NavLink, Outlet } from "react-router-dom"
import { Activity, HomeIcon, Settings, Share2 } from 'lucide-react';
const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background pb-17.5">
      <main>
        <Outlet/>
      </main>

      <nav className="fixed bottom-0 left-0 w-full bg-background border-t border-border flex justify-around items-center pt-2 pb-4 z-50 transition-colors duration-300">
        <NavLink 
          to={"/"} 
          className={({isActive}) => `flex flex-col items-center gap-1 text-2.5 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
        >
          <HomeIcon className="w-4.5 h-4.5"/>
          <span>Home</span>
        </NavLink>

        <NavLink 
          to={"/shared"} 
          className={({isActive}) => `flex flex-col items-center gap-1 text-2.5 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
        >
          <Share2 className="w-4.5 h-4.5"/>
          <span>Shared</span>
        </NavLink>

        <NavLink 
          to={"/activity"} 
          className={({isActive}) => `flex flex-col items-center gap-1 text-2.5 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
        >
          <Activity className="w-4.5 h-4.5"/>
          <span>Activity</span>
        </NavLink>

        <NavLink 
          to={"/settings"} 
          className={({isActive}) => `flex flex-col items-center gap-1 text-2.5 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
        >
          <Settings className="w-4.5 h-4.5"/>
          <span>Settings</span>
        </NavLink>
      </nav>
    </div>
  )
}

export default MainLayout