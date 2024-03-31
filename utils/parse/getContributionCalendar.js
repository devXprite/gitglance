const getContributionCalendar = contributionsCollection => {
    const weeks = contributionsCollection.contributionCalendar.weeks;
    return weeks.flatMap(week => week.contributionDays);
};

module.exports = getContributionCalendar;
