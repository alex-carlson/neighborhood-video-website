import Image from "next/image";
import { faTwitter, faTiktok, faBluesky, faSteam, faDiscord } from '@fortawesome/free-brands-svg-icons';
import SocialLink from './components/SocialLink';

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center p-2 pt-4">
      <main className="flex w-full max-w-3xl flex-col items-center">
        <div className="mb-16 w-full flex flex-col items-center space-y-4">
          <Image
            src="/logo-outline.png"
            alt="Neighborhood Video Logo"
            width={500}
            height={500}
            priority
          />
          <div className="flex justify-center">
            <iframe src="https://store.steampowered.com/widget/4072630/" width="646" height="190" className="max-w-full"></iframe>
          </div>
          </div>
        <div className="w-full space-y-32">
          <div className="aspect-video w-full">
            <iframe width="768" height="315" src="https://www.youtube.com/embed/4vlnGeQbOO0?si=7NiqEPsAVH-WAESU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full"></iframe>
          </div>

          <nav className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
            <SocialLink
              href="https://bsky.app/profile/neighborhoodvideo.bsky.social"
              icon={faBluesky}
              label="Bluesky"
              colorClass="text-blue-500"
              hoverColorClass="hover:text-blue-700"
            />
            <SocialLink
              href="https://x.com/NbhdVideo"
              icon={faTwitter}
              label="Twitter"
              colorClass="text-blue-400"
              hoverColorClass="hover:text-blue-600"
            />
            <SocialLink
              href="https://www.tiktok.com/@neighborhoodvideo"
              icon={faTiktok}
              label="TikTok"
              colorClass="text-pink-500"
              hoverColorClass="hover:text-pink-700"
            />
            <SocialLink
              href="https://store.steampowered.com/app/4072630/Neighborhood_Video/"
              icon={faSteam}
              label="Steam"
              colorClass="text-slate-200"
              hoverColorClass="hover:text-slate-400"
            />
            <SocialLink
              href="https://discord.gg/7WN6ESwPV4"
              icon={faDiscord}
              label="Discord"
              colorClass="text-indigo-500"
              hoverColorClass="hover:text-indigo-600"
            />
          </nav>
        </div>
        <footer className="mt-8 text-white text-sm bg-black p-4 rounded">
          Game & Site by Alex Carlson and Angela McColgan - {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
}
