import BankHomePage from "@/components/ui/bankcomponents/bankHomePage";
import Chatbot from "@/components/chatbot/ChatBot";

export default function Bank() {
	return (
		<main
			className={`w-full min-h-screen  bg-cover bg-center bg-no-repeat pb-10`}
		>
			<BankHomePage />
			<Chatbot />
		</main>
	);
}
