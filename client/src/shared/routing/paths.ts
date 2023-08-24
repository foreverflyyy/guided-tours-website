
type Id = number | string | null | undefined;

export const paths = {
    home: "/",
    excursions: "/excursions",

    excursion: (id: Id) => `/excursion/${id}`
}