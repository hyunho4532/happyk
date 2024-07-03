import { Button, Buttons } from "../components/button";
import { H1 } from "../shared/ui-kit/h1";
import { P } from "../shared/ui-kit/p";

export function MainPage() {
    return (
        <>
            <H1>사랑하는 사람에게 생일 카드를 작성해보세요! 🎈</H1>
            <P>누구에게 생일 카드를 작성하실건가요? ❤</P>
        
            <Buttons>
                <Button>아빠 🧔</Button>
                <Button>엄마 👸</Button>
                <Button>누나 & 형 🧑👧</Button>
            </Buttons>
        </>
    )
} 