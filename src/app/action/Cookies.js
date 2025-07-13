export async function cookiesCatch() {
    const user = await cookieStore.get("token");
    setUser(user);
    return user;
}
