import Link from "next/link";


export default function Comp5Page() {
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
                    <p className="text-lg text-white">Date: June 15, 2024</p>
                    <p className="text-lg text-white">Location: ????????</p>
                    <p className="text-lg text-white">Description: Cole kicks ass again.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div>
                    <h2 className="text-3xl font-bold text-center my-4 text-white">Squat</h2>
                    <video width="400" controls>
                        <source src="/videos/june-2024-comp.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-center my-4 text-white">Bench</h2>
                    <video width="400" controls>
                        <source src="/videos/june-2024-comp-4.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-center my-4 text-white">Deadlift</h2>
                    <video width="400" controls>
                        <source src="/videos/june-2024-comp-2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-bold text-center my-4 text-white">Presentation</h2>
                <video width="400" controls>
                    <source src="/videos/june-2024-comp-3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}