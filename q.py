class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        
class LinkedList:
    def __init__(self):
        self.head = None
    def add(self,value):
        new_node=Node(value)
        if not self.head:
            self.head=new_node
        else:
            current=self.head
            while(current.next):
                current=current.next
            current.next=new_node        
            
        new_node.next=self.head
        self.head=new_node    


           
linked_list=LinkedList()       
print(linked_list)
linked_list.add(1)
linked_list.add(2)
linked_list.add(3)
linked_list.add(4)
linked_list.add(5)
# linked_list.print()