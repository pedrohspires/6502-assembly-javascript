type Bit = 0 | 1;

export type FlagsType = Array<{ flag: string, value: Bit }>

export type Registradores = {
    a: number;
    x: number;
    y: number;
    pc: number;
    sp: number;
    sr: Flags;
}