# URL Shortener Microservice

You can pass a URL as a parameter and this microservice will produce and return a shortened URL in the JSON response.
If you pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
When you visit the shortened URL, it will redirect you to your original link.

List of Available Urls: 
https://jdg-short.herokuapp.com/urls 
Example Input: 
https://jdg-short.herokuapp.com/new/https://www.google.com 
Example Output: 
{ "longUrl": "https://www.google.com", "shortUrl": "BJaZZgT9" }

Usage: 
https://jdg-short.herokuapp.com/Skc6Dka5
