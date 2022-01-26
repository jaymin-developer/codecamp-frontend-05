import { css } from "@emotion/react"

export const globalStyles = css`
    *{
        margin: 0px;
        box-sizing: border-box;
        font-family: "myFont";
    }

    //        font-family: "myFont1", "myFont2", "myFont3" ...
    // font가 안 먹히면 1 -> 2 -> 3 순으로

    @font-face {
        font-family: "myFont";
        src: url("/fonts/HSGyeoulNoonkott2.0-Regular.ttf");
    }
`