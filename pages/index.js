import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<div className="px-8 text-black bg-white dark:text-white dark:bg-black">
			<Head>
				<title>Roll Init</title>
				<meta name="description" content="An encounter builder tool for D&D" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen py-16 flex justify-center items-center flex-col">
				<h1 className="text-7xl font-bold text-center">Roll Init</h1>

				<p className="py-16 leading-normal text-2xl text-center">
					A tool for building and running encounters for table top role playing games.
				</p>

				{/* <div className={styles.grid}>
					<a href="https://nextjs.org/docs" className={styles.card}>
						<h2>Documentation &rarr;</h2>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a href="https://nextjs.org/learn" className={styles.card}>
						<h2>Learn &rarr;</h2>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
						<h2>Examples &rarr;</h2>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.card}
					>
						<h2>Deploy &rarr;</h2>
						<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
					</a>
				</div> */}
			</main>

			<footer className="flex py-8 border-t border-black dark:border-white justify-center items-center">
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
					className="flex justify-center items-center flex-grow flex-1"
				>
					Powered by{' '}
					<span className="h-[1em] ml-2">
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} className="dark:invert" />
					</span>
				</a>
			</footer>
		</div>
	);
}
