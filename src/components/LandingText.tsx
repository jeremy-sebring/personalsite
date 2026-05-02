import { motion } from 'framer-motion';

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'p';

interface LandingLine {
  tag?: Tag;
  html: string;
  className?: string;
}

interface LandingTextProps {
  lines: LandingLine[];
  parentClassName?: string;
}

export default function LandingText({ lines, parentClassName }: LandingTextProps) {
  return (
    <div className={parentClassName ?? ''}>
      {lines.map((line, i) => {
        const Tag = (line.tag ?? 'h2') as Tag;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: i / 5 }}
          >
            <Tag
              className={line.className}
              dangerouslySetInnerHTML={{ __html: line.html }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
