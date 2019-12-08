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

# Agency

## Add Agency

### `api/v1/agency` (POST)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/agency` | add a new agency. |

#### Required role

`admin`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `name`                 | _(string)_ name of agency.                 |
| `hq`              | _(string)_ hq of agency.              |
| `head`                  | _(string)_ name of the head of the agency.             |
| `email` | _(string)_ official email of the agency. |
| `phone` | _(string)_ official phone number of the agency |
| `website` | _(string)_ official website of the agency
| `description` | _(string)_ official description of the agency

#### Output Description

##### successful

```json
{
    "success": 1,
	"message": "added successfully",
	"agency": {added_agency}
}
```

##### failed

```json
{
    "success": 0,
    "message": "something went wrong"
}
```

#### Example

URL: <https://udeme.ng/api/v1/agency>

Input:

```json
{
	"name": '...',
	"hq": '...',
	"head": '...',
	"email": '...',
	"phone": '...',
	"website": '...',
	"description": '..'
}
```

Output:

```json
{
    "success": 1,
	"message": "added successfully",
	"agency": {
		"id": ...,
		"name": ...
		...
	}
}
```

## Update Agency

### `api/v1/agency` (PUT)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/agency` | update a new agency. |

#### Required role

`admin`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `id`                 | _(string)_ unique id of agency.                 |
| `name`                 | _(string)_ name of agency.                 |
| `hq`              | _(string)_ hq of agency.              |
| `head`                  | _(string)_ name of the head of the agency.             |
| `email` | _(string)_ official email of the agency. |
| `phone` | _(string)_ official phone number of the agency |
| `website` | _(string)_ official website of the agency
| `description` | _(string)_ official description of the agency

#### Output Description

##### successful

```json
{
    "success": 1,
	"message": "update successfully",
	"agency": {updated_agency}
}
```

##### failed

```json
{
    "success": 0,
    "message": "something went wrong"
}
```

#### Example

URL: <https://udeme.ng/api/v1/agency>

Input:

```json
{
	"id": '...',
	"name": '...',
	"hq": '...',
	"head": '...',
	"email": '...',
	"phone": '...',
	"website": '...',
	"description": '..'
}
```

Output:

```json
{
    "success": 1,
	"message": "updated successfully",
	"agency": {
		"id": ...,
		"name": ...
		...
	}
}
```

## Delete Agency

### `api/v1/agency` (DELETE)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/agency` | delete an agency. |

#### Required role

`admin`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `id`                 | _(string)_ unique id of agency.                 |

#### Output Description

##### successful

```json
{
    "success": 1,
	"message": "deleted successfully",
	"agency": {deleted_agency}
}
```

##### failed

```json
{
    "success": 0,
    "message": "something went wrong"
}
```

#### Example

URL: <https://udeme.ng/api/v1/agency>

Input:

```json
{
	"id": '...'
}
```

Output:

```json
{
    "success": 1,
	"message": "deleted successfully",
	"agency": {
		"id": ...,
		"name": ...
		...
	}
}
```

## Get Agency

### `api/v1/agency` (GET)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/agency` | get an agency. |

#### Required role

`any`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `id`                 | _(string)_ unique id of agency.                 |

#### Output Description

##### successful

```json
{
    data: {
		"id": ...,
		"name": ...,
		"hq": ...,
		...
	}
}
```

#### Example

URL: <https://udeme.ng/api/v1/agency>

Input:

```json
{
	"id": '...'
}
```

Output:

```json
{
    data: {
		"id": ...,
		"name": ...,
		"hq": ...,
		...
	}
}
```

## Browse Agencies

### `api/v1/agency` (GET)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/agencies` | browse agencies. |

#### Required role

`any`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |

#### Output Description

##### successful

```json
{
	{
		"total": 50,
		"per_page": 15,
		"current_page": 1,
		"last_page": 4,
		"first_page_url": "...?page=1",
		"last_page_url": "...page=4",
		"next_page_url": "...page=2",
		"prev_page_url": null,
		"path": "",
		"from": 1,
		"to": 15,
		"data":[
			"id": ...,
			"name": ...,
			"hq": ...,
			...
		]
	}
}
```

#### Example

URL: <https://udeme.ng/api/v1/agencies>

Output:

```json
{
    {
		"total": 50,
		"per_page": 15,
		"current_page": 1,
		"last_page": 4,
		"first_page_url": "...?page=1",
		"last_page_url": "...page=4",
		"next_page_url": "...page=2",
		"prev_page_url": null,
		"path": "",
		"from": 1,
		"to": 15,
		"data":[
			"id": ...,
			"name": ...,
			"hq": ...,
			...
		]
	}
}
```

# Ministry

## Add Ministry

### `api/v1/ministry` (POST)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/ministry` | add a new ministry. |

#### Required role

`admin`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `name`                 | _(string)_ name of ministry.                 |
| `hq`              | _(string)_ hq of ministry.              |
| `head`                  | _(string)_ name of the head of the ministry.             |
| `email` | _(string)_ official email of the ministry. |
| `phone` | _(string)_ official phone number of the ministry |
| `website` | _(string)_ official website of the ministry
| `description` | _(string)_ official description of the ministry

#### Output Description

##### successful

```json
{
    "success": 1,
	"message": "added successfully",
	"ministry": {added_ministry}
}
```

##### failed

```json
{
    "success": 0,
    "message": "something went wrong"
}
```

#### Example

URL: <https://udeme.ng/api/v1/ministry>

Input:

```json
{
	"name": '...',
	"hq": '...',
	"head": '...',
	"email": '...',
	"phone": '...',
	"website": '...',
	"description": '..'
}
```

Output:

```json
{
    "success": 1,
	"message": "added successfully",
	"ministry": {
		"id": ...,
		"name": ...
		...
	}
}
```

## Update Ministry

### `api/v1/ministry` (PUT)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/ministry` | update a new ministry. |

#### Required role

`admin`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `id`                 | _(string)_ unique id of ministry.                 |
| `name`                 | _(string)_ name of ministry.                 |
| `hq`              | _(string)_ hq of ministry.              |
| `head`                  | _(string)_ name of the head of the ministry.             |
| `email` | _(string)_ official email of the ministry. |
| `phone` | _(string)_ official phone number of the ministry |
| `website` | _(string)_ official website of the ministry
| `description` | _(string)_ official description of the ministry

#### Output Description

##### successful

```json
{
    "success": 1,
	"message": "update successfully",
	"ministry": {updated_ministry}
}
```

##### failed

```json
{
    "success": 0,
    "message": "something went wrong"
}
```

#### Example

URL: <https://udeme.ng/api/v1/ministry>

Input:

```json
{
	"id": '...',
	"name": '...',
	"hq": '...',
	"head": '...',
	"email": '...',
	"phone": '...',
	"website": '...',
	"description": '..'
}
```

Output:

```json
{
    "success": 1,
	"message": "updated successfully",
	"ministry": {
		"id": ...,
		"name": ...
		...
	}
}
```

## Delete Ministry

### `api/v1/ministry` (DELETE)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/ministry` | delete an ministry. |

#### Required role

`admin`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `id`                 | _(string)_ unique id of ministry.                 |

#### Output Description

##### successful

```json
{
    "success": 1,
	"message": "deleted successfully",
	"ministry": {deleted_ministry}
}
```

##### failed

```json
{
    "success": 0,
    "message": "something went wrong"
}
```

#### Example

URL: <https://udeme.ng/api/v1/ministry>

Input:

```json
{
	"id": '...'
}
```

Output:

```json
{
    "success": 1,
	"message": "deleted successfully",
	"ministry": {
		"id": ...,
		"name": ...
		...
	}
}
```

## Get Ministry

### `api/v1/ministry` (GET)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/ministry` | get an ministry. |

#### Required role

`any`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `id`                 | _(string)_ unique id of ministry.                 |

#### Output Description

##### successful

```json
{
    data: {
		"id": ...,
		"name": ...,
		"hq": ...,
		...
	}
}
```

#### Example

URL: <https://udeme.ng/api/v1/ministry>

Input:

```json
{
	"id": '...'
}
```

Output:

```json
{
    data: {
		"id": ...,
		"name": ...,
		"hq": ...,
		...
	}
}
```

## Browse Agencies

### `api/v1/ministry` (GET)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/ministries` | browse ministries. |

#### Required role

`any`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |

#### Output Description

##### successful

```json
{
	{
		"total": 50,
		"per_page": 15,
		"current_page": 1,
		"last_page": 4,
		"first_page_url": "...?page=1",
		"last_page_url": "...page=4",
		"next_page_url": "...page=2",
		"prev_page_url": null,
		"path": "",
		"from": 1,
		"to": 15,
		"data":[
			"id": ...,
			"name": ...,
			"hq": ...,
			...
		]
	}
}
```

#### Example

URL: <https://udeme.ng/api/v1/ministries>

Output:

```json
{
    {
		"total": 50,
		"per_page": 15,
		"current_page": 1,
		"last_page": 4,
		"first_page_url": "...?page=1",
		"last_page_url": "...page=4",
		"next_page_url": "...page=2",
		"prev_page_url": null,
		"path": "",
		"from": 1,
		"to": 15,
		"data":[
			"id": ...,
			"name": ...,
			"hq": ...,
			...
		]
	}
}
```

# Bookmark

## Add Bookmark

### `api/v1/bookmark` (POST)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/bookmark` | add a new bookmark. |

#### Required role

`any`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `user_id`                 | _(string)_ unique id of user.                 |
| `project_id`              | _(string)_ project to be bookmarked by user.              |

#### Output Description

##### successful

```json
{
    "success": 1,
	"message": "added successfully",
	"bookmark": {added_bookmark}
}
```

##### failed

```json
{
    "success": 0,
    "message": "something went wrong"
}
```

#### Example

URL: <https://udeme.ng/api/v1/bookmark>

Input:

```json
{
	"user_id": '...',
	"project_id": '...'
}
```

Output:

```json
{
    "success": 1,
	"message": "added successfully",
	"bookmark": {
		"id": ...,
		"name": ...
		...
	}
}
```

## Delete Bookmark

### `api/v1/bookmark` (DELETE)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/bookmark` | delete an bookmark. |

#### Required role

`admin`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `user_id`                 | _(string)_ unique id of user.                 |
| `project_id`              | _(string)_ project id to be bookmarked

#### Output Description

##### successful

```json
{
    "success": 1,
	"message": "deleted successfully",
	"bookmark": {deleted_bookmark}
}
```

##### failed

```json
{
    "success": 0,
    "message": "something went wrong"
}
```

#### Example

URL: <https://udeme.ng/api/v1/bookmark>

Input:

```json
{
	"user_id": '...',
	"project_id": '...'
}
```

Output:

```json
{
    "success": 1,
	"message": "deleted successfully",
	"bookmark": {
		"id": ...,
		"name": ...
		...
	}
}
```

# Local Government

## Update Local Government

### `api/v1/localGovernment` (PUT)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/localGovernment/{id}` | update a new local government. |

#### Required role

`admin`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `id`                 | _(string)_ unique id of localGovernment.                 |
| `latitude`                 | _(string)_ latitude of localGovernment.                 |
| `longitude`              | _(string)_ longitude of localGovernment.              |

#### Output Description

##### successful

```json
{
    "success": 1,
	"message": "update successfully",
	"localGovernment": {updated_localGovernment}
}
```

##### failed

```json
{
    "success": 0,
    "message": "something went wrong"
}
```

#### Example

URL: <https://udeme.ng/api/v1/localGovernment>

Input:

```json
{
	"id": '...',
	"latitude": '...',
	"longitude": '...'
}
```

Output:

```json
{
    "success": 1,
	"message": "updated successfully",
	"localGovernment": {
		"id": ...,
		"name": ...
		...
	}
}
```

## Browse Local Governments

### `api/v1/localGovernments` (GET)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/ministries` | browse local governments. |

#### Required role

`any`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |

#### Output Description

##### successful

```json
{
	{
		"total": 50,
		"per_page": 15,
		"current_page": 1,
		"last_page": 4,
		"first_page_url": "...?page=1",
		"last_page_url": "...page=4",
		"next_page_url": "...page=2",
		"prev_page_url": null,
		"path": "",
		"from": 1,
		"to": 15,
		"data":[
			{
				"id": ...,
				"name": ...,
				"state_id": ...,
				...
			},
			{
				"id": ...,
				"name": ...,
				"state_id": ...,
				...
			}
		]
	}
}
```

#### Example

URL: <https://udeme.ng/api/v1/ministries>

Output:

```json
{
    {
		"total": 50,
		"per_page": 15,
		"current_page": 1,
		"last_page": 4,
		"first_page_url": "...?page=1",
		"last_page_url": "...page=4",
		"next_page_url": "...page=2",
		"prev_page_url": null,
		"path": "",
		"from": 1,
		"to": 15,
		"data":[
			{
				"id": ...,
				"name": ...,
				"state_id": ...,
				...
			},
			{
				"id": ...,
				"name": ...,
				"state_id": ...,
				...
			}
		]
	}
}
```

# State

## Update State

### `api/v1/state` (PUT)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/state/{id}` | update a new state. |

#### Required role

`admin`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `id`                 | _(string)_ unique id of state.                 |
| `latitude`                 | _(string)_ latitude of state.                 |
| `longitude`              | _(string)_ longitude of state.              |

#### Output Description

##### successful

```json
{
    "success": 1,
	"message": "update successfully",
	"state": {updated_state}
}
```

##### failed

```json
{
    "success": 0,
    "message": "something went wrong"
}
```

#### Example

URL: <https://udeme.ng/api/v1/state>

Input:

```json
{
	"id": '...',
	"latitude": '...',
	"longitude": '...'
}
```

Output:

```json
{
    "success": 1,
	"message": "updated successfully",
	"state": {
		"id": ...,
		"name": ...
		...
	}
}
```

## Browse States

### `api/v1/states` (GET)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/states` | browse states. |

#### Required role

`any`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |

#### Output Description

##### successful

```json
{
	{
		"total": 50,
		"per_page": 15,
		"current_page": 1,
		"last_page": 4,
		"first_page_url": "...?page=1",
		"last_page_url": "...page=4",
		"next_page_url": "...page=2",
		"prev_page_url": null,
		"path": "",
		"from": 1,
		"to": 15,
		"data":[
			{
				"id": ...,
				"name": ...,
				"localGovernments": [...],
				...
			},
			{
				"id": ...,
				"name": ...,
				"localGovernments": [...],
				...
			}
		]
	}
}
```

#### Example

URL: <https://udeme.ng/api/v1/states>

Output:

```json
{
    {
		"total": 50,
		"per_page": 15,
		"current_page": 1,
		"last_page": 4,
		"first_page_url": "...?page=1",
		"last_page_url": "...page=4",
		"next_page_url": "...page=2",
		"prev_page_url": null,
		"path": "",
		"from": 1,
		"to": 15,
		"data":[
			{
				"id": ...,
				"name": ...,
				"localGovernments": [...],
				...
			},
			{
				"id": ...,
				"name": ...,
				"localGovernments": [...],
				...
			}
		]
	}
}
```

# Project Status

## Add Project Status

### `api/v1/projectStatus` (POST)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/projectStatus` | add a new project status. |

#### Required role

`admin`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `name`                 | _(string)_ name of projectStatus.                 |

#### Output Description

##### successful

```json
{
    "success": 1,
	"message": "added successfully",
	"projectStatus": {added_projectStatus}
}
```

##### failed

```json
{
    "success": 0,
    "message": "something went wrong"
}
```

#### Example

URL: <https://udeme.ng/api/v1/projectStatus>

Input:

```json
{
	"name": '...'
}
```

Output:

```json
{
    "success": 1,
	"message": "added successfully",
	"projectStatus": {
		"id": ...,
		"name": ...
		...
	}
}
```

## Update Project Status

### `api/v1/projectStatus/{id}` (PUT)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/projectStatus/{id}` | update a projectStatus. |

#### Required role

`admin`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `id`                 | _(string)_ unique id of projectStatus.                 |
| `name`                 | _(string)_ name of projectStatus.                 |

#### Output Description

##### successful

```json
{
    "success": 1,
	"message": "update successfully",
	"projectStatus": {updated_projectStatus}
}
```

##### failed

```json
{
    "success": 0,
    "message": "something went wrong"
}
```

#### Example

URL: <https://udeme.ng/api/v1/projectStatus>

Input:

```json
{
	"id": '...',
	"name": '...'
}
```

Output:

```json
{
    "success": 1,
	"message": "updated successfully",
	"projectStatus": {
		"id": ...,
		"name": ...
		...
	}
}
```

## Delete Project Status

### `api/v1/projectStatus` (DELETE)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/projectStatus` | delete an projectStatus. |

#### Required role

`admin`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `id`                 | _(string)_ unique id of projectStatus.                 |

#### Output Description

##### successful

```json
{
    "success": 1,
	"message": "deleted successfully",
	"projectStatus": {deleted_projectStatus}
}
```

##### failed

```json
{
    "success": 0,
    "message": "something went wrong"
}
```

#### Example

URL: <https://udeme.ng/api/v1/projectStatus>

Input:

```json
{
	"id": '...'
}
```

Output:

```json
{
    "success": 1,
	"message": "deleted successfully",
	"projectStatus": {
		"id": ...,
		"name": ...
		...
	}
}
```

## Get Project Status

### `api/v1/projectStatus` (GET)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/projectStatus` | get an projectStatus. |

#### Required role

`any`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `id`                 | _(string)_ unique id of projectStatus.                 |

#### Output Description

##### successful

```json
{
    data: {
		"id": ...,
		"name": ...
		...
	}
}
```

#### Example

URL: <https://udeme.ng/api/v1/projectStatus>

Input:

```json
{
	"id": '...'
}
```

Output:

```json
{
    data: {
		"id": ...,
		"name": ...,
		...
	}
}
```

## Browse Project Statuses

### `api/v1/projectStatuses` (GET)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/projectStatuses` | browse projectStatuses. |

#### Required role

`any`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |

#### Output Description

##### successful

```json
{
	{
		"data":[
			{
				"id": ...,
				"name": ...,
				...
			},
			{
				"id": ...,
				"name": ...,
				...
			}
		]
	}
}
```

#### Example

URL: <https://udeme.ng/api/v1/projectStatuses>

Output:

```json
{
    {
		"data":[
			{
				"id": ...,
				"name": ...,
				...
			},
			{
				"id": ...,
				"name": ...,
				...
			}
		]
	}
}
```

# Project Type

## Add Project Type

### `api/v1/projectType` (POST)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/projectType` | add a new project type. |

#### Required role

`admin`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `name`                 | _(string)_ name of projectType.                 |

#### Output Description

##### successful

```json
{
    "success": 1,
	"message": "added successfully",
	"projectType": {added_projectType}
}
```

##### failed

```json
{
    "success": 0,
    "message": "something went wrong"
}
```

#### Example

URL: <https://udeme.ng/api/v1/projectType>

Input:

```json
{
	"name": '...'
}
```

Output:

```json
{
    "success": 1,
	"message": "added successfully",
	"projectType": {
		"id": ...,
		"name": ...
		...
	}
}
```

## Update Project Type

### `api/v1/projectType/{id}` (PUT)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/projectType/{id}` | update a projectType. |

#### Required role

`admin`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `id`                 | _(string)_ unique id of projectType.                 |
| `name`                 | _(string)_ name of projectType.                 |

#### Output Description

##### successful

```json
{
    "success": 1,
	"message": "update successfully",
	"projectType": {updated_projectType}
}
```

##### failed

```json
{
    "success": 0,
    "message": "something went wrong"
}
```

#### Example

URL: <https://udeme.ng/api/v1/projectType>

Input:

```json
{
	"id": '...',
	"name": '...'
}
```

Output:

```json
{
    "success": 1,
	"message": "updated successfully",
	"projectType": {
		"id": ...,
		"name": ...
		...
	}
}
```

## Delete Project Type

### `api/v1/projectType` (DELETE)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/projectType` | delete an projectType. |

#### Required role

`admin`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `id`                 | _(string)_ unique id of projectType.                 |

#### Output Description

##### successful

```json
{
    "success": 1,
	"message": "deleted successfully",
	"projectType": {deleted_projectType}
}
```

##### failed

```json
{
    "success": 0,
    "message": "something went wrong"
}
```

#### Example

URL: <https://udeme.ng/api/v1/projectType>

Input:

```json
{
	"id": '...'
}
```

Output:

```json
{
    "success": 1,
	"message": "deleted successfully",
	"projectType": {
		"id": ...,
		"name": ...
		...
	}
}
```

## Get Project Type

### `api/v1/projectType` (GET)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/projectType` | get an projectType. |

#### Required role

`any`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `id`                 | _(string)_ unique id of projectType.                 |

#### Output Description

##### successful

```json
{
    data: {
		"id": ...,
		"name": ...
		...
	}
}
```

#### Example

URL: <https://udeme.ng/api/v1/projectType>

Input:

```json
{
	"id": '...'
}
```

Output:

```json
{
    data: {
		"id": ...,
		"name": ...,
		...
	}
}
```

## Browse Project Typees

### `api/v1/projectTypees` (GET)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/projectTypees` | browse projectTypees. |

#### Required role

`any`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |

#### Output Description

##### successful

```json
{
	{
		"data":[
			{
				"id": ...,
				"name": ...,
				...
			},
			{
				"id": ...,
				"name": ...,
				...
			}
		]
	}
}
```

#### Example

URL: <https://udeme.ng/api/v1/projectTypes>

Output:

```json
{
    {
		"data":[
			{
				"id": ...,
				"name": ...,
				...
			},
			{
				"id": ...,
				"name": ...,
				...
			}
		]
	}
}
```

# Project 

## Add Project 

### `api/v1/project` (POST)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/project` | add a new project . |

#### Required role

`admin`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `title`                 | _(string)_ title of project.                 |
| `description`                 | _(string)_ description of project.                 |
| `allocation`                 | _(integer)_ allocation for project.                 |
| `agency_id`                 | _(integer)_ id of project.                 |
| `ministry_id`                 | _(integer)_ ministry of project.                 |
| `date_commissioned`                 | _(string)_ commissioning date of project.                 |
| `location_type`                 | _(string)_ location type of project.(state or localGovernment)              |
| `location_id`                 | _(integer)_ id of location of project.                 |
| `project_status_id`                 | _(integer)_ status id of project.                 |
| `user_id`                 | _(string)_ id of user creating project.                 |

#### Output Description

##### successful

```json
{
    "success": 1,
	"message": "added successfully",
	"project": {added_project}
}
```

##### failed

```json
{
    "success": 0,
    "message": "something went wrong"
}
```

#### Example

URL: <https://udeme.ng/api/v1/project>

Input:

```json
{
	"title": '...',
	"description": '...',
	"allocation": '...',
	"agency_id": '...',
	"ministry_id": '...',
	"date_commissioned": '...',
	"location_type": '...',
	"location_id": '...',
	"project_status_id": '...',
	"user_id": '...'
}
```

Output:

```json
{
    "success": 1,
	"message": "added successfully",
	"project": {
		"id": ...,
		"title": '...',
		"description": '...',
		"allocation": '...',
		"agency_id": '...',
		"ministry_id": '...',
		"date_commissioned": '...',
		"location_type": '...',
		"location_id": '...',
		"project_status_id": '...',
		"user_id": '...'
	}
}
```

## Update Project 

### `api/v1/project/{id}` (PUT)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/project/{id}` | update a project. |

#### Required role

`admin`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `id`                 | _(string)_ unique id of project.                 |
| `title`                 | _(string)_ title of project.                 |
| `description`                 | _(string)_ description of project.                 |
| `allocation`                 | _(integer)_ allocation for project.                 |
| `agency_id`                 | _(integer)_ id of project.                 |
| `ministry_id`                 | _(integer)_ ministry of project.                 |
| `date_commissioned`                 | _(string)_ commissioning date of project.                 |
| `location_type`                 | _(string)_ location type of project.(state or localGovernment)              |
| `location_id`                 | _(integer)_ id of location of project.                 |
| `project_status_id`                 | _(integer)_ status id of project.                 |
| `user_id`                 | _(string)_ id of user creating project.                 |

#### Output Description

##### successful

```json
{
    "success": 1,
	"message": "update successfully",
	"project": {updated_project}
}
```

##### failed

```json
{
    "success": 0,
    "message": "something went wrong"
}
```

#### Example

URL: <https://udeme.ng/api/v1/project>

Input:

```json
{
	"id": '...',
	"title": '...',
	"description": '...',
	"allocation": '...',
	"agency_id": '...',
	"ministry_id": '...',
	"date_commissioned": '...',
	"location_type": '...',
	"location_id": '...',
	"project_status_id": '...',
	"user_id": '...'
}
```

Output:

```json
{
    "success": 1,
	"message": "updated successfully",
	"project": {
		"id": '...',
		"title": '...',
		"description": '...',
		"allocation": '...',
		"agency_id": '...',
		"ministry_id": '...',
		"date_commissioned": '...',
		"location_type": '...',
		"location_id": '...',
		"project_status_id": '...',
		"user_id": '...'
	}
}
```

## Delete Project 

### `api/v1/project` (DELETE)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/project` | delete a project. |

#### Required role

`admin`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `id`                 | _(string)_ unique id of project.                 |

#### Output Description

##### successful

```json
{
    "success": 1,
	"message": "deleted successfully",
	"project": {
		"id": '...',
		"title": '...',
		"description": '...',
		"allocation": '...',
		"agency_id": '...',
		"ministry_id": '...',
		"date_commissioned": '...',
		"location_type": '...',
		"location_id": '...',
		"project_status_id": '...',
		"user_id": '...'
	}
}
```

##### failed

```json
{
    "success": 0,
    "message": "something went wrong"
}
```

#### Example

URL: <https://udeme.ng/api/v1/project>

Input:

```json
{
	"id": '...'
}
```

Output:

```json
{
    "success": 1,
	"message": "deleted successfully",
	"project": {
		"id": '...',
		"title": '...',
		"description": '...',
		"allocation": '...',
		"agency_id": '...',
		"ministry_id": '...',
		"date_commissioned": '...',
		"location_type": '...',
		"location_id": '...',
		"project_status_id": '...',
		"user_id": '...'
	}
}
```

## Get Project 

### `api/v1/project/{id}` (GET)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/project/{id}` | get a project. |

#### Required role

`any`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `id`                 | _(integer)_ unique id of project.                 |

#### Output Description

##### successful

```json
{
    data: {
		"id": ...,
		"name": ...
		...
	}
}
```

#### Example

URL: <https://udeme.ng/api/v1/project>

Input:

```json
{
	"id": '...'
}
```

Output:

```json
{
    data: {
		"id": '...',
		"title": '...',
		"description": '...',
		"allocation": '...',
		"agency_id": '...',
		"ministry_id": '...',
		"date_commissioned": '...',
		"location_type": '...',
		"location_id": '...',
		"project_status_id": '...',
		"user_id": '...'
	}
}
```

## Browse Project es

### `api/v1/projects` (GET)

| URL               | Function             |
| ----------------- | -------------------- |
| `api/v1/projects` | browse projects. |

#### Required role

`any`.

#### Input Description

| Field                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `filter`                 | _(string)_ filter projects result by `agency`, `ministry`, `state`, `localGovernment`, `projectStatus`.                 |
| `filterId`                 | _(integer)_ id of the filter: `agency_id`, `ministry_id`, `state_id`, `localGovernment_id`, `project_status_id`.                 |

#### Output Description

##### successful

```json
{
	{
		"total": 50,
		"per_page": 15,
		"current_page": 1,
		"last_page": 4,
		"first_page_url": "...?page=1",
		"last_page_url": "...page=4",
		"next_page_url": "...page=2",
		"prev_page_url": null,
		"path": "",
		"from": 1,
		"to": 15,
		"data":[
			{
				"id": '...',
				"title": '...',
				"description": '...',
				"allocation": '...',
				"agency_id": '...',
				"ministry_id": '...',
				"date_commissioned": '...',
				"location_type": '...',
				"location_id": '...',
				"project_status_id": '...',
				"user_id": '...'
			},
			{
				"id": '...',
				"title": '...',
				"description": '...',
				"allocation": '...',
				"agency_id": '...',
				"ministry_id": '...',
				"date_commissioned": '...',
				"location_type": '...',
				"location_id": '...',
				"project_status_id": '...',
				"user_id": '...'
			},
			...
		]
	}
}
```

#### Example

URL: <https://udeme.ng/api/v1/projects/agency/24>

Output:

```json
{
    {
		"total": 50,
		"per_page": 15,
		"current_page": 1,
		"last_page": 4,
		"first_page_url": "...?page=1",
		"last_page_url": "...page=4",
		"next_page_url": "...page=2",
		"prev_page_url": null,
		"path": "",
		"from": 1,
		"to": 15,
		"data":[
			{
				"id": '...',
				"title": '...',
				"description": '...',
				"allocation": '...',
				"agency_id": '...',
				"ministry_id": '...',
				"date_commissioned": '...',
				"location_type": '...',
				"location_id": '...',
				"project_status_id": '...',
				"user_id": '...'
			},
			{
				"id": '...',
				"title": '...',
				"description": '...',
				"allocation": '...',
				"agency_id": '...',
				"ministry_id": '...',
				"date_commissioned": '...',
				"location_type": '...',
				"location_id": '...',
				"project_status_id": '...',
				"user_id": '...'
			},
			...
		]
	}
}
```