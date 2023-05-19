import Link from "next/link"
import { MenuBurguer } from "../../organisms/header/menu_burguer"

export const Header = () => {
    const li = "flex items-center justify-center cursor-pointer font-medium text-black"
    return (
        <>
            <MenuBurguer />
            <nav className="fixed z-10 top-0 h-16 flex justify-end container-default ">
                <ul className="flex mr-10 gap-5">
                    <li className={li}>
                        <Link href="/">experiência</Link>
                    </li>
                    <li className={li}>
                        <Link href="/">educação</Link>
                    </li>
                    <li className={li}>
                        <Link href="/">contato</Link>
                    </li>
                    <li className={li}>
                        <Link href="/">projetos</Link>
                    </li>
                    <li className={li}>
                        <Link href="/">skills & soft skills</Link>
                    </li>
                    <li className={li}>
                        <Link href="/">topo</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}