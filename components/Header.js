
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Header = () => {

    const { data: session } = useSession();

    return (
        <header className={styles.header}>
            <div>
                <div className={styles.brand}>
                    <a href="#">BRAND</a>
                </div>
                <didv className={styles.menubar}>
                    <ul className={styles.menu}>
                        <li className={styles['menu-item']}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={styles['menu-item']}>
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                        {
                            !session ? (
                                <>
                                    <li className={styles['menu-item']}>
                                        <Link href="/signup">Signup</Link>
                                    </li>
                                    <li className={styles['menu-item']}>
                                        <Link href="/login">Login</Link>
                                    </li>
                                </>
                            ) : (
                                    <li className={styles['menu-item']}>
                                        <Link href="/">
                                            <a onClick={(e) => {e.preventDefault();signOut()}}>Logout</a>
                                        </Link>
                                    </li>
                            )
                        }
                    </ul>
                </didv>
            </div>
        </header>
    )
}

export default Header