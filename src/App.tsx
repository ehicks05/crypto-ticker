import React from 'react';
import Loader from 'react-loader-spinner';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataFetcher from './DataFetcher';
import { Footer, Header, ProductDetail, Products, Settings } from './components';
import useStore from './store';

function App() {
	const isAppLoading = useStore((state) => state.isAppLoading);

	return (
		<Router>
			<DataFetcher />
			{isAppLoading ? (
				<div className="flex items-center justify-center h-screen">
					<Loader type="Rings" color="#00BFFF" height={256} width={256} />
				</div>
			) : (
				<div className="flex flex-col h-screen">
					<Header />
					<Settings />
					<div className="flex-grow flex flex-col h-full overflow-y-auto">
						<Routes>
							<Route path="/:productId" element={<ProductDetail />} />
							<Route path="/" element={<Products />} />
						</Routes>
					</div>
					<Footer />
				</div>
			)}
		</Router>
	);
}

export default App;
