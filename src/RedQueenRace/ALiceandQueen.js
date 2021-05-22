import React, { useEffect } from 'react';
import './style.css';
import useWebAnimations from "@wellyshen/use-web-animations";

export const AliceandQueen = () => {

    const background1 = useWebAnimations({
        keyframes: [
            { transform: 'translateX(100%)' },
            { transform: 'translateX(-100%)' },
        ],

        animationOptions: {
            duration: 36000,
            iterations: Infinity
        },
    });

    const background2 = useWebAnimations({
        keyframes: [
            { transform: 'translateX(100%)' },
            { transform: 'translateX(-100%)' },
        ],

        animationOptions: {
            duration: 36000,
            iterations: Infinity
        },
    });

    const foreground1 = useWebAnimations({
        keyframes: [
            { transform: 'translateX(100%)' },
            { transform: 'translateX(-100%)' },
        ],

        animationOptions: {
            duration: 12000, // Run for 12000ms
            iterations: Infinity // Repeat infinite
        },
    });

    const foreground2 = useWebAnimations({
        keyframes: [
            { transform: 'translateX(100%)' },
            { transform: 'translateX(-100%)' },
        ],

        animationOptions: {
            duration: 12000, // Run for 12000ms
            iterations: Infinity // Repeat infinite
        },
    });

    const redQueen_alice = useWebAnimations({
        keyframes: [
            { transform: 'translateY(0)' },
            { transform: 'translateY(-100%)' },
        ],
        animationOptions: {
            easing: 'steps(7, end)',
            direction: "reverse",
            duration: 600,
            playbackRate: 1,
            iterations: Infinity
        }
    });

    

    let playBackRateRQ = 1;
    let playBackRateBG = 0;

    const adjustBackgroundPlayback = () => {
        if (playBackRateRQ < 0.8) {
            playBackRateBG = playBackRateRQ / 2 * -1;
            // console.log("1st cond: " );
            // console.log(playBackRateBG);
        } else if (playBackRateRQ > 1.2) {
            playBackRateBG = playBackRateRQ / 2;
            // console.log("2nd cond: " );
            // console.log(playBackRateBG);
        } else {
            playBackRateBG = 0;
            // console.log("3rd cond: ");
            // console.log(playBackRateBG);
        }

        foreground1.getAnimation().playbackRate = playBackRateBG;
        foreground2.getAnimation().playbackRate = playBackRateBG;
        background1.getAnimation().playbackRate = playBackRateBG;
        background2.getAnimation().playbackRate = playBackRateBG;

    };
    // adjustBackgroundPlayback();

    const goFaster = () => {
        playBackRateRQ *= 1.1;
        // console.log(playBackRateRQ);
        /* But you can speed them up by giving the screen a click or a tap. */
        redQueen_alice.getAnimation().playbackRate = playBackRateRQ;
        adjustBackgroundPlayback();
        console.log(playBackRateBG);
        // playBackRateBackgroundRateSetFunc(playBackRateBG);
    }




    useEffect(() => {

        const fganimation = foreground1.getAnimation();
        fganimation.currentTime = fganimation.effect.getTiming().duration / 2;

        const bganimation = background1.getAnimation();
        bganimation.currentTime = bganimation.effect.getTiming().duration / 2;

        // /* If Alice and the Red Queen are running at a speed of 1, the background doesn't move. */
        // /* But if they fall under 1, the background slides backwards */
        setInterval( () => {
            /* Set decay */
            if (playBackRateRQ > 0.4) {
                playBackRateRQ *= 0.9;
                redQueen_alice.getAnimation().playbackRate = playBackRateRQ
            }
            adjustBackgroundPlayback();
        }, 3000);


        document.addEventListener('click', goFaster)
    });


    return (
        <div>
            <div id="red-queen_and_alice">
                <img id="red-queen_and_alice_sprite"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place."
                    ref={redQueen_alice.ref}
                />
            </div>

            <div className="scenery" id="foreground1" ref={foreground1.ref}>
                <img id="palm3"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" "
                />
            </div>
            <div className="scenery" id="foreground2" ref={foreground2.ref}>
                <img id="bush"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" "
                />
                <img id="w_rook_upright"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" "
                    
                />
            </div>

            <div className="scenery" id="background1" ref={background1.ref}>
                <img id="r_pawn_upright"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
                <img id="w_rook"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
                <img id="palm1"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
            </div>
            <div className="scenery" id="background2" ref={background2.ref}>
                <img id="r_pawn"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />

                <img id="r_knight"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
                <img id="palm2"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
            </div>
            
        </div>

    )
}
