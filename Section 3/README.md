# 8. How does the internet works
-1. IP Address
    Every device connected to the internet has an IP address — like a home address. It tells where to   send and receive data.It tells where to send and receive data.

-2. Data Packets
    Data packets are a way to send data from one computer to another. A data packet is a set of data sent from one computer to another computer.
    Each packet has a sender IP and a receiver IP — like a FedEx parcel with to/from addresses.

-3. DNS (Domain Name System)
    A DNS server is a computer that stores a list of computer names and their IP addresses — like a phone book. When you type a website name into your computer, the DNS server looks up the website's address. Humans use names like google.com or wikipedia.org. Computers use IP addresses like 8.8.8.8 or 1.1.1.1.

-4. Routers and ISPs
    A router is a device that connects multiple networks together(Example: your home router). An ISP is a company that provides internet services. They connect your router to the internet.

-5. HTTP Protocol and HTTPS
    HTTP is the protocol that the browser uses to send and receive data from the server. HTTPS is the secure version of HTTP. It uses SSL (Secure Socket Layer) to encrypt data sent between the browser and the server. It also uses TLS (Transport Layer Security) to encrypt data sent between the server and the browser. 

-6. Server and Client
    A server is a computer that provides services to other computers. A client is a computer that requests services from a server. When a client makes a request, the server processes the request and sends a response pcakets back to the client.

-7. Returning Data
    When a client makes a request, the server processes the request and sends a response back to the client through routers → your ISP → your device and your browser reassembles packets and shows the final webpage. 
# 9. A big picture of web application
Internet = Global delivery system for data packets

IP address → destination address

DNS → finds the address

Routers → deliver the data

Servers → send responses

Browser → shows you the content
# 10. Frontend backend and APIs
Frontend = User interface → HTML, CSS, React (JS) or other frameworks

Backend = Server → PHP, Python, Java or JS and Databases 

API = Application programming interface( APIs is a way to connect frontend and backend mostly json is used to connect them as there can be senarios as frontend and backend can be different languages and frameworks. So it is nice to use json to connect them. )
