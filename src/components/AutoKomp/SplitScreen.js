import styled from "styled-components";
const Container = styled.div`
	display: flex;
`;
// podstawowy układ 2 równych kolumn (50%-50%)
const Pane = styled.div`
	flex: 1;
`;
// alternatywny układ z 1 kolumną szerszą (np. 30%-60%)
const PaneTwo = styled.div`
	flex: 2;
`;


export const SplitScreen = (
    { left: Left, right: Right }
  ) => {
    return (
      <Container>
        <Pane>
          <Left/>
        </Pane>
        <Pane>  // lub alternatywnie PaneTwo
          <Right/>
        </Pane> // lub alternatywnie PaneTwo
      </Container>
    );
  }