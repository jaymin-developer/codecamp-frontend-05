import styled from '@emotion/styled'
import SimpleSlider from "../slider/index"

const Wrapper = styled.div`
    height: 400px;
    background-color: skyblue;
`

export default function LayoutBanner() {

    return(
        <Wrapper>
            <SimpleSlider/>
        </Wrapper>
    )

}