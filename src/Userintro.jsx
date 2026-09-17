import Userimg from '../images/image-jeremy.png';
import { useState } from 'react';

function userintro({ onTimeframeChange }) {
    const timeframes = ['daily', 'weekly', 'monthly'];

    const [selected, setSelected] = useState('daily');

    return (
        <div id="user">
            <section className="intro">
                <img src={Userimg} alt="userimage" />
                <p id='userpera'>report for<span id='username'>Jeremy Robson</span></p>
            </section>

            <ul className="timeframes">
                {timeframes.map((timeframe) => (
                    <li
                        key={timeframe}
                        name={timeframe}
                        onClick={() => {
                            onTimeframeChange(timeframe);
                            setSelected(timeframe);
                        }}
                        style={{
                            color: selected === timeframe ? 'white' : 'hsl(235, 45%, 61%)'
                        }}
                    >
                        {timeframe}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default userintro