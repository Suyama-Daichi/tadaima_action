import { APIGatewayEvent } from "aws-lambda";

export async function lambdaHandler(event: APIGatewayEvent, context: any): Promise<any> {
    const fullfillment: FullfillmentEvent = JSON.parse(event.body as string);
    return {
        statusCode: 200,
        body: JSON.stringify({
            fulfillmentText: fullfillment.queryResult.queryText
        })
    }
}