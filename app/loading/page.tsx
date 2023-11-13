'use client';
import Spline from '@splinetool/react-spline';

const Loading = (): JSX.Element  => {

    return (
    <div className="bg-unics-black-black absolute w-screen h-screen z-20">
        <Spline scene="https://prod.spline.design/XtST03DmkzSkWyyb/scene.splinecode" />
    </div>
    )
}

export default Loading;