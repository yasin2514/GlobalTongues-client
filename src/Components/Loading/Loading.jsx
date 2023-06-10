import Lottie from "lottie-react";
import loading from '/public/97443-loading-gray.json'

const Loading = () => {
    return (
        <div className="w-full flex items-center h-[90vh] text-5xl justify-center">
            <div className="w-28">
                <Lottie
                    animationData={loading}
                    loop={true} />
            </div>
        </div>
    );
};

export default Loading;