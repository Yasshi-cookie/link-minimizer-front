import MinimizeUrlForm from './MinimizeUrlForm'

export const metadata = {
    title: 'URLカンタン短縮 - Dashboard',
}

const Dashboard = () => {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="py-6 px-2 bg-white border-b border-gray-200 sm:px-6">
                        <MinimizeUrlForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
