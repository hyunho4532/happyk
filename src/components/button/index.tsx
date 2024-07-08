import { css } from "@emotion/css";
import React from "react";
import { user } from "../../store";
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

    const { setPath, setType } = user();
    const navigate = useNavigate();

    const familyOnChange = (children: React.ReactNode) => {
        if (children != null) {
            if (type === "생일 카드 작성 등록") {
                setType(children);
                toastSuccess("등록이 완료되었어요!! 🤗");
            }

            else if (type === "테마 등록") {
                setPath(path);
                toastSuccess("테마 등록이 완료되었어요!! 🤗");
            }

            else if (type === "등록 완료") {
                toastSuccess("이제 본격적으로 생일 카드를 작성해보세요!! 🤗");
                return navigate("/birth_card/insert");
            }
        }
    }

    return (
        <button className={css`
            width: ${width};
            height: ${height};
            display: ${flex};
            margin-left: 8px;
            margin: ${margin != null ? '0 auto': ''};
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