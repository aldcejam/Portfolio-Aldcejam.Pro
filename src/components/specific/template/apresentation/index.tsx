import { PersonApresentation } from "src/components/specific/organisms/apresentation/personApresentation"
import styled from "./styled.module.scss" 
import { ImageApresentation } from "src/components/specific/organisms/apresentation/imageApresentation"

const Apresentation = () => {
    return (
        <div className={`${styled["styled-apresentation"]}`}>
            <PersonApresentation />
            <ImageApresentation/>
        </div>
    )
}

export { Apresentation }