import Image from "next/image"
import styled from "./styled.module.scss"

export const ImageApresentation = () => {
    return (
        <div className="w-full h-full">
            <div className="absolute bottom-0 w-[40%] max-w-[350px] xl:max-w-[380px]">
                <Image className={styled["image-shadow"]} width={"645"} height={"969"} style={{ objectFit: "contain" }} alt="foto de aldcejam" src={"/aldcejam.png"} />
            </div>
        </div>
    )
}