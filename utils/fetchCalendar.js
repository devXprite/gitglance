import githubGraphql from './githubGraphql';

const fetchCalendar = async login => {
    const query = `
    query ($username: String!) {
      user(login: $username) {
        contributionsCollection{
          contributionCalendar{
            weeks{
              contributionDays{
                contributionCount
                contributionLevel
                date
              }
            }
          }
        }
      }
    }
    `;

    const {
        user: {
            contributionsCollection: {
                contributionCalendar: { weeks },
            },
        },
    } = await githubGraphql({ query, username: login });

    const calender = [];
    weeks.forEach(week => {
        week.contributionDays.forEach(day => {
            calender.push(day);
        });
    });

    return calender;
};

export default fetchCalendar;
