import React from 'react';
import { ACHIEVMENTS } from './TimelineData';
import TimelineItem from './TimelineItem';
import '../../style/css/timeline.css'
function Timeline(props) {
    
    return (
        <div className='timeline'>
            <div className='progress-line'></div>
            <div className='achievments'>
                {ACHIEVMENTS.map((a)=>(
                    <TimelineItem achievment={a}></TimelineItem>
                ))}
            </div>
        </div>
    );
}

export default Timeline;