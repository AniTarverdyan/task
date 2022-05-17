import styled from 'styled-components';

const Container = styled.body` 
    display: flex;
    flex-direction: row;
    text-align: center;
    background: #fff4ee;

    &>div:first-child {
        flex: 0;
        width: 1543px;
    }

    &>div:last-child {
        display: flex;
        flex-direction: column;
        flex: 1;

        &*:first-child {
            flex: 0;
        }
        &*:last-child {
            flex: 1;
        }
    }
`
export default Container;