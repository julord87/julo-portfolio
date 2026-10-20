import WorkAreaTitleCard from "./WorkAreaTitleCard"
import Card from "./Card"
import { areaDb, techWorksDb } from "../data/db"
import MusicProducerSection from "./MusicProducerSection"

const WorkAreaInfo = areaDb[2]

const TechnicalProducerSection = () => {
  return (
    <div className="max-w-6xl mx-auto mt-16">
        <WorkAreaTitleCard
            title={WorkAreaInfo.title}
            description={WorkAreaInfo.description}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {techWorksDb.map((work) => (
                <Card
                    key={work.id}
                    title={work.title}
                    img={work.img}
                    description={work.description}
                    tools={work.tools}
                    videolink={work.videolink}
                    subtitle={work.subtitle}
                    fullDescription={work.fullDescription}
                    />
            ))}
        </div>

        <MusicProducerSection compact />
    </div>
  )
}

export default TechnicalProducerSection
