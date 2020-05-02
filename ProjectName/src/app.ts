import { APIGatewayEvent } from "aws-lambda";

export async function lambdaHandler(event: APIGatewayEvent): Promise<any> {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'typescript test'
        })
    }
}