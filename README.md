Sure, here's a standard README.md for the URL Shortener Microservice:

# URL Shortener Microservice

This microservice allows you to pass a URL as a parameter and it will generate and return a shortened URL in the JSON response. If an invalid URL is passed that doesn't follow the valid `http://www.example.com` format, the JSON response will contain an error instead. When you visit the shortened URL, it will redirect you to your original link.

## Installation

To install and run this microservice locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/JD-Gonz/urlShortener.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```
4. The server will be running at `http://localhost:8080`.

## Usage

To use this microservice, make a POST request to `http://localhost:8080/new/` with a `longUrl` parameter in the request body. The response will be a JSON object containing the original `longUrl` and the generated `shortUrl`.

Example input:
```
http://localhost:8080/new/https://www.google.com
```

Example output:
```
{
  "longUrl": "https://www.google.com",
  "shortUrl": "BJaZZgT9"
}
```

You can also view a list of available URLs by visiting `http://localhost:8080/urls`.

To use a shortened URL, simply visit the URL in your browser. For example:
```
http://localhost:8080/Skc6Dka5
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.