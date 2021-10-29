import React from "react";
import styled from "styled-components";
import Navbar from "./navbar/Navbar";

const Header = () => {
	return (
		<Wrapper>
			<Navbar />
		</Wrapper>
	);
};

export default Header;

const Wrapper = styled.div``;
