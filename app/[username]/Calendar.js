'use client';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';
import GridContainer from '@/components/GridContainer';

const Calendar = ({ contributions }) => {
    return (
        <GridContainer
            name="Contributions Calendar"
            description={`Contributions made by the user in the last 365 days.`}
            className={'block overflow-x-auto'}
        >
            <div className="grid w-[40rem] grid-flow-col grid-rows-7 gap-1 gap-x-[3px] md:w-auto lg:gap-1.5">
                {contributions.map((contribution, i) => (
                    <Tippy
                        key={i}
                        theme={'material'}
                        content={
                            <p className="[&>span]:font-bold ">
                                {/* [&>span]:text-white */}
                                <span>{contribution.contributionCount}</span> contributions on{' '}
                                <span>
                                    {new Date(contribution.date).toLocaleDateString(undefined, {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric',
                                    })}
                                </span>
                            </p>
                        }
                    >
                        <div className={`level level-${contribution.contributionLevel}`}></div>
                    </Tippy>
                ))}
            </div>
        </GridContainer>
    );
};

export default Calendar;
