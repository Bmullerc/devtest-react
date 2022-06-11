import { useFetch } from "../hooks/useFetch";

type Albums = {
  userId: number;
  id: number;
  title: string;
}

export function Albums() {
  const { data: fakeApi } = useFetch<Albums[]>('https://jsonplaceholder.typicode.com/albums')

  return (
    <article
      className="py-6 px-10 lg:px-32 lg:py-12 md:px-16 md:py-8 min-h-screen h-fit"
    >
      <h1
        id="albums"
        className="font-bold text-4xl text-center"
      >
        Albums
      </h1>
      <ul className="lg:grid lg:grid-cols-2 lg:gap-x-12 mt-6 capitalize border-2 border-green-200 rounded-md bg-green-50">
        {fakeApi?.map(api => {
          return (
            <li className="py-2 px-2 lg:odd:border-r-2 lg:border-green-200" key={api.id}>
              <strong className="">{api.title}</strong>
            </li>
          )
        })}
      </ul>
    </article>
  )
}