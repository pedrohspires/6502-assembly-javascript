import { useState } from "react";
import Flags from "./components/Flags";
import Registrador from "./components/Registrador";
import cpu from "./utils/cpu"

function App() {
  const cpu1 = cpu;
  const [inicio, setInicio] = useState(0x0000);
  const [tamanho, setTamanho] = useState(0x00ff);

  return (
    <div className="w-screen h-screen bg-gray-600 grid grid-cols-1 place-items-center">
      <div className="grid grid-cols-2 gap-8">
        <textarea className="w-72 rounded-md bg-gray-500 p-4 text-white" rows={16} />

        <div className="h-full flex flex-col gap-4">
          <div className="w-full h-1/2 bg-gray-400 rounded-md" />

          <div className="w-full h-1/2 p-4 bg-gray-400 rounded-md flex flex-col justify-center gap-4 select-none">
            <div className="flex gap-2 justify-center">
              <Registrador name="A" value={cpu1.registradores.a} />
              <Registrador name="X" value={cpu1.registradores.x} />
              <Registrador name="Y" value={cpu1.registradores.y} />
            </div>

            <div className="flex gap-2 justify-center">
              <Registrador name="PC" value={cpu1.registradores.pc} />
              <Registrador name="SP" value={cpu1.registradores.sp} />
            </div>

            <div className="flex gap-2 justify-center">
              <Flags sr={cpu1.registradores.sr} />
            </div>
          </div>
        </div>

        <div className="h-56 col-span-2 bg-gray-400 p-4 flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="font-semibold">Memória</span>

            <div>
              <div className="inline-block">
                <span>Início: </span>
                <input
                  value={"$" + inicio.toString(16)}
                  onChange={event => setInicio(Number(event.target.value?.replace("$", "0x")))}
                  className="px-2 rounded-md w-12"
                />
              </div>

              <div className="inline-block ml-2">
                <span>Tamanho:</span>
                <input
                  value={"$" + tamanho.toString(16)}
                  onChange={event => setTamanho(Number(event.target.value?.replace("$", "0x")))}
                  className="px-2 rounded-md w-12"
                />
              </div>
              <button onClick={() => {cpu1.registradores.a++}}>adicionar</button>
            </div>
          </div>

          <div className="w-full h-full px-1 bg-gray-100 overflow-y-auto">
            {cpu1.memoria.map((item, index) => {
              if (index >= tamanho)
                return;

              if (index % 16 == 0)
                return <><br /><span className="bg-gray-300 px-1">$00</span></>

              return <span className="px-1">00</span>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
