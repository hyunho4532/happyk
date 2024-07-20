import { Card } from "@mui/material";
import { css } from "@emotion/css";
import { P } from "../../shared/ui-kit/p";
import React, { useEffect, useState } from "react";
import axios from "axios";

export function BirthMessageItems({children}: {children: React.ReactNode}) {
    return (
        <div
            className={css`
                display: flex;
            `}>
            {children}
        </div>
    )
}

export function BirthMessageItem() {

    const [messages, setMessages] = useState([]);   

    useEffect(() => {
        axios.get('http://localhost:4000/api/birthdayMessages')
          .then(response => {
            setMessages(response.data);
            console.log(response.data);
          })
          .catch(error => {
            console.error('Error fetching data: ', error);
          });
      }, []);

    return (
        <>
            { messages.map((birth: any, index: number) => (
                <Card
                    className={css`
                        width: 80px;
                        margin-left: 8px;
                        cursor: pointer;
                    `}>
                    <P key={index} fontSize="18sp" paddingTop="8px" paddingLeft="8px" args={birth.message}>
                        {birth.title}
                    </P>
                </Card>
            ))}
        </>
    )
}