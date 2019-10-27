'use strict'

const fs = require('fs')
const path = require('path')
const EasyGraphQLLoadTester = require('easygraphql-load-tester')

const fiasSchema = fs.readFileSync(path.join(__dirname, 'schema.gql'), 'utf8')


const args = {
	addressByGuid: {
		aoGuid: '1ccfdc3c-be0f-4e42-ab4d-98f90de972d9'
	}
}


const easyGraphQLLoadTester = new EasyGraphQLLoadTester(fiasSchema, args)

const options = {
  queryFile: true,
  vus: 10,
  duration: '10s',
  out: [
	  "influxdb=http://localhost:8086/k6"
  ]
}


easyGraphQLLoadTester.k6('k6.js', options)
