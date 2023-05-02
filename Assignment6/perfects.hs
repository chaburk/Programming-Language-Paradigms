{-Perfect function-}
perfects :: Int -> [Int] {-Function definition for perfects-}
perfect' n = [x | x <-[1..n-1], (n `mod` x)  == 0] {-function that goes from 1 to n-1 and finds the factors of a number-}
perfects n = [x | x <- [1..n], x == sum(perfect' x)] {-function that goes from 1 to n and checks if the sum of the factors is equal to n-}