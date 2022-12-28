import '@styles/global.css';
import NavBar from '@components/NavBar';
import { Inter } from '@next/font/google';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en'>
			<body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
				<NavBar />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
