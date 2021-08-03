# Find the greatest common denominator of two intergers
# 8 / 4; and 20 / 4
# for two intergers a and b, where a > b, divide a by b
# if remainder, r, is 0, then stop: GCD is b
# otherwise, set a to b, b to r, and repeat at step 1, until r is 0
def gcd(a, b):
    while(b != 0):
        t = a
        a = b
        b = t % b
    return a

print(gcd(1200, 96))
print(gcd(20, 8))