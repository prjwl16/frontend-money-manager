import React from "react";
import NavBar from "@/components/projectComponents/NavBar.tsx";
import Sidebar from "@/components/projectComponents/Sidebar.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Transaction from "@/pages/Transaction.tsx";
import Dashboard from "@/pages/Dashboard.tsx";

function App() {
    return (
        <div className={"min-h-screen flex flex-col gap-2"}>
            <NavBar/>
            <div className={"flex flex-1 container max-w-screen-xl"}>
                <BrowserRouter>
                    <Sidebar className={"hidden sm:flex sm:max-w-xs min-w-[200px]"}/>
                    <div className={"flex-1"}>
                        <Routes>
                            <Route path={"/dashboard"} element={<Dashboard/>}/>
                            <Route path={"/add/transaction"} element={<Transaction/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App

