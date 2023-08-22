import React from "react";
import NavBar from "@/components/NavBar.tsx";
import Sidebar from "@/components/Sidebar.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TransactionForm from "@/pages/forms/TransactionForm.tsx";
import Dashboard from "@/pages/Dashboard.tsx";

function App() {
    return (
        <div className={"min-h-screen"}>
            <NavBar/>
            <div className={"max-w-screen-xl flex m-auto mt-1 pl-12 pr-2"}>
                <BrowserRouter>
                    <Sidebar className={"flex max-w-xs min-w-[200px]"}/>
                    <div>
                        <Routes>
                            <Route path={"/"} element={<Dashboard/>}/>
                            <Route path={"/add/transaction"} element={<TransactionForm/>}/>
                        </Routes>
                    </div>

                </BrowserRouter>
            </div>
        </div>
    )
}

export default App

