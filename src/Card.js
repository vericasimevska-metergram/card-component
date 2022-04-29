import card from './Card.module.css';

export function Card({ image, title, desciprion, color }) {
    return (
        <section className={card.section} style={{ backgroundColor: color }}>
            <img src={image}></img>
            <h1 className={card.heading}>{title}</h1>
            <h1 className={card.desciption}>{desciprion}</h1>
            <button style={{ color: color }} className={card.button}>Learn More</button>
        </section>
    );
}

