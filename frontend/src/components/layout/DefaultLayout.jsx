// /frontend/src/components/Layout/DefaultLayout.jsx
// (Giả sử bạn có file index.js trong thư mục Layout để export)

import React from 'react';
import Header from './Header'; // Import Header
import Footer from './Footer'; // Import Footer

// "children" ở đây chính là <Page /> mà App.jsx đã truyền vào
function DefaultLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                {/* Đây là nơi Page component (HomePage, RegisterPage) được render */}
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;