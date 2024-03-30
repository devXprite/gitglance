import { graphql } from "@octokit/graphql";

const githubGraphql = async ({ query, username }) => {
    const response = await graphql(query, {
        username,
        headers: {
            authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
    });

    return response;
};

export default githubGraphql;
