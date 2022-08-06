import React, { useRef, useEffect } from "react";
import { useContext } from "react";
import { gameContext } from "../_ctx";

const ScoreBoad = ({ steps = [] }) => {
    const filteredSteps = steps?.filter(step => step);
    const pivotScoreRef = useRef();
    const { redoGame } = useContext(gameContext);
    useEffect(() => {
        if (pivotScoreRef.current)
            pivotScoreRef.current.scrollIntoView({ behaviour: "smooth" });
    }, [steps])
    return (
        <div className="score-board">
            <div className="title">Score Board</div>
            <div className="score-wrapper" >
                {filteredSteps?.map((step, i) => {
                    let isLastEle = (i == (filteredSteps?.length - 1));
                    return (
                        <div className="score" onClick={() => redoGame(i)} ref={isLastEle ? pivotScoreRef : null}>
                            {`#${i + 1} :: player ${step}`}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ScoreBoad;