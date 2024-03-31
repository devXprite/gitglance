import GridContainer from '@/components/GridContainer';
import RepoCard from '@/components/RepoCard';

const PopularProjects = ({ projects }) => {
    return (
        <GridContainer name="Popular Projects" className={'grid-cols-1 gap-4 md:grid-cols-3 md:gap-6'}>
            {projects.map(repo => (
                <RepoCard key={repo.id} {...repo} />
            ))}
        </GridContainer>
    );
};

export default PopularProjects;
