# Fullstack Concepts

## HTTP

Client request the server for resource the server sends back the resource with TCP packets.
    
**TCP Packets** contains the below component:

- *IP Header*: comtains data regarding data,
- *Data*: payload of an IP package
    - *TCP Header*,
    - *TCP Payload*
        - It is chunks of data
        - It holds 
            - *HTTP Headers* &
            - *HTTP Body*

## DNS (Domain Name Server)

DNS stays in the middle of Client & Server. It matches the Server IP Address with domain. Client sends the lookup request to the DNS, it servers with IP address then Client request the resource with the IP address.

When the Client fetched the Document in the response header there is something called **Remote Address** attribute which gives the IP address of the server.

If we type `whois <URL>` we will get the DNS information regarding the mentioned *URL*, which is backed by **IANA** an org to maintain the DNS for World Web.

## IP (Internet Protocol)

It is present in the **Network Layer**.
IP packet traverse over the IP Network then, each IP Packet holds the *Source & Destination IP Address*, which tells from which server to which server this IP has transfered.

*IPv4*: It is more expensive since there is no more space to find much IPs as per the need. It is **8 bit Protocol**.
*IPv6*: It is started adopted in the market, which is **16 bit Protocol**.

## HTTP Caching

It uses *ETag* to invalidate the cache.
Browser cache stays between request and Server response to handle the HTTP cache.
It is handled with *max-age* attribute, where in it tells the browser we can cache the resource untill the time period, we are also having *Age* attribute which tell how the resource is being stayed in the browser, which should be less than the max-age.

If the *Age* > *max-age*, then Browser will try to **re-invalidate** the resource with server using *ETag*.

## TLS Encryption

It is used to prevent the **Man In The Middle Attack**.
Here comes the *HTTPs* Protocol.
It starts by initiating the **Three Way Handshake**. which involves,
- Asymmetric Encryption,
    - C: sends SYK
    - S: Receives SYK, Sends ACK
    - C: Receives ACK
    - C: Sends request to initiate the connection
    - S: sends the encrypted message and changes the cipher
- Symmetric Encryption
    - C: started requesting for App data,
    - S: responds with App data.