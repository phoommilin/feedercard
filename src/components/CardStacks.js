import React from 'react';
import Card from './UI/Card'

const DisplayCards = ({data}) => {
    return (
        this.props.data.map((data) => {
            return (
                <Card
                    title={data.title}
                    topRightText={data.topRightText}
                    topRightNumber={data.topRightNumber}
                    dataTitle={data.dataTitle}
                    dataNumber={data.dataNumber}
                />
            )
        })
    )
}


const CardStacks = ({data}) => {
    return (
        <div>
            {
                data.map((data) => {
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
                })
            }
        </div>
    )
}

export default CardStacks