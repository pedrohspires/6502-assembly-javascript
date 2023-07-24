type BitType = 0 | 1;

export type FlagsType = Array<{ flag: string, value: BitType }>

export type RegistradoresType = {
    a: number;
    x: number;
    y: number;
    pc: number;
    sp: number;
    sr: Flags;
}