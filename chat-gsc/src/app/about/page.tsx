"use client";
import Response from "@/components/Response"
import TextBox from "@/components/TextBox"
import Typewriter from "@/components/TypeWriter"
import { useState } from "react";
import Home from "../page";

const AboutMe = ({ }) => {
    const [questionFinished, setQuestionFinished] = useState<boolean>(false);
    const [questionPosted, setQuestionPosted] = useState<boolean>(false);
    const [buttonEffect, setButtonEffect] = useState<boolean>(false);

    const Q = "Tell me a bit about Griffin!"
    const A = ["Hey! Let me introduce you to Griffin. Born in Denver but raised in Canada, Griffin embodies the unique blend of a love for nature and a passion for technology. Growing up in New Brunswick, Griffin developed a deep appreciation for the intricate dance between the environment and tech, a philosophy that guides their approach as a Software Engineer.", "Griffin's academic path took them to Queen's University, where they delved into Engineering Physics. The university experience was a transformative one, as Griffin grappled with understanding the vast complexities of the universe and recognized the boundless potential technology held in shaping our world. This realization led Griffin to embrace the intricate world of software engineering, where their innate skills in problem-solving, precision, and innovative thinking truly shine.", "But Griffin's passion isn't confined to just coding. As we speak, they're penning these thoughts from a beach café in Lombok, Indonesia. The past three months have seen Griffin wandering the hidden treasures of Southeast Asia. This love for travel doesn't just serve as a break; it fuels Griffin's creative spirit, pushing them to think beyond conventional boundaries.", "And if you thought that was all, Griffin's energy also finds a vent in fitness, especially running. Drawing parallels between the discipline required to run a marathon and the tenacity needed in professional pursuits, Griffin proudly completed the Banff Marathon in 2022. It's not just a personal achievement but a testament to the unwavering commitment they bring to their role as a software engineer.", "In Griffin's toolkit, you'll find a combination of logical thinking, meticulous attention to detail, adaptability, resilience, and an insatiable hunger for learning. These aren't just traits; they're the foundation that drives Griffin to craft software that goes beyond function – to truly make a mark in our world.", "Peering into the future, Griffin's vision is clear: to helm the position of CTO at an avant-garde climate tech startup within the next decade. With a fervent passion for harnessing tech against the escalating challenge of climate change, Griffin is set on crafting sustainable tech solutions for a brighter, greener tomorrow."]
    return (
        <Home>
            <Response questionFinished={questionFinished} question={Q} questionPosted={questionPosted} setQuestionPosted={setQuestionPosted}>
                <p>
                    <Typewriter text={A[0]} typeDelay={5} startDelay={4000}/>
                    <br/><br/> 
                    <Typewriter text={A[1]} typeDelay={5} startDelay={7000} />
                    <br/><br/> 
                    <Typewriter text={A[2]} typeDelay={5} startDelay={11000} />
                    <br/><br/> 
                    <Typewriter text={A[3]} typeDelay={5} startDelay={15000} />
                    <br/><br/> 
                    <Typewriter text={A[4]} typeDelay={5} startDelay={19000}/>
                    <br/><br/> 
                    <Typewriter text={A[5]} typeDelay={5} startDelay={23000}/>
                </p>
            </Response>
            <div className='flex-grow'></div>
            <TextBox allowQuestions={false} buttonEffect={buttonEffect} setButtonEffect={setButtonEffect}>
                <Typewriter text={Q} typeDelay={20} startDelay={1000} setQuestionFinished={setQuestionFinished} setButtonEffect={setButtonEffect}/> 
            </TextBox>
        </Home>
    )
}

export default AboutMe