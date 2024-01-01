# MERN-Auth App

This is a simple application to demonstrate authentication in a MERN aopplication using JSON Web Tokens, popularly known as JWTs.

## Getting Started

Before getting started, this project needs you to have node JS and MongoDB installed. Head over to [Node JS](https:www.nodejs.org/en/download) to download and install Node, and to [MngoDB](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/) to install MongoDB. Once done, follow the steps below:

1. To get started, fork and clone this reporitory. There are two parts of the application: `backend` and `frontend`.
2. Make sure you have MongoDB server running in the background. To do this, open a terminal instance and type in `sudo systemctl start mongod`.
3. Navigate to the `back-end` directory and run `npm install` to install all the necessary packages/dependencies.
4. To get the server started, run `npm run dev`. This will start the server on `http://127.0.0.1:8080/`.
5. Next, navigate to the `front-end` directory in a separate terminal and run `npm install` to install all the necessary packages. 
6. To start the front end server, run `npm start` and this will start up the server on `http://127.0.0.1:3000`.

## API Endpoints Available

Once the back end server has started, these are the various endpoints available.

### 1. Sign Up

This is the endpoint for creating a new account/ signing up

```http
POST /api/signup
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `username` | `string` | **Required**. A username |
| `email` | `string` | **Required**, **unique**. An email |
| `password` | `string` | **Required**. A password |

#### Responses

```javascript
{
    "token": string,
}
```

#### Status Codes

| Status Code | Description |
| :--- | :--- |
| 201 | `CREATED` |
| 409 | `CONFLICT` |
| 500 | `INTERNAL SERVER ERROR` |

### 2. Log In

This is the endpoint for logging in a user based on existing credentials.

```http
POST /api/login
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `email` | `string` | **Required**. Your email address |
| `password` | `string` | **Required**. Your password |

#### Responses

```javascript
{
    "token": string
}
```

#### Status Codes

| Status Code | Description |
| :-- | :-- |
| 200 | `OK` |
| 401 | `UNAUTHORIZED` |
| 500 | `INTERNAL SERVER ERROR` |


## Technollogies Used

1. React
2. Node
3. Express
4. Mongo DB

## Author

Joel Nyongesa