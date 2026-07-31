import { CircleChevronLeft, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/auth');
    }

  return (
    <div className="p-4 min-h-screen bg-background pb-24 overflow-x-hidden">
        
        <div className="relative flex items-center justify-center mb-8 mt-2">
            <button
                onClick={() => navigate(-1)}
                className="absolute left-0 p-1.5 rounded-lg hover:bg-muted text-foreground transition-colors"
            >
                <CircleChevronLeft className="w-6 h-6"/>
            </button>
            <h1 className="text-xl font-bold text-foreground tracking-tight">Settings</h1>
        </div>

        {/* Profile Header */}
        <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-2xl text-white font-semibold shadow-sm shrink-0">
                A
            </div>
            <div className="flex-1 min-w-0">
                <div className="font-semibold text-lg text-foreground truncate">Avi Sahu</div>
                <div className="text-[13px] text-muted-foreground truncate">avi@example.com</div>
            </div>
        </div>

        {/* Storage Card */}
        <div className="bg-muted rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center text-[13px] font-medium text-foreground mb-2">
                <span>Storage</span>
                <span className="text-muted-foreground font-normal">6GB / 15GB</span>
            </div>
            <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[42%] rounded-full"></div>
            </div>
        </div>

        {/* Settings Options */}
        <div className="flex flex-col">
            <div 
                onClick={handleLogout}
                className="flex items-center gap-3 py-3 px-3 cursor-pointer hover:bg-muted/50 transition-colors rounded-lg w-full mt-1"
            >
                <span className="w-8 h-8 flex items-center justify-center shrink-0 text-danger">
                    <LogOut className="w-5 h-5" />
                </span>
                <div className="flex-1 min-w-0">
                    <div className="text-[15px] font-medium text-danger">Logout</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Settings;