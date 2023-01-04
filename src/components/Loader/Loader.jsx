import { ThreeCircles } from  'react-loader-spinner'

export const Loader = () => {
    return (
        <>
            <ThreeCircles
                height="27"
                width="27"
                color="blue"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </>
    );
};

export default Loader;