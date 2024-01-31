import Link from "next/link";


export default function BlogLayout({children}: {children: React.ReactNode}){
    return (
        <section>
            
            {children}
        </section>
    )
}