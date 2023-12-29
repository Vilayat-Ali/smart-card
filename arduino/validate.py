def main():
    # Example array of bytes
    byte_array = [36, 71, 80, 82, 77, 67, 44, 44, 86, 44, 44,
                  44, 44, 44, 44, 44, 44, 44, 44, 78, 42, 53, 51, 13]

    byte_arr = bytes(byte_array)
    # Convert array of bytes to ASCII string
    try:

        ascii_string = byte_arr.decode('ascii')
        print("ASCII String:", ascii_string)
    except UnicodeDecodeError as e:
        print("Error converting to ASCII string:", e)


if __name__ == '__main__':
    main()
