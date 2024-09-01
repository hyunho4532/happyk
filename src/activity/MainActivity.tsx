import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Button, Buttons } from "../components/button";
import { CalendarCard, Cards, ThemeCard } from "../components/card";
import { attractivePoints, ThemeList } from "../constants";
import { H1 } from "../shared/ui-kit/h1";
import { P } from "../shared/ui-kit/p";
import { user } from "../store";
import { useMemo, useState } from "react";

export function MainActivity() {

    const { type, setUser } = user();
    const [ calendar, setCalnedar ] = useState<any[]>([]);

    const attractivePointChange = (e: any) => {
        setUser("point", e.target.value);
    }

    useMemo(() => {
        const birthDates = localStorage.getItem("birthDates");

        if (birthDates) {
            setCalnedar(JSON.parse(birthDates));
        }
    }, []);

    return (
        <div>
            <H1>사랑하는 사람에게 생일 카드를 작성해보세요! 🎈</H1>

            <P fontSize="18px" paddingTop="80px">
                생일 정보를 조회해봤어요 🤗
            </P>

            <Cards>
                { calendar.map((data: any, index: any) => (
                    <CalendarCard key={index}>
                        {data.title}
                        {data.date}
                    </CalendarCard>
                ))}
            </Cards>

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
                <Button width="140px" height="60px" type="생일 카드 작성 등록">아빠</Button>
                <Button width="140px" height="60px" type="생일 카드 작성 등록" margin="16px">엄마</Button>
                <Button width="140px" height="60px" type="생일 카드 작성 등록" margin="16px">누나 & 형</Button>
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
                width="476px"
                height="60px"
                margin="20px"
                hover="not"
                flex="flex"
                type="등록 완료"
                color="cornflowerblue">
                등록 완료! ✅
            </Button>

            <Button 
                width="476px"
                height="60px"
                margin="20px"
                hover="not"
                flex="flex"
                type="생일 날짜 확인하기"
                color="firebrick">
                생일 날짜 확인하기 📆
            </Button>
        </div>
    )
} 