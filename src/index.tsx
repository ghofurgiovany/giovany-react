import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "@/assets/css/tailwind.css";
import { AuthProvider } from "./lib";

import App from "./pages/App";

render(
	<AuthProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</AuthProvider>,
	document.getElementById("root"),
);
