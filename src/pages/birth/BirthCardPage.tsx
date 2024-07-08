import { css } from "@emotion/react";
import { IMG } from "../../shared/ui-kit/img";
import { user } from "../../store"
import { H1 } from "../../shared/ui-kit/h1";
import { P } from "../../shared/ui-kit/p";

export function BirthCardPage() {

    const { path } = user();

    console.log(path);

    const containerStyle = css`
        display: flex;

    `;

    return (
        <div className={containerStyle}>
            <IMG width="80px" height="60px" margin="0">
                {`../../../public/${path}`}
            </IMG>

            <P
                fontSize="20px"
                paddingTop="40px">
                생일자의 이름을 입력해주세요!
            </P>
        </div>
    )
}