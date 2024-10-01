import styled from 'styled-components';

export const Follower = styled.div`
  position: fixed;
  width: 600px;
  height: 600px;
  background-color: rgba(255,255,255,0.05);
  border-radius: 50%;
  pointer-events: none;
  transition: opacity 0.5s ease;
  opacity: ${({ opacity }) => opacity};
  filter: blur(50px);
  z-index: 1;
`;