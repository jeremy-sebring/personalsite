'use client'
import { motion } from "framer-motion";

interface LandingTextProps {
    children: React.ReactNode[];
    className?: string;
    parentClassName?: string;
}


export default function LandingText(props: LandingTextProps) {

    return(
        <div className={props.parentClassName ? props.parentClassName : ""}>
        {props.children.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2 ,
              delay: i / 5,
            }}
            key={i}
            className={props.className ? props.className : ""}
          >
            {el}
          </motion.span>
        ))}
        </div>

    )
}