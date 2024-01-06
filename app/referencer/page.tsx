import { ReferenceCard } from "../components/ReferenceCard"
import { referenceCardData } from "../lib/referenceCardData"

const ReferencesPage = () => {
  const sorted = referenceCardData.sort((a,b) => a.date.localeCompare(b.date))
  const date ='19. december 2021'
  const newDate = new Date(date)
  console.log(newDate)
  return (
    <>
      <h2 className="text-3xl">Referencer</h2>
      <p className="mb-10">Hvad mine glæde kunder siger:</p>
      <div className="flex gap-8">
        {referenceCardData.map((card) => (
          <ReferenceCard review={card} key={card.title} />
        ))}
      </div>
    </>
  )
}

export default ReferencesPage
