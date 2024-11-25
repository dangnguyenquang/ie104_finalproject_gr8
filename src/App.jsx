import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes, privateRoutes } from './routes'
import { DefaultLayout } from './components/Layout'
import RestaurantLayout from './components/Layout/RestaurantLayout'
import { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component
              let Layout = DefaultLayout

              return (
                <Route
                  exact
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              )
            })}

            {/* {privateRoutes.map((route, index) => {
              const Page = route.component
              let Layout = RestaurantLayout

              return (
                <Route
                  exact
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              )
            })} */}
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
