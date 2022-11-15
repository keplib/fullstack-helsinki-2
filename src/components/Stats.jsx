import StatLine from "./StatLine";


const Stats = ({ratings, all}) => {

    if (all) {
        return(
            <div>
                <h2>Statistics</h2>
                <StatLine statText={"good"} statValue={ratings.good} />
                <StatLine statText={"neutral"} statValue={ratings.neutral} />
                <StatLine statText={"bad"} statValue={ratings.bad} />
                <p>average: {all ?  (ratings.good - ratings.bad) / all : all}</p>
                <p>positive: {all ? (ratings.good / all) * 100 : all} %</p>
            </div>
        )
    } else {
        return(
            <div>
                <p>No feedback given yet!</p>
            </div>
        )
    }

    
};

export default Stats;