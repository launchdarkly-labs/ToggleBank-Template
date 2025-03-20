import React, {useContext} from "react";
import LoginContext from "@/utils/contexts/login";

import Link from "next/link";

const NavLinkButton = ({
	text,
	index,
	navLinkColor,
	href,
}: {
	text: string;
	index: number;
	href: string;
	navLinkColor: string;
}) => {
const {isLoggedIn} = useContext(LoginContext);

	return (
		<Link
			className={`cursor-pointer hidden sm:block bg-transparent pb-[3rem] items-start text-base font-sohnelight font-medium transition-colors bg-no-repeat bg-bottom bg-[length:100%_3px] 
      ${
				index === 0
					? `text-navlink hover:text-navbarlightgrey hover:bg-${navLinkColor} bg-${navLinkColor} outline-none`
					: `text-navlink  hover:text-navbarlightgrey hover:bg-${navLinkColor}`
			}`}
			title="Go to dashboard"
			href={isLoggedIn ? href : "/"}
		>
			{text}
		</Link>
	);
};

export default NavLinkButton;
