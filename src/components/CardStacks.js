import React from 'react';
import Card from './UI/Card'
import DraggableList from './UI/StackingCard';


const CardStacks = ({data}) => {
    return (
        <div>
            <DraggableList 
            items={data.map((data) => {
                return (
                    <Card
                    title={data.title}
                    topRightText={data.topRightText}
                    topRightNumber={data.topRightNumber}
                    dataTitle={data.dataTitle}
                    dataNumber={data.dataNumber}
                    icon={data.icon}
                    />
                )
            })}
            />
        </div>
    )
}

export default CardStacks