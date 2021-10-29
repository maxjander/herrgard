import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	return (
		<Wrapper>
			<Header />
			test
			<Footer />
		</Wrapper>
	);
};

export default App;

const Wrapper = styled.div`
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 2fr 20fr 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	justify-items: stretch;
	align-items: stretch;
	background-color: var(--accColor);
`;
