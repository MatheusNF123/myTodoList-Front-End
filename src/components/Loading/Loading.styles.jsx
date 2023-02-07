import styled from "styled-components";


export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`
export const LoadingText = styled.p`
  border: 3px solid #56a6db;
  border-top: 3px solid #ffffff;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  animation: spin 0.8s linear infinite;
  margin: 0
  
`



