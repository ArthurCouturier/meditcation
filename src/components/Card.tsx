import Meditcation from "../interfaces/Meditcation";

interface CardProps {
    meditcation: Meditcation;
}

function Card(props: CardProps) {
    return (
        <div className={`h-[50vh] w-[50vh] flex flex-col justify-center items-center bg-slate-700 rounded-3xl border-4 border-blue-950`}>
            <div className="font-bold">{props.meditcation.title}</div>
            <div>{props.meditcation.author}</div>
            <div>{props.meditcation.description}</div>
            <div>note: {props.meditcation.note}</div>
        </div >
    );
}

export default Card;
