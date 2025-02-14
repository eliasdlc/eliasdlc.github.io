import { useState } from "react";
import { useNavigate } from "react-router-dom";


interface ButtonContentProps {
    name: string;
    borderColor: string;
    bgColor: string;
}

interface ColorsProps {
    text: string;
    border: string;
    bg: string;
}

type NameOptions = 'REYNALDO' | 'NICOLE' | 'FRANCIS' | 'MARIA' | 'YARI' | 'CARLOS';

export default function Home() {
    const [hoveredButton, setHoveredButton] = useState<NameOptions | null>(null);
    const navigate = useNavigate();

    const ClickedGo = () => {
        switch(hoveredButton){
            case 'REYNALDO':
                navigate("/reynaldo");
                break;
            case 'NICOLE':
                navigate("/nicole");
                break;
            case 'FRANCIS':
                navigate("/francis");
                break;
            case 'MARIA':
                navigate("/maria");
                break;
            case 'YARI':
                navigate("/yaribel");
                break;
            case 'CARLOS':
                navigate("/carlos");
                break;
        }
    }


    const ButtonContent = ({ name, borderColor, bgColor }: ButtonContentProps) => (
        <div className={`w-full h-full flex flex-row p-2 border-3 ${borderColor} ${bgColor} rounded-xl 
            justify-center items-end transition-opacity duration-300 ease-in-out 
            ${hoveredButton === name ? 'opacity-100' : 'opacity-0'}`}>
            <button onClick={ClickedGo}>
                <h1 className="font-bold text-[20px] text-white">
                    IR
                </h1>
            </button>
        </div>
    );

    const names = ['REYNALDO', 'NICOLE', 'FRANCIS', 'MARIA', 'YARI', 'CARLOS'] as const;

    const colorMap: Record<NameOptions, ColorsProps> = {
        'REYNALDO': { text: '#b726c7', border: '#b726c7', bg: 'purple' },
        'NICOLE': { text: '#fa7389', border: '#fa7389', bg: '#f5bdc6' },
        'FRANCIS': { text: '#6b80ff', border: '#6b80ff', bg: '#5566ca' },
        'MARIA': { text: '#fcfcff', border: '#fcfcff', bg: '#d2d3ff' },
        'YARI': { text: '#4f65cf', border: '#4f65cf', bg: '#101b39' },
        'CARLOS': { text: '#abab95', border: '#abab95', bg: '#5a5f43' }
    };

    return (
        <div className={"border-3 border-white rounded-2xl flex flex-col shadow-2xl shadow-[white] w-[75%] h-[50%] min-h-fit bg-white/25 backdrop-blur-2xl gap-5 p-5 justify-start items-center"}>
            <h1 className={"font-extrabold text-[60px] text-white"}>Elige tu nombre</h1>
            <div className={"w-[100%] flex flex-row flex-wrap gap-3 justify-center items-start"}>
                {names.map((name) => {
                    const colors = colorMap[name];

                    return (
                        <button
                            key={name}
                            onMouseEnter={() => setHoveredButton(name)}
                            onMouseLeave={() => setHoveredButton(null)}
                            className={`w-[160px] h-[50px] font-bold text-[20px] relative overflow-hidden
                                text-[${colors.text}] border-3 border-[${colors.border}] bg-[${colors.bg}] rounded-2xl 
                                flex flex-col items-center justify-center 
                                transition-all duration-300 ease-in-out hover:h-[250px]`}
                        >
                            <div className="z-10 transition-all duration-300">
                                {name}
                            </div>

                            {hoveredButton === name && (
                                <ButtonContent
                                    name={name}
                                    borderColor={colors.border}
                                    bgColor={colors.bg}
                                />
                            )}

                        </button>
                    );
                })}
            </div>
        </div>
    )
}

