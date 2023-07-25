import { BitType } from "./cpu"
import { FlagsType } from "./flags"

export type RegistradoresType = {
    a: number,
    x: number,
    y: number,
    pc: number,
    sp: number,
    sr: Array<{
        flag: FlagsType,
        value: BitType
    }>
}