export const getDomainSearched = (state) => {
  return { name: state.domainSearched.name, availability: state.domainSearched.availability }
}

export const getPrefixes = (state) => {
  return state.prefixes
}

export const getSuffixes = (state) => {
  return state.suffixes
}

export const getSegments = (state) => {
  return state.segments.filter(function (segment) {
    return segment.name !== '-' && segment.domains.length > 0
  })
}
