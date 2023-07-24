import Registrador from '../../components/Registrador'
import Flags from '../../components/Flags';
import EmuladorContext from '../../context/emulador';
import { useContext } from 'react';

export default function Registradores() {
    const { registradores } = useContext(EmuladorContext);

    return (
        <>
            <div className="w-full h-1/2 p-4 bg-gray-400 rounded-md flex flex-col justify-center gap-4 select-none">
                <div className="flex gap-2 justify-center">
                    <Registrador name="A" value={registradores?.a || 0} />
                    <Registrador name="X" value={registradores?.x || 0} />
                    <Registrador name="Y" value={registradores?.y || 0} />
                </div>

                <div className="flex gap-2 justify-center">
                    <Registrador name="PC" value={registradores?.pc || 0} bytes={2} />
                    <Registrador name="SP" value={registradores?.sp || 0} />
                </div>

                <div className="flex gap-2 justify-center">
                    <Flags sr={registradores?.sr || 0} />
                </div>
            </div>
        </>
    )
}
