import Meditcation from "../interfaces/Meditcation";
import Card from "./Card";
import meditcations from "../../public/meditcations.json";
import { useEffect, useState } from "react";

function Home() {

    const [meditNumber, setMeditNumber] = useState<number>(0);
    const [meditcation, setMeditcation] = useState<Meditcation | null>(meditcations[0]);

    const handleNext = () => {
        setMeditNumber(meditNumber + 1);
        if (meditNumber === meditcations.length - 1) {
            setMeditNumber(0);
        }
        setMeditcation(meditcations[meditNumber]);
    }

    const handlePrev = () => {
        setMeditNumber(meditNumber - 1);
        if (meditNumber === 0) {
            setMeditNumber(meditcations.length - 1);
        }
        setMeditcation(meditcations[meditNumber]);
    }

    useEffect(() => {
        setMeditcation(meditcations[meditNumber]);
    }, [meditNumber]);

    return (
        <div className="h-[80vh] flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
                {meditcation ? (
                    <Card meditcation={meditcation} />
                ) : (
                    <></>
                )}
            </div>
            <div className="flex justify-center items-center mt-4 py-2">
                <button onClick={handlePrev} className="mx-2">Prev</button>
                <button onClick={handleNext} className="mx-2">Next</button>
            </div>
        </div>
    );
}

export default Home;
