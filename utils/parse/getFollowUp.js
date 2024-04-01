const getFollowUp = (response, login) => {
    const followUp = {
        login,
        issues_by_user: {
            open: response.issues_open_by.issueCount,
            closed: response.issues_closed_by.issueCount,
            draft: response.issues_drafts_by.issueCount,
            skipped: response.issues_skipped_by.issueCount,
        },
        pr_by_user: {
            open: response.pr_open_by.issueCount,
            merged: response.pr_merged_by.issueCount,
            draft: response.pr_drafts_by.issueCount,
            closed: response.pr_closed_by.issueCount,
        },
        issues_on_user: {
            open: response.issues_open_on.issueCount,
            closed: response.issues_closed_on.issueCount,
            draft: response.issues_drafts_on.issueCount,
            skipped: response.issues_skipped_on.issueCount,
        },
        pr_on_user: {
            open: response.pr_open_on.issueCount,
            merged: response.pr_merged_on.issueCount,
            draft: response.pr_drafts_on.issueCount,
            closed: response.pr_closed_on.issueCount,
        },
    };

    // console.log(followUp);

    return followUp;
};

module.exports = getFollowUp;
