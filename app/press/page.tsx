import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Press - Neighborhood Video",
    description: "Press kit and media resources for Neighborhood Video game",
};

export default function Press() {
    return (
        <div className="flex min-h-screen items-start justify-center p-2 pt-4">
            <main className="flex w-full max-w-4xl flex-col items-center">
                {/* Header */}
                <div className="mb-8 w-full flex flex-col items-center space-y-4">
                    <Link href="/" className="hover:opacity-80 transition-opacity">
                        <Image
                            src="/logo-outline.png"
                            alt="Neighborhood Video Logo"
                            width={300}
                            height={300}
                            priority
                        />
                    </Link>
                    <h1 className="text-4xl font-bold text-white text-center">Press Kit</h1>
                </div>

                {/* Content */}
                <div className="w-full space-y-12 text-gray-700 bg-purple-300 p-8 rounded-lg">
                    {/* Game Overview */}
                    <section className="space-y-4">
                        <h2 className="text-2xl border-b border-gray-600 pb-2">Game Overview</h2>
                        <div className="space-y-4">
                            <p className="text-lg leading-relaxed border-b border-gray-600 pb-2">
                                Crack the case of the missing video store employee in this 3D point and click mystery game by solving escape room puzzles, combing the computer database, and stocking shelves as an undercover detective posing as a cashier during your first weekend at the suspiciously understaffed Neighborhood Video. </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Key Features</h3>
                                    <ul className="space-y-1 list-disc list-inside">
                                        <li>3D Point and Click puzzles</li>
                                        <li>Inventory management</li>
                                        <li>Hidden cipher translation</li>
                                        <li>Cult activity brewing conspiracies</li>
                                        <li>90s pastiche searchable PC database</li>
                                        <li>VHS shelves showcasing 50+ serviceable film cover parodies</li>
                                        <li>Highbrow Cow store mascot, Seymour Moovies</li>
                                        <li>Your very own name tag!</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Game Details</h3>
                                    <ul className="space-y-1 list-disc list-inside">
                                        <li>Platform: PC/Mac/Linux (Steam)</li>
                                        <li>Release Window: Summer 2026</li>
                                        <li>Developers: Alex Carlson & Angela McColgan</li>
                                        <li>Price: TBD</li>
                                        <li>Website: https://nbhd.video</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl border-b border-gray-600 pb-2">Media Assets</h2>
                        <div className="mb-4">
                            <h3 className="text-lg font-medium mb-3">Media Package Download</h3>
                            <a
                                href="/NeighborhoodVideo_Media_Package_v2.zip"
                                download
                                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                            >
                                Download All (.zip - 57.1MB)
                            </a>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium mb-3">Trailer</h3>
                                <div className="aspect-video w-full max-w-2xl">
                                    <iframe
                                        width="768"
                                        height="315"
                                        src="https://www.youtube.com/embed/4vlnGeQbOO0?si=7NiqEPsAVH-WAESU"
                                        title="Neighborhood Video Trailer"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-3">Logo</h3>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div>
                                        <Image
                                            src="/logo-outline.png"
                                            alt="Neighborhood Video Logo"
                                            width={600}
                                            height={600}
                                        />
                                        <p className="text-sm mt-2">Logo (PNG)</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-3">Icon</h3>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div>
                                        <Image
                                            src="/nv_icon.png"
                                            alt="Neighborhood Video Icon"
                                            width={600}
                                            height={600}
                                        />
                                        <p className="text-sm mt-2">Game Icon (PNG)</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-3">Screenshots</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div>
                                        <Image
                                            src="/ss1.png"
                                            alt="Neighborhood Video Screenshot 1"
                                            width={300}
                                            height={200}
                                            className="w-full h-auto rounded"
                                        />
                                    </div>
                                    <div >
                                        <Image
                                            src="/ss2.png"
                                            alt="Neighborhood Video Screenshot 2"
                                            width={300}
                                            height={200}
                                            className="w-full h-auto rounded"
                                        />
                                    </div>
                                    <div >
                                        <Image
                                            src="/ss3.png"
                                            alt="Neighborhood Video Screenshot 3"
                                            width={300}
                                            height={200}
                                            className="w-full h-auto rounded"
                                        />
                                    </div>
                                    <div >
                                        <Image
                                            src="/ss4.png"
                                            alt="Neighborhood Video Screenshot 4"
                                            width={300}
                                            height={200}
                                            className="w-full h-auto rounded"
                                        />
                                    </div>
                                    <div >
                                        <Image
                                            src="/ss5.png"
                                            alt="Neighborhood Video Screenshot 5"
                                            width={300}
                                            height={200}
                                            className="w-full h-auto rounded"
                                        />
                                    </div>
                                    <div >
                                        <Image
                                            src="/ss6.png"
                                            alt="Neighborhood Video Screenshot 6"
                                            width={300}
                                            height={200}
                                            className="w-full h-auto rounded"
                                        />
                                    </div>
                                    <div >
                                        <Image
                                            src="/ss7.png"
                                            alt="Neighborhood Video Screenshot 6"
                                            width={300}
                                            height={200}
                                            className="w-full h-auto rounded"
                                        />
                                    </div>
                                    <div >
                                        <Image
                                            src="/ss8.png"
                                            alt="Neighborhood Video Screenshot 6"
                                            width={300}
                                            height={200}
                                            className="w-full h-auto rounded"
                                        />
                                    </div>
                                    <div >
                                        <Image
                                            src="/ss9.png"
                                            alt="Neighborhood Video Screenshot 6"
                                            width={300}
                                            height={200}
                                            className="w-full h-auto rounded"
                                        />
                                    </div>
                                    <div >
                                        <Image
                                            src="/ss10.png"
                                            alt="Neighborhood Video Screenshot 6"
                                            width={300}
                                            height={200}
                                            className="w-full h-auto rounded"
                                        />
                                    </div>
                                    <div >
                                        <Image
                                            src="/ss11.png"
                                            alt="Neighborhood Video Screenshot 6"
                                            width={300}
                                            height={200}
                                            className="w-full h-auto rounded"
                                        />
                                    </div>
                                    <div >
                                        <Image
                                            src="/ss12.png"
                                            alt="Neighborhood Video Screenshot 6"
                                            width={300}
                                            height={200}
                                            className="w-full h-auto rounded"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-3">GIFs</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div >
                                        <Image
                                            src="/gif4.gif"
                                            alt="Neighborhood Video GIF 1"
                                            width={300}
                                            height={200}
                                            className="w-full h-auto rounded"
                                        />
                                    </div>
                                    <div >
                                        <Image
                                            src="/gif5.gif"
                                            alt="Neighborhood Video GIF 2"
                                            width={300}
                                            height={200}
                                            className="w-full h-auto rounded"
                                        />
                                    </div>
                                    <div >
                                        <Image
                                            src="/gif6.gif"
                                            alt="Neighborhood Video GIF 3"
                                            width={300}
                                            height={200}
                                            className="w-full h-auto rounded"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl border-b border-gray-600 pb-2">AI Stance Disclaimer</h2>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm">
                                    Neighborhood Video is independently created by Alex Carlson and Angela McColgan, without the use of AI.  All assets are either created by hand, free and open source, properly attributed and/or properly licensed.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl border-b border-gray-600 pb-2">Press Contact</h2>
                        <div className="bg-gray-800 p-6 rounded">
                            <p className="mb-4 text-gray-200">For press inquiries, interviews, or additional information please reach us at:</p>
                            <div className="space-y-2 text-gray-300">
                                <div className="space-y-1">
                                    <ul>
                                        <li><a href="https://bsky.app/profile/neighborhoodvideo.bsky.social" className="text-blue-400 hover:text-blue-300">Bluesky</a></li>
                                        <li><a href="https://x.com/NbhdVideo" className="text-blue-400 hover:text-blue-300">Twitter</a></li>
                                        <li><a href="https://discord.gg/7WN6ESwPV4" className="text-indigo-400 hover:text-indigo-300">Discord</a></li>
                                        <li><a href="https://www.tiktok.com/@neighborhoodvideo" className="text-pink-400 hover:text-pink-300">TikTok</a></li>
                                        <li><a href="mailto:alex@acwd.me" className="text-red-400">Email</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Steam Widget */}
                    <section className="space-y-4">
                        <h2 className="text-2xl border-b border-gray-600 pb-2">Get the Game</h2>
                        <div className="flex justify-center">
                            <iframe
                                src="https://store.steampowered.com/widget/4072630/"
                                width="646"
                                height="190"
                                className="max-w-full"
                            />
                        </div>
                    </section>
                </div>

                {/* Navigation */}
                <div className="mt-12 mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded transition-colors"
                    >
                        ← Back to Home
                    </Link>
                </div>

                <footer className="mt-8 text-white text-sm bg-black p-4 rounded">
                    Game & Site by Alex Carlson and Angela McColgan - {new Date().getFullYear()}
                </footer>
            </main>
        </div>
    );
}