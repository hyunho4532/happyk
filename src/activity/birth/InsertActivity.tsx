import { IMG } from "../../shared/ui-kit/img";
import { user } from "../../store"
import { P } from "../../shared/ui-kit/p";
import { Input } from "../../shared/ui-kit/input";
import { css } from "@emotion/react";
import { Editors } from "../../shared/ui-kit/editor";
import { Button } from "../../components/button";
import { birthdayMessages } from "../../constants";
import { BirthMessageItems } from "../../components/items/BirthMessageItems";

export function InsertActivity() {

    const { path } = user();

    return (
        <div
            className={css`
                width: 100%;
            `}>
            <IMG>
                {`../../../public/${path}`}
            </IMG>

            <P
                fontSize="20px"
                paddingTop="40px">
                생일자의 이름을 입력해주세요!
            </P>

            <Input width="390px" height="40px" isType="name" type="text">
                이름 입력해주세요! ex: 홍길동
            </Input>

            <P
                fontSize="20px"
                paddingTop="80px">
                생일 날짜를 선택해주세요!
            </P>

            <Input width="390px" height="40px" isType="date" type="date">
                이름 입력해주세요! ex: 홍길동
            </Input>

            <P
                fontSize="20px"
                paddingTop="80px">
                생일 축하 메시지를 남겨보세요!
            </P>

            <BirthMessageItems messages={birthdayMessages} />

            <Editors />

            <Button width="420px" height="50px" type="최종 등록 완료" margin="50px">
                진심으로 축하드리며.... 🎉🎉
            </Button>
            
        </div>
    )
}