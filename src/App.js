import logo from './logo.svg';
import './App.css';
import sedansImg from './images/icon-sedans.svg'
import suvsImg from './images/icon-suvs.svg'
import luxuryImg from './images/icon-luxury.svg'
import card from './Card.module.css';


function App() {
  return (
    <div class="container" className={card.container}>
      <Card
        image={sedansImg}
        title={'SEDANS'}
        desciprion={'Choose a sedan for its affortability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'}
        color={'hsl(31, 77%, 52%)'}
      />
      <Card
        image={suvsImg}
        title={'SUVS'}
        desciprion={'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road advantures.'}
        color={'hsl(184, 100%, 22%)'}
      />
      <Card
        image={luxuryImg}
        title={'LUXURY'}
        desciprion={'Cruises in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'}
        color={'hsl(179, 100%, 13%)'}
      />
    </div>
  );
}

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

export default App;
