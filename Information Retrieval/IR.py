
import docx
import os
import stemming.porter2 as stem
import sys


def get_files():

    print(os.getcwd())

    exec_path = os.getcwd() + "\\data"
    print("execution path ", exec_path)
    files = os.listdir(exec_path)
    # files = [".\\data\\Doc1.docx"]

    # print("files ", files)
    filePaths = []
    for fileToProcess in files:
        filePaths.append(".\\data\\" + fileToProcess)

    return filePaths


def get_postings_list(postings):

    files = get_files()

    for fileName in files:

        docId = get_doc_id(fileName)

        # print("docid: ", docId)

        tokens = get_data(fileName)

        tokens = remove_stop_words(tokens)

        tokens = stem_tokens(tokens)

        tokens = convert_to_lower(tokens)

        maps = map_tokens(tokens, docId, postings)

        write_tokens_to_file(docId, tokens)

    write_maps(maps)

    return maps


def write_maps(maps):

    if(not os.path.exists(".\\output")):
        os.makedirs(".\\output")
        
    mapWriter = open(".\\output\\maps.txt", "w+")

    for key in maps.keys():
        mapWriter.write(key)
        mapWriter.write(" : ")
        mapWriter.write(str(maps[key]))
        mapWriter.write("\n")

    mapWriter.close()


def get_doc_id(fileName):

    path = os.path.dirname(fileName)
    docId = fileName.replace(path, "").replace(
        "/", "").replace("\\", "").split(".")[0]
    return docId


def convert_to_lower(tokens):

    newTokens = []
    for token in tokens:
        newTokens.append(token.lower())

    return newTokens


def get_data(fileName):

    doc = docx.Document(fileName)

    tokens = set(doc.paragraphs[0].text.split())
    # print(len(tokens))
    return tokens


def remove_stop_words(tokens):

    stopWordsFile = open("stopWords.txt", "r")
    stopWords = stopWordsFile.read().split()

    for sWord in stopWords:
        if(tokens.__contains__(sWord)):
            tokens.remove(sWord)

    return tokens


def stem_tokens(tokens):

    newTokens = []

    for token in tokens:
        newTokens.append(stem.stem(token))

    return newTokens


def map_tokens(tokens, docId, map):

    for token in tokens:
        if(map.__contains__(token)):
            map[token].append(docId)

        else:
            map[token] = [docId]

    return map


def write_tokens_to_file(docId, tokens):

    if(not os.path.exists(".\\output")):
        os.makedirs(".\\output")

    fWrite = open(".\\output\\" + docId + "tokens.txt", "w+")

    for token in tokens:
        fWrite.write(token)
        fWrite.write("\n")

    fWrite.close()

    # print(len(tokens))
    # print(tokens)


def intersect(a, b):
    return list(set(a) & set(b))


def union(a, b):
    return list(set((set(a) | set(b))))


def fetch_query():

    query = ""
    if(len(sys.argv) > 1):
        query = sys.argv[1]

    # print("search query : ", sys.argv)
    return query


def process_query(query):

    queryTokens = query.split()

    tokens = stem_tokens(queryTokens)
    tokens = convert_to_lower(tokens)
    # print("tokens ", tokens)

    return tokens


def fetch_doc_list(tokens, postings):

    tempList = []
    docList = []
    isLastTokenOperation = False

    for token in tokens:

        if(token == "and" or token == "or"):
            docList.append(tempList)
            docList.append(token)
            tempList = []
            isLastTokenOperation = True

        elif postings.__contains__(token):
            tempList = union(tempList, postings[token])
            isLastTokenOperation = False

    if(not isLastTokenOperation):
        docList.append(tempList)

    return docList


def fetch_final_document_list(docList):

    length = len(docList)
    finalList = []

    for i in range(length):

        if(docList[i] == "and"):
            if(i > 0 and i < length - 1):
                finalList = intersect(docList[i-1], docList[i+1])
            # print("and")

        elif(docList[i] == "or"):
            if(i > 0 and i < length - 1):
                finalList = union(docList[i-1], docList[i+1])
            # print("or")

        else:
            finalList = union(finalList, docList[i])
            # print("normal")

    return finalList


def write_search_result_to_file(query, result):

    if(not os.path.exists(".\\output")):
        os.makedirs(".\\output")

    resWriter = open(".\\output\\result.txt", "a+")
    resWriter.write("query: ")
    resWriter.write(query)
    resWriter.write("\n")
    resWriter.write("result: ")
    resWriter.write(str(result))
    resWriter.write("\n")
    
    resWriter.close()
    
def main():

    postings = {}
    postings = get_postings_list(postings)

    print("no of dictionary terms : ", len(postings))

    query = fetch_query()

    print("query: ", query)

    tokens = process_query(query)

    # print("tokens ", tokens)

    docList = fetch_doc_list(tokens, postings)

    # print("doclist ", docList)

    result = fetch_final_document_list(docList)

    print("query search result: ", result)

    write_search_result_to_file(query, result)


if __name__ == "__main__":
    main()
