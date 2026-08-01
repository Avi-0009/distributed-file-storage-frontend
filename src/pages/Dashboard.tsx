import { Bell, Cloud, FileText, Folder, ImageIcon, Menu, MoreVertical, Plus, Video } from "lucide-react"

const Dashboard = () => {
  return (
    <div className="p-4 min-h-screen bg-background pb-24 overflow-x-hidden">
      
      {/* Top header */}
      <div className="flex justify-between items-center mb-6 mt-2">
        <div className="flex items-center gap-3">
          <button className="p-2 -ml-2 rounded-full hover:bg-muted text-foreground transition-colors flex items-center justify-center">
            <Menu className="w-6 h-6" />
          </button>
          <span className="font-bold text-xl text-foreground tracking-tight">Mesh</span>
          <span><Cloud className="text-muted-foreground"/></span>
        </div>
        <button className="p-2 -mr-2 rounded-full hover:bg-muted text-foreground transition-colors flex items-center justify-center">
          <Bell className="w-6 h-6" />
        </button>
      </div>
      
      {/* Greeting */}
      <div className="mb-6">
        <div className="text-sm font-medium text-muted-foreground mb-1">Good Evening</div>
        <div className="text-3xl font-bold tracking-tight text-foreground">Hello Avi</div>
      </div>

      {/* Storage Box */}
      <div className="bg-card border border-border rounded-[20px] p-5 mb-8 shadow-sm">
        <div className="flex justify-between items-center text-[13px] font-bold text-foreground mb-3">
          <span>STORAGE USED</span>
          <span className="text-primary">6.2 GB / 15 GB</span>
        </div>
        <div className="w-full h-2 bg-background border border-border rounded-full overflow-hidden">
          <div className="h-full bg-primary w-[42%] rounded-full"></div>
        </div>
      </div>

      {/* Folders Section */}
      <div className="mb-8">
        <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-3 ml-2">
          My Folders
        </h3>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          
          <div className="bg-card border border-border shadow-sm rounded-[16px] p-4 min-w-[100px] flex flex-col items-center justify-center shrink-0 cursor-pointer hover:bg-muted/30 transition-colors">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-2">
              <Folder className="w-5 h-5 fill-current" />
            </div>
            <div className="text-[12px] font-semibold text-foreground">College</div>
          </div>

          <div className="bg-card border border-border shadow-sm rounded-[16px] p-4 min-w-[100px] flex flex-col items-center justify-center shrink-0 cursor-pointer hover:bg-muted/30 transition-colors">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-2">
              <Folder className="w-5 h-5 fill-current" />
            </div>
            <div className="text-[12px] font-semibold text-foreground">Personal</div>
          </div>

          <div className="bg-card border border-border shadow-sm rounded-[16px] p-4 min-w-[100px] flex flex-col items-center justify-center shrink-0 cursor-pointer hover:bg-muted/30 transition-colors">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-2">
              <Folder className="w-5 h-5 fill-current" />
            </div>
            <div className="text-[12px] font-semibold text-foreground">Projects</div>
          </div>

          <div className="bg-card border border-border shadow-sm rounded-[16px] p-4 min-w-[100px] flex flex-col items-center justify-center shrink-0 cursor-pointer hover:bg-muted/30 transition-colors">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-2">
              <Folder className="w-5 h-5 fill-current" />
            </div>
            <div className="text-[12px] font-semibold text-foreground">Photos</div>
          </div>

        </div>
      </div>

      {/* Recent Files Box */}
      <div className="mb-4">
        <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-3 ml-2">
          Recent Files
        </h3>
        
        {/* The single wrapper card for the list */}
        <div className="bg-card border border-border rounded-[20px] overflow-hidden shadow-sm flex flex-col">
          
          <div className="flex items-center gap-4 p-4 border-b border-border hover:bg-muted/30 transition-colors cursor-pointer">
            <span className="w-10 h-10 rounded-xl bg-slate-100 border border-border text-muted-foreground flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-[14px] font-semibold truncate text-foreground">Resume.pdf</div>
              <div className="text-[12px] text-muted-foreground mt-0.5">2.4 MB · Today</div>
            </div>
            <button className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-background">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-4 p-4 border-b border-border hover:bg-muted/30 transition-colors cursor-pointer">
            <span className="w-10 h-10 rounded-xl bg-slate-100 border border-border text-muted-foreground flex items-center justify-center shrink-0">
              <ImageIcon className="w-5 h-5" />
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-[14px] font-semibold truncate text-foreground">Places.jpg</div>
              <div className="text-[12px] text-muted-foreground mt-0.5">4.8 MB · Yesterday</div>
            </div>
            <button className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-background">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          {/* Last item has no bottom border */}
          <div className="flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors cursor-pointer">
            <span className="w-10 h-10 rounded-xl bg-slate-100 border border-border text-muted-foreground flex items-center justify-center shrink-0">
              <Video className="w-5 h-5" />
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-[14px] font-semibold truncate text-foreground">Demo.mp4</div>
              <div className="text-[12px] text-muted-foreground mt-0.5">12 MB · 2d ago</div>
            </div>
            <button className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-background">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>

      {/* Floating Action Button (Upload) */}
      <button className="fixed bottom-20 right-5 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity z-50">
        <Plus className="w-7 h-7" />
      </button>

    </div>
  )
}

export default Dashboard;