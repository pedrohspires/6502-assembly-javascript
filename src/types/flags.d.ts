export type FlagsNames = "C" | "Z" | "I" | "D" | "V" | "N" | "B";

export type FlagType = {
    flag: FlagsNames,
    value: BitType
}