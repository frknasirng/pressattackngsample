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