import React from 'react';
import {CardProps} from '@/interfaces/index';

const Card: React.FC<CardProps> = ({title, content}) => {
    return (
        <div className="bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{content}</p>
        </div>
    );
};
export default Card;