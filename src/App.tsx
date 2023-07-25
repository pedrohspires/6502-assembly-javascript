import { useState } from "react"
import Memoria from "./layouts/Memoria";
import Registradores from "./layouts/Registradores";
import { cpuModel } from "./models/cpuModel";
import { CpuType } from "./types/cpu";


function App() {
    const [cpu, setCpu] = useState<CpuType>(cpuModel);

    return (
        <div className="w-screen h-screen bg-gray-600 grid grid-cols-1 place-items-center">
            <div className="grid grid-cols-2 gap-8">
                <textarea className="w-72 rounded-md bg-gray-500 p-4 text-white" rows={16} />

                <div className="h-full flex flex-col gap-4">
                    <div className="w-full h-1/2 bg-gray-400 rounded-md" />

                    <Registradores registradores={cpu.registradores} />
                </div>

                <div className="h-56 col-span-2 bg-gray-400 p-4 flex flex-col gap-2">
                    <Memoria memoria={cpu.memoria} />
                </div>
            </div>
        </div>
    )
}

export default App
