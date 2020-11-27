import React from 'react';
import './detail-button.styles.css'

export const DetailButton = (props) => {
    const [active, setActive] = React.useState(false);
    const [purpose, setPurpose] = React.useState('');

    React.useEffect(() => {
        switch (props.purpose) {
            case 'delete':
                setPurpose('fa fa-trash');
                break;
            case 'edit':
                setPurpose('fa fa-edit');
                break;
            case 'add':
                setPurpose('fa fa-plus');
                break;
            default:
                setPurpose('')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <React.Fragment>
            <div className='detail-button'>
                <i
                    className={active ? `active ${purpose}` : `${purpose}`}
                    onMouseOver={() => setActive(true)}
                    onMouseOut={() => setActive(false)}
                    onClick={e => props.handleClick(e)}
                ></i>&nbsp;&nbsp;
            </div>
        </React.Fragment>
    )
}