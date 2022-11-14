const Buttons = ({ratings, setRatings}) => {

    const goodHandler = () => {
        setRatings({...ratings, good: ratings.good +1})
    }

    const neutralHandler = () => {
        setRatings({...ratings, neutral: ratings.neutral +1})
    }

    const badHandler = () => {
        setRatings({...ratings, bad: ratings.bad +1})
    }

    return (
        <div>
            <span><button onClick={goodHandler}>good</button></span>
            <span><button onClick={neutralHandler}>neutral</button></span>
            <span><button onClick={badHandler}>bad</button></span>
        </div>
    )
}

export default Buttons;