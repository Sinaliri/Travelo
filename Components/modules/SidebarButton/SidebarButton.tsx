import Image from 'next/image'
import Link from 'next/link'
import styles from './SidebarButton.module.scss'
import Dashboard from "../../../assets/icons/DashBoard.svg"


interface Isidbarbutton{
icon:string,
text:string
}
const SidebarButton = ({icon,text}:Isidbarbutton) => {

  return (
    <Link className={`${styles.buttonLink} w-7 mb-2`}href={`../profile/${text}`}>
        <div className={`${styles.button} flex flex-nowrap justify-contnet-center align-items-center `}>
            <Image src={icon} alt={text}/>
            <h4>{text}</h4>
        </div>
    </Link>
  )
}

export default SidebarButton