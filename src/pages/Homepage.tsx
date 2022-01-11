function Homepage() {
	const navigate = useNavigate();

	return (
		<div className="mx-auto container py-5 text-3xl text-green-500 text-center">
			<h1>Hello world!!!</h1>
			<div className="py-5">
				<button onClick={() => navigate("/auth/login")}>Login</button>
			</div>
		</div>
	);
}

export default Homepage;
