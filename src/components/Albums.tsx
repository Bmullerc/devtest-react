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
      className="py-6 px-10 lg:px-20 min-h-screen h-fit bg-green-200"
    >
      <h1
        id="albums"
        className="font-bold text-4xl text-center"
      >
        Albums
      </h1>
      <ul className="mt-6 capitalize">
        {fakeApi?.map(api => {
          return (
            <li className="py-2" key={api.id}>
              <strong>{api.title}</strong>
            </li>
          )
        })}
      </ul>
    </article>
  )
}