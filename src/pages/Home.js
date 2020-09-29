import React from 'react'
import Section from '../components/Section';
import cardImage from '../images/card.png';
import Products from './Products';

function Home() {
    return (
        <div className="home">
            <Section title ="Unlimited Transactions with zero fees" description="Get access to our exclusive diamond card that allows you to send unlimited transactions without getting charged any fees" buttonText="Get Started" image={cardImage} labelText="Exclusice Access" imageFirst={false} lightBg={true}></Section>

            <Section title ="Unlimited Transactions with zero fees" description="Get access to our exclusive diamond card that allows you to send unlimited transactions without getting charged any fees" buttonText="Get Started" image={cardImage} labelText="Exclusice Access" imageFirst={true} lightBg={false}></Section>

            <Products>

            </Products>
            <Section title ="Unlimited Transactions with zero fees" description="Get access to our exclusive diamond card that allows you to send unlimited transactions without getting charged any fees" buttonText="Get Started" image={cardImage} labelText="Exclusice Access" imageFirst={false} lightBg={false}></Section>




        </div>
    )
}

export default Home
