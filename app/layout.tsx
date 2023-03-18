import '@styles/global.css';
import NavBar from '@components/NavBar';
import { Inter } from '@next/font/google';
import Footer from '@components/Footer';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body className={`${inter.variable} font-sans min-h-screen flex flex-col scroll-smooth bg-black`}>
				<NavBar />
				<div className="flex-1">{children}</div>
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
