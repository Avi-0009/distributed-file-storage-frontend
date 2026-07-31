import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Route>

          <Route path="*" element={<Navigate to={"/"} replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;