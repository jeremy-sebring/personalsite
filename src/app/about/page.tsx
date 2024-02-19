/* eslint-disable react/no-unescaped-entities */

import Link from "next/link"


export default function AboutPage() {

    return (
        <section className="container">
            <h2># Hello! I'm Jeremy Sebring.</h2>

            <h3>## A little about me:</h3>

            <p>I am an experienced software engineering, DevOps, and infrastructure professional. Most elements of a modern tech stack I have worked with in multiple contexts and capacities.
                Since I have such a varied background you may ask what is that I'm passionate about? Well I've only succeeded thus far in my career by having great leaders and mentors.
                In that vein my goal is to be great leader to engineers, help them grow, and see them succeed. While I wil always be a nerd at heart who loves to live in the weeds, the best
                moments of my professional career have been watching engineers grow into themselves as professionals and people.</p>
            <br />
            <p>When I'm not working on a tech project, work, or gaming I'm outside. My main passion revolves around riding bikes, road bikes or mountain bikes. That said I also am an avid rock
                climber and hiker. One of the goals of this site is to start blog/journal to chronicle my outdoor adventures.</p>


            <h3>## A little about this site:</h3>
            <ul>
                <li>
                    This site is meant to accomplish couple things:
                    <ol>
                        <li>To showcase my work</li>
                        <li>To showcase my skills</li>
                        <li>To showcase my personality</li>
                        <li>To have a place to write about my outdoor activities</li>

                    </ol>
                </li>
                <li>Sorry if some elements aren't quite working right, gotta crack a few eggs to make an omelette right?</li>
            </ul>


            <p>If you'd like to connect hit me up anywhere below:</p>
            <ul>
                <li><Link href="https://www.linkedin.com/in/jeremy-sebring/">LinkedIn</Link></li>
                <li><Link href="https://wellfound.com/u/jeremy-sebring)">Wellfound</Link></li>
                <li><Link href="https://github.com/jeremy-sebring">GitHub</Link></li>
                <li><Link href="">email coming soon just need way to deal with bots that isn't just a link to my email</Link></li>
            </ul>
        </section>
    )
}