# NodeJs TypeScript with App Functions
Simple Typescript CRUD that manages the appointments that are saved in the Azure CosmosDB using the Azure App Functions. Also, we tried to extend the deployment of the functions by running tests with [vite](https://vitest.dev/) and deploying it using the Azure Pipeline.

## Configuration

```node
npm i
npm i -d
```

### tests
To run tests locally make sure that you have an existing CosmosDB
Rename the "dev.env" file to ".env" and place the required values
```node
npm test
```

### start
```node
npm start
```

### publish

```node
az login
az storage account create --name <STORAGE_NAME> --location <REGION> --resource-group AzureFunctionsQuickstart-rg --sku Standard_LRS
az group create --name AzureFunctionsQuickstart-rg --location <REGION>
npm run build
func azure functionapp publish <APP_NAME>
```

## endpoints

### create-appointments
- endpoint: http://localhost:7071/api/appointments/
- Method: POST
- Body:
```json
{
    "name": "John Doe",
    "starstAt": "17/12/2022",
    "starstAt": "18/12/2022"
}
```

### delete-appointment
- endpoint: http://localhost:7071/api/appointments/{id}
- Method: DELETE

### get-all-appointments
- endpoint: http://localhost:7071/api/appointments/
- Method: GET

### get-appointment
- endpoint: http://localhost:7071/api/appointments/{id}
- Method: GET

### update-appointment
- endpoint: http://localhost:7071/api/appointments/
- Method: PUT
- Body:
```json
{
    "name": "John Doe",
    "starstAt": "17/12/2022",
    "starstAt": "18/12/2022",
    "id": "726c2f56-b35d-4f5a-b9cf-720e636feebc"
}
```

## References
[Quickstart: Create a TypeScript function in Azure from the command line](https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-typescript?tabs=azure-cli%2Cbrowser)