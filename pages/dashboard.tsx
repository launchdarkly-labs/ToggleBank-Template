import { useContext } from "react";
import LoginContext from "@/utils/contexts/login";
import { useRouter } from "next/router";
import Chatbot from "@/components/chatbot/ChatBot";
import BankUserDashboard from "@/components/ui/bankcomponents/bankUserDashboard";

const dashboard = () => {
	const { isLoggedIn } = useContext(LoginContext);
	const router = useRouter();

	if (!isLoggedIn) {
		router.push("/");
	}
	return (
		<>
			{isLoggedIn && <main
				className={` w-full min-h-screen  bg-cover bg-center bg-no-repeat pb-10`}
			>
				<BankUserDashboard />
				<Chatbot />
			</main>}
		</>
	);
};

export default dashboard;
