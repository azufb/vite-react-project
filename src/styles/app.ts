import { css } from '@emotion/react';

const contentsArea = css`
    height: calc(100vh - 3rem);
    padding: 1.5rem 2rem;
`;

const title = css`
    margin: 0;
    text-align: center;
    color: #2F2F2F;
`;

const tasksDisplayArea = css`
    position: absolute;
    width: calc(100% - 4rem);
    height: 70%;
    display: flex;
`;
//column-gap: 1.5rem;
export {
    contentsArea,
    title,
    tasksDisplayArea
};