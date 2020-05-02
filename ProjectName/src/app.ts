import { APIGatewayEvent } from "aws-lambda";

export async function lambdaHandler(event: APIGatewayEvent): Promise<any> {
    return {
        statusCode: 200,
        body: {
            message: 'typescript test'
        }
    }
}