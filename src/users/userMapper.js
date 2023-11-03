const toUserResponse = (user) => {
    console.log(user)
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        links: {
            rel: "self",
            href: "/users/" + user.id
        }
    }
}

export { toUserResponse }