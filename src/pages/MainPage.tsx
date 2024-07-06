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
            <P>1 Way. 누구에게 생일 카드를 작성하실건가요? To. {type} ❤</P>
            <Buttons>
                <Button>아빠 🧔</Button>
                <Button>엄마 👸</Button>
                <Button>누나 & 형 🧑👧</Button>
            </Buttons>

            <P>2. Way. 선택한 분에게 어울리는 테마를 선택해주세요!</P>
            <Cards>
                {
                    ThemeList.map((children: string) => (
                        <ThemeCard>
                            {children}
                        </ThemeCard>
                    ))
                }
            </Cards>
        </>
    )
} 