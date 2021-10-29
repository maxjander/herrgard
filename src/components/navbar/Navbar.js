import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
const Navbar = () => {
	const size = useWindowSize();
	return <div>{size.width > 600 ? <Desktop /> : <Mobile />}</div>;
};

export default Navbar;
