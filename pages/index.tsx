import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((_res) => _res.json())
      .then((_json) => {
        setProductList(_json.data)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {productList.map((_product) => {
        return <div>{_product}</div>
      })}
    </div>
  )
}

export default HomePage
