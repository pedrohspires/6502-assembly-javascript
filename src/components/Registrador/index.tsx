type Props = {
    name: string;
    value: number;
}

export default function Registrador({name, value}: Props) {
    return (
        <div className="flex items-center gap-2">
            <span className="font-bold">{name} = </span>
            <span className="w-12 px-1 h-6 inline-block bg-white rounded-md text-center shadow-md">${value.toString(16)}</span>
        </div>
    )
}
