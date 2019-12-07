# Registration and Authentication

## Register

### `api/v1/register` (POST)

| URL                    | Function             |
| ---------------------- | -------------------- |
| `api/v1/register`      | Register a new user. |

#### Required role

`none`.

#### Input Description

| Field                     | Description                                                             |
| ------------------------- | ----------------------------------------------------------------------- |
| `email`                   | *(string)* Email of new user.                                           |
| `password`                | *(string)* Password of new user.                                        |
| `name`               | *(string)* Full name of new user.                                       |
| `password_confirmation`                   | *(string)* Password confirmation of new user.   |

Password re-entering and comparison is carried out at server level. However, such task is also advised to be carried out at the client level.

<!-- Client should prevent automated registrations with a CAPTCHA.

After successful registration, user can not immediately log in as the user needs to activate their account via email first. User will be send an email with a link to `activation_url` and the following GET parameters:

* `email` -- user's email to be used as a parameter to `activate`;
* `activation_token` -- user's activation token to be used as a parameter to `activate`. -->

#### Output Description

##### Registration was successful

```json
{
    "token": {token}
}
```

After successful registraction, a user token is returned that can be used to make successful api calls on behalf of the user.

##### Registration has failed

```json
{
    "error": "Reason why the user can not be registered (e.g. duplicate email)."
}
```

#### Example

URL: <https://udeme.ng/api/v1/register>

Input:

```json
{
    "email": "frknasir@yahoo.com",
	"password": "qwerty1",
	"password_confirmation": "qwerty1",
    "name": "Faruk Nasir"
}
```

Output:

```json
{
    "success": 1
}
```

## Reset password

### `api/v1/password/sendResetLink` (POST)

| URL                                    | Function                                                 |
| -------------------------------------- | -------------------------------------------------------- |
| `api/v1/password/sendResetLink` | Email a link to user to be used to reset their password. |

#### Required role

`any`.

#### Input Description

| Field                | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| `email`              | *(string)* Email of user to send the password reset link to. |

User will be send an email with a link to reset password and the following GET parameters:

* `email` -- user's email to be used as a parameter to `reset password`;
* `token` -- user's password reset token to be used as a parameter to `reset password`.

#### Output Description

##### Sending the password reset link was successful

```json
{
	"success": 1,
	"message": "Token created successfully"
}
```

After successful send password reset API call, user is sent an email inviting him to open a link `reset url`.


##### Sending the password reset link has failed

an empty response with a 200 code 

#### Example

URL: <https://udeme.ng/api/v1/password/sendResetLink>

Input:

```json
{
    "email": "frknasir@yahoo.com"
}
```

Output:

```json
{
    "success": 1,
	"message": "Token created successfully"
}
```

### `api/v1/password/confirmPasswordResetToken` (POST)

| URL                          | Function                                                                                        |
| ---------------------------- | ----------------------------------------------------------------------------------------------- |
| `api/v1/password/confirmPasswordResetToken` | Confirms user password reset token. |

#### Required role

`any`.

#### Input Description

| Field                  | Description                                        |
| ---------------------- | -------------------------------------------------- |
| `email`                | *(string)* Email of user to reset the password to. |
| `token` | *(string)* Password reset token sent by email.     |

#### Output Description

##### Confirming user's password reset token was successful

```json
{
	"valid": true,
	"message": "token is valid"
}
```

##### Confirm user's password reset token has failed

```json
{
    "valid": false,
	"message": "token is invalid"
}
```

#### Example

URL: <https://udeme.ng/api/v1/password/confirmPasswordResetToken>

Input:

```json
{
    "email": "foo@bar.baz",
    "token": "3a0e7de3ba8e19227847b59e43f2ce54c98ec897"
}
```

Output:

```json
{
	"success": 1,
	"message": "token is valid"
}
```

### `api/v1/password/reset` (POST)

| URL                          | Function                                                                                        |
| ---------------------------- | ----------------------------------------------------------------------------------------------- |
| `api/v1/password/reset` | Reset user's password using their password reset token send by `password/sendResetLink`. |

#### Required role

`any`.

#### Input Description

| Field                  | Description                                        |
| ---------------------- | -------------------------------------------------- |
| `email`                | *(string)* Email of user to reset the password to. |
| `password` | *(string)* New password.     |
| `password_confirmation`         | *(string)* New password confirmation.                    |

#### Output Description

##### Resetting the user's password was successful

```json
{
	"success": 1,
	"message": "Password changed successfully"
}
```

##### Resetting the user's password has failed

```json
{
	"success": 0,
    "message": "An error occurred"
}
```

#### Example

URL: <https://udeme.ng/api/v1/password/reset>

Input:

```json
{
    "email": "foo@bar.baz",
    "password": "qwerty1",
    "password_confirmation": "qwerty1"
}
```

Output:

```json
{
    "success": 1,
    "message": "Password changed successfully"
}
```


## Log in

### `api/v1/login` (POST)

| URL                 | Function                                                                       |
| ------------------- | ------------------------------------------------------------------------------ |
| `api/v1/login` | Authenticate user with email + password and return user's API key and user. |


#### Required role

`any`.

#### Input Description

| Parameter  | Notes                                 |
| ---------- | ------------------------------------- |
| `email`    | *(string)* Email address of the user. |
| `password` | *(string)* Password of the user.      |

#### Output Description

##### User was found

```json
{
    "success": 1,
    "token": "dsdfsdfsd...."
}
```

##### User was not found

```json
{
	"success": "0",
	"message": "an error occurred...try again"
}
```

#### Example

URL: <https://udeme.ng/api/v1/login>

Input:

```json
{
    "email": "user@email.com",
    "password": "qwerty1"
}
```

Output:

```json
{
    "success": 1,
    "token": "dsdfsdfsd...."
}
```

The token return can be used to retrieve the profile of authenticated user, and also make api calls on behalf of the user


## User Profile

### `api/v1/user` (GET)

| URL                     | Function                                              |
| ----------------------- | ----------------------------------------------------- |
| `api/v1/user`   | Return user information about the requesting user. |

#### Required role

None.

#### Output Description

```json
{
    "bookmarks": ["(array) of projects this user has bookmarked"],
    "created_at": "(string) 05 Dec 2019 - 10:39:07",
    "email": "(string) User's email",
    "id": "(string) User's id.",
	"name": "(string) User's full name.",
	"permissions": ["(array) of permissions"],
    "projects_created_count": "(integer) number of projects user has added.",
    "roles": "(array) User's roles",
    "updated_at": "(string) 05 Dec 2019 - 10:39:07"
}
```

#### Example

URL: <https://udeme.ng/api/v1/user>

```json
{
    "bookmarks": [],
    "created_at": "05 Dec 2019 - 10:39:07",
    "email": "frknasir@yahoo.com",
    "id": "232",
	"name": "Faruk Nasir",
	"permissions": [],
    "projects_created_count": 45,
    "roles": [],
    "updated_at": "05 Dec 2019 - 10:39:07"
}
```


### `api/v1/user/{id}/changePassword` (PUT)

| URL                           | Function                |
| ----------------------------- | ----------------------- |
| `api/v1/user/{id}/changePassword` | Change user's password. |

#### Required role

None.

#### Input Description

| Field          | Description                     |
| -------------- | ------------------------------- |
| `id` | *(string)* User's id. |
| `password` | *(string)* User's new password. |

Asking user to re-enter password and comparing the two values is left to the client.

#### Output Description

##### Changing the user's password was successful

```json
{
    "success": 1,
	"message": "user password changed successfully"
}
```

##### Changing the user's password has failed

```json
{
    "success": 0,
	"message": "an error occurred...try again"
}
```

#### Example

URL: <https://udeme.ng/api/v1/user/{id}/changePassword>

Input:

```json
{
    "id": 1,
    "password": "qwerty1",
}
```

Output:

```json
{
    "success": 1,
	"message": "user password changed successfully"
}
```