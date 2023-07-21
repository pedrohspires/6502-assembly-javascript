import registradores from "./registradores";
import memoria from "./memoria";
import { Cpu } from "../types/cpu";
import { Bit } from "../types/registradores";

const cpu: Cpu = {
    registradores,
    memoria
}

export function updateMemoria(index: number, valor: number, cpu: Cpu, setCpu: React.Dispatch<React.SetStateAction<Cpu>>){
    let memoriaTemp = cpu.memoria;
    memoriaTemp[index] = valor;
    setCpu({
        ...cpu,
        memoria: memoriaTemp
    })
}

export function updateRegistrador(registrador: "a" | "x" | "y" | "pc" | "sp", valor: number, cpu: Cpu, setCpu: React.Dispatch<React.SetStateAction<Cpu>>){
    setCpu({
        ...cpu,
        registradores: {...cpu.registradores, [registrador]: valor}
    })
}

export default cpu;