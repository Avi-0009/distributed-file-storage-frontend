import { Bell, Folder, Menu } from "lucide-react"

const Dashboard = () => {
  return (
    <div className="p-4 min-h-screen bg-background">
      {/* Top header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <Menu className="w-6 h-6 text-foreground"/>
          <span className="font-semibold text-[20px] text-foreground">Mesh</span>
        </div>
        <Bell className="w-6 h-6 text-foreground cursor-pointer"/>
      </div>
      
      {/* Greeting */}
      <div className="text-4 text-muted-foreground">Good Evening</div>
      <div className="text-[30px] font-bold tracking-tight mb-2.5 text-foreground">Hello Avi</div>

      {/* Quota */}
      <div className="flex justify-between items-center text-4 font-medium text-foreground mb-1">
        <span>Storage</span>
        <span className="text-muted-foreground font-normal">6.2GB / 15GB</span>
      </div>

      <div className="w-full h-1.5 bg-border rounded-full overflow-hidden mb-3.5">
        <div className="h-full bg-primary w-[42%] rounded-full"></div>
      </div>

      {/* Folders */}
      <div className="flex gap-3 overflow-x-auto py-1 mb-3 scrollbar-hide">
        
        <div className="bg-card border border-transparent shadow-sm rounded-xl p-2.5 min-w-20 flex flex-col items-center justify-center shrink-0">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center mb-1">
            <Folder className="w-4 h-4 fill-current" />
          </div>
          <div className="text-[11px] font-medium text-foreground">College</div>
        </div>

        <div className="bg-card border border-transparent shadow-sm rounded-xl p-2.5 min-w-20 flex flex-col items-center justify-center shrink-0">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center mb-1">
            <Folder className="w-4 h-4 fill-current" />
          </div>
          <div className="text-[11px] font-medium text-foreground">Personal</div>
        </div>

        <div className="bg-card border border-transparent shadow-sm rounded-xl p-2.5 min-w-20 flex flex-col items-center justify-center shrink-0">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center mb-1">
            <Folder className="w-4 h-4 fill-current" />
          </div>
          <div className="text-[11px] font-medium text-foreground">Projects</div>
        </div>

        <div className="bg-card border border-transparent shadow-sm rounded-xl p-2.5 min-w-20 flex flex-col items-center justify-center shrink-0">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center mb-1">
            <Folder className="w-4 h-4 fill-current" />
          </div>
          <div className="text-[11px] font-medium text-foreground">Photos</div>
        </div>

      </div>

      {/* Recent files */}
      <div></div>

    </div>
  )
}

export default Dashboard