import { Bell, FileText, Folder, ImageIcon, Menu, MoreVertical, Plus, Video } from "lucide-react"

const Dashboard = () => {
  return (
    <div className="p-4.5 min-h-screen bg-background">
      {/* Top header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
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
        <span className="text-sm text-muted-foreground font-normal">6.2GB / 15GB</span>
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
      <div className="font-semibold text-[13px] mb-1.5 text-foreground">Recent Files</div>
      <div className="flex flex-col">
        
        <div className="flex items-center gap-3 py-2 border-b border-border">
          <span className="w-8.5 h-8.5 rounded-[10px] bg-slate-100 text-muted-foreground flex items-center justify-center shrink-0">
            <FileText className="w-4 h-4" />
          </span>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-medium truncate text-foreground">Resume.pdf</div>
            <div className="text-[11px] text-muted-foreground">2.4 MB · Today</div>
          </div>
          <MoreVertical className="w-4 h-4 text-muted-foreground shrink-0 cursor-pointer" />
        </div>

        <div className="flex items-center gap-3 py-2 border-b border-border">
          <span className="w-8.5 h-8.5 rounded-[10px] bg-slate-100 text-muted-foreground flex items-center justify-center shrink-0">
            <ImageIcon className="w-4 h-4" />
          </span>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-medium truncate text-foreground">Places.jpg</div>
            <div className="text-[11px] text-muted-foreground">4.8 MB · Yesterday</div>
          </div>
          <MoreVertical className="w-4 h-4 text-muted-foreground shrink-0 cursor-pointer" />
        </div>

        <div className="flex items-center gap-3 py-2 border-b-0 border-border">
          <span className="w-8.5 h-8.5 rounded-[10px] bg-slate-100 text-muted-foreground flex items-center justify-center shrink-0">
            <Video className="w-4 h-4" />
          </span>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-medium truncate text-foreground">Demo.mp4</div>
            <div className="text-[11px] text-muted-foreground">12 MB · 2d ago</div>
          </div>
          <MoreVertical className="w-4 h-4 text-muted-foreground shrink-0 cursor-pointer" />
        </div>

      </div>

      {/* Floating Action Button (Upload) */}
      <button className="fixed bottom-20 right-4 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:opacity-90 transition-opacity z-50">
        <Plus className="w-5 h-5" />
      </button>

    </div>
  )
}

export default Dashboard