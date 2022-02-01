import Link from 'next/link'
import { useState,useRef ,useEffect} from "react";
import styles from "../styles/Navbar.module.css";
import logo from '../public/logo/logo-blue.png'
import { FaSearch,FaMapMarkerAlt,FaRegEnvelope, FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn } from "react-icons/fa";
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';

export default function Navbar() {


    const [isOpen,setIsOpen] = useState(false);
    const [isActive,setActive] = useState(true);
    const [isSearch,setIsSearch] = useState(false);
    const textInput = useRef(null);

    const openMenu= (e)=>{
        setIsOpen(!isOpen);

        if(isActive){
            e.target.id = 'isActive'
            setActive(!isActive)
        }

    }

    const SearchHandler = (event)=>{
        setIsSearch(!isSearch)
        textInput.current.focus();
    }
    
    const resetHandler = (event)=>{
        setIsSearch(!isSearch)
    }

    useEffect(() => {
        if (!isSearch) return;
        function handleClick(event) {
          if (textInput.current && !textInput.current.contains(event.target)) {
            setIsSearch(!isSearch)
          }
        }
        window.addEventListener("mousedown", handleClick);
        return () => window.removeEventListener("mousedown", handleClick);
      }, [isSearch]);



    return <> 
            <div className="top-header">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <ul className="social-info text-center text-md-start">
                                    <li><a className={styles.socialIconItem} href="#"> <span className="s-icon"><FaMapMarkerAlt/></span>254 Lillian Blvd, Holbrook</a></li>
                                    <li><a className={styles.socialIconItem} href="#"> <span className="s-icon"><FaRegEnvelope/></span>info@santizex-site.com</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                            <ul className="social text-center text-md-end">
                                    <li><a className='social-item' href="#"> <FaFacebookF/> </a></li>
                                    <li><a className='social-item' href="#"> <FaTwitter/> </a></li>
                                    <li><a className='social-item' href="#"> <FaLinkedinIn/> </a></li>
                                    <li><a className='social-item' href="#"> <FaInstagram/>  </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
                                                     
        <div className="container">
        <header >
                <nav className={styles.navbar}>
                    <Link href='/'>
                     <a className={styles.navlogo}> <img src={logo.src} alt="" /> </a>
                    </Link>
                <ul className={isOpen === false ? 
                        styles.navmenu : styles.navmenu +' '+ styles.active}>
                    <li className={styles.navitem}>
                       <Link href='/'>
                         <a   className={
                             isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active   }
                                    onClick={openMenu}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/about'>
                          <a  id='' className={  isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>About</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/service'>
                         <a id='' className={  isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Service</a>
                        </Link>
                     
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/team'>
                         <a  id='' className={  isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Team </a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/contact'>
                         <a id='' className={  isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Blog </a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/portfolio'>
                         <a id='' className={  isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Portfolio </a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>

                    <div className="sample fourteen">
                    <input type="text" ref={textInput} name="search" placeholder="search"/>
                    <button type="submit"  onClick={SearchHandler} className="btn btn-search">
                    <FaSearch/>
                    </button>
                    <button type="reset"  onClick={resetHandler} form="form" className="btn-reset fa fa-times"></button>
                </div>
                 
                    </li>
                    <li className={styles.navitem}>
                    <Link href='/contact'>
                         <a id='' className={ isSearch ? "btn-brand isSearchClicked" : "btn-brand "}
                                    onClick={openMenu}>Contact </a>
                        </Link>
                    </li>
                    
                </ul>
                <button className={isOpen === false ? 
                                    styles.hamburger : styles.hamburger+' '+styles.active}
                                    onClick={openMenu}
                                    >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
                </nav>
            </header>
        </div>
            
  
        
     </>



}
