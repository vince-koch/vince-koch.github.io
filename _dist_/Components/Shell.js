import styled from "../../web_modules/styled-components.js";
export const ShellPage = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
export const ShellBody = styled.div`
    flex: 1; /* fill vertical space */
    display: flex;
    flex-direction: row;
`;
export const ShellHeader = styled.div`
    background-color: var(--header-background-color);
    box-shadow: 0 0 8px 0 black;
    z-index: 100 !important;
`;
export const ShellSidebar = styled.aside`
    background-color: var(--sidebar-background-color);
    padding: 10px;
    box-shadow: 0 0 8px 0 black;
    z-index: 90;
`;
export const ShellContent = styled.article`
    background-color: var(--default-background-color);
    color: var(--default-text-color);
    flex: 1;
    padding: 20px 40px 0 40px;   
`;
export const ShellTitle = styled.h3`
    margin-bottom: 20px;
`;
