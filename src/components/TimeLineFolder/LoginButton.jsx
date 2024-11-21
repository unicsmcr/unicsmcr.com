const LoginButton = () => {
    const { user, logout } = useAuth();
    const [showLogin, setShowLogin] = useState(false);
  
    return (
      <>
        {user ? (
          <button
            onClick={logout}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Admin Login
          </button>
        )}
        {showLogin && !user && <LoginForm onClose={() => setShowLogin(false)} />}
      </>
    );
  };
  