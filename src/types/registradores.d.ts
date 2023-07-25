import { BitType } from "./cpu"
import { FlagType } from "./flags"

export type RegistradoresType = {
    a: number,
    x: number,
    y: number,
    pc: number,
    sp: number,
    sr: Array<FlagType>
}