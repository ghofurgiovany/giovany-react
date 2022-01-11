import { useAuth } from "@/hooks";

function Login() {
	const { login, logout, isLogged } = useAuth();

	return (
		<div className="py-5 mx-auto grid place-items-center">
			{isLogged ? (
				<div>
					<div className="text-center">You're logged in</div>
					<div className="py-2 grid place-items-center">
						<button onClick={logout} className="bg-green-500">
							Logout
						</button>
					</div>
				</div>
			) : (
				<button onClick={login}>Login</button>
			)}
		</div>
	);
}

export default Login;
