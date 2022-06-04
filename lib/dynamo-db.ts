import aws from 'aws-sdk';

const client = new aws.DynamoDB.DocumentClient({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  region: process.env.REGION,
  params: {
    TableName: process.env.TABLE_NAME,
  },
});

export default {
  get: (params: aws.DynamoDB.DocumentClient.GetItemInput) =>
    client.get(params).promise(),
  put: (params: aws.DynamoDB.DocumentClient.PutItemInput) =>
    client.put(params).promise(),
  query: (params: aws.DynamoDB.DocumentClient.QueryInput) =>
    client.query(params).promise(),
  update: (params: aws.DynamoDB.DocumentClient.UpdateItemInput) =>
    client.update(params).promise(),
  delete: (params: aws.DynamoDB.DocumentClient.DeleteItemInput) =>
    client.delete(params).promise(),
};
