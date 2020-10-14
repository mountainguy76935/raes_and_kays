import React from 'react';
import './navigation.styles.css';
import { Link } from 'react-router-dom';
import { Hamburger } from '../hamburger/hamburger.component'

export const Navigation = (props) => {
    const node = React.useRef()

    const [toggled, setToggled] = React.useState(false)

    const handleClickOff = (e) => {
        e.preventDefault();
        if (!node.current.contains(e.target)) {
            setToggled(false)
        } else {
            return;
        }
    }

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOff)
        return () => document.removeEventListener('mousedown', handleClickOff)
    })

    React.useEffect(() => {
        document.addEventListener('touchstart', handleClickOff)
        return () => document.removeEventListener('touchstart', handleClickOff)
    })

    const pages = [
        {
            title: 'HOME',
            path: '/'
        },
        {
            title: 'MENU',
            path: '/menu'
        }
    ]

    return (
        <div ref={node}>
            <Hamburger
                handleClick={setToggled}
                toggled={toggled}
            />
            <div className={toggled ? 'row' : 'row active'}>
                {pages.map((page, key) => {
                    return (
                        <span key={key}>
                            <Link
                                className={
                                    toggled ?
                                        'linkClass' :
                                        'linkClass active'
                                }
                                to={page.path}
                                onClick={
                                    !toggled ?
                                        (event) => event.preventDefault() :
                                        null
                                }>
                                {page.title}
                            </Link>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}