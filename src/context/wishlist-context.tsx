"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"

type Item = {
  id: number
  name: string
  price: number
  image: string
}

type WishlistContextType = {
  wishlist: Item[]
  addToWishlist: (item: Item) => void
}

const WishlistContext = createContext<WishlistContextType | null>(null)

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Item[]>([])

  useEffect(() => {
    const data = localStorage.getItem("wishlist")
    if (data) setWishlist(JSON.parse(data))
  }, [])

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  const addToWishlist = (item: Item) => {
  setWishlist((prev) => {
    const exist = prev.find((i) => i.id === item.id)

    if (exist) {
      // ❌ REMOVE if already exists
      return prev.filter((i) => i.id !== item.id)
    }

    // ✅ ADD if not exists
    return [...prev, item]
  })
}

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context) throw new Error("useWishlist must be used inside provider")
  return context
}