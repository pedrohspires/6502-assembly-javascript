import { useContext, useState } from "react";
import zeroEsquerda from "../../utils/zeroEsquerda";

type Props = {
    memoria: Array<number>
}

export default function Memoria({ memoria }: Props) {
    const [inicio, setInicio] = useState<number>(0x0000);
    const [tamanho, setTamanho] = useState<number>(0x00ff);

    return (
        <>
            <div className="flex justify-between">
                <span className="font-semibold">Memória</span>

                <div>
                    <div className="inline-block">
                        <span>Início: </span>
                        <input
                            value={"$" + inicio.toString(16)}
                            onChange={event => setInicio(Number(event.target.value?.replace("$", "0x")))}
                            className="px-2 rounded-md w-12"
                        />
                    </div>

                    <div className="inline-block ml-2">
                        <span>Tamanho:</span>
                        <input
                            value={"$" + tamanho.toString(16)}
                            onChange={event => setTamanho(Number(event.target.value?.replace("$", "0x")))}
                            className="px-2 rounded-md w-12"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full h-full px-1 bg-gray-100 overflow-y-auto">
                {memoria?.map((item, index) => {
                    if (index > tamanho)
                        return;

                    return (
                        <span key={index.toString(16)}>
                            {index % 16 == 0 && (<>{index != 0 && <br />}<span className="bg-gray-300 inline-block w-10 px-1 text-center">${zeroEsquerda(index, 2)}</span></>)}
                            <span className="px-1 inline-block w-8 text-center">{zeroEsquerda(item, 2)}</span>
                        </span>
                    )
                })}
            </div>
        </>
    )
}
