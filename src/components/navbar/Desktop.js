import React from "react";
import styled from "styled-components";

const Desktop = () => {
	return (
		<Wrapper>
			<ul>
				<li>Start</li>
				<li>Café</li>
				<li>Menyförslag</li>
				<li>Konferans</li>
				<li>Julbord</li>
				<li>Bröllop</li>
				<li>Catering</li>
			</ul>
		</Wrapper>
	);
};

export default Desktop;

const Wrapper = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	ul {
		width: 100vw;
		display: flex;
		align-content: baseline;
		justify-content: space-around;
		list-style-type: none;
		margin: 0;
		padding: 0;
		padding: var(--lDist);
		align-self: center;
		max-width: 900px;
		li {
			display: block;
		}
	}
`;
