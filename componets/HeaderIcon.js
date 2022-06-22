import React from 'react';

const HeaderIcon = ({ Icon, title }) => {
    return (
        <div className='mx-4 flex flex-col lg:mx-6 cursor-pointer hover:text-white active:text-red-400'>
            <Icon  className="h-8"/>
            <p className='my-2'>{title}</p>
        </div>
    );
}

export default HeaderIcon;
