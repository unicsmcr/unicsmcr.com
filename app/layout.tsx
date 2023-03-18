import '@styles/global.css';
import NavBar from '@components/NavBar';
import { Inter, Roboto_Mono, League_Spartan } from '@next/font/google';
import Footer from '@components/Footer';

const inter = League_Spartan({
	subsets: ['latin'],
	variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	variable: '--font-roboto',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${robotoMono.variable} font-serif min-h-screen flex flex-col scroll-smooth bg-black`}
			>
				<NavBar />
				<div className="flex-1">{children}</div>
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
