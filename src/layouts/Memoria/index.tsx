import useCpu from "../../hooks/useCpu";
import zeroEsquerda from "../../utils/zeroEsquerda";

type Props = {
    inicio: number,
    setInicio: React.Dispatch<React.SetStateAction<number>>,
    tamanho: number,
    setTamanho: React.Dispatch<React.SetStateAction<number>>
}

export default function Memoria(props: Props) {
    const {
        inicio,
        setInicio,
        tamanho,
        setTamanho
    } = props;

    const { cpu, updateMemoria } = useCpu();

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
                    <button onClick={() => { updateMemoria(0x0f, cpu.memoria[0x0f] + 1) }}>adicionar</button>
                </div>
            </div>

            <div className="w-full h-full px-1 bg-gray-100 overflow-y-auto">
                {cpu.memoria.map((item, index) => {
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
