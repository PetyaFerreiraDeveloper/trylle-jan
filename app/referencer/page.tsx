import { ReferenceCard } from "../components/ReferenceCard"
import { referenceCardData } from "../lib/referenceCardData"

const ReferencesPage = () => {
  const updatedReferenceCardData = referenceCardData.map((card) => ({
    ...card,
    date: new Date(card.date),
  }))

  updatedReferenceCardData.sort((a, b) => b.date.getTime() - a.date.getTime())

  return (
    <>
      <h2 className="text-3xl">Referencer</h2>
      <p className="mb-10">Hvad mine glæde kunder siger:</p>
      <div className="flex gap-8">
        {updatedReferenceCardData.map((card) => (
          <ReferenceCard review={card} key={card.title} />
        ))}
      </div>
    </>
  )
}

export default ReferencesPage
