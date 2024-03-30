'use client';

import GridContainer from '@/components/GridContainer';
import { VscRepo } from 'react-icons/vsc';
import { GoRepoForked } from 'react-icons/go';
import { GoIssueOpened } from "react-icons/go";
import { FaRegStar } from 'react-icons/fa';
import { FaCodePullRequest } from "react-icons/fa6";

const PopularProjects = ({ projects }) => {
    return (
        <GridContainer name="Popular Projects" className={'gap-4 md:gap-6 grid-cols-1 md:grid-cols-3'}>
            {projects.map(project => (
                <div key={project.name} className="box flex flex-col px-4 py-3 text-left">
                    <h3 className="flex items-center gap-2 text-lg font-bold">
                        <VscRepo /> {project.name}
                    </h3>
                    <p className="mb-3 mt-2 line-clamp-3 text-sm font-medium text-gray-400">{project.description}</p>

                    <div className="mt-auto flex items-center justify-between md:justify-start gap-4 text-sm font-medium">
                        {/* Language */}
                        <p className="flex items-center gap-2 text-gray-300">
                            <span
                                className="size-3 rounded-full"
                                style={{
                                    backgroundColor: project.primaryLanguage?.color,
                                }}
                            ></span>
                            <span>{project.primaryLanguage.name}</span>
                        </p>
                        <p className="flex items-center gap-1">
                            <FaRegStar /> {project.stargazerCount}
                        </p>
                        <p className="flex items-center gap-1">
                            <GoRepoForked /> {project.forkCount}
                        </p>
                        <p className="hidden md:flex items-center gap-1">
                            <GoIssueOpened /> {project.issues.totalCount}
                        </p>
                        <p className="flex items-center gap-1">
                            <FaCodePullRequest /> {project.pullRequests.totalCount}
                        </p>
                    </div>
                </div>
            ))}
        </GridContainer>
    );
};

export default PopularProjects;
