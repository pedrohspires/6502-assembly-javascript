import { Registradores } from "../components/types/registradores";

const registradores: Registradores = {
    a: 0x00,
    x: 0x00,
    y: 0x00,
    pc: 0x0000,
    sp: 0x0100,
    sr: [
        {flag: "C", value: 0},
        {flag: "Z", value: 0},
        {flag: "I", value: 0},
        {flag: "D", value: 0},
        {flag: "V", value: 0},
        {flag: "N", value: 0},
        {flag: "B", value: 0},
    ]
}

export default registradores;