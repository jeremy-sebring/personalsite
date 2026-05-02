import Commander from './Command';

interface NavBarProps {
  currentPath: string;
}

export default function NavBar({ currentPath }: NavBarProps) {
  const linkClass = (path: string) =>
    `text-white-100 ${currentPath === path ? '' : 'hover:text-gray-300'}`;

  return (
    <nav className="left-0 top-0 sticky flex justify-between">
      <ul className="basis 1/4 flex flex-wrap list-none ">
        <li className="mr-3">
          <a className={linkClass('/')} href="/">
            Home
          </a>
        </li>
        <li className="pr-3">|</li>
        <li className="mr-3">
          <a className={linkClass('/about')} href="/about">
            About
          </a>
        </li>
        <li className="pr-3">|</li>
        <li className="mr-3">
          <a className={linkClass('/work')} href="/work">
            Work
          </a>
        </li>
        <li className="pr-3">|</li>
        <li className="mr-3">
          <a
            className="text-white-100 line-through decoration-2 decoration-red-500"
            href="#"
          >
            Blog
          </a>
        </li>
      </ul>
      <div className="basis-1/4 pt-4">
        <Commander />
      </div>
    </nav>
  );
}
