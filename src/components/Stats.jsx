const Stats = ({ratings, all}) => {
    return(
        <div>
            <h2>Statistics</h2>
            <p>good : {ratings.good}</p>
            <p>neutral: {ratings.neutral}</p>
            <p>bad: {ratings.bad}</p>
            <p>average: {all ?  (ratings.good - ratings.bad) / all : all}</p>
        </div>
    )
};

export default Stats;