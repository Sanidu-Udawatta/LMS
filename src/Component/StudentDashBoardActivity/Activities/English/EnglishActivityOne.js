import React, {useState} from "react";
import "../Activities.css"
import gira from "../../../../Assets/Puzzel/Animal/1.jpg"
import bear from "../../../../Assets/Puzzel/Animal/3.jpg"
import snake from "../../../../Assets/Puzzel/Animal/4.jpg"
import ele from "../../../../Assets/Puzzel/Animal/5.jpg"
import lion from "../../../../Assets/Puzzel/Animal/6.jpg"
import Swal from "sweetalert2";
import orange from "../../../../Assets/Puzzel/Fruit/1.jpg";
import watermelon from "../../../../Assets/Puzzel/Fruit/2.jpg";
import grape from "../../../../Assets/Puzzel/Fruit/3.jpg";
import apple from "../../../../Assets/Puzzel/Fruit/5.jpg";
import lemon from "../../../../Assets/Puzzel/Fruit/4.jpg";

export default function EnglishActivityOne() {

    const [disabled, setDisabled] = useState(false);

    const words = [
        {
            id: 1,
            image: orange,
            letters: [
                {index: 0, visible: true, letter: "O"},
                {index: 1, visible: false, letter: "R"},
                {index: 2, visible: true, letter: "A"},
                {index: 3, visible: false, letter: "N"},
                {index: 4, visible: true, letter: "G"},
                {index: 5, visible: false, letter: "E"}
            ],
            totalCount: 3,
            results: [0, 0, 0, 0, 0, 0]
        },
        {
            id: 2,
            image: watermelon,
            letters: [
                {index: 0, visible: false, letter: "W"},
                {index: 1, visible: true, letter: "A"},
                {index: 2, visible: false, letter: "T"},
                {index: 3, visible: false, letter: "E"},
                {index: 4, visible: false, letter: "R"},
                {index: 5, visible: false, letter: "M"},
                {index: 6, visible: false, letter: "E"},
                {index: 7, visible: false, letter: "L"},
                {index: 8, visible: false, letter: "O"},
                {index: 9, visible: false, letter: "N"}
            ],
            totalCount: 9,
            results: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
            id: 3,
            image: grape,
            letters: [
                {index: 0, visible: true, letter: "G"},
                {index: 1, visible: false, letter: "R"},
                {index: 2, visible: true, letter: "A"},
                {index: 3, visible: false, letter: "P"},
                {index: 4, visible: false, letter: "E"}
            ],
            totalCount: 3,
            results: [0, 0, 0, 0, 0, 0, 0]
        },
        {
            id: 4,
            image: apple,
            letters: [
                {index: 0, visible: true, letter: "A"},
                {index: 1, visible: false, letter: "P"},
                {index: 2, visible: false, letter: "P"},
                {index: 3, visible: false, letter: "L"},
                {index: 4, visible: true, letter: "E"}
            ],
            totalCount: 3,
            results: [0, 0, 0, 0, 0]
        },
        {
            id: 5,
            image: lemon,
            letters: [
                {index: 0, visible: true, letter: "L"},
                {index: 1, visible: true, letter: "E"},
                {index: 2, visible: false, letter: "M"},
                {index: 3, visible: false, letter: "O"},
                {index: 4, visible: false, letter: "N"},
            ],
            totalCount: 3,
            results: [0, 0, 0, 0, 0]
        },
    ];

    const handleChange = (l, results) => event => {
        let newLetter = event.target.value.toUpperCase();
        if (!l.visible) {
            if (l.letter === newLetter) {
                results[l.index] = 1;
            } else {
                results[l.index] = 0;
            }
        }
    }

    const submitPuzzle = () => {

        Swal.fire({
            title: 'Do you want to submit your answers?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {

                setDisabled(true);

                let totalMarks = 0;
                let earnedMarks = 0;
                for (let i = 0; i < words.length; i++) {
                    let word = words[i];
                    totalMarks += word.totalCount;
                    for (let j = 0; j < word.results.length; j++) {
                        earnedMarks += word.results[j];
                    }
                }

                const data = {
                    activityName: "English Activity 1",
                    date: new Date().toDateString(),
                    totalMarks: totalMarks,
                    earnedMarks: earnedMarks
                }
                //send marks to database
                console.log(data)

                Swal.fire('Your answers are saved!', '', 'success')
            }
        })

    }

    return (
        <>
            <div className="disabled inline-gride">
                {
                    words.map(word => (
                        <div className="first-puzzle">
                            <img src={word.image} alt=""/>
                            <div className="sub-input">
                                {
                                    word.letters.map(l => (
                                        l.visible ?
                                            <input type="text"
                                                   className={disabled ? "input-jira disabled-color" : "input-jira"}
                                                   value={l.letter} readOnly={true}/>
                                            : <input type="text"
                                                     className={disabled ? "input-jira disabled-color" : "input-jira"}
                                                     maxLength="1"
                                                     onChange={handleChange(l, word.results)} readOnly={disabled}/>
                                    ))
                                }
                            </div>

                        </div>

                    ))
                }

            </div>
            <button type="button" onClick={submitPuzzle} className="activity-button">Submit</button>
        </>

    );

}