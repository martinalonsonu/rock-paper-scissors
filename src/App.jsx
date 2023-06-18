import "./App.css";
import { useState } from "react";
import paper from "./images/paper.png";
import rock from "./images/rock.png";
import scissor from "./images/scissors.png";

function App() {
    const objectGame = [
        { name: "rockGame", image: rock },
        { name: "paperGame", image: paper },
        { name: "scissorGame", image: scissor },
    ];

    const randomNumber = () => {
        let number = Math.floor(Math.random() * 3);
        return number;
    };

    const [optionGame, setOptionGame] = useState({});
    const [computerOptionGame, setComputerOptionGame] = useState({});

    const [result, setResult] = useState("Starting...");

    const resultGame = (gamer, computer) => {
        if (gamer === computer) return "They are tied";
        if (
            (gamer === "rockGame" && computer === "scissorGame") ||
            (gamer === "scissorGame" && computer === "paperGame") ||
            (gamer === "paperGame" && computer === "rockGame")
        ) {
            return "You win";
        } else return "You lose";
    };

    const handleClick = (e) => {
        const { value } = e.target;
        const newValor = objectGame.find((element) => element.name === value);

        const computerValor = objectGame[randomNumber()];

        setOptionGame(newValor);
        setComputerOptionGame(computerValor);
        setResult(resultGame(newValor.name, computerValor.name));
    };

    const handleRestart = () => {
        setOptionGame({});
        setComputerOptionGame({});
        setResult("Starting...");
    };

    return (
        <div>
            <h1>Rock-Paper-Scissors</h1>
            <div className="container">
                <h2>You</h2>
                <div className="containerImage">
                    {optionGame ? (
                        <img
                            src={optionGame.image}
                            alt={optionGame.name}
                            className="imgGame"
                        />
                    ) : (
                        ""
                    )}
                </div>
                <h3>VS</h3>
                <div className="containerImage">
                    {computerOptionGame ? (
                        <img
                            src={computerOptionGame.image}
                            alt={computerOptionGame.name}
                            className="imgGame"
                        />
                    ) : (
                        ""
                    )}
                </div>
                <h2>Computer</h2>
            </div>
            <div>
                <h3>Result: {result}</h3>
            </div>
            <div className="buttonsApp">
                <button value="rockGame" onClick={handleClick}>
                    Rock
                </button>
                <button value="paperGame" onClick={handleClick}>
                    Paper
                </button>
                <button value="scissorGame" onClick={handleClick}>
                    Scissors
                </button>
                <button onClick={handleRestart} className="restart">
                    Restart
                </button>
            </div>
        </div>
    );
}

export default App;
