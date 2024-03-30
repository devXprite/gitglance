'use client';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';
import GridContainer from '@/components/GridContainer';

const Calendar = ({ contributions }) => {
    return (
        <GridContainer name="Contributions Calendar" className={'block overflow-x-auto'}>
            <div className="grid grid-flow-col grid-rows-7 gap-1 gap-x-[3px] lg:gap-x-2 w-[40rem] md:w-auto">
                {contributions.map((contribution, i) => (
                    <Tippy
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
