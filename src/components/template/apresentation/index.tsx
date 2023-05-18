"use client"
import { PersonApresentation } from "src/components/organisms/apresentation/personApresentation"
import { StyledApresentation } from "./styled"

const Apresentation = () => {
    return (
        <StyledApresentation>
            <PersonApresentation />
            <div></div>
        </StyledApresentation>
    )
}

export { Apresentation }