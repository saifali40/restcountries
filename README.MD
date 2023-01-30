# About this Project
This project is a resource for accessing information about countries around the world through a REST API (Application Programming Interface). It is inspired by the website restcountries.com and is freely available for anyone to use. The project is open source, meaning that the source code is publicly available and can be modified by anyone. It allows users to retrieve data about each country, including details about its geography, population, and more, through simple API calls. Whether you're a developer looking to build a application that uses country data or just someone interested in learning more about different countries, this project is a useful resource.

# REST Countries
https://country.saifali.in/api

# Contributing
If you'd like to contribute to this project, we welcome your help! You can make changes to the relevant files and then create a new merge request to submit your updates. Any assistance is appreciated. Thank you for considering contributing to the project.

# Endpoints
The following REST endpoints are available for you to use to search for information about countries. You can use these endpoints to access data about different countries through simple API calls.

## All
``` html
https://country.saifali.in/api/v1
```

## Name
You can search for countries using their common name, cca2 code, cca3 code, or fifa code. Simply enter the relevant term in the search field to find the country you're looking for.

``` html
https://country.saifali.in/api/v1/{name|cca2|cca3|fifa}
```
#### exmple
``` html
https://country.saifali.in/api/v1/ind
```
``` html
https://country.saifali.in/api/v1/in
```
``` html
https://country.saifali.in/api/v1/india
```

## Search
These are fields that can be used to search for information about countries. Here is a brief description of each field:

- `name.common`: The common name of the country.
- `name.official`: The official name of the country.
- `cca2`: The two-letter code assigned to the country by the International Organization for Standardization (ISO).
- `cca3`: The three-letter code assigned to the country by the ISO.
- `independent`: Whether the country is independent or not.
- `capital`: The capital city of the country.
- `region`: The region of the world in which the country is located.
- `subregion`: The subregion of the region in which the country is located.
- `continents`: The continents on which the country is located.
- `languages`: The languages spoken in the country.
- `timezones`: The time zones observed in the country.
- `unMember`: Whether the country is a member of the United Nations or not.
- `altSpellings`: Alternative spellings of the country's name.
- `borders`: The countries that share a border with the country. the query should be `cca3`

These fields can be used to search for specific information about a country or to compare different countries.

``` html
https://country.saifali.in/api/v1/search?{field}={value}
```

#### exmple
``` html
https://country.saifali.in/api/v1/search?name.common=india
```

This API will return search results that have a score of greater than 0.6. The higher the score, the more relevant the search result is considered to be.


| Token     	| Match type                 	| Description                        	| Exmpale Apis                                                 	|
|-----------	|----------------------------	|------------------------------------	|--------------------------------------------------------------	|
| jscript   	| fuzzy-match                	| Items that fuzzy match jscript     	| https://country.saifali.in/api/v1/search?name.common=india   	|
| =india       	| exact-match                	| Items that are india               	| https://country.saifali.in/api/v1/search?name.common==india  	|
| 'india       	| include-match              	| Items that include india           	| https://country.saifali.in/api/v1/search?name.common='india  	|
| !india     	| inverse-exact-match        	| Items that do not include india    	| https://country.saifali.in/api/v1/search?name.common=!india  	|
| ^india     	| prefix-exact-match         	| Items that start with india        	| https://country.saifali.in/api/v1/search?name.common=^india  	|
| !^india    	| inverse-prefix-exact-match 	| Items that do not start with india 	| https://country.saifali.in/api/v1/search?name.common=!^india 	|
| india$      	| suffix-exact-match         	| Items that end with india          	| https://country.saifali.in/api/v1/search?name.common=india$  	|
| !india$     	| inverse-suffix-exact-match 	| Items that do not end with india   	| https://country.saifali.in/api/v1/search?name.common=!india$ 	|




## Querying

If the search API did not work to your satisfaction, we have alternative, faster and more efficient querying endpoints available for you to use.
``` html
https://country.saifali.in/api/v1/query?query=[query]
```

#### exmple
getting by area
``` html
https://country.saifali.in/api/v1/query?query=[*area=3287590]
```

### Note:
Popualtion is not accurate, as people are hard working on it, its hard to keep track and keep the repository up to dated.


## Similar projects
* [REST Countries]
* [Countries of the world]
* [REST Countries Node.js]
* [REST Countries Ruby]
* [REST Countries Go]
* [REST Countries Python]
* [world-currencies]


License
=======
[Mozilla Public License] MPL 2.0


[world-currencies]: https://github.com/wiredmax/world-currencies
[REST Countries Node.js]: https://github.com/aredo/restcountries
[REST Countries Ruby]: https://github.com/davidesantangelo/restcountry
[REST Countries Go]: https://github.com/alediaferia/gocountries
[REST Countries Python]: https://github.com/SteinRobert/python-restcountries
[Countries of the world]: http://countries.petethompson.net
[REST Countries]: https://gitlab.com/amatos/rest-countries
[Mozilla Public License]: https://www.mozilla.org/en-US/MPL/2.0/

