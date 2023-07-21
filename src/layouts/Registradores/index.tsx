import Registrador from '../../components/Registrador'
import Flags from '../../components/Flags';
import { Cpu } from '../../types/cpu';

type Props = {
    cpu: Cpu
}

export default function Registradores(props: Props) {
    const { cpu } = props;

    return (
        <>
            <div className="w-full h-1/2 p-4 bg-gray-400 rounded-md flex flex-col justify-center gap-4 select-none">
                <div className="flex gap-2 justify-center">
                    <Registrador name="A" value={cpu.registradores.a} />
                    <Registrador name="X" value={cpu.registradores.x} />
                    <Registrador name="Y" value={cpu.registradores.y} />
                </div>

                <div className="flex gap-2 justify-center">
                    <Registrador name="PC" value={cpu.registradores.pc} bytes={2} />
                    <Registrador name="SP" value={cpu.registradores.sp} />
                </div>

                <div className="flex gap-2 justify-center">
                    <Flags sr={cpu.registradores.sr} />
                </div>
            </div>
        </>
    )
}
