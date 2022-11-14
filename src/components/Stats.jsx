const Stats = ({ratings}) => {
    return(
        <div>
            <h2>Statistics</h2>
            <p>good : {ratings.good}</p>
            <p>neutral: {ratings.neutral}</p>
            <p>bad: {ratings.bad}</p>
        </div>
    )
};

export default Stats;