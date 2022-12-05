import React, { ReactNode } from 'react';

type Propstyle = {
    children: ReactNode;
    cardStyle?: string;
}

function Card(props: Propstyle) {
    return (
        <section className={`card ${props.cardStyle}`}>
            {props.children}
        </section>
    );
}

export default Card;