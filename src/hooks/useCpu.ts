import { useState } from "react";
import { Cpu } from "../types/cpu";
import registradores from "../utils/registradores";
import memoria from "../utils/memoria";

type Return = {
    cpu: Cpu,
    updateRegistrador: (registrador: "a" | "x" | "y" | "pc" | "sp", valor: number) => void,
    updateMemoria: (index: number, valor: number) => void
}

export default function useCpu(): Return {
    const [cpu, setCpu] = useState<Cpu>({
        registradores: registradores,
        memoria: memoria
    });

    function updateRegistrador(registrador: "a" | "x" | "y" | "pc" | "sp", valor: number) {
        setCpu({
            ...cpu,
            registradores: { ...cpu.registradores, [registrador]: valor }
        });
    }

    function updateMemoria(index: number, valor: number) {
        let memoriaTemp = cpu.memoria;
        memoriaTemp[index] = valor;
        setCpu({
            ...cpu,
            memoria: memoriaTemp
        })
    }

    return { cpu, updateRegistrador, updateMemoria };
}