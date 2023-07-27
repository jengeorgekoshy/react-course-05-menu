import { useState } from 'react'

const Categories = ({ categories, handleCategory }) => {
  const [selected, setSelected] = useState(0)
  return (
    <>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className={selected === index ? 'btn btn-selected' : 'btn'}
              key={index}
              onClick={() => {
                handleCategory(category)
                setSelected(index)
              }}
            >
              {category}
            </button>
          )
        })}
      </div>
    </>
  )
}
export default Categories
