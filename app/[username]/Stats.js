'use client';

import GridContainer from '@/components/GridContainer';
import CountUp from 'react-countup';

const Stats = ({ stats }) => {
    return (
        <GridContainer name="GitHub Stats">
            {Object.keys(stats).map(key => (
                <div key={key} className="box">
                    <p className="font-[Electrolize] text-xl md:text-2xl font-bold">
                        <CountUp start={0} end={stats[key]} />
                    </p>
                    <h5 className="-mt-1 text-gray-400 text-sm md:text-base">{key}</h5>
                </div>
            ))}
        </GridContainer>
    );
};

export default Stats;
