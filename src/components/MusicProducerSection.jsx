import WorkAreaTitleCard from "./WorkAreaTitleCard"
import { areaDb, musicWorksDb } from "../data/db"

const WorkAreaInfo = areaDb[1]

const MusicProducerSection = ({ compact = false }) => {
  return (
    <div className="max-w-6xl mx-auto mt-16">
        {compact ? (
            <div className="card mb-5 mx-2 to-fade-in">
                <div className="p-5 px-16 flex items-center">
                    <p className="Subtitle-9999 m-0 border-r-4 border-pink-100 pr-6">{WorkAreaInfo.title}</p>
                </div>
            </div>
        ) : (
            <WorkAreaTitleCard
                title={WorkAreaInfo.title}
                description={WorkAreaInfo.description}
            />
        )}
        <div className="spotify-card to-fade-in">
            <div className="grid grid-cols-1 gap-x-24 mt-4 space-y-2 md:grid-cols-2 lg:grid-cols-3 mx-3 items-baseline">
                {musicWorksDb.map((track) => (
                    <div key={track.id} className="col-span-1 rounded-xl border-2 border-white shadow-lg overflow-hidden">
                        <iframe
                            title={`Spotify ${track.type ?? 'track'} ${track.id}`}
                            src={`https://open.spotify.com/embed/${track.type ?? 'track'}/${track.spotifyId}?utm_source=generator&theme=0`}
                            width="100%"
                            height="352"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MusicProducerSection
