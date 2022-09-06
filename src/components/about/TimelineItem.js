import React from 'react';

function TimelineItem(props) {
    return (
        <div className='timeline-item'>
            <div className='achievment-data'>
                <h4>{props.achievment.date}</h4>
                <p>{props.achievment.description}</p>
            </div>
            <div className='achievment-image'>
                <img src={props.achievment.image} alt={props.achievment.description}/>
            </div>
        </div>
    );
}

export default TimelineItem;