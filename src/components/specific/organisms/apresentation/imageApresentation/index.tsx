import Image from "next/image"

export const ImageApresentation = () => {
    return (
        <div className="w-full h-full">
            <div className="absolute bottom-0 w-[40%] max-w-[350px]">
                <Image width={"645"} height={"969"} style={{ objectFit: "contain" }} alt="foto de aldcejam" src={"/aldcejam.png"} />
            </div>

        </div>
    )
}