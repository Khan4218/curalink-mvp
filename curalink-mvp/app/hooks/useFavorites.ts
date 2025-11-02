"use client";

import { useEffect, useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<any[]>([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  // Save to localStorage
  const saveFavorites = (items: any[]) => {
    setFavorites(items);
    localStorage.setItem("favorites", JSON.stringify(items));
  };

  const addFavorite = (item: any) => {
    const updated = [...favorites, item];
    saveFavorites(updated);
  };

  const removeFavorite = (key: string) => {
    const updated = favorites.filter((f) => f.key !== key);
    saveFavorites(updated);
  };

  const isFavorite = (key: string) => {
    return favorites.some((f) => f.key === key);
  };


  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite
  };
}
