import Image from "next/image";
import Link from "next/link";
import logo from "../data/Logo .png";

export default function Header(){
    return(
        <div className="header">
            <div className="logo">
                <Image 
                src={logo} 
                alt="Logo" 
                width={50}
                height={50}
                />
            </div>
            <div>
                <ul className="headerButton">
                    <Link href="/">
                    <li>HOME</li>
                    </Link>
                    <Link href="#about">
                    <li>ABOUT</li>
                    </Link>
                    <Link href="#portfolio">
                    <li>PORFOLIO</li>
                    </Link>
                    <Link href="#contact">
                    <li>CONTACT US</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}