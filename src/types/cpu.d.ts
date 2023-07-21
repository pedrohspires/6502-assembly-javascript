import { Memoria } from "./memoria"
import { Registradores } from "./registradores"

export type Cpu = {
    registradores: Registradores,
    memoria: Memoria
}