import sys


def other():
    print("bitch")


if __name__ == "__main__":
    num_input_args = len(sys.argv)

    for i in range(1, num_input_args):
        print(i)
        print(sys.argv[i])
