import axios from 'axios';
import githubGraphql from './githubGraphql';

const fetchUserInfo = async username => {
    const query = `
    query ($username: String!) {
        user(login: $username) {
          name
          avatarUrl
          bio
          company
          createdAt
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
          following {
            totalCount
          }
          repositories(
            first: 1
            ownerAffiliations: OWNER
          ) {
            totalCount
          }
        }
      }
    `;

    try {
        const response = await githubGraphql({ query, variables: { username } });
        return response?.user;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export default fetchUserInfo;
