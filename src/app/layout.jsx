import '@/app/global.css'

export const metadata = {
    title: 'URLカンタン短縮',
}
const RootLayout = ({ children }) => {
    return (
        <html lang="ja">
            <body className="antialiased">{children}</body>
        </html>
    )
}

export default RootLayout
