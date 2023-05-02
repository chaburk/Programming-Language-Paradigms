{- Replicate function -}
myrep' :: Int -> a -> [a] {-Function definition for replicate function-}
myrep' n x = [x | y <- [1..n]] {-function that puts the element into a list n many times-}