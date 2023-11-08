const SELF = "self"

const mapToLinks = (selfRef, linksPairs) => {
    const links = mapToSelf(selfRef)
    const otherLinks = linksPairs ? linksPairs.map(linkPair => (mapToLink(linkPair))) : []

    return [...links, ...otherLinks]
}

const mapToLink = (linkPair) => {
    return { rel: linkPair.rel, href: linkPair.href }
}

const mapToSelf = (ref) => {
    return [
        { rel: SELF, href: ref }
    ]
}


export { mapToLinks, mapToSelf }