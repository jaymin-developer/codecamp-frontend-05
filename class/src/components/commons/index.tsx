import {ReactChild} from "react"
import LayoutHeader from "./header/index"
import LayoutBanner from "./banner/index"
import LayoutNavigation from "./navigation/index"
import LayoutFooter from "./footer/index"
import styled from "@emotion/styled";
import { useRouter } from "next/router"


const LayoutSidebar = styled.div`
    width: 400px;
    height: 1000px;
    background-color: blue;
`
export const BodyWrapper = styled.div`
    display: flex;
`

export const LayoutBody = styled.div``

const HIDDEN_HEADERS = [
    "/12-06-modal-address-refactoring",
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
                <LayoutSidebar>사이드바영역 Sidebar</LayoutSidebar>
                <LayoutBody>{props.children}</LayoutBody>
            </BodyWrapper>
            <LayoutFooter />
        </div>
        )

}