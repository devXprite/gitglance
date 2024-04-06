import GridContainer from '@/components/GridContainer';

const Stats = ({ stats }) => {
    return (
        <GridContainer name="GitHub Stats">
            {Object.keys(stats).map(key => (
                <div key={key} className="box">
                    <p className="font-[Electrolize] text-xl font-bold md:text-2xl">{stats[key]}</p>
                    <h5 className="-mt-1 text-sm text-gray-400 md:text-base">{key}</h5>
                </div>
            ))}
        </GridContainer>
    );
};

export default Stats;
