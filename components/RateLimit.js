'ues server';

import githubGraphql from '@/utils/githubGraphql';
import { unstable_noStore } from 'next/cache';

const RateLimit = async () => {
    unstable_noStore();
    const query = `
        query{
            rateLimit{
                cost
                limit
                remaining
                used
                resetAt
            }
        }
    `;

    const { rateLimit } = await githubGraphql({ query });

    return (
        <div className="fixed bottom-0 right-0 z-20 border border-gray-700 bg-gray-800 px-3 md:px-4 py-2 text-xs shadow-xl shadow-gray-900 md:bottom-8 md:right-6 md:text-sm">
            <p>
                <span className=" text-sm font-bold md:text-base">{rateLimit.remaining}</span> requests left <br />{' '}
                before rate-limit
            </p>
        </div>
    );
};

export default RateLimit;
