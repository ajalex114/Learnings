1.	Building index file  
    a.	Fetch all files in the folder ./data/  
    b.	For all files do  
        i.	Fetch the tokens (all the individual words)  
        ii.	Remove stop words (This is done based on a predefined stop words list which is included in the zip (filename : stopWords.txt))  
        iii.	Perform stemming on tokens (performed with the help of library stemming.)  
        iv.	Convert all tokens to lower case  
        v.	Map the tokens to the current document. If the token already has other documents associated with it, add the current document to the list.  
        vi.	Write tokens to file for each document (filename = document name)  
c.	Write all the indexes to file maps.txt

2.	Processing input query  
    a.	Fetch all the words/tokens in the search query  
    b.	Perform stemming on the tokens  
    c.	Convert the tokens to lower case  

3.	Perform the Search operation  
    a.	Based on the tokens generated from query, fetch all the documents list for all the tokens  
    b.	If an ‘and’ operation is provided, intersect the previous and next document list  
    c.	If an ‘or’ operation is provided, union the previous and next document list  

4.	Assumptions  
    a.	Parenthesis are not considered for search query  

5.	Minimum requirements to run  
    a.	Python should be installed  
    b.	Packages to be present or installed  
        i.	os  
        ii.	sys  
        iii. stemming – pip install stemming  
        iv.	docx – pip install python-docx (python-docx.readthedocs.io/)  

6.	Basic setup  
    a.	Documents must be placed in folder “data”  
    b.	stopWords.txt file should be placed in the executing folder  
    c.	Output will be written to the folder “output”  
    d.	Output files written are:   
        i.	Tokens generated for all documents (6 files, 1 for each document)  
        ii.	Index generated (maps.txt)  
        iii.	Search result history – All search result query and output are saved (result.txt)  

7.	How to run:  
    a.	python IR.py “<<search query goes here – in quotes>>”  
