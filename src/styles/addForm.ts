import { css } from "@emotion/react";

const formContent = css`
    display: flex;
    justify-content: center;
    margin: 1.5rem 0;
    & > input {
        width: 25%;
    }
`;

const registerButton = css`
    width: 10%;
    margin-left: 0.5rem;
    padding: 0.5rem;
    border-radius: 15px;
    color: #FFFFFF;
    background-color: #2F2F2F;
`;

export {
    formContent,
    registerButton
};