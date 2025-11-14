import React, { useEffect, useRef, useState } from 'react'
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

    const generateCactus = () => {
        let cactusImages = [cactus1, cactus2, cactus3];
        let randomCactus = cactusImages[Math.floor(Math.random() * cactusImages.length)];
        return randomCactus;
    }

    const generateClouds = () => {
        setClouds(prevClouds =>
            prevClouds.map(cloud => ({
                ...cloud,
                isActive: true,
                top: Math.floor(Math.random() * 60),
                delay: Math.random() * 15,
                duration: 15 + Math.random() * 10
            }))
        );
    };

    const dinoJump = () => {
        if (!dinoChar.current.classList.contains("dino-jump")) {
            dinoChar.current.classList.add("dino-jump");
            setTimeout(() => {
                dinoChar.current.classList.remove("dino-jump");
            }, 500);
        }
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
        if (collisionIntervalRef.current) {
            clearInterval(collisionIntervalRef.current);
        }

        collisionIntervalRef.current = setInterval(() => {
            if (!dinoChar.current || !cactus.current) return;

            const dinoRect = dinoChar.current.getBoundingClientRect();
            const cactusRect = cactus.current.getBoundingClientRect();

            // Increase padding to shrink collision boxes more
            const dinoPadding = 15;  // Increased from 5
            const cactusPadding = 10; // Increased from 3

            const isCollision =
                dinoRect.left + dinoPadding < cactusRect.right - cactusPadding &&
                dinoRect.right - dinoPadding > cactusRect.left + cactusPadding &&
                dinoRect.top + dinoPadding < cactusRect.bottom - cactusPadding &&
                dinoRect.bottom - dinoPadding > cactusRect.top + cactusPadding;

            if (isCollision) {
                restart();
            }
        }, 10);
    }

    const restart = () => {
        setGameOver(true);

        if (scoreIntervalRef.current) clearInterval(scoreIntervalRef.current);
        if (cactusIntervalRef.current) clearInterval(cactusIntervalRef.current);
        if (dinoRunIntervalRef.current) clearInterval(dinoRunIntervalRef.current);
        if (collisionIntervalRef.current) clearInterval(collisionIntervalRef.current);

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

    // Handle tap/click for mobile
    const handleTap = (e) => {
        e.preventDefault(); // Prevent default touch behavior
        
        if (!gameStart) {
            startGame();
            setGameStart(true);
        } else if (gameStart && !gameOver) {
            dinoJump();
        }
    };


    useEffect(() => {

        const handleKeyDown = (e) => {
            if (e.code === "Space") {
                e.preventDefault();
                if (!gameStart) {
                    startGame();
                    setGameStart(true);
                } else {
                    dinoJump();
                }
            }

            if (e.code === "ArrowUp") {
                e.preventDefault();
                if (gameStart && !gameOver) {
                    dinoJump();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        // Load high score from localStorage
        const savedHighScore = localStorage.getItem('highscore');
        if (savedHighScore) {
            setHighScore(parseInt(savedHighScore));
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            // Touch listeners removed
        };
    }, [gameStart, gameOver]);


    return (
        <div className='h-[100vh] overflow-y-hidden w-full bg-(--body-color) flex items-center pt-20 max-w-6xl flex-col'>
            {/* Game Canvas */}
            <div 
                className='w-[300px] md:w-[500px] h-40 relative overflow-hidden'
                onClick={handleTap}
            >
                <div className='score-bar flex flex-row justify-end gap-5 text-white text-sm pb-10'>
                    <span style={{fontFamily: "var(--font-game)", fontSize: "10px"}}>HI {formatScore(highscore)}</span>
                    <span style={{fontFamily: "var(--font-game)",  fontSize: "10px"}}>{formatScore(score)}</span>
                </div>
                <div className="flex items-center justify-center flex-col gap-2" style={{ display: gameOver ? "flex" : "none" }}>
                    <h3 className='game-over-text text-gray-200' style={{fontFamily: "var(--font-game)",  fontSize: "16px"}}>Game Over</h3>
                    <button onClick={playAgain} className='cursor-pointer '><img src={reload} alt="reload-btn" width="30px"/></button>
                </div>
                <div className='absolute bottom-9 ps-3' ref={dinoChar}>
                    <img src={dinosrc} alt="dino" width={"55px"} />
                </div>
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
                {!gameOver && (
                    <div className='absolute top-20 right-50' ref={cactus}>
                        <img src={cactusSrc} alt="" className='h-12 w-12' />
                    </div>
                )}
                <div className='absolute w-[800px] h-[100px] overflow-hidden road-container' ref={gameRoad}>
                    <img src={road} className='road' alt="" />
                    <img src={road} className='road' alt="" />
                </div>
            </div>
            <div className='w-[300px] md:w-[500px] flex flex-col justify-start gap-2 text-zinc-500'>
                <h2 className='mb-2 text-2xl font-bold text-zinc-300'>No internet</h2>
                <span>Try</span>
                <ul className='list-disc ps-6'>
                    <li>Checking the network cables, modem, and router</li>
                    <li>Reconnecting to Wi-Fi</li>
                </ul>
                <span className='text-sm'>ERR_INTERNET_DISCONNECTED</span>
            </div>
        </div>
    )
}
