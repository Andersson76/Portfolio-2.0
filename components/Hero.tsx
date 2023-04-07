import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Martin Andersson",
            "Guy-who-loves-Sailng",
            "<ButLoveToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000
    });
  return <div>
    <p>{text}</p>
  </div>
}