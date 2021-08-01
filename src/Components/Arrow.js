import { useContext } from 'react';
import ContextSlider from '../context/ContextSlider';

function Arrow() {
    const contextSlider = useContext(ContextSlider);
    const { prev, next } = contextSlider;

    return (
        <div className="btn-arrow">
            <div onClick={() => prev()} className="prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
            </div>
            <div onClick={() => next()} className="next">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </div>
        </div>
    );
}

export default Arrow;
