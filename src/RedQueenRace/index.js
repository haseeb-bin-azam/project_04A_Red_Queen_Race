import React from 'react';
import './style.css';
// import useWebAnimations from "@wellyshen/use-web-animations";

import { AliceandQueen } from './ALiceandQueen';

export const RedQueenRace = () => {

   
    // var background1Movement = background1.animate(
    //     sceneryFrames, sceneryTimingBackground);
    // background1Movement.currentTime = background1Movement.effect.timing.duration / 2;

    // var background2Movement = background2.animate(
    //     sceneryFrames, sceneryTimingBackground);

    // var foreground1 = document.getElementById('foreground1');
    // var foreground2 = document.getElementById('foreground2');

    // var foreground1Movement = foreground1.animate(
    //     sceneryFrames, sceneryTimingForeground);
    // foreground1Movement.currentTime = foreground1Movement.effect.timing.duration / 2;

    // var foreground2Movement = foreground2.animate(
    //     sceneryFrames, sceneryTimingForeground);




    // /* Alice tires so easily! 
    //   Every so many seconds, reduce their playback rate so they slow a little. 
    // */
    // var sceneries = [foreground1Movement, foreground2Movement, background1Movement, background2Movement];


    return (
        <div>
            <div className="wrapper">
                <div className="sky"></div>
                <div className="earth">
                    <AliceandQueen />
                </div>

            </div>
        </div>
    )
}