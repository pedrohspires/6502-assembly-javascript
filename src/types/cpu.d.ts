import { MemoriaType } from "./memoria"
import { RegistradoresType } from "./registradores"

export type Cpu = {
    memoria: MemoriaType | null,
    setMemoria: React.Dispatch<React.SetStateAction<MemoriaType>> | null,
    registradores: RegistradoresType | null,
    setRegistradores: React.Dispatch<React.SetStateAction<RegistradoresType>> | null
}