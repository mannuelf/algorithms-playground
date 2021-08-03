# Hash table

local_data = dict({"key1": 1, "key2": 2, "key3": 3, "key4": 4})

print(local_data)

# create hashtable progressively
api_data = {}
api_data["key1"] = 1
api_data["key2"] = 2
api_data["key3"] = 3
api_data["key4"] = 4

print(api_data)

# print out a nonexisting item
#print(api_data["key5"])

# replace an item in existing hash table
api_data["key1"] = "ONE"

print(api_data)

# iterate the keys and values in the dictionary
for key, value in api_data.items():
    print("key: ", key, " value: ", value)
