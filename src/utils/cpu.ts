import registradores from "./registradores";
import memoria from "./memoria";
import { Cpu } from "../types/cpu";

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

export default cpu;