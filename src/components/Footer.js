import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<Wrapper>
			<p> Karlslunds Herrgård</p> <p>Diedens Allé 11. 703 45 Örebro.</p>
			<p> Tel: 019-270788</p>
			<p>jander@karlslundsherrgard.se</p>
		</Wrapper>
	);
};

export default Footer;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: var(--sDist);

	background-color: rgb(255, 255, 255, 0.7);
`;
