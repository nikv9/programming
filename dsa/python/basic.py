# Patterns
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
