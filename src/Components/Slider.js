import { useContext } from 'react';
import ContextSlider from '../context/ContextSlider';
import Arrow from './Arrow';
import Dots from './Dots';

import './Slider.scss';

const Slider = () => {
    const contextSlider = useContext(ContextSlider);
    const { data, index } = contextSlider;
    
    return (
        <div className="sliders">
            {data.map((item) => (
                <div key={item.id} className={`${item.id === index ? 'active' : ''} slider`}>
                    <img src={item.url} alt="pic" />
                </div>
            ))}

            <Arrow />
            <Dots />
        </div>
    );
};

export default Slider;
