import React, { useState } from "react";
import { data } from "./data";
import { Question } from "./Question";

export const Slider = () => {
    const [slider, setSlider] = useState(1);

    const gotoNext = () => {
        if (slider <= data.length - 1) {
            setSlider(slider + 1);
        }
    };
    const gotoPrev = () => {
        if (slider >= 2) {
            setSlider(slider - 1);
        }
    };
    return (
        <div>
            <div>
                <Question data={data[slider - 1]} />
            </div>
            <button disabled={slider === 1 ? true : false} onClick={gotoPrev}>
                Prev
            </button>
            <span
                data-testid="slider"
                style={{ border: "1px solid black", width: "20px" }}
            >
                {slider}
            </span>
            <button
                disabled={slider === data.length ? true : false}
                onClick={gotoNext}
            >
                Next
            </button>
        </div>
    );
};
