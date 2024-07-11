import { IMG } from "../../shared/ui-kit/img";
import { user } from "../../store"
import { P } from "../../shared/ui-kit/p";
import { Input } from "../../shared/ui-kit/input";

export function BirthCardPage() {

    const { path } = user();

    console.log(path);

    return (
        <div>
            <IMG width="80px" height="60px" margin="0">
                {`../../../public/${path}`}
            </IMG>

            <P
                fontSize="20px"
                paddingTop="40px">
                생일자의 이름을 입력해주세요!
            </P>

            <Input width="390px" height="40px" type="text">
                이름 입력해주세요! ex: 홍길동
            </Input>

            <P
                fontSize="20px"
                paddingTop="80px">
                생일 날짜를 선택해주세요!
            </P>

            <Input width="390px" height="40px" type="date">
                이름 입력해주세요! ex: 홍길동
            </Input>
        </div>
    )
}