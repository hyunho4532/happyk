import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Button, Buttons } from "../components/button";
import { Cards, ThemeCard } from "../components/card";
import { attractivePoints, ThemeList } from "../constants";
import { H1 } from "../shared/ui-kit/h1";
import { P } from "../shared/ui-kit/p";
import { user } from "../store";

export function MainActivity() {

    const { type, setPoint } = user();

    const attractivePointChange = (e: any) => {
        setPoint(e.target.value);
    }

    return (
        <>
            <H1>사랑하는 사람에게 생일 카드를 작성해보세요! 🎈</H1>
            <P fontSize="18px" paddingTop="80px">
                1 Way. 생일자의 매력 포인트는?
            </P>

            <FormGroup>
                { attractivePoints.map((attractive: string, index: number) => (
                    <FormControlLabel key={index} control={
                        <Checkbox onChange={attractivePointChange} value={attractive} />
                    } label={attractive} />
                ))}
            </FormGroup>
            
            <P fontSize="18px" paddingTop="80px">
                2 Way. 누구에게 생일 카드를 작성하실건가요? To. {type} ❤
            </P>

            <Buttons>
                <Button width="180px" height="120px" type="생일 카드 작성 등록">아빠 🧔</Button>
                <Button width="180px" height="120px" type="생일 카드 작성 등록">엄마 👸</Button>
                <Button width="180px" height="120px" type="생일 카드 작성 등록">누나 & 형 🧑👧</Button>
            </Buttons>

            <P fontSize="18px" paddingTop="80px">
                3. Way. 선택한 분에게 어울리는 테마를 선택해주세요!
            </P>

            <P fontSize="14px" paddingTop="16px">
                테마 클릭 시, 자세히 보실 수 있습니다!
            </P>
            
            <Cards>
                { ThemeList.map((children: string, index: number) => (
                    <ThemeCard key={index}>
                        {children}
                    </ThemeCard>
                ))}
            </Cards>

            <Button 
                width="460px"
                height="60px"
                margin="40px"
                hover="not"
                flex="flex"
                type="등록 완료"
                color="cornflowerblue">
                등록 완료!
            </Button>
        </>
    )
} 