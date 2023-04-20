# URL Shortener Microservice

1. You can pass a URL as a parameter and this microservice will produce and return a shortened URL in the JSON response.
2. If you pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
3. When you visit the shortened URL, it will redirect you to your original link.

List of Available Urls: 

https://url-shortener-ms.netlify.app/urls 


Example Input: 

https://url-shortener-ms.netlify.app/new/https://www.google.com 


Example Output: 

{ "longUrl": "https://www.google.com", "shortUrl": "BJaZZgT9" }


Usage: 

https://url-shortener-ms.netlify.app/Skc6Dka5
