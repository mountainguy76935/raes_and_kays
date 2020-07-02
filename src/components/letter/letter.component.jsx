import React from 'react';
import './letter.styles.css';

export const Letter = (props) => {
    const [left, setLeft] = React.useState('');
    const [top, setTop] = React.useState('');
    const [ready, setReady] = React.useState(false)

    const handleLoad = () => {
        let node = document.querySelector(`.letter${props.index}`);
        let pos = node.getBoundingClientRect();
        setLeft(pos.x);
        setTop(pos.y);
        node.style.top='200px';
        node.style.left = 'auto';
        node.style.transitionDelay = '3.2s';
        node.style.transitionDuration='1.5s';
        node.style.zIndex = '-10'
        console.log(node.style)
        setTimeout(() => {
            setReady(true)
        }, 1000)
    }

    React.useEffect(() => handleLoad(), [])

    return (
        <React.Fragment>
            {props.letter.charCodeAt(0) === 32 || props.letter.charCodeAt(0) === 160 ?
                <div style={{
                    position: ready ? 'absolute' : 'ready',
                    top: ready ? top : 'auto',
                    left: ready ? left : 'auto',
                    color: ready ? 'white' : 'white'
                    }} className={`letter${props.index}`}>
                    &nbsp;
                        </div> :
                <div style={{color: 'white'}} className={`letter${props.index}`}>
                    {props.letter}
                </div>
            }

        </React.Fragment>
    )
}