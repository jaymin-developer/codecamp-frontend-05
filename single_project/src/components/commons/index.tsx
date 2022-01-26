import {ReactChild} from "react"
import LayoutHeader from "../commons/header/index"
import LayoutBanner from "../commons/banner/index"
import LayoutNavigation from "../commons/navigation/index"
import LayoutFooter from "../commons/footer/index"
import styled from "@emotion/styled";
import { useRouter } from "next/router"


export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const LayoutBody = styled.div``

const HIDDEN_HEADERS = [
    // "/12-06-modal-address-refactoring",
    // ...
    // ...
    // ...
    // ...
    // ...
    // ...
]

interface IProps{
    children: ReactChild;
}

export default function Layout(props : IProps){
    const router = useRouter()
    console.log(router)

    const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath)
    // Router를 찍었을 때 asPath는 현재 페이지
    // 적절한 로직 필요. 포함여부

    return(
        <div>
            {!isHiddenHeader && <LayoutHeader />}
            <LayoutBanner />
            <LayoutNavigation />
            <BodyWrapper>
                <LayoutBody>{props.children}</LayoutBody>
            </BodyWrapper>
            <LayoutFooter />
        </div>
        )

}