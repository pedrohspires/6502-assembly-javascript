import { Registradores } from "./registradores"

export type BitType = 0 | 1;

export type CpuType = {
    memoria: Array<number>,
    registradores: Registradores
}