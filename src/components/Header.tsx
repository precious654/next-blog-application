import Link from "next/link";
import { Poppins } from "@next/font/google";
import Button from "./Button";

const poppins = Poppins(
    {
    subsets: ['latin'],
    weight: ['400']
    }
)

function Header() {
    return (
        <main className={poppins.className}>
            <header>
                <Link href='/' className="link"><h2>Bloger</h2></Link>
                
                <ul>
                    <li><Link href='/' className="link">Overview</Link></li>
                    <li><Link href='/' className="link">Add Post</Link></li>
                </ul>

                <div>
                    <Link href='/signup'><Button text="Sign Up"/></Link>
                    <Link href='/login'><Button text="Log In"/></Link>
                </div>
            </header>
        </main>
    )
  }
  
  export default Header;