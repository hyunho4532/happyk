    import { css } from "@emotion/css";
    import React from "react";
    import { calendar, user } from "../../store";
    import { toastSuccess } from "../../shared/ui-kit/toast";
    import { useNavigate } from "react-router-dom";


    export function Buttons({children}: { children: React.ReactNode }) {   
        return (
            <div>{children}</div>
        )
    }

    export function Button({
        width, 
        height, 
        margin,
        hover = 'yes',
        flex,
        type,
        path,
        color,
        children
    }: { 
        width: string, 
        height: string,
        margin?: string,
        hover?: string,
        flex?: string,
        type: string,
        path?: string,
        color?: string,
        children: React.ReactNode 
    }) {

        const { setUser } = user();
        const { date, calendarNames } = calendar();
        const navigate = useNavigate();

        const familyOnChange = (children: React.ReactNode) => {
            if (children != null) {
                if (type === "생일 카드 작성 등록") {
                    setUser("type", children);
                    toastSuccess("등록이 완료되었어요!! 🤗");
                }

                else if (type === "테마 등록") {
                    setUser("path", path);
                    toastSuccess("테마 등록이 완료되었어요!! 🤗");
                }

                else if (type === "등록 완료") {
                    toastSuccess("이제 본격적으로 생일 카드를 작성해보세요!! 🤗");
                    return navigate("/birth_card/insert");
                }

                else if (type === "최종 등록 완료") {
                    return navigate("/birth_card/select");
                }

                else if (type === "생일 날짜 확인하기") {
                    return navigate("/birth_calendar/select");
                }

                else if (type === "날짜 등록") {
                    if (date) {
                        let currentKey = localStorage.getItem("currentKey");
                        if (currentKey === null) {
                            currentKey = "0";
                        }
                        const newKey = parseInt(currentKey) + 1;
    
                        const birthDateData = {
                            key: newKey,
                            title: calendarNames,
                            date: date
                        };
    
                        localStorage.setItem("currentKey", newKey.toString());
    
                        let birthDates = localStorage.getItem("birthDates");
                        if (birthDates === null) {
                            birthDates = "[]";
                        }
    
                        const birthDatesArray = JSON.parse(birthDates);
                        birthDatesArray.push(birthDateData);
                        localStorage.setItem("birthDates", JSON.stringify(birthDatesArray));
    
                        toastSuccess("생일 날짜가 등록되었어요!! 🎉");
                    } else {
                        toastSuccess("날짜를 선택해주세요.");
                    }
                }
            }
        }

        return (
            <button className={css`
                width: ${width};
                height: ${height};
                display: ${flex};
                margin-left: ${margin != null ? `${margin}` : ''};
                margin-top: ${margin != null ? `${margin}` : ''};
                margin-bottom: ${margin != null ? `${margin}` : ''};
                transition: transform 0.7s;
                justify-content: center;
                align-items: center;
                background-color: ${color};

                &:hover {
                    ${hover == 'yes' ? 'transform: scale(1.10)' : ''}
                }
            `}
            onClick={() => familyOnChange(children)}>{children}</button>
        )
    }