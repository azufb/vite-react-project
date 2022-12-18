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
    & > p {
        margin: 0;
    }
`;

export {
    listArea,
    title,
    itemsArea,
    item
};