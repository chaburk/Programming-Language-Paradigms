{-Find Function-}
find :: Eq a => a -> [(a,b)] -> [b] {-Function definition for find function-}
find x xs = [y | (x', y) <- xs, x == x' ] {-Checks if keys are equivalent in a tuple with a specific character and outputs value-}

{-Position Function-}
positions v vs = find v (zip vs [0..length vs - 1]) {-Uses find function to determine position of specific character-}