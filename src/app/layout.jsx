import '@/app/global.css'

export const metadata = {
    title: 'Link Minimizer',
}
const RootLayout = ({ children }) => {
    return (
        <html lang="ja">
            <body className="antialiased">{children}</body>
        </html>
    )
}

export default RootLayout
