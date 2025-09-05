# API-Run-B: Minimal Express API

A minimal Node.js Express API with GET and POST endpoints for managing items.

## Installation

```bash
# Navigate to the project directory
cd api-run-b

# Install dependencies
npm install
```

## Running the Server

```bash
# Start the server
npm start
```

The server will start on port 3000 by default. You can access it at http://localhost:3000.

## API Endpoints

### GET /items

Returns all items.

**Example:**

```bash
curl http://localhost:3000/items
```

**Response:**

```json
[
  { "id": 1, "name": "Item 1" },
  { "id": 2, "name": "Item 2" }
]
```

### POST /items

Creates a new item. Requires a JSON body with a non-empty `name` string.

**Example (Valid Request):**

```bash
curl -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{"name": "New Item"}'
```

**Response (Success - 201 Created):**

```json
{ "id": 3, "name": "New Item" }
```

**Example (Invalid Request):**

```bash
curl -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{"name": ""}'
```

**Response (Error - 400 Bad Request):**

```json
{ "error": "Name must be a non-empty string" }
```

## Windows PowerShell Curl Examples

If you're using Windows PowerShell, use these curl commands instead:

```powershell
# GET request
Invoke-RestMethod -Uri http://localhost:3000/items -Method Get

# POST request (valid)
Invoke-RestMethod -Uri http://localhost:3000/items -Method Post -ContentType "application/json" -Body '{"name":"New Item"}'

# POST request (invalid)
Invoke-RestMethod -Uri http://localhost:3000/items -Method Post -ContentType "application/json" -Body '{"name":""}'
```