import Header from "./components/Header"
import Info from "./components/Info"
import Stack from "./components/Stack"
import Footer from "./components/Footer"
import { useState } from "react"
import TabsSection from "./components/TabsSection"
import Work from "./components/work/Work"
import Project from "./components/work/Project"
import AutoCenter from "./components/work/AutoCenter"

export default function App() {
  const [tab, setTab] = useState('auto')

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="main__body">
            <Info />
            <Stack />

            <section className="works">
              <div className="container">
                <h1 className="works__title">Примеры работ</h1>
                <div className="works__items">

                  <TabsSection active={tab} onChange={(current) => setTab(current)} />
                  {tab === 'auto' && (<AutoCenter />)}
                  {tab === 'main' && (<Work />)}
                  {tab === 'back' && (<Project />)}

                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}