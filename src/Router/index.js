import React, { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom';
const Home = lazy(
  async () => await import('../Component/Home')
);

const Person = lazy(
  async () => await import('../Component/Person')
);

const Report = lazy(
  async () => await import('../Component/Report')
);


const Rule = lazy(
  async () => await import('../Component/Rule')
);

function Index() {
  const element = useRoutes([
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/person',
      element: <Person></Person>
    },
    {
      path: '/report',
      element: <Report></Report>
    },
    {
      path: '/rule',
      element: <Rule></Rule>
    }
  ])
  return (
    <div>
      <Suspense fallback={<p>loading</p>}>
          {element}
      </Suspense>

    </div>

  )
}

export default Index