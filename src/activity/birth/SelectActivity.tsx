import { Card } from "@mui/material";
import { user } from "../../store"
import { css } from "@emotion/css";
import { H1 } from "../../shared/ui-kit/h1";
import { P } from "../../shared/ui-kit/p";
import { IMG, IMGS } from "../../shared/ui-kit/img";
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewers } from "../../shared/ui-kit/viewer";
import { useRef } from "react";
import { toPng } from "html-to-image";

export function SelectActivity() {

    const { name, path, message, point } = user();
    const cardRef = useRef<HTMLDivElement>(null);

    const birthCardDownload = () => {
        if (cardRef.current === null) {
            return;
        }

        toPng(cardRef.current)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.href = dataUrl;
                link.download = "birthdat_card.png";
                link.click();
            })
    }

    return (
        <>  
            <H1 align="center">
                생일 카드는 이렇게 작성해볼게요!
            </H1>

            <div ref={cardRef}>
                <Card
                    className={css`
                        width: 620px;
                        height: 690px;
                    `}>

                    <P fontSize="18px" paddingTop="20px" paddingLeft="16px">
                        생일을 진심을 축하합니다! {name}님 ✨🎉🎊
                    </P>

                    <IMGS>
                        <IMG>
                            {`https://happyk.vercel.app/${path}`}
                        </IMG>
                    </IMGS>

                    <P fontSize="18px" paddingTop="20px" paddingLeft="16px">
                        생일을 축하해주는 사람이 메시지를 작성했어요!!
                    </P>
                    
                    <div
                        className={css`
                            margin-top: 24px;
                            margin-left: 16px;
                        `}>
                        <Viewers value={message} />
                    </div>

                    <P fontSize="18px" paddingTop="32px" paddingLeft="16px">
                        #{point}
                    </P>
                </Card>
            </div>

            <button style={{ "width": "620px", "height": "60px", "marginTop": "24px", "justifyContent": "center", "alignItems": "center" }} onClick={birthCardDownload}>
                생일 카드 다운로드하기
            </button>
        </>
    )
}