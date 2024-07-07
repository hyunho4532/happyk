import { Button, Buttons } from "../components/button";
import { Cards, ThemeCard } from "../components/card";
import { ThemeList } from "../constants";
import { H1 } from "../shared/ui-kit/h1";
import { P } from "../shared/ui-kit/p";
import { user } from "../store";

export function MainPage() {

    const { type } = user();

    return (
        <>
            <H1>사랑하는 사람에게 생일 카드를 작성해보세요! 🎈</H1>
            <P fontSize="18px" paddingTop="80px">
                1 Way. 누구에게 생일 카드를 작성하실건가요? To. {type} ❤
            </P>
            <Buttons>
                <Button width="180px" height="120px">아빠 🧔</Button>
                <Button width="180px" height="120px">엄마 👸</Button>
                <Button width="180px" height="120px">누나 & 형 🧑👧</Button>
            </Buttons>

            <P fontSize="18px" paddingTop="80px">
                2. Way. 선택한 분에게 어울리는 테마를 선택해주세요!
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
        </>
    )
} 