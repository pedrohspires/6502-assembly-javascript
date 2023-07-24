import { useState } from "react";
import Memoria from "./layouts/Memoria";
import EmuladorContext from "./context/emulador";
import memoriaModel from "./models/memoria";
import registradoresModel from "./models/registradores";
import { RegistradoresType } from "./types/registradores";
import { MemoriaType } from "./types/memoria";
import Registradores from "./layouts/Registradores";


function App() {
    const [memoria, setMemoria] = useState<MemoriaType>(memoriaModel);
    const [registradores, setRegistradores] = useState<RegistradoresType>(registradoresModel)

    return (
        <EmuladorContext.Provider value={{ memoria, setMemoria, registradores, setRegistradores }}>
            <div className="w-screen h-screen bg-gray-600 grid grid-cols-1 place-items-center">
                <div className="grid grid-cols-2 gap-8">
                    <textarea className="w-72 rounded-md bg-gray-500 p-4 text-white" rows={16} />

                    <div className="h-full flex flex-col gap-4">
                        <div className="w-full h-1/2 bg-gray-400 rounded-md" />

                        <Registradores />
                    </div>

                    <div className="h-56 col-span-2 bg-gray-400 p-4 flex flex-col gap-2">
                        <Memoria />
                    </div>
                </div>
            </div>
        </EmuladorContext.Provider>
    )
}

export default App
