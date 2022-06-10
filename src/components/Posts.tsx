import { useFetch } from "../hooks/useFetch";

type Placeholder = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function Posts() {
  const { data: fakeApi } = useFetch<Placeholder[]>('https://jsonplaceholder.typicode.com/posts')

  return (
    <article
      className="py-6 px-10 lg:px-32 lg:py-12 md:px-16 md:py-8 min-h-screen h-fit"
    >
      <h1
        id="posts"
        className="font-bold text-4xl text-center"
      >
        Posts
      </h1>
      <ul className="mt-6 capitalize">
        {fakeApi?.map(api => {
          return (
            <li className="py-2" key={api.id}>
              <strong>{api.title}</strong>
              <p>{api.body}</p>
            </li>
          )
        })}
      </ul>
    </article>
  )
}
