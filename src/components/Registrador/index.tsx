import zeroEsquerda from "../../utils/zeroEsquerda";

type Props = {
    name: string;
    value: number;
    bytes?: number;
}

export default function Registrador({name, value, bytes = 1}: Props) {
    return (
        <div className="flex items-center gap-2">
            <span className="font-bold">{name} = </span>
            <span className="w-13 px-1 h-6 inline-block bg-white rounded-md text-center shadow-md">${zeroEsquerda(value, 2 * bytes)}</span>
        </div>
    )
}
