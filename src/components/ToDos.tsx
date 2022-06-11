import { useFetch } from "../hooks/useFetch";

type ToDos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export function ToDos() {
  const { data: fakeApi } = useFetch<ToDos[]>('https://jsonplaceholder.typicode.com/todos')

  return (
    <article
      className="py-6 px-10 lg:px-32 lg:py-12 md:px-16 md:py-8 min-h-screen h-fit"
    >
      <h1
        id="todos"
        className="font-bold text-4xl text-center"
      >
        ToDos
      </h1>
      <ul className="mt-6 capitalize">
        {fakeApi?.map(api => {
          return (
            <li className="py-2 px-2 flex justify-between border-b border-green-200 odd:bg-green-50 rounded-sm" key={api.id}>
              <strong>{api.title}</strong>
              <input 
              className="ml-4 h-4 lg:w-6 lg:h-6 accent-green-200 self-center cursor-not-allowed"
              type="checkbox" 
              checked={api.completed}
              />
            </li>
          )
        })}
      </ul>
    </article>
  )
}