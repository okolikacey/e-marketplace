import React from 'react';

type Propstyle = {
    cardStyle: any;
}

function Card(props) {
    return (
        <section className='card'>
            {props.children}
        </section>
    );
}

export default Card;