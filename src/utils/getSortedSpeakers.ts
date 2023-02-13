// eslint-disable-next-line prettier/prettier
export function getSortedByIndex<T extends object>(list: T[]) {
  return list.sort((a, b) => {
    const idxA = 'index' in a ? a.index : 0
    const idxB = 'index' in b ? b.index : 0

    if (typeof idxA === 'number' && typeof idxB === 'number') {
      return idxA - idxB
    }

    return 0
  })
}
