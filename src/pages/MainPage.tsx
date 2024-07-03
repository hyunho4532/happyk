import { css } from "@emotion/css";

export function MainPage() {
    return (
        <>
            <h1 className={css`
                padding-top: 32px;
                &:hover {
                    color: grey;
                }
            `}>사랑하는 사람에게 생일 카드를 작성해보세요! 🎈</h1>
        </>
    )
}