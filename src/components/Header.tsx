import Link from "next/link";
import styles from '@/styles/Home.module.css'
import { Poppins } from "@next/font/google";
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat(
  { 
    subsets: ['latin'],
    weight: ['400'] 
  }
)

const poppins = Poppins(
    {
    subsets: ['latin'],
    weight: ['400']
    }
)



function Header() {
    return (
        <main className={poppins.className}>
            <header className={styles.header}>
                <h2>Bloger</h2>

                <ul>
                    <li><Link href='/' className={styles.link}>Overview</Link></li>
                    <li><Link href='/' className={styles.link}>Add Post</Link></li>
                </ul>

                <div>
                    <button className={styles.button}>Sign Up</button>
                    <button className={styles.button}>Log In</button>
                </div>
            </header>
        </main>
    )
  }
  
  export default Header;