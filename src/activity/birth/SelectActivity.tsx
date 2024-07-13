import { Card } from "@mui/material";
import { user } from "../../store"
import { css } from "@emotion/css";
import { H1 } from "../../shared/ui-kit/h1";
import { P } from "../../shared/ui-kit/p";
import { IMG, IMGS } from "../../shared/ui-kit/img";

export function SelectActivity() {

    const { name, path, message, date, type } = user();

    return (
        <>  
            <H1 align="center">
                생일 카드는 이렇게 작성해볼게요!
            </H1>
            <Card
                className={css`
                    width: 620px;
                    height: 620px;
                `}>

                <P fontSize="18ps" paddingTop="20px" paddingLeft="16px">
                    생일을 진심을 축하합니다! {name}님 ✨🎉🎊
                </P>

                <IMGS>
                    <IMG>
                        {`../../../public/${path}`}
                    </IMG>
                </IMGS>
            </Card>
        </>
    )
}