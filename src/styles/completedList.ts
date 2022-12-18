import { css } from '@emotion/react';

const listArea = css`
    width: 50%;
    border: 2px dashed #2F2F2F;
    background-color: #00ff3a40;
    margin: 0 1.5rem;
`;

const title = css`
    text-align: center;
    color: #2F2F2F;
`;

const itemsArea = css`
    padding: 1rem;
`;

const item = css`
    padding-bottom: 1rem;
    color: #2F2F2F;
    & > p {
        margin: 0;
    }
`;

const backToDoButton = css`
    width: 20%;
    padding: 0.25rem 1rem;
    margin-right: 0.5rem;
    border-radius: 12px;
`;

const deleteButton = css`
    width: 20%;
    padding: 0.25rem 1rem;
    border-radius: 12px;
    color: red;
`;

export {
    listArea,
    title,
    itemsArea,
    item,
    backToDoButton,
    deleteButton
};