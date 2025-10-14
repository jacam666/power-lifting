import Link from "next/link";

export default function Comp2Page() {
    return (
        <div className="bg-black flex min-h-screen flex-col items-center  pt-10 px-4">
            <div className="w-full max-w-6xl">
            <Link href="/">
                <button className="mb-4 px-4 py-2 bg-blue-600 text-white  rounded hover:bg-blue-700">
                    Back to Home
                </button>
            </Link>
            <div className="text-center text-white mb-6 my-8">
                <h1 className="text-4xl font-bold text-white">Comp Name Here</h1>
                <p className="text-lg text-white">Date: ????????</p>
                <p className="text-lg text-white">Location: ????????</p>
                <p className="text-lg text-white">Description: ????????</p>
            </div>
        </div>
    </div>
    );
}