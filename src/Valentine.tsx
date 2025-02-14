import {useState} from "react";

export default function Valentine(){
    const [Width, setWidth] = useState(100);
    const [Height, setHeight] = useState(50);

    const [noBttnText, setNoBttnText] = useState("No");

    const [counter, setCounter] = useState(1);

    const manageNoClick = () => {
        setCounter(counter + 1);
        switch (counter) {

            case 1:
                setWidth(() => 250);
                setHeight(() => 80);
                setNoBttnText("Estas seguro/a?");
                break;
            case 2:
                setWidth(() => 300);
                setHeight(() => 100);
                setNoBttnText("Enserio??");
                break;

            case 3:
                setWidth(() => 700);
                setHeight(() => 200);
                setNoBttnText("Que mala gente.");
                break;

            case 4:
                setWidth(() => 1000);
                setHeight(() => 500);
                setNoBttnText("Estare muy triste :'(.");
                break;

            case 5:
                setWidth(() => 1500);
                setHeight(() => 1000);
                setNoBttnText("Te odio.");
                break;

            case 6:
                setWidth(() => 10000);
                setHeight(() => 10000);
                setNoBttnText("What now?");
                break;
            default:
                setWidth(() => 100);
                setHeight(() => 50);
                setNoBttnText("No");
                return;
        }
    }

    const manageYesClick = () => {
        alert("I love you too!");
    }

    return (
        <div className={"h-screen w-full bg-[pink] flex flex-col gap-5 justify-center items-center overflow-hidden"}>
            <label className={"font-bold text-4xl text-[red]"}>
                ¿Quieres ser mi Valentín?
            </label>
            <div className={"flex flex-row flex-wrap gap-3 justify-center items-center h-fit w-full"}>
                <button onClick={manageYesClick} style={{ width: `${Width}px`, height: `${Height}px`}} className={" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"}>
                    Yes
                </button>
                <button onClick={manageNoClick} className={"w-fit h-[50px] bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"}>
                    {noBttnText}
                </button>
            </div>
            <div>
                <img src={"https://media.giphy.com/media/3o7TKz6r2Kp9jxwXQY/giphy.gif"} alt={"Love"} />
            </div>
        </div>
    )
}