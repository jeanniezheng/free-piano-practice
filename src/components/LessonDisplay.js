import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMusic, faFileAudio, faGear } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import '../stylesheet/lessons.css';

const LessonDisplay = () => {
    const navigate = useNavigate();

    const buttons = [
        { title: 'Setup', icon: faGear, route: '/setup' },
        { title: 'Lesson 1', icon: faPlay, route: '/lesson1' },
        { title: 'Lesson 2', icon: faMusic, route: '/lesson2' },
        { title: 'Lesson 3', icon: faFileAudio, route: '/lesson3' },
        { title: 'Sheet Music', icon: null, route: '/sheetmusic' },
    ];

    return (
        <section className='center'>
            {buttons.map((button) => (
                <div key={button.route} className='button-div'>
                    <button className='button' onClick={() => navigate(button.route)}>
                        {button.icon && <FontAwesomeIcon className='icon' icon={button.icon} size='lg' />} {button.title}
                    </button>
                </div>
            ))}
        </section>
    );
};

export default LessonDisplay;
