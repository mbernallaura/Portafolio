import { Spinner } from "keep-react";

const Loader = () => {
    return (
        <div className="w-full h-full flex items-center justify-center backdrop-blur-sm ">
            <Spinner className="text-ciberPink" size="xl" />
        </div>
    )
}

export default Loader;
