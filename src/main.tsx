import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./pages/App";
import "@/assets/css/tailwind.css";
import AuthProvider from "./services/AuthProvider";

render(
	<AuthProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</AuthProvider>,
	document.getElementById("root"),
);
