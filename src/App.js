import { Route, Routes, useLocation } from "react-router-dom";
import MiniNavbar from "./components/layout/MiniNavbar";
import Adminroutes from "./routes/Adminroutes";
import Userroutes from "./routes/Userroutes";

function App() {
  const location = useLocation();
  const exceptNavPaths = ['/auth']
    return (
        <div className="App">
            {!exceptNavPaths.includes(location.pathname) && <MiniNavbar />}
            
            <Routes>
                <Route path="/admin/*" element={<Adminroutes />}></Route>
                <Route path="/*" element={<Userroutes />}></Route>
            </Routes>
        </div>
    );
}

export default App;
