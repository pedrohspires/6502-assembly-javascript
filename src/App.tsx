import { useState } from "react";
import cpu from "./utils/cpu";
import { Cpu } from "./types/cpu";
import Memoria from "./layouts/Memoria";
import Registradores from "./layouts/Registradores";

function App() {
    const [inicio, setInicio] = useState<number>(0x0000);
    const [tamanho, setTamanho] = useState<number>(0x00ff);
    const [cpu1, setCpu1] = useState<Cpu>(cpu);

    return (
        <div className="w-screen h-screen bg-gray-600 grid grid-cols-1 place-items-center">
            <div className="grid grid-cols-2 gap-8">
                <textarea className="w-72 rounded-md bg-gray-500 p-4 text-white" rows={16} />

                <div className="h-full flex flex-col gap-4">
                    <div className="w-full h-1/2 bg-gray-400 rounded-md" />

                    <Registradores cpu={cpu1} />
                </div>

                <div className="h-56 col-span-2 bg-gray-400 p-4 flex flex-col gap-2">
                    <Memoria
                        inicio={inicio}
                        setInicio={setInicio}
                        tamanho={tamanho}
                        setTamanho={setTamanho}
                        cpu={cpu1}
                        setCpu={setCpu1}
                    />
                </div>
            </div>
        </div>
    )
}

export default App
