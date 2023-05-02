{-Scalar Product Function-}
scalarproduct :: [Int] -> [Int] -> Int {-Function definition for scalar product-}
scalarproduct xs ys = sum [x*y | (x,y) <- (zip xs ys)] {-Takes two lists, zips them and then goes through the items in the 
zip list and with those items muliply and sum the list comp list-}
