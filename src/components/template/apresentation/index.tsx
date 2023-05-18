"use client"
import { PersonApresentation } from "src/components/organisms/apresentation/personApresentation"
import styled from "./styled.module.scss" 

const Apresentation = () => {
    return (
        <div className={`${styled["styled-apresentation"]}`}>
            <PersonApresentation />
            <div>da</div>
        </div>
    )
}

export { Apresentation }