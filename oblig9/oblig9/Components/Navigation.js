// Navigation komponent fra kurset
import Link from 'next/link'


const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
    
        <li>
        <Link href="/" passHref>
           <a className="first">Home</a> 
        </Link>
        </li>

        <li>
        <Link href="/quiz" passHref>
           <a className="first">Show JSON</a> 
        </Link>
        </li>

        <li>
        <Link href="/quiz/create" passHref>
           <a className="first">Add to JSON</a> 
        </Link>
        </li>

      </ul>
    </nav>
  )
}

export default Navigation