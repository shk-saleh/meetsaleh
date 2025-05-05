import React, { use, useEffect, useRef, useState } from 'react'
import dino from '../Images/dino.png'
import dinorun1 from '../Images/dinorun1.png'
import dinorun2 from '../Images/dinorun2.png'
import road from '../Images/road.png'
import reload from '../Images/reload.png'
import cactus1 from '../Images/cactus1.png'
import cactus2 from '../Images/cactus2.png'
import cactus3 from '../Images/cactus3.png'
import './Game.css'

export const Game = () => {

    const [gameStart, setGameStart] = useState(false);
    const [cactusSrc, setCactusSrc] = useState(cactus1);
    const [dinosrc, setDinoSrc] = useState(dino);
    const [score, setScore] = useState(0);
    const [highscore, setHighScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const scoreIntervalRef = useRef(null);
    const dinoRunIntervalRef = useRef(null);
    const collisionIntervalRef = useRef(null);
    const cactusIntervalRef = useRef(null);
    const gameRoad = useRef(null);
    const dinoChar = useRef(null);
    const cactus = useRef(null);
    const [clouds, setClouds] = useState([
        { id: 1, isActive: false, top: 0, delay: 0, duration: 15 },
        { id: 2, isActive: false, top: 0, delay: 0, duration: 15 },
        { id: 3, isActive: false, top: 0, delay: 0, duration: 15 },
        { id: 4, isActive: false, top: 0, delay: 0, duration: 15 },
        { id: 5, isActive: false, top: 0, delay: 0, duration: 15 },
    ]);


    const startGame = () => {

        if (gameRoad.current && cactus.current) {
            gameRoad.current.classList.add("road-active");
            cactus.current.classList.add("cactus-active");
        }

        cactusIntervalRef.current = setInterval(() => {
            setCactusSrc(generateCactus());
        }, 6500);

        dinorun();
        generateClouds();
        UpdateScore();
        checkCollision();

    }

    // make dino running
    const dinorun = () => {

        if (dinoRunIntervalRef.current) {
            clearInterval(dinoRunIntervalRef.current);
        }

        dinoRunIntervalRef.current = setInterval(() => {
            setDinoSrc(dinorun1);
            setTimeout(() => {
                setDinoSrc(dinorun2);
            }, 100);
        }, 200);

    }

    // generate random cactus
    const generateCactus = () => {

        let cactusImages = [cactus1, cactus2, cactus3];
        let randomCactus = cactusImages[Math.floor(Math.random() * cactusImages.length)];

        return randomCactus;

    }

    // generate random clouds
    const generateClouds = () => {
        // Update cloud state with randomized properties
        setClouds(prevClouds =>
            prevClouds.map(cloud => ({
                ...cloud,
                isActive: true,
                top: Math.floor(Math.random() * 60), // Random top position (0-60px)
                delay: Math.random() * 15,           // Random animation delay (0-15s)
                duration: 15 + Math.random() * 10    // Random duration (15-25s)
            }))
        );
    };


    const dinoJump = () => {
        dinoChar.current.classList.add("dino-jump");
        setTimeout(() => {
            dinoChar.current.classList.remove("dino-jump");
        }, 500);
    }


    const UpdateScore = () => {

        if (scoreIntervalRef.current) {
            clearInterval(scoreIntervalRef.current);
        }

        scoreIntervalRef.current = setInterval(() => {
            setScore(prevScore => prevScore + 1);
        }, 150);

    };

    const formatScore = (value) => {

        if (value < 10) return "0000" + value;
        if (value < 100) return "000" + value;
        if (value < 1000) return "00" + value;
        if (value < 10000) return "0" + value;

        return value.toString();
    };

    const checkCollision = () => {
        // Clear any existing collision detection interval
        if (collisionIntervalRef.current) {
            clearInterval(collisionIntervalRef.current);
        }

        // Set up new collision detection interval
        collisionIntervalRef.current = setInterval(() => {

            if (!dinoChar.current || !cactus.current) return;

            let dinoBottom = parseInt(window.getComputedStyle(dinoChar.current).getPropertyValue("bottom"));
            let cactusLeft = parseInt(window.getComputedStyle(cactus.current).getPropertyValue("left"));

            console.log(dinoBottom, cactusLeft);

            if (dinoBottom < 200 && cactusLeft > 0 && cactusLeft <= 40) {
                restart();
            }

        }, 10);
    }


    // clear all intervals on game end
    const restart = () => {

        setGameOver(true);

        // Clear all intervals
        if (scoreIntervalRef.current) clearInterval(scoreIntervalRef.current);
        if (cactusIntervalRef.current) clearInterval(cactusIntervalRef.current);
        if (dinoRunIntervalRef.current) clearInterval(dinoRunIntervalRef.current);
        if (collisionIntervalRef.current) clearInterval(collisionIntervalRef.current);

        // Stop animations
        if (gameRoad.current) gameRoad.current.classList.remove("road-active");
        if (cactus.current) cactus.current.classList.remove("cactus-active");
        if (dinoChar.current) dinoChar.current.classList.remove("dino-jump");

        setClouds(prevClouds =>
            prevClouds.map(cloud => ({
                ...cloud,
                isActive: false,
            }))
        );

    }


    const playAgain = () => {

        setGameOver(false);
        setScore(0);
        storeHighScore();
        startGame();

    }

    const storeHighScore = () => {
        if (score > highscore) {
          localStorage.setItem('highscore', score.toString());
          setHighScore(score);
        }
    }


    useEffect(() => {

        const handleKeyDown = (e) => {

            if (e.code === "Space") {
                if (!gameStart) {
                    startGame();
                }
                setGameStart(true);
            }

            if (e.code === "ArrowUp") {
                dinoJump();
            }

        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };

    }, [gameStart]);


    return (
        <div className='h-[100vh] w-full bg-gray-950 flex items-center justify-center flex-col gap-10'>
            <h1 className='text-4xl text-white'>Enjoy Dino Game!</h1>
            {/* Game Canvas */}
            <div className='w-[700px] h-74 relative overflow-hidden'>
                <div className='score-bar flex flex-row justify-end gap-5 text-white text-sm pb-10'>
                    <span>HI {highscore}</span>
                    <span>{formatScore(score)}</span>
                </div>
                <div className="flex items-center justify-center flex-col gap-2" style={{ display: gameOver ? "flex" : "none" }}>
                    <h3 className='game-over-text text-gray-400 text-sm'>Game Over</h3>
                    <button onClick={playAgain} className='pointer'><img src={reload} alt="reload-btn" width="30px"/></button>
                </div>
                <div className='absolute bottom-42 ps-3 z-100' ref={dinoChar}>
                    <img src={dinosrc} alt="dino" width={"55px"} />
                </div>
                {/* Clouds using map function */}
                <div className='clouds'>
                    {clouds.map(cloud => (
                        <div
                            key={cloud.id}
                            className={`cloud ${cloud.isActive ? 'cloud-active' : ''}`}
                            style={{
                                top: `${cloud.top}px`,
                                animationDelay: `${cloud.delay}s`,
                                animationDuration: `${cloud.duration}s`
                            }}
                        />
                    ))}
                </div>
                <div className='absolute top-20 right-[-50px]' ref={cactus}>
                    <img src={cactusSrc} alt="" className='h-12 w-12' />
                </div>
                <div className='absolute w-[800px] h-[100px] overflow-hidden road-container' ref={gameRoad}>
                    <img src={road} className='road' alt="" />
                    <img src={road} className='road' alt="" />
                </div>
            </div>
        </div>
    )

}
