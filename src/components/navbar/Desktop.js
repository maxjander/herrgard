import React from "react";
import styled from "styled-components";

const Desktop = () => {
	return (
		<Wrapper>
			<ul>
				<li>
					<h3>Start</h3>
				</li>
				<li>
					<h3>Café</h3>
				</li>
				<li>
					<h3>Menyförslag</h3>
				</li>
				<li>
					<h3>Konferans</h3>
				</li>
				<li>
					<h3>Julbord</h3>
				</li>
				<li>
					<h3>Bröllop</h3>
				</li>
				<li>
					<h3>Catering</h3>
				</li>
			</ul>
		</Wrapper>
	);
};

export default Desktop;

const Wrapper = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;

	font-family: "Playfair Display", serif;
	font-weight: 700;
	font-style: italic;
	background-color: rgb(255, 255, 255, 0.7);
	border-bottom: 2px solid lightgrey;
	margin-bottom: var(--xlDist);

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
			&:hover {
				transform: scale(1.3);
				cursor: pointer;
				transition: all 0.3s ease;
			}
		}
	}
`;
