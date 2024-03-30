import githubGraphql from './githubGraphql';

const fetchUserInfo = async login => {
    const query = `
    query ($username: String!) {
        user(login: $username) {
          name
          avatarUrl
          bio
          company
          createdAt
          email
          location
          url
          twitterUsername
          websiteUrl
          status {
            emojiHTML
            message
          }
          socialAccounts(first: 5) {
            nodes {
              displayName
              provider
              url
            }
          }
          followers {
            totalCount
          }
        }
      }
    `;

    const { user } = await githubGraphql({ query, username: login });
    return { ...user, username: login };
};

export default fetchUserInfo;
