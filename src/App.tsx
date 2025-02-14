
import './App.css'
import Home from "./Home.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Reynaldo from "./pages/Reynaldo.tsx";
import Nicole from "./pages/Nicole.tsx";
import Yaribel from "./pages/Yaribel.tsx";
import Carlos from "./pages/Carlos.tsx";
import Maria from "./pages/Maria.tsx";
import Francis from "./pages/Francis.tsx";

function App() {

    return(
        <div className={"w-screen h-screen flex flex-col gap-5 justify-center items-center bg-[grey]"}>
            <Routes>
                <Route path={"/"} element={<Home/>}/>

                <Route path={"/reynaldo"} element={<Reynaldo/>}/>
                <Route path={"/nicole"} element={<Nicole/>}/>
                <Route path={"/yaribel"} element={<Yaribel/>}/>
                <Route path={"/carlos"} element={<Carlos/>}/>
                <Route path={"/maria"} element={<Maria/>}/>
                <Route path={"/francis"} element={<Francis/>}/>
            </Routes>
        </div>

    )

}

export default function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}
