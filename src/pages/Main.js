import React from "react";
import styled from "styled-components";
import Start from "./Start";

const Main = () => {
	return (
		<Wrapper>
			<Start />
		</Wrapper>
	);
};

export default Main;

const Wrapper = styled.main`
	display: flex;
	justify-content: center;
	padding: var(--xlDist);
`;
