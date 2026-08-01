import { ChevronRight, CircleChevronLeft, LogOut, Moon, PenLine, SettingsIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/auth');
    }

  return (
    <div className="p-4 min-h-screen bg-background pb-24">
        
        <div className="flex items-center gap-4 mb-8 mt-2">
            <button
                onClick={() => navigate(-1)}
                className="p-2 rounded-full bg-card border border-border hover:bg-muted text-foreground transition-colors flex items-center justify-center shadow-sm"
            >
                <CircleChevronLeft className="w-5 h-5"/>
            </button>
            <h1 className="text-2xl font-bold text-foreground tracking-tight">Settings</h1>
        </div>

        {/* Profile Header */}
        <div className="bg-card border border-border rounded-[20px] p-5 mb-6 shadow-sm relative">
            <button className="absolute top-4 right-4 p-2 rounded-full bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                <PenLine className="w-4 h-4" />
            </button>
            
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
                    <span className="text-2xl text-primary font-bold">A</span>
                </div>
                <div className="flex-1 min-w-0 pr-8">
                    <h2 className="text-xl font-bold text-foreground truncate">Avi Sahu</h2>
                    <div className="flex items-center gap-1.5 mt-1">
                        <span className="w-3.5 h-3.5 rounded-full bg-success flex items-center justify-center">
                            <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </span>
                        <span className="text-[13px] text-success font-medium truncate">Verified Account</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Storage Card */}
        <div className="bg-card border border-border rounded-[20px] bg-muted p-5 mb-8 shadow-sm">
            <div className="flex justify-between items-center text-[13px] font-bold text-foreground mb-3">
                <span>Storage</span>
                <span className="text-muted-foreground font-normal">6GB / 15GB</span>
            </div>
            <div className="w-full h-2 bg-background border border-border rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[42%] rounded-full"></div>
            </div>
        </div>

        {/* Preferences Section */}
        <div className="mb-6">
            <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-3 ml-2">
                Preferences
            </h3>
            
            <div className="bg-card border border-border rounded-[20px] overflow-hidden shadow-sm flex flex-col">
                
                {/* Theme */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                    <div className="flex items-center gap-4">
                        <Moon className="w-5 h-5 text-primary" />
                        <div>
                            <div className="font-semibold text-foreground text-[15px]">App Theme</div>
                            <div className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">Dark Mode</div>
                        </div>
                    </div>
                    s
                    <div className="w-12 h-6 bg-primary rounded-full relative flex items-center cursor-pointer shadow-inner">
                        <div className="w-4 h-4 bg-white rounded-full absolute right-1 shadow-sm"></div>
                    </div>
                </div>

                {/* Account Settings */}
                <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-4">
                        <SettingsIcon className="w-5 h-5 text-muted-foreground" />
                        <div className="font-semibold text-foreground text-[15px]">Account Settings</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>

            </div>
        </div>

        {/* Logout */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div 
                onClick={handleLogout}
                className="flex items-center gap-4 p-4 cursor-pointer hover:bg-danger/10 transition-colors"
            >
                <span className="w-8 h-8 flex items-center justify-center shrink-0 text-danger">
                    <LogOut className="w-5 h-5 text-danger" />
                </span>
                <div className="text-[15px] font-semibold text-danger">Logout</div>
            </div>
        </div>

    </div>
  )
}

export default Settings;