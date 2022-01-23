def format():
    f = input("Please input your file: ")
    with open(f, 'r') as text:
        out = text.replace("\n", "</p><p>")
        #out = out.replace("\n", " ")

        out = "<p>" + out + "</p>"
        print(out)

    
format()
