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