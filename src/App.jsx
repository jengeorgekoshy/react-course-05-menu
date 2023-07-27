import { useState } from 'react'
import Menu from './Menu'
import Title from './Title'
import menu from './data'
import Categories from './Categories'

const App = () => {
  const [menuItems, setItems] = useState(menu)
  const [cat, setCat] = useState('all')

  const tempSet = new Set(menu.map((item) => item.category))
  const tempCat = ['all', ...tempSet]

  const handleCategory = (cat) => {
    setCat(cat)
    if (cat === 'all') {
      setItems(menu)
      return
    }
    const newMenu = menu.filter((item) => item.category === cat)
    setItems(newMenu)
  }

  return (
    <main>
      <section className="menu">
        <Title />
        <Categories categories={tempCat} handleCategory={handleCategory} />
        <Menu items={menuItems} category={cat} />
      </section>
    </main>
  )
}
export default App
