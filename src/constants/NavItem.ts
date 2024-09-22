import {MdOutlinePerson} from 'react-icons/md'
import {GoGear} from 'react-icons/go'
import {TbCertificate} from 'react-icons/tb'
import {GrProjects, GrCertificate} from 'react-icons/gr'
import {TiContacts} from 'react-icons/ti'
import {GiAchievement} from 'react-icons/gi'
import {BsPersonBadge} from 'react-icons/bs'
import { IconType } from 'react-icons'

interface NavItem {
    title: string,
    icon: IconType | React.FC<React.SVGProps<SVGSVGElement>>,
    url: string,
}
export const navItems : Array<NavItem> = [
    {
        title: "About Me",
        icon: MdOutlinePerson,
        url: "/about-me",
    },
    {
        title: "Skills",
        icon: GoGear ,
        url: "/skills",
    },
    {
        title: "Certificates",
        icon: TbCertificate ,
        url: "/certificates",
    },
    {
        title: "Projects",
        icon: GrProjects ,
        url: "/projects",
    },
    {
        title: "Contact",
        icon: TiContacts ,
        url: "/contact",
    },
    // {
    //     title: "Resume",
    //     icon: <GoGear />,
    //     url: "/resume",
    // },
    {
        title: "Experience",
        icon: GrCertificate  ,
        url: "/experience",
    },
    {
        title: "Achievements",
        icon: GiAchievement ,
        url: "/achievements",
    },
    // {
    //     title: "Education",
    //     icon: <GoGear />,
    //     url: "/education",
    // },
    {
        title: "Socials",
        icon: BsPersonBadge ,
        url: "/socials",
    }
]