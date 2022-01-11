import { ReactNode } from "react";

interface AuthContext {
	isLogged: boolean;
	accessToken: string;
	login: () => void;
	logout: () => void;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: { children: ReactNode }) {
	const [isLogged, setIsLogged] = useState(false);
	const [accessToken, setAccessToken] = useState("");

	const login = () => {
		setAccessToken("token");
		setIsLogged(true);
	};

	const logout = () => {
		setAccessToken("");
		setIsLogged(false);
	};

	const contextValue = useMemo(
		() => ({
			login,
			logout,
			isLogged,
			accessToken,
		}),
		[accessToken, isLogged],
	);

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
}
