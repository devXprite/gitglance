import axios from 'axios';

const fetchActivity = async login => {
    const { data } = await axios.get(`https://api.github.com/users/${login}/events/public`, {
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            Accept: 'application/vnd.github+json',
        },
    });

    // console.log(data);

    // organize data
    const activity = data
        .map(({ type, payload, created_at: timestamp, repo, ...event }) => {
            switch (type) {
                // Created a git branch, tag, or repository
                case 'CreateEvent': {
                    const { ref: name, ref_type: type } = payload;
                    return {
                        type: 'create',
                        ref: { name, type },
                        timestamp,
                        repo,
                    };
                }

                // Deleted a git branch or tag
                // case 'DeleteEvent': {
                //     const { ref: deleted, ref_type: type } = payload;
                //     return {
                //         type: 'delete',
                //         ref: { deleted, type },
                //         timestamp,
                //         repo,
                //     };
                // }

                // Forked a repository
                case 'ForkEvent': {
                    const {
                        forkee: { full_name: forked },
                    } = payload;
                    return {
                        type: 'fork',
                        forked,
                        timestamp,
                        repo,
                    };
                }

                //Issue event
                case 'IssuesEvent': {
                    if (!['opened', 'closed', 'reopened'].includes(payload.action)) return null;

                    const { action, issue } = payload;
                    return {
                        type: 'issue',
                        action,
                        issue,
                        timestamp,
                        repo,
                    };
                }

                //Pull requests events
                case 'PullRequestEvent': {
                    if (!['opened', 'closed', 'reopened'].includes(payload.action)) return null;

                    const { action, pull_request } = payload;
                    return {
                        type: 'pull_request',
                        action,
                        pull_request: {
                            title: pull_request.title,
                            number: pull_request.number,
                            url: pull_request.html_url,
                        },
                        timestamp,
                        repo,
                    };
                }

                //Pushed commits to a repository
                case 'PushEvent': {
                    const { size, commits, ref: branch } = payload;
                    return {
                        type: 'push',
                        size,
                        commits,
                        branch: branch.split('/').pop(),
                        timestamp,
                        repo,
                    };
                }

                //Starred a repository
                case 'WatchEvent': {
                    const { action } = payload;
                    if (!['started'].includes(action)) return null;

                    return {
                        type: 'star',
                        timestamp,
                        repo,
                        action: 'starred',
                    };
                }

                case 'PublicEvent': {
                    return { type: 'public', timestamp, repo };
                }
            }
        })
        .filter(Boolean)
        .splice(0, 14);

    // console.log(activity);

    return activity;
};

export default fetchActivity;
