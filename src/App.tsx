import { useState } from "react"
import Memoria from "./layouts/Memoria";
import Registradores from "./layouts/Registradores";
import { RegistradoresType } from "./types/registradores";
import { FlagType } from "./types/flags";


function App() {
    const [program, setProgram] = useState<string>("");

    // Memória
    const [memoria, setMemoria] = useState<Array<number>>(new Array(0xffff).fill(0x0));

    // Registradores básicos
    const [registradores, setRegistradores] = useState<RegistradoresType>({ a: 0x00, x: 0x00, y: 0x00, });

    // Registrador de stratus
    const [sr, setSr] = useState<Array<FlagType>>([
        { flag: "C", value: 0 },
        { flag: "Z", value: 0 },
        { flag: "I", value: 0 },
        { flag: "D", value: 0 },
        { flag: "V", value: 0 },
        { flag: "N", value: 0 },
        { flag: "B", value: 0 },
    ]);

    // Contador de programa
    const [pc, setPc] = useState<number>(0x0100);

    // Ponteiro de pilha
    const [sp, setSp] = useState<number>(0x01ff);

    const init = () => {
        const instrucoes = program.split("\n");

        instrucoes.forEach(instrucao => {
            let instrucaoLimpa = instrucao.replace(/[^a-zA-Z0-9()$& ]/, "");

            console.log(instrucaoLimpa)
        })
    }

    return (
        <div className="w-screen h-screen bg-gray-600 grid grid-cols-1 place-items-center">
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                    <textarea
                        className="w-72 rounded-t-md resize-none bg-gray-500 p-4 text-white"
                        rows={16}
                        value={program}
                        onChange={e => setProgram(e.target.value)}
                    />

                    <div className="w-full bg-gray-500 px-4 py-2 rounded-b-md border-t-2 border-gray-600">
                        <button className="bg-gray-300 px-4 rounded-sm hover:bg-gray-400" onClick={init}>Run</button>
                    </div>
                </div>

                <div className="h-full flex flex-col gap-4">
                    <div className="w-full h-1/2 bg-gray-400 rounded-md" />

                    <Registradores registradores={registradores} pc={pc} sp={sp} sr={sr} />
                </div>

                <div className="h-56 col-span-2 bg-gray-400 p-4 flex flex-col gap-2">
                    <Memoria memoria={memoria} />
                </div>
            </div>
        </div>
    )
}

export default App
