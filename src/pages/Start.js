import React from "react";
import styled from "styled-components";
import image1 from "../gfx/huvudbyggnaden/helaHuvud.jpg";
import image2 from "../gfx/huvudbyggnaden/baksida.jpg";
import image3 from "../gfx/huvudbyggnaden/salongen.jpg";
const Start = () => {
	return (
		<Wrapper>
			<img src={image1} alt="" />
			<TextWrapper>
				<h1>Välkommen till Karlslunds Herrgård</h1>
				<p>
					Högt upp på rullstensåsen, väl inbäddad i djup grönska, ligger Karlslunds Herrgård.
					Herrgårdsbyggnaden drivs idag, efter tre släkters ägo av Familjen Jander. Den är belägen
					väster om Örebro, endast 10 minuters bilresa från centrum.
				</p>
				<p>
					Herrgården är från början av 1800-talet och byggd i empirisk stil. Den är ett populärt
					utflyktsmål för många örebroare. Här finner man en storslagen natur, rik på både flora och
					fauna. Ett naturens paradis med groddammar, åker och äng alldeles i utkanten av tätorten.
				</p>
				<p>
					Det som gör Karlslund unikt är att det gamla och genuina är så väl bevarat. En vandring
					runt herrgården är en kulturhistorisk upplevelse. Fynd från den yngre stenåldern visar att
					människor funnits vid Karlslund sedan lång tid tillbaka.
				</p>
				<p>
					Karlslund är ett stycke spännande historia, ett tidigare dagars teknikcentrum i miniatyr.
					Det var på Karlslund som landets första glödlampa tändes. Året var 1886, bara några år
					efter det att Edison uppfunnit glödlampan. Ett par decennier senare fick Karlslund som
					första gården i Sverige elektriskt ljus och var under några år den mest elektrifierade
					gården i landet.
				</p>
			</TextWrapper>
			<div>
				<img src={image2} alt="" />
				<img src={image3} alt="" />
			</div>
		</Wrapper>
	);
};

export default Start;

const TextWrapper = styled.div`
	max-width: 900px;
	display: flex;
	flex-direction: column;
	margin-top: var(--sDist);
`;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1200px;
	padding: 0 var(--xlDist) var(--xlDist) var(--xlDist);
	@media (max-width: 768px) {
		padding: 0 var(--xsDist) var(--xsDist) var(--xsDist);
	}
	align-items: center;
	img {
		width: 100%;
		height: auto;
		/* border-radius: 10px; */

		&:hover {
			/* transform: scale(1.009);
			transition: all 0.3s ease; */
		}
	}
	h1 {
		margin-top: var(--xsDist);
	}

	div {
		display: flex;
		justify-content: space-between;

		img {
			width: 49%;
			margin-top: var(--xlDist);
		}
	}
`;
