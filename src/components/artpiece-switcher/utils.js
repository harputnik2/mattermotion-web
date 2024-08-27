export const getPrevAndNextId = (idsArray, currentId) => {
  const idsArrayLength = idsArray.length
  const currentIdIndex = idsArray.indexOf(currentId)

  const nextIdIndex = currentIdIndex === 0 ?
    idsArrayLength - 1 :
    currentIdIndex - 1

  const prevIdIndex = currentIdIndex === idsArrayLength - 1 ?
    0 :
    currentIdIndex + 1

  return {
    nextId: idsArray[nextIdIndex],
    prevId: idsArray[prevIdIndex],
  }
}
