import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import React from "react";

const Progress = () => {
    const percentage = 70;
    const innerPercentage = 15;

    return (
        <div className={"h-36 w-36 relative "}>
            <div className={""}>
                <CircularProgressbar
                    styles={buildStyles({
                        pathTransitionDuration: 1,
                        pathColor: "#F0B86E",
                        textColor: "rgb(216 180 254)"
                    })}
                    strokeWidth={4}
                    value={percentage}
                    text={`${percentage}%`}/>
            </div>
            <div className={"absolute top-4 right-4 h-28 w-28"}>
                <CircularProgressbar
                    styles={buildStyles({
                        pathTransitionDuration: 1,
                        pathColor: "rgb(115,71,162)",
                    })}
                    strokeWidth={5}
                    value={innerPercentage}
                />
            </div>
        </div>
    )
}