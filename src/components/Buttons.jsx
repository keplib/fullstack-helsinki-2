import Button from "./Button";


const Buttons = ({ratings, setRatings, setAll, all}) => {

    const goodHandler = () => {
        setRatings({...ratings, good: ratings.good +1})
        setAll(all +1);
    }

    const neutralHandler = () => {
        setRatings({...ratings, neutral: ratings.neutral +1})
        setAll(all +1);
    }

    const badHandler = () => {
        setRatings({...ratings, bad: ratings.bad +1})
        setAll(all +1);
    }

    return (
        <div>
            <span><Button buttonText={"good"} actionHandler={goodHandler}/></span>
            <span><Button buttonText={"neutral"} actionHandler={neutralHandler}/></span>
            <span><Button buttonText={"bad"} actionHandler={badHandler}/></span>
        </div>
    )
}

export default Buttons;