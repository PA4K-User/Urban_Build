import Link from 'next/link'

import {
    RiFacebookFill,
    RiYoutubeFill,
    RiTwitterFill,
    RiInstagramFill,

} from "react-icons/ri"

const socials = [
    {
        icon: <RiFacebookFill/>,
        path: "https://www.facebook.com/"
    },
    {
        icon: <RiYoutubeFill/>,
        path: "https://www.youtube.com/"
    },
    {
        icon: <RiTwitterFill/>,
        path: "https://x.com/"
    },
    {
        icon: <RiInstagramFill/>,
        path: "https://www.instagram.com/"
    },
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
        {socials.map((item, index) => {
            return <Link href={item.path} key={index} className={`${iconStyles}`} target='blank'>{item.icon}</Link>
        })}
    </div>
  )
}

export default Socials