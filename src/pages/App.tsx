import { lazy, ReactNode, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Homepage = lazy(() => import("./Homepage"));
const AuthLogin = lazy(() => import("./auth/Login"));

function LoadComponent({ children }: { children: ReactNode }) {
	return <Suspense fallback={<div>Login...</div>}>{children}</Suspense>;
}

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<LoadComponent>
						<Homepage></Homepage>
					</LoadComponent>
				}
			/>
			<Route
				path="/auth/login"
				element={
					<LoadComponent>
						<AuthLogin />
					</LoadComponent>
				}
			></Route>
		</Routes>
	);
}

export default App;
