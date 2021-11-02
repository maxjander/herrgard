import styled, { keyframes } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { fadeIn } from "react-animations";
import Start from "./pages/Start";
import bg from "./gfx/bg/helaHuvud.jpg";
const App = () => {
	return (
		<Wrapper>
			<Header />
			<MainWrapper>
				<Start />
			</MainWrapper>
			<Footer />
		</Wrapper>
	);
};

export default App;

const fadeInAnimation = keyframes`${fadeIn}`;

const Wrapper = styled.div`
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 2fr 20fr 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	animation: 2s ${fadeInAnimation};
	/* color: var(--mainColor); */
`;

const MainWrapper = styled.main`
	display: flex;
	justify-content: center;
	padding: 0 var(--xlDist) var(--xlDist) var(--xlDist);
	/* @media (max-width: 768px) {
		padding: 0 var(--sDist) var(--sDist) var(--sDist);
	} */
	@media (max-width: 768px) {
		padding: 0 var(--xsDist) var(--xsDist) var(--xsDist);
	}
`;
