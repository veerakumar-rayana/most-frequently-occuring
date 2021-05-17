Only logical for printing the top n most frequently occurring words in file but NOT used REACT JS.
Find the top N most frequently occurring words in this file.
first it reads the file.
The working of the algorithm is as follows.
Read all words one by one. For every word, insert it into Trie. Increase the counter of the word, if already exists. Now, we need to insert this word in min heap also. For insertion in min heap, 3 cases arise:
The word is already present. We just increase the corresponding frequency value in min heap and call minHeapify() for the index obtained by “indexMinHeap” field in Trie. When the min heap nodes are being swapped, we change the corresponding minHeapIndex in the Trie. Remember each node of the min heap is also having pointer to Trie leaf node.

2. The minHeap is not full. we will insert the new word into min heap & update the root node in the min heap node & min heap index in Trie leaf node. Now, call buildMinHeap().

3. The min heap is full. Two sub-cases arise.
….3.1 The frequency of the new word inserted is less than the frequency of the word stored in the head of min heap. Do nothing.

….3.2 The frequency of the new word inserted is greater than the frequency of the word stored in the head of min heap. Replace & update the fields. Make sure to update the corresponding min heap index of the “word to be replaced” in Trie with -1 as the word is no longer in min heap.

4. Finally, Min Heap will have the k most frequent words of all words present in given file. So we just need to print all words present in Min Heap.
5. Print the top most n occuring words.  
