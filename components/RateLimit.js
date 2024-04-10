const RateLimit = async ({ limit }) => {    
    return (
        <div className="fixed bottom-0 right-0 z-20 hidden border border-gray-700 bg-gray-800 px-3 py-2 text-xs shadow-xl shadow-gray-900 md:bottom-8 md:right-6 md:block md:px-4 md:text-sm">
            <p>
                <span className=" text-sm font-bold md:text-base">{limit.remaining}</span> requests left <br /> before
                rate-limit
            </p>
        </div>
    );
};

export default RateLimit;
