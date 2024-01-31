import Link from "next/link";

export default function  Home(){
    return (
        <main>
            <h1> # Jeremy Sebring</h1>
            <p><i>*Software Engineering Manager*</i> | <i>*Outdoor Enthusiast*</i> </p>
            
            <br></br>

            <ul>
                <li>
                    <Link href='about/'>- About</Link>
                </li>
                <li>
                    <Link href='work/'>- Work</Link>
                </li>
                <li>
                    <Link href='blog/'>- Blog</Link>
                </li>
            </ul>
        </main>
    );
}