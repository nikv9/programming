# common ways to define and run code in Python.
def normal_function_example(a, b):
    return a + b


lambda_function_example = lambda a, b: a + b


class ClassExample:
    def __init__(self, value):
        self.value = value

    def get_value(self):
        return self.value


object_method_example = {
    "add": lambda a, b: a + b
}


direct_code_example = 10 + 20

print(normal_function_example(2, 3))
print(lambda_function_example(2, 3))
print(ClassExample(10).get_value())
print(object_method_example["add"](2, 3))
print(direct_code_example)


# patterns
def main():
    n = 4
    # i = row index, j = column index

    # * * * *
    # * * * *
    # * * * *
    # * * * *
    for i in range(1, n + 1):
        line = ""
        for j in range(1, n + 1):
            line += "* "
        print(line)

    # *
    # * *
    # * * *
    # * * * *
    for i in range(1, n + 1):
        line = ""
        for j in range(1, i + 1):
            line += "* "
        print(line)

    # 1111
    # 2222
    # 3333
    # 4444
    for i in range(1, n + 1):
        line = ""
        for j in range(1, n + 1):
            line += str(i)
        print(line)

    # 1
    # 22
    # 333
    # 4444
    for i in range(1, n + 1):
        line = ""
        for j in range(1, i + 1):
            line += str(i)
        print(line)

    # 1234
    # 1234
    # 1234
    # 1234
    for i in range(1, n + 1):
        line = ""
        for j in range(1, n + 1):
            line += str(j)
        print(line)

    # 4444
    # 3333
    # 2222
    # 1111
    for i in range(n, 0, -1):
        line = ""
        for j in range(1, n + 1):
            line += str(i)
        print(line)

    # 4321
    # 4321
    # 4321
    # 4321
    for i in range(1, n + 1):
        line = ""
        for j in range(n, 0, -1):
            line += str(j)
        print(line)

    # 1 2 3 4
    # 5 6 7 8
    # 9 10 11 12
    # 13 14 15 16
    count = 1
    for i in range(1, n + 1):
        line = ""
        for j in range(1, n + 1):
            line = line + str(count) + " "
            count += 1
        print(line)

    # 1
    # 2 3
    # 4 5 6
    # 7 8 9 10
    count = 1
    for i in range(1, n + 1):
        line = ""
        for j in range(1, i + 1):
            line = line + str(count) + " "
            count += 1
        print(line)

    # 1
    # 2 1
    # 3 2 1
    # 4 3 2 1
    for i in range(1, n + 1):
        line = ""
        for j in range(i, 0, -1):
            line += str(j) + " "
        print(line)

    #  AAAA
    #  BBBB
    #  CCCC
    #  DDDD
    for i in range(1, n + 1):
        line = ""
        for j in range(1, n + 1):
            x = chr(ord("A") + i - 1)
            line += x
        print(line)

    # ABCD
    # ABCD
    # ABCD
    # ABCD
    for i in range(1, n + 1):
        line = ""
        for j in range(1, n + 1):
            letter = chr(ord("A") + j - 1)
            line += letter
        print(line)
        
main()
