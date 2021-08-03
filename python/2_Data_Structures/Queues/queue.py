from collections import deque

# create an empty deque object to function as queue
queue = deque()

# add some items to the queue
queue.append(1)
queue.append(2)
queue.append(3)

print(queue)

# pop an item off the queue
queue.pop()

x = queue.popleft()
print(x)

print(queue)