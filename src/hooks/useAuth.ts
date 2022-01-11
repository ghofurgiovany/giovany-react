import { AuthContext } from "@/lib/AuthProvider";

export default function useAuth() {
  return useContext(AuthContext)
}
