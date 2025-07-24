import styled from "styled-components";

export const Container = styled.div`
    max-width: 1000px;
    margin: 40px auto;
    padding: 2rem;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

    @media (max-width: 600px) {
        max-width: 100%;
        width: 100%;
    }

`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`;

export const Title = styled.h1`
    font-size: 1.8rem;
    color: #232f3e;
`;

export const LogoutButton = styled.button`
    background-color: #d9534f;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background-color: #c9302c;
    }
`;

export const Form = styled.form`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
    margin-bottom: 1.5rem;
`;

export const Input = styled.input`
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 14px;
    width: 100%;

    &:focus {
        border-color: #1f2937;
        outline: none;
    }
`;
export const ButtonGroup = styled.div`
    grid-column: span 2;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

export const ActionButton = styled.button`
    background-color: #1f2937;
    color: white;
    font-weight: bold;
    padding: 10px 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background-color: #111827;
    }
`;

export const PrimaryButton = styled.button`
    background-color: #f3a847;
    color: #111;
    font-weight: bold;
    padding: 10px 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #d97706;
    }
`;

export const TableWrapper = styled.div`
    overflow-x: auto;
    width: 100%;
    -webkit-overflow-scrolling: touch;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    margin-top: 30px;
    border-radius: 8px;
    overflow: hidden;

    thead {
        background-color: #1f2937;
        color: white;
    }

    td, th {
        font-size: 14px;
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ddd;
        white-space: nowrap;
    }

    tbody tr:nth-child(even) {
        background: #f9fafb;
    }

`;

export const EditButton = styled.button`
    width: 80px;
    background-color: #ccc;
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    margin-right: 0.5rem;
    cursor: pointer;
    font-size: 14px;

    &:hover {
        background-color: #dc2626;
    }
`;

export const DeleteButton = styled.button`
    width: 80px;
    background-color: #ef4444;
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    color: white;
    cursor: pointer;  
    font-size: 14px;
`;