import React, {useState} from "react";
import "../Activities.css"
import {Grid} from "@mui/material";
import Swal from "sweetalert2";

export default function MathsActivityTwo() {

    const correctAnswer = 2;

    const [givenAnswer, setGivenAnswer] = useState(0);

    const [answerOneSelected, setAnswerOneSelected] = useState(false);
    const [answerTwoSelected, setAnswerTwoSelected] = useState(false);
    const [answerThreeSelected, setAnswerThreeSelected] = useState(false);

    const handleClick = (answerNo, value) => event => {
        setGivenAnswer(value);
        if (answerNo === 1) {
            setAnswerOneSelected(true);
            setAnswerTwoSelected(false);
            setAnswerThreeSelected(false);
        } else if (answerNo === 2) {
            setAnswerOneSelected(false);
            setAnswerTwoSelected(true);
            setAnswerThreeSelected(false);
        } else {
            setAnswerOneSelected(false);
            setAnswerTwoSelected(false);
            setAnswerThreeSelected(true);
        }
    }

    const handleSubmit = () => {
        if (givenAnswer === 0) {
            Swal.fire(
                'Answer is Missing',
                "Select an answer before select",
                'warning'
            ).then(r => {
            })
        } else if (correctAnswer === givenAnswer) {
            Swal.fire(
                'Congratulations',
                "You entered the correct answer",
                'success'
            ).then(r => {
            })
        } else {
            Swal.fire(
                'Incorrect Answer',
                "Entered answer is incorrect",
                'error'
            ).then(r => {
            })
        }
    }

    return (
        <>
            <div className="maths-activity">
                <h4>Addition</h4>
                <Grid className="maths-activity-question-section" container spacing={2}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={8}>
                        <div className="maths-activity-question">5</div>
                        <div className="maths-activity-question">-</div>
                        <div className="maths-activity-question">3</div>
                        <div className="maths-activity-question">?</div>
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={2}>
                        <div
                            className={answerOneSelected ? "maths-activity-answer maths-activity-answer-selected" : "maths-activity-answer"}
                            onClick={handleClick(1, 5)}>5
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div
                            className={answerTwoSelected ? "maths-activity-answer maths-activity-answer-selected" : "maths-activity-answer"}
                            onClick={handleClick(2, 4)}>4
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div
                            className={answerThreeSelected ? "maths-activity-answer maths-activity-answer-selected" : "maths-activity-answer"}
                            onClick={handleClick(3, 2)}>2
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
                <button type="button" onClick={handleSubmit} className="activity-button">Submit</button>
            </div>
        </>

    );

}