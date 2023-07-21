import { FlagsType } from '../../types/registradores'

type Props = {
    sr: FlagsType;
}

export default function Flags({ sr }: Props) {
    return (
        sr.map(item => {
            return (
                <div key={item.flag} className="flex flex-col">
                    <span className="font-bold text-center">{item.flag}</span>
                    <span className="w-6 px-1 h-6 inline-block bg-white rounded-md text-center shadow-md">{item.value.toString(16)}</span>
                </div>
            )
        })
    )
}
