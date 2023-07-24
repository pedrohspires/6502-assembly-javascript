import { createContext } from 'react';
import { Cpu } from '../types/cpu';

const EmuladorContext = createContext<Cpu>({
    registradores: null,
    setRegistradores: null,
    memoria: null,
    setMemoria: null
});

export default EmuladorContext;